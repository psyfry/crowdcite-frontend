import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
//import { red, blue, green, purple } from '@mui/material/colors';
const Comment = ({ displayName, commentText }) => {
    console.log({ displayName });
    console.log({ commentText });
    return <Card sx={{ maxWidth: 400 }}>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: commentText.color }} aria-label="comment">
                    {commentText.name}
                </Avatar>
            }
            title={commentText.text}
        />
    </Card>
}

export default Comment
