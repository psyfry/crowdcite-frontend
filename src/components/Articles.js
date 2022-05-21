import React from 'react'
import Article from './Article'
import { Box } from '@mui/material'
const Articles = ({ articles, user, toggleWatchlist }) => {
    console.log({ articles })
    if (!user) {
        return null
    }
    const articleList = articles.map(x => <Article key={x.id} id={x.id} title={x.title} author={x.author} url={x.url} description={x.description} comments={x.comments} doi={x.doi} pubDate={x.pubDate} publisher={x.publisher} tags={x.tags} user={user} displayName={x.displayName} toggleWatchlist={toggleWatchlist} avatarColor={x.avatarColor} />)
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {articleList}
        </Box>
    )
}

export default Articles
