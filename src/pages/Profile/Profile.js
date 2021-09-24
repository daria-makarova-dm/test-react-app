import ProfileTemplate from './ProfileTemplate'
import { getProfileData } from '../../redux/user-reducer'
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { usePrevious } from "../../hooks/hooks";
import Preloader from '../../components/Preloader/Preloader'

function Profile(props) {

    let [currentUser, setCurrentUser] = useState(props.match.params.userID);
    const prevCurrentUser = usePrevious(currentUser);
    

    if (currentUser !== prevCurrentUser) {
        props.getProfileData(currentUser)
    }

    useEffect(() => {
        setCurrentUser(props.match.params.userID)
    }, [props.match.params.userID]);

    if (props.userData.fullName === null) {
        return <Preloader />
    }
    return <ProfileTemplate
        name={props.userData.fullName}
        mainPhoto={props.userData.photos.large} />
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