const paginator = {currentPage: 1, maxPage: 1, pageLimit: 5};

export const paginatorReducer = (state = paginator, action) => {

    switch (action.type) {
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.value}
        case "SET_MAX_PAGE":
            return {...state, maxPage: action.value}
        default:
            return state
    }
}
