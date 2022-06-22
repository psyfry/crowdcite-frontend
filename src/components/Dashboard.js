import Stack from '@mui/material/Stack'
import React from 'react'
import Watchlist from './Watchlist'
import Stats from './Stats'
import RecentActivity from './RecentActivity'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

//*Refactor dashboard cards into wrapped generic card
const Dashboard = ({ user, toggleWatchlist, watchlist }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction='row' spacing={3} >
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