import Stack from '@mui/material/Stack'
import React from 'react'
import ArticleContainer from './ArticleContainer'
import Watchlist from './Watchlist'
import Box from '@mui/material/Box'
const Dashboard = ({ articles, user, toggleWatchlist, watchlist }) => {
    return (
        <Box sx={{ maxWidth: '800px' }}>
            Dashboard
            <Stack direction='row' spacing={0}>
                <ArticleContainer articles={articles} user={user} toggleWatchlist={toggleWatchlist} />
                <Watchlist watchlist={watchlist} user={user} toggleWatchlist={toggleWatchlist} />
            </Stack>
        </Box>
    )
}

export default Dashboard