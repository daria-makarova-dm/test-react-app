import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: null,
    captchaURL: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

export const setUserAuthData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
})

// thunks

export const getAuth = () => async (dispatch) => {
    let data = await authAPI.getAuth();
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserAuthData(id, email, login, true));
    }
}

export default authReducer;