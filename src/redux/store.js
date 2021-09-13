import thunk from "redux-thunk";
import authReducer from "./auth-reducer";

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
    auth: authReducer
});
;
const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;