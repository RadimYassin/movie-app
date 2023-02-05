export default (state,action)=>{
    switch (action.type) {
        case "ADDW":
            return {
                ...state,
                watchlist:[
                    action.payload,...state.watchlist
                ]
            }

            case "DELW":
                return {
                    ...state,
                    watchlist:state.watchlist.filter(i=>i.id!==action.payload)
                }
    
        default:
           return state
    }
}