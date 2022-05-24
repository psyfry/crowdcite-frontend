import React from 'react'
import ArticleContainer from './ArticleContainer'
const Watchlist = ({ watchlist, user, toggleWatchlist }) => {

    if (watchlist.length === 0) {
        return (<div>
            <h3>There are no articles on your watchlist</h3>
        </div>)
    }
    return (
        <div>Watchlist
            <ArticleContainer articles={watchlist} user={user} toggleWatchlist={toggleWatchlist} />
        </div>
    )
}

export default Watchlist