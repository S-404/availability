const selectedArticle = 0;

export const selectedArticleReducer = (state = selectedArticle, action)=>{

    switch (action.type){
        case "SET_SELECTED_ARTICLE":
            return action.value
        default:
            return state
    }
}
