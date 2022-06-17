import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
//import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { CardContent, Typography } from '@mui/material';

const Comment = ({ comment }) => {
    const formatDate = new Intl.DateTimeFormat('en-US').format(new Date(comment.timestamp))
    return <Card sx={{ maxWidth: 400 }}>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: comment.color }} aria-label="comment">
                    {comment.name}
                </Avatar>
            }
            align="left"

            title={comment.username}
            subheader={formatDate}
        />
        <CardContent align='left'>
            <Typography paragraph>{comment.text}</Typography>
        </CardContent>
        <Divider />
    </Card>
}

export default Comment
