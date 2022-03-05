import {articleList} from "../mockData/articleListData"

export default class ArticleListService {

    static async getArticleList({GROUP_OF_GOODS, AVIN, CATEGORY, SIGNAL, STATUS}) {
       // returns mockData
        return articleList
            .filter(dataRow =>
                (GROUP_OF_GOODS.length ? GROUP_OF_GOODS.includes(dataRow.GROUP_OF_GOODS) : true) &&
                (AVIN.length ? AVIN.includes(dataRow.AVIN) : true) &&
                (CATEGORY.length ? CATEGORY.includes(dataRow.CATEGORY) : true) &&
                (SIGNAL.length ? SIGNAL.includes(dataRow.SIGNAL) : true) &&
                (STATUS.length ? STATUS.includes(dataRow.STATUS) : true)
            )
    }

}