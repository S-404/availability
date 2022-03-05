import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import MyModal from "./UI/myModal/myModal";
import ArticleInfo from "./articleInfo/ArticleInfo";

const Modals = () => {
    const dispatch = useDispatch()
    const modals = useSelector(state => state.modals);

    const hideVisibleArtInfo = () => {
        dispatch({type: "SET_ARTICLE_INFO_MODAL", value: false})
    }

    return (
        <div>
            <MyModal setVisible={hideVisibleArtInfo} visible={modals.artInfo}>
                <ArticleInfo/>
            </MyModal>
        </div>
    );
};

export default Modals;