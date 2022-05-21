import React from 'react'
import { TextField, Button, Card } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Typography from '@mui/material/Typography';
const Login = ({
    handleLogin,
    handleUsername,
    handlePassword,
    username,
    password
}) => {
    return (
        <Card sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <form onSubmit={handleLogin}>
                <Typography>Login</Typography>
                <br />
                <TextField
                    label='Username'
                    id='username-input'
                    onChange={handleUsername}
                    value={username}
                />
                <br />
                <TextField
                    label='Password' type='password'
                    className='password'
                    onChange={handlePassword}
                    value={password}
                />
                <br />
                <Button
                    variant='contained'
                    endIcon={<SendIcon />}
                    id='loginSubmit'
                    type='submit'>
                    Login
                </Button>
                <Button variant='outlined' href='/signup'>Register</Button>
            </form>
            <br />
        </Card>)
}

export default Login
