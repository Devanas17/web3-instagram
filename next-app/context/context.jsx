import {useState, useEffect, createContext} from "react"
import { contractAddress, contractABI } from "../utils/constant"
export const AppContext = createContext()



export const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={{}}>{children}</AppContext.Provider>
    )
}