import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
const Tags = ({ tags, handleDelete, isDeletable }) => {
    let tagList
    if (!tags || tags.length === 0) {
        return null
    }

    /*     const handleDelete = (event) => {
            handleDelete(event.currentTarget)
        } */
    if (isDeletable === 'true') {
        tagList = tags.map((x, index) => <Chip
            label={x}
            id={x}
            key={`${x}${index}`}
            variant="outlined"
            color="primary"
            onDelete={handleDelete}
        />)
    } else {
        tagList = tags.map((x, index) => <Chip
            label={x}
            key={`${x}${index}`}
            component="a"
            variant="outlined"
            color="primary"
            clickable
        />)
    }
    return (
        <Stack direction='row' spacing={1}>
            {tagList}
        </Stack>
    )
}

export default Tags