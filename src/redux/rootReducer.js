import {combineReducers} from "@reduxjs/toolkit";
import {messegeReducer} from "./messegeReducer";
import {authorizationReducer} from "./authorizationReducer";

const rootReducer = combineReducers({
    messeges: messegeReducer,
    auth: authorizationReducer
})

export default rootReducer;