'use client'

import { Context, createContext } from "vm"

type ContextType = {
    loading : boolean;
    setLoading: Dispatch<SetStateAction<string>>
}

const initialState = {
    loading : false,
    setLoading: ()=>{}
}


export const GlobalContext = createContext<ContextType>(initialState)