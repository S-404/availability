import {useMemo} from "react";


export const useFilteredArticleList = (articleList, articleNum) => {
    return useMemo(() => {
        if (articleList.length) {
            let filtered = articleList.filter((art) =>
                art.ARTNO === articleNum)
            return filtered.length ? filtered[0] : articleList
        }
        return articleList
    }, [articleList, articleNum])
}


export const useArticleListPagination = (articleList, paginator) => {
    // paginator:{ currentPage, maxPage, pageLimit}
    return useMemo(() => {
        if (articleList.length) {
            const to = paginator.currentPage * paginator.pageLimit;
            const from = to - paginator.pageLimit;

            return articleList.slice(from, to);


        }
        return articleList
    }, [articleList, paginator.currentPage])

}