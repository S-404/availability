import {useMemo} from "react";


export const useFilteredArticleList = (articleList, articleNum) => {
    return useMemo(() => {
        if (articleList.length) {
            let filtered = articleList.filter((art) =>
                    art.ARTNO === articleNum
                )
            return filtered.length? filtered[0]: articleList
        }
        return articleList
    }, [articleList, articleNum])
}



