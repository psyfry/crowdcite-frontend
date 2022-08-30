import React from 'react'
import Signup from './Signup'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
const About = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography>

                <h1>Build new insights on organizational research literature through collaboration</h1>
                <h2>CROWDREF addresses the adverse effects of "data silos" by encouraging organized collaboration across departments through commenting, tagging, watchlists, and notifications.</h2>
            </Typography>
            <Signup />
        </Box>
    )
}

export default About