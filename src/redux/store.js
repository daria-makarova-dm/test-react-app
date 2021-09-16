import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import userReducer from "./user-reducer";

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    user: userReducer
});
;
const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;