import React from 'react';
import "../../styles/articleList.scss"
import ArticleListTable from "./articleListTable/ArticleListTable";
import Paginator from "./paginator/Paginator";

const ArticleList = () => {

    return (
        <div className='article-list'>
            <h2 className='article-list__header'>Article List:</h2>
            <ArticleListTable/>
            <Paginator/>
        </div>
    );
};

export default ArticleList;