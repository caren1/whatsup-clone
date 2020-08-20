// importing the stuff that we need
import React, { createContext, useReducer, useContext } from 'react'

// preparing data
export const StateContext = createContext()

// HOC ; takes the reducer, initial state and children <- App
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);

