import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Divider, List, ListItem, ListItemText, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react';
const Stats = () => {
    const [ viewOption, setViewOption ] = useState('text')

    //* memoize the stat calculation functions

    //*
    return (
        <Card variant="outlined">
            <CardHeader title='Stats' />
            <Divider />
            <ToggleButtonGroup
                aria-label="toggle stat view"
                color="primary"
                value={viewOption}
                exclusive
                onChange={({ target }) => setViewOption(target.value)}
                size='small'
            >
                <ToggleButton value="text">Text</ToggleButton>
                <ToggleButton value="charts">charts</ToggleButton>
                <ToggleButton value="tags">tags</ToggleButton>
            </ToggleButtonGroup>
            <CardContent>
                <List dense={true}>
                    <ListItem>
                        <ListItemText primary='Total Entries: ' />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Total Users: ' />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Total Tags: ' />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='New Posts This Week: ' />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Total Comments: ' />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Avg. Comments per Article: ' />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}

export default Stats