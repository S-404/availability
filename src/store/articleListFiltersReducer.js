const filtersState = [
    {
        group: 'Group of goods',
        criterias: [
            {type: 'Furniture', value: 'Furniture', checked:false},
            {type: 'Food', value: 'Food', checked:false},
            {type: 'Stationery', value: 'Stationery', checked:false},
        ]
    },
    {
        group: 'Availability Info',
        criterias: [
            {type: 'No Supply', value: 'NO SUPPLY', checked:false},
            {type: 'OK', value: 'OK', checked:false},
        ]
    },
    {
        group: 'Category',
        criterias: [
            {type: 'Top 100', value: 'Top100', checked:false},
            {type: 'Strategic', value: 'Strategic', checked:false},
        ]
    },
    {
        group: 'Signal',
        criterias: [
            {type: 'Upcoming Shortages', value: true, checked:false},
        ]
    },
    {
        group: 'Status',
        criterias: [
            {type: 'To Do', value: false, checked:false},
            {type: 'Done', value: true, checked:false},
        ]
    },
]

export const articleListFiltersReducer = (
    state = filtersState,
    action)=>{
    switch (action.type){
        case "SET_FILTER":
            const tmpArr = Object.assign(state)
            tmpArr
                .filter(filter => filter.group === action.value.group)
                [0].criterias
                .filter(cirteria_ => cirteria_.type === action.value.cirteria.type)
                [0].checked = !action.value.cirteria.checked
            return [...tmpArr]
        default:
            return state
    }
}
