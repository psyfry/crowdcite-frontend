import React from 'react'
import Articles from './Articles'
const Watchlist = ({ watchlist, user, toggleWatchlist }) => {

    if (!watchlist) {
        return null
    }
    return (
        <div>Watchlist
            <Articles articles={watchlist} user={user} toggleWatchlist={toggleWatchlist} />
        </div>
    )
}

export default Watchlist