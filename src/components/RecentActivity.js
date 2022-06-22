import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Divider, List } from '@mui/material'
import RecentActivityItem from './RecentActivityItem';
import { useSelector } from 'react-redux';
const RecentActivity = () => {
    const articles = useSelector((state) => state.articles)
    const recentArticles = articles.slice(-5).reverse()
    const sortedComments = articles.map(x => x.comments).sort((a, b) => b.timestamp - a.timestamp)
    const recentComments = sortedComments.slice(0, 4)
    console.log({ recentArticles });
    console.log({ recentComments });
    return (
        <Card variant="outlined" sx={{ maxWidth: '400px' }}>
            <CardHeader title='Recent Activity' />
            <Divider />
            <CardContent>
                <List dense={true}>
                    {recentArticles.map(x => <RecentActivityItem title={x.title} author={x.author} added={x.createDate} id={x.id} user={x.user} />)}
                </List>
            </CardContent>
        </Card>
    )
}

export default RecentActivity