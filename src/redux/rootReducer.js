import {combineReducers} from "@reduxjs/toolkit";
import {messegeReducer} from "./messegeReducer";

const rootReducer = combineReducers({
    messeges: messegeReducer
})

export default rootReducer;