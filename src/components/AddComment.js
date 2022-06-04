import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createComment } from '../reducers/articleReducer'
import Box from '@mui/material/Card'
import Stack from '@mui/material/Stack';
//import AddCommentIcon from '@mui/icons-material/AddComment';

const AddComment = ({ id }) => {
    const dispatch = useDispatch()
    const [ comment, setComment ] = useState('')
    const handleComment = (event) => {
        event.preventDefault()
        dispatch(createComment(id, comment))
        setComment('')
    }

    return (
        <Box sx={{ maxWidth: 400 }}>
            <form onSubmit={handleComment}>
                <Stack justifyContent="space-around" direction='row' spacing={0.5}>
                    <TextField
                        onChange={({ target }) => setComment(target.value)}
                        value={comment}
                        size='small'
                        fullWidth
                    />
                    <Button type='submit' variant='contained' size='small' >Comment</Button>
                </Stack>
            </form>
        </Box>
    )
}

export default AddComment