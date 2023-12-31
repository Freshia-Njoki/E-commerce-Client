import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";


const INITIAL_STATE = {
    ui: JSON.parse(localStorage.getItem("ui")) || null,//if not login user:val = null; in local storage user is stored as obj pass it to json to access it
}

export const Context = createContext(INITIAL_STATE);


export const ContextProvide = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    useEffect(() => {
        localStorage.setItem("ui", JSON.stringify(state.ui))
    }, [state.ui])

    return (
        <Context.Provider value={{ ui: state.ui, dispatch }}>
            {children}

        </Context.Provider>
    )

}