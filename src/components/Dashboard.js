import Stack from '@mui/material/Stack'
import React from 'react'
//import ArticleContainer from './ArticleContainer'
import Watchlist from './Watchlist'
import Stats from './Stats'
import RecentActivity from './RecentActivity'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
//import { Chip } from '@mui/material'
const Dashboard = ({ articles, user, toggleWatchlist, watchlist }) => {
    return (
        <Box sx={{ maxWidth: '100%' }}>
            <Stack direction='row' spacing={3} >
                {/*<ArticleContainer articles={articles} user={user} toggleWatchlist={toggleWatchlist} />*/}
                <Watchlist watchlist={watchlist} user={user} toggleWatchlist={toggleWatchlist} />
                <Divider orientation="vertical" flexItem />
                <Stack direction='column' spacing={3} alignItems='stretch'>
                    <RecentActivity />
                    <Stats />
                </Stack>
            </Stack>
        </Box>
    )
}

export default Dashboard