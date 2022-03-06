import React, {useMemo} from 'react';
import ArticleParameter from "./ArticleParameter";
import {getParameters} from "./helper";

const ArticleParameters = ({filteredArticleList, artnoInfo}) => {

    const parameters = useMemo(() => {
            return getParameters(artnoInfo, filteredArticleList)
        }
        , [artnoInfo])


    if (!parameters?.length) return (<div>No data</div>)

    return (
        <div className='article-info__article-parameters'>
            {parameters
                .reduce((prev, curr) => {
                    return !prev.includes(curr.group) ? [...prev, curr.group] : prev
                }, [])
                .map((group_) => (
                    <div
                        key={`param_group_${group_}`}
                        className='article-parameters__parameters-group'
                    >
                        {parameters
                            .filter(parameter => parameter.group === group_)
                            .map(param => (
                                <ArticleParameter
                                    key={`param_${param.text}`}
                                    text={param.text}
                                    value={param.value}
                                />
                            ))}
                    </div>
                ))}
        </div>
    );
};

export default ArticleParameters;