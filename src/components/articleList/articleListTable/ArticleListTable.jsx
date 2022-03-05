import React, {useState} from 'react';
import ArticleListTableHeader from "./ArticleListTableHeader";
import ArticleListTableData from "./ArticleListTableData";

const ArticleListTable = () => {

    const [columns] = useState([
        {header: 'Num', key: 'ARTNO'},
        {header: 'Article Name', key: 'ARTNAME'},
        {header: 'Group', key: 'GROUP_OF_GOODS'},
        {header: 'Availability Info', key: 'AVIN'},
        {header: 'Category', key: 'CATEGORY'},
    ])

    return (
        <div className='article-list__article_list-table'>
            <div className="article-list__table-container">
                <ul className="table-container__table">
                    <ArticleListTableHeader columns={columns}/>
                    <ArticleListTableData columns={columns}/>
                </ul>
            </div>
        </div>
    );
};

export default ArticleListTable;