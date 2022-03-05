import React from 'react';
import ArticleListTableItem from "./ArticleListTableItem";
import {useSelector} from "react-redux";

const ArticleListTableData = ({columns}) => {
    const articleList = useSelector(state => state.articleList);

    return (
        <div className='table__table-data'>
            {articleList.map(article => (
                <ArticleListTableItem
                    key={`article_${article.ID}`}
                    article={article}
                    columns={columns}/>
            ))}
        </div>
    );
};

export default ArticleListTableData;