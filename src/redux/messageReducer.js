import {
    CORRECT_MESSAGE_TEXT,
    CREATE_MESSAGE,
    DELETE_MESSAGE,
    INCREMENT_ID_COUNTER,
    SET_CORRECTING_MESSAGE
} from "./types";

const initialState = {
    messages: [],
    messageIdCounter: 0
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE:
            return {...state, messages: [...state.messages, action.payload]}
        case INCREMENT_ID_COUNTER:
            return {...state, messageIdCounter: 1 + state.messageIdCounter}
        case DELETE_MESSAGE:
            return {...state, messages: state.messages.filter((mes) => mes.id !== action.payload)}
        case SET_CORRECTING_MESSAGE:
            return {...state,
                messages: state.messages.map((message) => (message.id === action.payload) ? {
                    ...message,
                    isCorrecting: true
                } : message)
            }
        case CORRECT_MESSAGE_TEXT:
            return {...state,
                messages: state.messages.map((message) => (message.id === action.payload.id) ? {
                    ...message,
                    isCorrecting: false,
                    text: action.payload.correctMessage
                } : message)
            }
        default:
            return state;
    }
}