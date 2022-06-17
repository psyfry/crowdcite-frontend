import React from 'react'
import About from './About'
import Dashboard from './Dashboard'
const Home = ({ articles, user, toggleWatchlist, watchlist }) => {

    return <div>
        {user ? <Dashboard articles={articles} user={user} toggleWatchlist={toggleWatchlist} watchlist={watchlist} /> : <About />}
    </div>
}

export default Home
