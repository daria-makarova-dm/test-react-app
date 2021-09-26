import { connect } from "react-redux"
import UsersTemplate from "./UsersTemplate"
import { getUsers } from '../../redux/users-reducer'
import Preloader from '../../components/Preloader/Preloader'

function Users(props) {

    if (props.usersList == null) {
        props.getUsers(props.pageSize, props.currentPage)
    } 
    return <>
        {props.usersList === null ? <Preloader />
            :
            <UsersTemplate
                usersList={props.usersList}
                followingInProgress={props.followingInProgress}
            />}
    </>
}

let mapStateToProps = (state) => {
    return {
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        usersList: state.users.users,
        totalUsersCount: state.users.totalUsersCount,
        followingInProgress: state.users.followingInProgress,
        portionNumber: state.users.portionNumber
    }
}

export default connect(mapStateToProps, { getUsers })(Users)