import React from 'react'
import Article from './Article'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
//import { openDialog, setEdit, setPrevValues } from '../reducers/articleFormReducer';
//import { useDispatch } from 'react-redux';
const Articles = ({ articles, toggleWatchlist }) => {
    //const dispatch = useDispatch()

    const articleList = articles.map(x => x ? <Article key={x.id} id={x.id} title={x.title} author={x.author} url={x.url} description={x.description} comments={x.comments} doi={x.doi} pubDate={x.pubDate} publisher={x.publisher} tags={x.tags} displayName={x.displayName} toggleWatchlist={toggleWatchlist} avatarColor={x.avatarColor} user={x.user} modificationDate={x.modificationDate} /> : (<Skeleton variant="rectangular" width={210} height={118} />))
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Stack direction='column' spacing={1}>
                {articleList}
            </Stack>
        </Box>
    )
}

export default Articles
