import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../../../styles/paginator.scss'

const Paginator = () => {

    const dispatch = useDispatch()
    const articleList = useSelector(state => state.articleList);
    const selectedArticle = useSelector(state => state.selectedArticle);
    const paginator = useSelector(state => state.paginator);


    useEffect(() => {
        if (articleList.length) {
            dispatch({type: 'SET_CURRENT_PAGE', value: 1})
            dispatch({
                type: 'SET_MAX_PAGE',
                value: Math.max(Math.ceil(articleList.length / paginator.pageLimit), 1)
            })

        }
    }, [articleList])

    useEffect(() => {
        if (selectedArticle && articleList.length) {
            const currPage =
                Math.ceil(articleList
                    .findIndex(article => article.ARTNO === selectedArticle) / paginator.pageLimit)

            dispatch({type: 'SET_CURRENT_PAGE', value: currPage})
        }
    }, [selectedArticle])

    const pageButtonModifier = (pageNum) => {
        return pageNum === paginator.currentPage ? 'paginator__button_current' : ''
    }

    const setCurrentPage = (pageNum) => {
        dispatch({type: 'SET_CURRENT_PAGE', value: pageNum})
    }


    if (!articleList.length) return null

    return (
        <div className='article-list__paginator'>
            {Array.from({length: paginator.maxPage}, (v, k) => k + 1)
                .map(pageNum => (
                    <button
                        key={`paginator_button${pageNum}`}
                        className={`paginator__button ${pageButtonModifier(pageNum)}`}
                        onClick={() => setCurrentPage(pageNum)}
                    >
                        {pageNum}
                    </button>
                ))}
        </div>
    );
};

export default Paginator;