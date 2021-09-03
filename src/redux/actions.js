import {CREATE_MESSEGE, DELETE_MESSEGE, INCREMENT_ID_COUNTER} from "./types";

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