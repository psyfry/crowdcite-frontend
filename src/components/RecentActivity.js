import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Divider } from '@mui/material'
import RecentActivityItem from './RecentActivityItem';
const RecentActivity = () => {

    //* useEffect to fetch recent activity

    //* map results as Activity Components

    return (
        <Card variant="outlined" sx={{ maxWidth: '400px' }}>
            <CardHeader title='Recent Activity' />
            <Divider />
            <CardContent>
            </CardContent>
        </Card>
    )
}

export default RecentActivity