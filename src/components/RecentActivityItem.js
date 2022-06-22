import React from 'react'
import { ListItem, Avatar, ListItemButton, ListItemText, Typography, ListItemAvatar } from '@mui/material';
const RecentActivityItem = ({ id, title, author, added, user }) => {
    const formatDate = new Intl.DateTimeFormat('en-US').format(new Date(added))
    return (
        <ListItem>
            <ListItemButton component="a" href={`/api/articles/${id}`} >
                <ListItemAvatar>
                    <Avatar alt={`${user.username}`} sx={{ bgcolor: user.avatarColor, width: 36, height: 36 }} >
                        <Typography sx={{ color: 'white' }}>{user.displayName}</Typography>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`${title} by ${author} - ${formatDate}`} />
            </ListItemButton>
        </ListItem >
    )
}

export default RecentActivityItem