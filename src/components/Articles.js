import React from 'react'
import Article from './Article'
import { Box } from '@mui/material'
import Stack from '@mui/material/Stack';
//import { openDialog, setEdit, setPrevValues } from '../reducers/articleFormReducer';
//import { useDispatch } from 'react-redux';
const Articles = ({ articles, toggleWatchlist }) => {
    //const dispatch = useDispatch()
    /*     const handleEdit = (prevArr) => {
            dispatch(setPrevValues(prevArr))
            dispatch(setEdit())
            dispatch(openDialog())
        } */
    if (!articles) {
        return null
    }



    const articleList = articles.map(x => <Article key={x.id} id={x.id} title={x.title} author={x.author} url={x.url} description={x.description} comments={x.comments} doi={x.doi} pubDate={x.pubDate} publisher={x.publisher} tags={x.tags} displayName={x.displayName} toggleWatchlist={toggleWatchlist} avatarColor={x.avatarColor} user={x.user} />)
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Stack direction='column' spacing={1}>
                {articleList}
            </Stack>
        </Box>
    )
}

export default Articles
