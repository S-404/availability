import React from 'react';

const ArticleParameter = ({text, value}) => {
    return (
        <div className='parameters-group__article-parameter'>
            <span className='article-parameter__text'>{text}</span>
            <span className='article-parameter__value'>{value}</span>
        </div>
    );
};

export default ArticleParameter;