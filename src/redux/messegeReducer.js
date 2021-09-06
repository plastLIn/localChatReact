import {
    CORRECT_MESSEGE_TEXT,
    CREATE_MESSEGE,
    DELETE_MESSEGE,
    INCREMENT_ID_COUNTER,
    SET_CORRECTING_MESSEGE
} from "./types";

const initialState = {
    messeges: [],
    messegeIdCounter: 0
};

export const messegeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSEGE:
            return {...state, messeges: [...state.messeges, action.payload]}
        case INCREMENT_ID_COUNTER:
            return {...state, messegeIdCounter: 1 + state.messegeIdCounter}
        case DELETE_MESSEGE:
            return {...state, messeges: state.messeges.filter((mes) => mes.id !== action.payload)}
        case SET_CORRECTING_MESSEGE:
            return {...state,
                messeges: state.messeges.map((messege) => (messege.id === action.payload) ? {
                    ...messege,
                    isCorrecting: true
                } : messege)
            }
        case CORRECT_MESSEGE_TEXT:
            return {...state,
                messeges: state.messeges.map((messege) => (messege.id === action.id) ? {
                    ...messege,
                    isCorrecting: false,
                    text: action.payload
                } : messege)
            }
        default:
            return state;
    }
}