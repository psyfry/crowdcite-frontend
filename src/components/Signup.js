import React, { useState } from 'react'
import { TextField, Button, Card } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Typography from '@mui/material/Typography';
const Signup = ({ handleCreateUser }) => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const handleSignup = (event) => {
        event.preventDefault()
        handleCreateUser({ username, password, firstName, lastName })
        setUsername('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }
    return (
        <Card sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

            <br />
            <form onSubmit={handleSignup}>
                <Typography>Signup</Typography>
                <TextField
                    label='Username'
                    id='username-input'
                    onChange={({ target }) => setUsername(target.value)}
                    value={username}
                />
                <br />
                <TextField
                    label='First Name'
                    id='firstname-input'
                    onChange={({ target }) => setFirstName(target.value)}
                    value={firstName}
                />
                <br />
                <TextField
                    label='Last Name'
                    id='lastname-input'
                    onChange={({ target }) => setLastName(target.value)}
                    value={lastName}
                />
                <br />
                <TextField
                    label='Password'
                    type='password'
                    className='password'
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                />
                <br />
                <Button
                    variant='contained'
                    endIcon={<SendIcon />}
                    id='newUserSubmit'
                    type='submit'>
                    Create Account
                </Button>
            </form>
        </Card >
    )
}

export default Signup