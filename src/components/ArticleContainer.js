import React, { useState } from 'react'
import Articles from './Articles'
import Filter from './Filter'
const ArticleContainer = ({ articles, toggleWatchlist, watchArray }) => {
    const [ filterType, setFilterType ] = useState('title')
    const [ filterQuery, setFilterQuery ] = useState('')
    console.log({ articles });

    const displayedEntries = articles.filter((x) => {
        //console.log(x.filterType);
        let sanitizedInput = filterQuery.replace(/[#-.]|[[-^]|[?|{}]/g, "\\$&")
        let searchRegExp = new RegExp(sanitizedInput, "i")
        switch (filterType) {
            case 'title':
                return searchRegExp.test(x.title)
            case 'author':
                return searchRegExp.test(x.author)
            case 'publisher':
                return searchRegExp.test(x.publisher)
            case 'tag':
                const tagString = x.tags.toString()
                return searchRegExp.test(tagString)
            default:
                return searchRegExp.test(x.title)
            //return x.tags.includes(searchRegExp)
        }
    }
    )

    return (
        <div>
            <Filter handleFilter={(e) => setFilterQuery(e.target.value)} handleFilterType={(e) => setFilterType(e.target.value)} filterType={filterType} filterQuery={filterQuery} />
            <Articles articles={displayedEntries} toggleWatchlist={toggleWatchlist} watchArray={watchArray} />
        </div>
    )
}

export default ArticleContainer