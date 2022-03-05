import React from 'react';

const ArticleListTableHeader = ({columns}) => {
    return (
        <li className="table-data__list-item table__table-header">
            {columns.map((col, index) => (
                <div
                    key={`header_${col.header}_${index}`}
                    className={`table-header__col table__col table__col-${index+1}`}
                >{col.header}</div>
            ))}
        </li>
    );
};

export default ArticleListTableHeader;