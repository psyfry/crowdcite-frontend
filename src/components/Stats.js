import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Divider, List, ListItem, ListItemText, Tabs, Tab, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles';
const Stats = () => {
    const [ viewOption, setViewOption ] = useState('main')
    const userList = useSelector((state) => state.userList)
    const articles = useSelector((state) => state.articles)
    //const theme = useTheme();

    const handleChange = (event, newValue) => {
        setViewOption(newValue)
    }


    const computeStats = (articles, userList) => {
        const totalArticles = articles.length
        const totalUsers = userList.length
        const totalTags = articles.flatMap((x) => x.tags).length
        const totalComments = articles.map(y => y.comments.length).reduce((prev, curr) => prev + curr, 0)
        const avgArticleComments = totalComments / totalArticles
        const avgUserComments = totalComments / totalUsers
        const totalWatchlist = userList.map(x => x.watchlist.length).reduce((prev, curr) => prev + curr, 0)
        const avgUserWatchlist = totalWatchlist / totalUsers
        const userArray = userList.map(x => x.articles.length)
        const maxSubmissions = Math.max(...userArray)
        const articleArray = articles.map(y => y.comments.length)
        const maxArticleComments = Math.max(...articleArray)

        return { totalArticles, totalComments, totalTags, totalUsers, avgArticleComments, avgUserComments, avgUserWatchlist, maxSubmissions, maxArticleComments }
    }
    //* memoize the stat calculation functions. return: object
    const memoizedStats = useMemo(() => computeStats(articles, userList), [ articles, userList ]);
    //*
    return (
        <Card variant="outlined">
            <CardHeader title='Stats' />
            <Divider />
            <Box sx={{ bgcolor: 'background.paper' }}>
                <Tabs
                    aria-label="toggle stat view"
                    textColor="primary"
                    indicatorColor="secondary"
                    value={viewOption}
                    onChange={handleChange}
                    variant="fullWidth"
                >
                    <Tab value="main" label="main" />

                    <Tab value="charts" label="charts" />
                    <Tab value="tags" label="tags" />
                </Tabs>
            </Box>
            <CardContent>
                <List dense={true}>
                    <ListItem>
                        <ListItemText primary='Total Entries: ' secondary={memoizedStats.totalArticles} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Total Users: ' secondary={memoizedStats.totalUsers} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Total Tags: ' secondary={memoizedStats.totalTags} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Total Comments: ' secondary={memoizedStats.totalComments} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Avg. Comments per Article: ' secondary={memoizedStats.avgArticleComments} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Avg. Comments per User: ' secondary={memoizedStats.avgUserComments} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Avg. User watchlist size: ' secondary={memoizedStats.avgUserWatchlist} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Max Article Comments: ' secondary={memoizedStats.maxArticleComments} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Most-Submissions(User): ' secondary={memoizedStats.maxSubmissions} />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}

export default Stats