import React from 'react';
import ArticleListTableItem from "./ArticleListTableItem";
import {useDispatch, useSelector} from "react-redux";

const ArticleListTableData = ({columns}) => {
    const articleList = useSelector(state => state.articleList);
    const dispatch = useDispatch();

    const selectArticle=(article)=>{
        dispatch({type: 'SET_SELECTED_ARTICLE', value: article.ARTNO})
        dispatch({type: "SET_ARTICLE_INFO_MODAL", value: true})
    }

    return (
        <div className='table__table-data'>
            {articleList.map(article => (
                <ArticleListTableItem
                    key={`article_${article.ID}`}
                    article={article}
                    columns={columns}
                    selectArticle={selectArticle}
                />
            ))}
        </div>
    );
};

export default ArticleListTableData;