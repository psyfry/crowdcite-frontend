import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createComment } from '../reducers/articleReducer'
import Card from '@mui/material/Card'
import SendIcon from '@mui/icons-material/Send'
const AddComment = ({ id, user }) => {
    console.log({ user });
    const dispatch = useDispatch()
    const [ comment, setComment ] = useState('')
    const handleComment = (event) => {
        event.preventDefault()
        dispatch(createComment(id, { name: user.displayName, color: user.avatarColor, text: comment }))
        setComment('')
    }

    return (
        <Card sx={{ maxWidth: 400 }}>
            <form onSubmit={handleComment}>
                <TextField
                    onChange={({ target }) => setComment(target.value)}
                    value={comment}
                />
                <Button type='submit' variant='contained' endIcon={<SendIcon />}>Comment</Button>
            </form>
        </Card>
    )
}

export default AddComment