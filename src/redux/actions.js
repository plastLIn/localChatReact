import {
    CORRECT_MESSAGE_TEXT,
    CREATE_MESSAGE,
    DELETE_MESSAGE,
    INCREMENT_ID_COUNTER,
    SET_CORRECTING_MESSAGE
} from "./types";

export function createMessage(message) {
    return {
        type: CREATE_MESSAGE,
        payload: message
    }
}

export function incrementIdCounter() {
    return {
        type: INCREMENT_ID_COUNTER
    }
}

export function deleteMessage(messageId) {
    return {
        type: DELETE_MESSAGE,
        payload: messageId
    }
}

export function setCorrectingMessage(correctMessageId) {
    return {
        type: SET_CORRECTING_MESSAGE,
        payload: correctMessageId
    }
}

export function correctTextMessage(correctMessage, id) {
    return {
        type: CORRECT_MESSAGE_TEXT,
        payload: {correctMessage,
            id}
    }
}

