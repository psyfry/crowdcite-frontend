import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
const Tags = ({ tags }) => {
    const tagList = tags.map(x => <Chip
        label={x}
        component="a"
        href={`/api/tags/${x}`}
        variant="outlined"
        color="primary"
        clickable
    />)
    if (!tags) {
        return null
    }
    return (
        <Stack direction='row' spacing={1}>
            {tagList}
        </Stack>
    )
}

export default Tags