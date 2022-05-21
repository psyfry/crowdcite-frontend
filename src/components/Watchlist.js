import React from 'react'

const Watchlist = ({ watchlist }) => {
    if (!watchlist) {
        return null
    }
    return (
        <div>Watchlist</div>
    )
}

export default Watchlist