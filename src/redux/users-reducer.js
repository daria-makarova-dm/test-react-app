import { usersAPI } from "../api/api";

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW_TOGGLER = 'FOLLOW-TOGGLER';
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS';

let initialState = {
    users: null,
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: [],
    portionNumber: 1
}


let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS:
            return {
                ...state, 
                users: [...action.users]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case FOLLOW_TOGGLER:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return {
                            ...u, 
                            followed: action.isFollowed
                        }
                    }
                    return u;
                })
            };
        case SET_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.status ? 
                [...state.followingInProgress, action.userID] 
                : state.followingInProgress.filter((id) => id !== action.userID)
            }
        default:
            return state;
    }
}

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const setTotalUsersCount = (count) => ({
    type: SET_TOTAL_USERS_COUNT,
    count
})

export const changeFollowStatus = (userID, isFollowed) => ({
    type: FOLLOW_TOGGLER,
    userID,
    isFollowed
})

export const setFollowingProgress = (status, userID) => ({
    type: SET_FOLLOWING_PROGRESS,
    status,
    userID
})

// thunks

export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(pageSize, currentPage).then((data) => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, id));
        usersAPI.followUser(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(changeFollowStatus(id, true));
            }
            dispatch(setFollowingProgress(false, id));
        })
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, id));
        usersAPI.unfollowUser(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(changeFollowStatus(id, false));
            }
            dispatch(setFollowingProgress(false, id));
        })
    }
}

export default usersReducer;