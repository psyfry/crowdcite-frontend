import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import articleService from '../services/articleService'
import Articles from './Articles'
const SearchResults = ({ user, toggleWatchlist, watchArray }) => {
    let { query } = useParams()
    const [ results, setResults ] = useState([])
    console.log({ query });
    if (!results) {
        return null
    }
    console.log({ results });
    return (
        <div>Search Results
            <Articles articles={results} user={user} toggleWatchlist={toggleWatchlist} watchArray={watchArray} />
        </div>
    )
}

export default SearchResults