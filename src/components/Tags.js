import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
const Tags = ({ tags, handleDelete, isDeletable }) => {
    /*     const tagList = tags.map(x => <Chip
            label={x}
            component="a"
            href={`/api/tags/${x}`}
            variant="outlined"
            color="primary"
            onDelete={handleDelete}
            clickable
        />) */
    let tagList
    if (!tags) {
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
            href={`/api/tags/${x}`}
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