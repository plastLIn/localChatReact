import {LOGIN_USER} from "./types";

const initialState = {
    login: '',
    passw: '',
    userId: null
}

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, login: state.login, passw: state.passw};
        default:
            return state;
    }
}