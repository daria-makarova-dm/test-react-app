import ProfileTemplate from './ProfileTemplate'
import { getProfileData } from '../../redux/user-reducer'
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { usePrevious } from "../../hooks/hooks";

function Profile(props) {

    let [currentUser] = useState(props.match.params.userID);
    const prevCurrentUser = usePrevious(currentUser);

    useEffect(() => {
        if (currentUser !== prevCurrentUser) {
            props.getProfileData(currentUser)
        }
    });

    return <ProfileTemplate
    userData={props.userData} />
}

let mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { getProfileData, usePrevious })
)(Profile)