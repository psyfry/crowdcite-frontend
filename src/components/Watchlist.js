import { Typography } from '@mui/material'
import React from 'react'
import ArticleContainer from './ArticleContainer'
const Watchlist = ({ watchlist, user, toggleWatchlist }) => {

    if (watchlist.length === 0) {
        return (<div>
            <h6>There are no articles on your watchlist</h6>
        </div>)
    }
    return (
        <div>
            <Typography variant='h6'>Watchlist</Typography>
            <ArticleContainer articles={watchlist} user={user} toggleWatchlist={toggleWatchlist} />
        </div>
    )
}

export default Watchlist