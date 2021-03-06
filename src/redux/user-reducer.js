import { userAPI } from "../api/api";

const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

let initialState = {
    aboutMe: null,
    contacts: null,
    fullName: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    photos: null,
    userId: null,
    userStatus: '',
    errorMessage: null
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status
            };
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.message
            };
        default:
            return state;
    }
}

export const setProfileData = (data) => ({
    type: SET_PROFILE_DATA,
    data    
})

export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status    
})

export const setErrorMessage = (message) => ({
    type: SET_ERROR_MESSAGE,
    message    
})

// thunks

export const getProfileData = (userId) => async (dispatch) => {
    
    let data = await userAPI.getProfile(userId);
    dispatch(setProfileData(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let data = await userAPI.getUserStatus(userId);
    dispatch(setUserStatus(data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let data = await userAPI.updateUserStatus(status);

    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const editProfile = (newProfileData) => async (dispatch, getState) => {
    const id = getState().auth.id;
    let data = await userAPI.editProfile(newProfileData);
    if (data.resultCode === 0) {
        dispatch(getProfileData(id))
        dispatch(setErrorMessage(null))
    } else {
        dispatch(setErrorMessage(data.messages))
    }
}

export default userReducer;