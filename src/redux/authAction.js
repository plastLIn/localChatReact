import {LOGIN_USER} from "./authTypes";

export function onLoginUser(login, password) {
    return {
        type: LOGIN_USER,
        payload: {login,
            password}

    }
}