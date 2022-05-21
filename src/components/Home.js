import React from 'react'
import About from './About'
import Dashboard from './Dashboard'
const Home = ({ user }) => {

    return <div>
        {user ? <Dashboard /> : <About />}
    </div>
}

export default Home
