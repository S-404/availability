import React from 'react';
import "../../styles/articleListFilter.scss"
import {useDispatch, useSelector} from "react-redux";
import FilterContainer from "./FilterContainer";


const ArticleListFilter = ({fetchArticleList}) => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.articleListFilter);

    const getFiltersData = async () => {

        const checkedCriterias = (group) => {
            return [...filters
                .filter(filter => filter.group === group)
                [0].criterias
                .reduce((prev, curr) => {
                    return curr.checked ? [...prev, curr.value] : prev
                }, [])]
        }


        const param = {
            GROUP_OF_GOODS: checkedCriterias('Group of goods'),
            AVIN: checkedCriterias('Availability Info'),
            CATEGORY: checkedCriterias('Category'),
            SIGNAL: checkedCriterias('Signal'),
            STATUS: checkedCriterias('Status'),
        }

        await fetchArticleList(param)
    }

    const handleSubmit = (event) => {
        getFiltersData()
        event.preventDefault()
    }

    const handleCheckBox = (group, cirteria) => {
        dispatch({type: 'SET_FILTER', value: {group, cirteria}});
    }

    return (
        <form
            className='filter-block'
            onSubmit={handleSubmit}
        >
            <h2 className='filter-block__header'>Filters:</h2>
            <div className='filter-block__filter_panel'>
                <div className='filter_panel__ui_containers'>
                    {filters.map(filter => (
                        <FilterContainer
                            key={`filter_${filter.group}`}
                            filter={filter}
                            handleCheckBox={handleCheckBox}
                        />
                    ))}
                </div>
            </div>
            <div className='filter-block__buttons-panel'>
                <input className='buttons-panel__button' type='submit' value='Apply Filters'/>
            </div>

        </form>

    );
};

export default ArticleListFilter;