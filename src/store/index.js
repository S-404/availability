import {combineReducers, createStore} from "redux";
import {articleListReducer} from "./articleListReducer";
import {articleListFiltersReducer} from "./articleListFiltersReducer";

const rootReducer = combineReducers({
    articleList: articleListReducer,
    articleListFilter: articleListFiltersReducer,

})

export const store = createStore(rootReducer)