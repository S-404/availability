import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const NavButtons = () => {

    const dispatch = useDispatch()
    const selectedArticle = useSelector(state => state.selectedArticle);
    const articleList = useSelector(state => state.articleList);

    const selectPrevNext = (indexOffset) => {
        let index = articleList.findIndex((article) => article.ARTNO === selectedArticle)
        let prevNextArticle = articleList[index + indexOffset]?.ARTNO
        if (prevNextArticle) {
            dispatch({type: 'SET_SELECTED_ARTICLE', value: prevNextArticle})
        }
    }


    return (
        <div className='article-div__nav-buttons'>
            <button
                className='nav-buttons__button nav-buttons__prev-button'
                onClick={()=>selectPrevNext(-1)}
            >
                {`< Prev`}
            </button>
            <button
                className='nav-buttons__button nav-buttons__next-button'
                onClick={()=>selectPrevNext(1)}
            >
                {`Next >`}
            </button>
        </div>
    );
};

export default NavButtons;