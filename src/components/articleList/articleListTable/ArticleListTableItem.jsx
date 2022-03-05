import React from 'react';

const ArticleListTableItem = ({article,columns, selectArticle}) => {
    return (
        <li
            className="table-data__list-item table-data__table-row"
            onClick={()=>selectArticle(article)}
        >
            {columns.map((col, index) => (
                <div
                    key={`article_${article.ID}_${col.key}_${index}`}
                    className={`table-data__col table__col table__col-${index + 1}`}
                    data-label={col.header}
                >
                    {article[col.key]}
                </div>
            ))}
        </li>
    );
};

export default ArticleListTableItem;