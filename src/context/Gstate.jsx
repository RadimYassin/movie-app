import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const init = {
    watchlist:[],
    watched:[]

}


export const Gcontext=createContext(init)



export const GProvider= props=>{
    const [state,dispatch]=useReducer(AppReducer,init)
    const addwatchlist=movie=>{
        dispatch ({ 
            type:"ADDW",
            payload:movie
        })
    }
    const deleteFromWatchlist=id=>{
        dispatch ({ 
            type:"DELW",
            payload:id
        })
    }

    return <Gcontext.Provider value={{watchlist:state.watchlist,watched:state.watched,addwatchlist,deleteFromWatchlist}}>{props.children}</Gcontext.Provider>
}