export const pad = (num, places) => String(num).padStart(places, '0');
export const defineStatus = (value) => {
    switch (value) {
        case true:
            return 'Done';
        case false:
            return 'To Do';
        default:
            return 'To Do'
    }
}

const defineCurrentFC = (fc) => {
    if (!fc?.length) return 0
    return fc.filter(fcWeek => fcWeek.wk === 'wk1')[0].value;
}

const defineAverageSales = (fc) => {
    if (!fc?.length) return 0;
    return fc.slice(0, 4).reduce((a, b) => a + b.value, 0) / 5
}

const defineShortageDate = (stock, fc) => {
    if (!fc?.length) return 0
    const currentFC = fc.filter(fcWeek => fcWeek.wk === 'wk1')[0].value;
    let d = new Date()
    d.setHours((d.getHours()+stock / currentFC * 7))
    return `${d.getFullYear()}-${ pad((d.getMonth()+1),2) }-${pad(d.getDate(),2)}`

}

export const getParameters = (artnoInfo,filteredArticleList)=>{
    return [
        {
            text: 'Group',
            value: filteredArticleList.GROUP_OF_GOODS,
            group: 1
        },
        {
            text: 'Availability Info',
            value: filteredArticleList.AVIN,
            group: 1
        },
        {
            text: 'Price',
            value: artnoInfo.Price,
            group: 1
        },
        {
            text: 'Category',
            value: filteredArticleList.CATEGORY,
            group: 4
        },
        {
            text: 'Sales Location',
            value: artnoInfo.SLoc,
            group: 4
        },
        {
            text: 'Sales Start Date',
            value: artnoInfo.SSD,
            group: 4
        },
        {
            text: 'End Date Sales',
            value: artnoInfo.EDS,
            group: 4
        },
        {
            text: 'Stock',
            value: artnoInfo.Stock,
            group: 6
        },
        {
            text: 'Forecast',
            value: defineCurrentFC(artnoInfo?.graph?.FC),
            group: 6
        },
        {
            text: 'Average Sales',
            value: defineAverageSales(artnoInfo?.graph?.FC),
            group: 6
        },
        {
            text: 'Shortage Date',
            value: defineShortageDate(artnoInfo.Stock, artnoInfo?.graph?.FC),
            group: 6
        },
        {
            text: 'Min Delivery Qty',
            value: artnoInfo.MDQ,
            group: 7
        },
        {
            text: 'Next Delivery Date',
            value: artnoInfo.NextDeliveryDate,
            group: 7
        },
        {
            text: 'Next Delivery Qty',
            value: artnoInfo.NextDeliveryQty,
            group: 7
        },


    ]
}

