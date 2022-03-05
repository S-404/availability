import React, {useEffect, useState} from 'react';
import MyInput from "../UI/myInput/myInput";
import {useFetching} from "../../hooks/useFetching";
import ArticleInfoService from "../../services/articleInfoService";
import {useSelector} from "react-redux";
import {useFilteredArticleList} from "../../hooks/useArticleList";
import '../../styles/articleInfo.scss'
import MyChart from "./chart/myChart";

const ArticleInfo = () => {

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
        if (artno.length) {
            fetchArtnoInfo(+artno)
        }
    }, [artno])


    useEffect( () => {
        if (modals.artInfo && selectedArticle) {
            setArtno(selectedArticle)
            fetchArtnoInfo(selectedArticle)
        }
    },[selectedArticle])


    return (
        <div className='article-info'>
            <div className='article-info__article-div'>
                <MyInput
                    placeholder='5-digit article num'
                    value={artno}
                    onChange={inputArtno}
                    labeltext='article num'
                />
            </div>

            {/*<div>*/}
            {/*    {Object.entries(filteredArticleList).map(item=>(*/}
            {/*        <div>*/}
            {/*            <span>{item.join(' - ')}</span>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <div>{filteredArticleList.ARTNAME}</div>
            <div>{filteredArticleList.GROUP_OF_GOODS}</div>
            <div>{filteredArticleList.AVIN}</div>
            <div>{filteredArticleList.CATEGORY}</div>
            <div>{filteredArticleList.SIGNAL}</div>
            <div>{filteredArticleList.STATUS}</div>
            <div>{artnoInfo.SLoc}</div>
            <div>{artnoInfo.SSD}</div>
            <div>{artnoInfo.EDS}</div>
            <div>{artnoInfo.MDQ}</div>
            <div>{artnoInfo.NextDeliveryDate}</div>
            <div>{artnoInfo.NextDeliveryQty}</div>
            <div>{artnoInfo.Price}</div>

            <MyChart graph={artnoInfo.graph}/>


        </div>
    );
};

export default ArticleInfo;