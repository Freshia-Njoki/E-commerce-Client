import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";


const INITIAL_STATE = {
    ui: JSON.parse(localStorage.getItem("ui")) || null,
    cart: JSON.parse(localStorage.getItem("cart")) || [],

};

export const Context = createContext(INITIAL_STATE);

export const UIContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("ui", JSON.stringify(state.ui));
    }, [state.ui]);

    return (
        <Context.Provider value={{ ...state, dispatch }}>{children}</Context.Provider>
    );
};

