import {articleInfo} from "../mockData/articleInfoData"

export default class ArticleInfoService {

    static async getArticleInfo(artno) {
        // returns mockData
        return  articleInfo.filter(dataRow => dataRow.ARTNO === artno);
    }

}