import './styles/App.css';
import ArticleListFilters from "./components/articleListFilters/ArticleListFilters";
import ArticleList from "./components/articleList/ArticleList";
import {useFetching} from "./hooks/useFetching";
import ArticleListService from "./services/articleListService";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const [fetchArticleList, isFetchingArticleList, fetchingArticleListError] = useFetching(async (param) => {
        const responseData = await ArticleListService.getArticleList(param)
        dispatch({type: 'SET_LIST', value: responseData})
    })


    return (
        <div className="App">
            <ArticleListFilters
                fetchArticleList={fetchArticleList}
            />
            <ArticleList
                isFetchingArticleList={isFetchingArticleList}
                fetchingArticleListError={fetchingArticleListError}
            />
        </div>
    );
}

export default App;
