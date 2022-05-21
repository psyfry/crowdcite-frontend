import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    if (!comments) {
        return null
    }
    return <div>
        {comments.map((comment, index) => <Comment key={`${comment}${index}`} displayName={comment.displayName} commentText={comment} />)}
    </div>
}

export default CommentsList
