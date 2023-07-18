import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";


const INITIAL_STATE = {
    ui: JSON.parse(localStorage.getItem("ui")) || null,
    cart: [], // Initial cart state, an array to store items in the cart
};

export const Context = createContext(INITIAL_STATE);

export const UIContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("ui", JSON.stringify(state.ui));
        // Dispatch the "LOAD_CART" action to load cart data on initialization
        dispatch({ type: "LOAD_CART" });
    }, [state.ui]);

    return (
        <Context.Provider value={{ ui: state.ui, cart: state.cart, dispatch }}>
            {children}
        </Context.Provider>
    );
};
