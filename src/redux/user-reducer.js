import { userAPI } from "../api/api";

const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

let initialState = {
    aboutMe: null,
    contacts: null,
    fullName: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    photos: null,
    userId: null
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

export const setProfileData = (data) => ({
    type: SET_PROFILE_DATA,
    data    
})

// thunks

export const getProfileData = (userId) => async (dispatch) => {
    
    let data = await userAPI.getProfile(userId);
    dispatch(setProfileData(data));
}

export default userReducer;