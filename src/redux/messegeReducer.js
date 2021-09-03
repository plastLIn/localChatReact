import {CREATE_MESSEGE, DELETE_MESSEGE, INCREMENT_ID_COUNTER} from "./types";

let initialState = {
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
            return {messeges: state.messeges.filter((mes) => mes.id !== action.payload)}
        default: return state;
    }
}