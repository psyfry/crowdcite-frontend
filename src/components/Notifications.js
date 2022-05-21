import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const Notifications = ({ message }) => {
    return <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="warning">{message}</Alert>
    </Stack>
}

export default Notifications
