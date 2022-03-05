import React from 'react';
import MyCheckBox from "../UI/myCheckbox/myCheckBox";

const FilterContainer = ({filter, handleCheckBox}) => {
    return (
        <div  className='ui_containers__ui_container'>
            <b className='ui_container__header'>{filter.group}</b>
            {filter.criterias.map(criteria => (
                <MyCheckBox
                    key={`filter_criteria_${filter.group}_${criteria.type}`}
                    id={`filter_criteria_${filter.group}_${criteria.type}`}
                    text={criteria.type}
                    checked={criteria.checked}
                    onChange={() => handleCheckBox(filter.group, criteria)}
                />
            ))}
        </div>
    );
};

export default FilterContainer;