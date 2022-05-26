import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    if (!comments || comments.length === 0) {
        return (
            <>
                <p>No comments found</p>
            </>
        )
    }
    return <div>
        {comments.map((comment, index) => <Comment key={`${comment}${index}`} comment={comment} />)}
    </div>
}

export default CommentsList
