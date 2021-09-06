import {
    CORRECT_MESSEGE_TEXT,
    CREATE_MESSEGE,
    DELETE_MESSEGE,
    INCREMENT_ID_COUNTER, LOGIN_USER,
    SET_CORRECTING_MESSEGE
} from "./types";

export function createMessege(messege) {
    return {
        type: CREATE_MESSEGE,
        payload: messege
    }
}

export function incrementIdCounter() {
    return {
        type: INCREMENT_ID_COUNTER
    }
}

export function deleteMessege(deletingMessegeId) {
    return {
        type: DELETE_MESSEGE,
        payload: deletingMessegeId
    }
}

export function setCorrectingMessege(correctMessegeId) {
    return {
        type: SET_CORRECTING_MESSEGE,
        payload: correctMessegeId
    }
}

export function correctTextMessege(correctMessege, id) {
    return {
        type: CORRECT_MESSEGE_TEXT,
        payload: correctMessege,
        id
    }
}

export function onLoginUser(login, passw) {
    return {
        type: LOGIN_USER,
        login,
        passw
    }
}