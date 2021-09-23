import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
// import { usePrevious } from "../../../hooks/hooks";
import UserStatusTemplate from "./UserStatusTemplate";
import { getUserStatus } from '../../../redux/user-reducer'
import { withRouter } from "react-router";
import { updateUserStatus } from '../../../redux/user-reducer'

function UserStatus(props) {

    let [currentUser] = useState(props.match.params.userID);
    props.getUserStatus(currentUser);

    console.log('render')

    useEffect(() => {
        setNewStatus(props.userStatus)
    }, [props.userStatus]);

    

    let [editMode, setEditMode] = useState(false);
    let [newStatus, setNewStatus] = useState(props.userStatus);

    let enableEditMode = () => {
        setEditMode(true)
    }

    let disableEditMode = () => {
        props.updateUserStatus(newStatus)
        setEditMode(false)
    }

    let onStatusChange = (e) => {
        setNewStatus(e.target.value)
    }

    return <UserStatusTemplate
        userStatus={props.userStatus}
        editMode={editMode}
        newStatus={newStatus}
        enableEditMode={enableEditMode}
        disableEditMode={disableEditMode}
        onStatusChange={onStatusChange} />
}

let mapStateToProps = (state) => {
    return {
        userStatus: state.user.userStatus
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { getUserStatus, updateUserStatus })
)(UserStatus)