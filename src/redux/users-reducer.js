import { usersAPI } from "../api/api";

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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

export default usersReducer;