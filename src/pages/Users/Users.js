import { connect } from "react-redux"
import UsersTemplate from "./UsersTemplate"
import { getUsers } from '../../redux/users-reducer'
import Preloader from '../../components/Preloader/Preloader'
import { setPortionNumber } from '../../redux/users-reducer'
import { useEffect } from "react"

function Users(props) {

    const onPageChange = (currentPage) => {
        props.getUsers(props.pageSize, currentPage)
    }

    useEffect(() => {
    
        if (props.usersList == null) {
            props.getUsers(props.pageSize, props.currentPage)
        }
        
    }, [props]);

     
    return <>
        {props.usersList === null ? <Preloader />
            :
            <UsersTemplate
                usersList={props.usersList}
                followingInProgress={props.followingInProgress}
                currentPage={props.currentPage}
                onPageChange={onPageChange}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                portionNumber={props.portionNumber}
                setPortionNumber={props.setPortionNumber}
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

export default connect(mapStateToProps, { getUsers, setPortionNumber })(Users)