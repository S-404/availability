import {combineReducers, createStore} from "redux";
import {articleListReducer} from "./articleListReducer";
import {articleListFiltersReducer} from "./articleListFiltersReducer";
import {selectedArticleReducer} from "./selectedArticle";
import {modalsReducer} from "./modalsReducer";

const rootReducer = combineReducers({
    articleList: articleListReducer,
    articleListFilter: articleListFiltersReducer,
    selectedArticle: selectedArticleReducer,
    modals: modalsReducer,
})

export const store = createStore(rootReducer)