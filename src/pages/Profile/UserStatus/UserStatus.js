import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import UserStatusTemplate from "./UserStatusTemplate";
import { getUserStatus } from '../../../redux/user-reducer'
import { withRouter } from "react-router";
import { updateUserStatus } from '../../../redux/user-reducer'
import { usePrevious } from "../../../hooks/hooks";

function UserStatus(props) {

    let [currentUser, setCurrentUser] = useState(props.match.params.userID);
    const prevCurrentUser = usePrevious(currentUser);

    if (currentUser !== prevCurrentUser) {
        props.getUserStatus(currentUser);
    }

    useEffect(() => {
        setNewStatus(props.userStatus)
        setCurrentUser(props.match.params.userID)
    }, [props.userStatus, props.match.params.userID]);

    let [editMode, setEditMode] = useState(false);
    let [newStatus, setNewStatus] = useState(props.userStatus);

    let enableEditMode = () => {
        if (currentUser === props.authID) {
           setEditMode(true) 
        }
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
        userStatus: state.user.userStatus,
        authID: state.auth.id
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { getUserStatus, updateUserStatus })
)(UserStatus)