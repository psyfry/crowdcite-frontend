import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
//import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
//import Menu from '@mui/material/Menu'
//import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
//import Tooltip from '@mui/material/Tooltip'
//import MenuItem from '@mui/material/MenuItem'

const NavBar = ({ user }) => {
    const pages = ['add', 'articles', 'users']
    console.log({ user })
    const handleClick = (event) => {
        console.log(event.currentTarget)
    }
    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}>
                        CROWDREF
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}>
                        {user ? (
                            pages.map((page) => (
                                <Button
                                    key={page}
                                    color='inherit'
                                    id={page}
                                    href={`/${page}`}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block'
                                    }}>
                                    {page}
                                </Button>
                            ))
                        ) : (
                            <></>
                        )}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Button color='inherit' id='login' href={'/login'}>
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar
