import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
import { initializeArticles } from '../reducers/articleReducer'
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material'
const CommentBox = ({ id, comments, user }) => {
    console.log({ user });
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeArticles())
    }, [ dispatch ])
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardHeader title={'Comments'} />
            {!comments ? null : <CommentsList comments={comments} />}
            <AddComment id={id} user={user} />
        </Card>
    )
}

export default CommentBox