import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
    auth: authReducer,
    app: appReducer
});
;
const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;