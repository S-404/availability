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
            const to = Math.max(paginator.currentPage * paginator.pageLimit, paginator.pageLimit);
            const from = Math.max( to - paginator.pageLimit,0);
            return articleList.slice(from, to);
        }
        return articleList
    }, [articleList, paginator.currentPage])

}