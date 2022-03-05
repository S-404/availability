const modals = {artInfo: false,};

export const modalsReducer = (state = modals, action)=>{
    switch (action.type){
        case "SET_ARTICLE_INFO_MODAL":
            return {...modals, artInfo: action.value}
        default:
            return state
    }
}
