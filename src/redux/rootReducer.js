import {combineReducers} from "@reduxjs/toolkit";
import {messageReducer} from "./messageReducer";
import {authorizationReducer} from "./authorizationReducer";

const rootReducer = combineReducers({
    messages: messageReducer,
    auth: authorizationReducer
})

export default rootReducer;