import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
//import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
//import { red, blue, green, purple } from '@mui/material/colors';
const Comment = ({ comment }) => {
    const formatDate = new Intl.DateTimeFormat('en-US').format(new Date(comment.timestamp))
    //console.log(formatDate);
    return <Card sx={{ maxWidth: 400 }}>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: comment.color }} aria-label="comment">
                    {comment.name}
                </Avatar>
            }
            title={comment.text}
            subheader={formatDate}
        />
        <Divider variant="inset" />
    </Card>
}

export default Comment
