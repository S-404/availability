const articleListState = []

export const articleListReducer = (state = articleListState, action)=>{
    switch (action.type){
        case "SET_LIST":
            return [...action.value]
        default:
            return state
    }
}
