import { getAuth, getAuthProfileData } from "./auth-reducer";

const SET_INITIALIZING_STATUS = 'SET_INITIALIZING_STATUS';

let initialState = {
    isInitialized: false
}

let appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZING_STATUS:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;
    }
}
 
export const setInitializingStatus = () => ({
    type: SET_INITIALIZING_STATUS
})

//thunks 

export const initializeApp = (authUserID) => {
    return (dispatch) => {
        let authInit = dispatch(getAuth());
        let authProfile = dispatch(getAuthProfileData(authUserID))
        Promise.all([authInit, authProfile])
            .then(() => {
                dispatch(setInitializingStatus());
            })
    }
}

export default appReducer;