import React, {useEffect, useState} from 'react';
import MyInput from "../UI/myInput/myInput";
import {useFetching} from "../../hooks/useFetching";
import ArticleInfoService from "../../services/articleInfoService";
import {useDispatch, useSelector} from "react-redux";
import {useFilteredArticleList} from "../../hooks/useArticleList";
import '../../styles/articleInfo.scss'
import MyChart from "./chart/myChart";
import ArticleParameters from "./articleParameters/ArticleParameters";
import {defineStatus} from "./articleParameters/helper";
import NavButtons from "./NavButtons";

const ArticleInfo = () => {
    const dispatch = useDispatch()
    const selectedArticle = useSelector(state => state.selectedArticle);
    const modals = useSelector(state => state.modals);
    const articleList = useSelector(state => state.articleList);

    const [artno, setArtno] = useState('')
    const [artnoInfo, setArtnoInfo] = useState([])
    const filteredArticleList = useFilteredArticleList(articleList, selectedArticle)


    const [fetchArtnoInfo, isFetchArtnoInfoLoading, fetchArtnoInfoError] = useFetching(async (artno) => {
        const responseData = await ArticleInfoService.getArticleInfo(artno);
        if (responseData.length) {
            setArtnoInfo(responseData[0].info)
        } else {
            setArtnoInfo([])
        }
    })


    const inputArtno = (e) => {
        const value = e.target.value;
        if (isNaN(value) || value.length > 5) return;
        setArtno(e.target.value);
    }


    useEffect(() => {
        if (artno.length >= 5) {
            if(+artno !== selectedArticle) {
                dispatch({type: 'SET_SELECTED_ARTICLE', value: +artno})
            }
        }

    }, [artno])


    useEffect(() => {
        setArtno(selectedArticle)
        if (modals.artInfo && selectedArticle) {
            fetchArtnoInfo(selectedArticle)
        }
    }, [selectedArticle])


    return (
        <div className='article-info'>
            <div className='article-info__article-div'>
                <div className='article-div__input'>
                    <MyInput
                        placeholder='5-digit article num'
                        value={artno}
                        onChange={inputArtno}
                        labeltext='article num'
                    />
                </div>
                <span className='article-div__artname'>
                    {filteredArticleList.ARTNAME}
                </span>
                {/*<span className='article-div__status'>*/}
                {/*    {defineStatus(filteredArticleList.STATUS)}*/}
                {/*</span>*/}
                <NavButtons/>
            </div>


            <ArticleParameters filteredArticleList={filteredArticleList} artnoInfo={artnoInfo}/>

            <MyChart graph={artnoInfo.graph}/>


        </div>
    );
};

export default ArticleInfo;