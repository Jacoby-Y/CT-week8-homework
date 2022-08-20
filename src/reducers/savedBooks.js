import { useReducer } from "react";

const savedBooksReducer = (state, { type, item }) => {
    switch (type) {
        case "ADD":
            return [...state, item];
        case "REMOVE":
            // console.log(state);
            // console.log(item);
            // console.log(state.filter((id)=> id != item));
            return state.filter((id)=> id != item);
        case "CLEAR":
            return [];
        default:
            return state;
    }
};

export {
    savedBooksReducer,
}