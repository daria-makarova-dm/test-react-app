import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR_TEXT = 'SET_ERROR_TEXT';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

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
        case SET_ERROR_TEXT:
            return {
                ...state,
                error: action.errorMessage
            };
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.captchaURL
            };
        default:
            return state;
    }
}

export const setUserAuthData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
})

export const setErrorText = (errorMessage) => ({
    type: SET_ERROR_TEXT,
    errorMessage
})

export const setCaptchaURL = (captchaURL) => ({
    type: SET_CAPTCHA_URL,
    captchaURL
})

// thunks

export const getAuth = () => async (dispatch) => {
    let data = await authAPI.getAuth();
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserAuthData(id, email, login, true));
    }
}

export const logIn = (logInData) => {
    let { email, password, rememberMe, captcha } = logInData;
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(getAuth());
            dispatch(setCaptchaURL(null))
        } else {
            if (data.resultCode === 10) {
                let captcha = await securityAPI.getCaptcha();
                dispatch(setCaptchaURL(captcha.url))
            }
            dispatch(setErrorText(data.messages));
        }
    }
}

export const logOut = () => {
    return async (dispatch) => {
        let data = await authAPI.logOut()
        if (data.resultCode === 0) {
            dispatch(setUserAuthData(null, null, null, false));
        } else {
            dispatch(setErrorText(data.messages));
        }
    }
}

export default authReducer;