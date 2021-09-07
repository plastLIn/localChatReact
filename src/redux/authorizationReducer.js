import {INCREMET_USER_COUNTER, LOGIN_USER} from "./authTypes";

const initialState = {
    login: '',
    password: '',
    userId: null,
    userCounter: 1
}

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, login: action.payload.login, password: action.payload.password, userId: 1};
        case INCREMET_USER_COUNTER:
            return {...state, userCounter: 1 + action.payload.userCounter};
        default:
            return state;
    }
}