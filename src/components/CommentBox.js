import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
import { initializeArticles } from '../reducers/articleReducer'

const CommentBox = ({ id, comments, user }) => {
    console.log({ user });
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeArticles())
    }, [ dispatch ])
    return (
        <div>Comments
            {!comments ? null : <CommentsList comments={comments} />}
            <AddComment id={id} user={user} />
        </div>
    )
}

export default CommentBox