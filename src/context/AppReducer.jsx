export default (state,action)=>{
    switch (action.type) {
        case "ADDW":
            return {
                ...state,
                watchlist:[
                    action.payload,...state.watchlist
                ]
            }
    
        default:
           return state
    }
}