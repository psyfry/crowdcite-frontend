import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
//import articleService from '../services/articleService'
import Articles from './Articles'
const SearchResults = ({ toggleWatchlist }) => {
    let { query } = useParams()
    const [ results, setResults ] = useState([])
    console.log({ query });
    if (!results) {
        return null
    }
    //console.log({ results });
    return (
        <div>Search Results
            <Articles articles={results} toggleWatchlist={toggleWatchlist} />
        </div>
    )
}

export default SearchResults