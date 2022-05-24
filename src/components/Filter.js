import React from "react"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
const Filter = ({ handleFilter, filterQuery, filterType, handleFilterType }) => {

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Stack direction='column' spacing={.5}>
                <TextField label="Filter" variant="standard"
                    id="filterInput"
                    onChange={handleFilter}
                    value={filterQuery}
                />
                <FormControl>
                    <RadioGroup
                        aria-labelledby="filter type"
                        name="filter-type-group"
                        value={filterType}
                        onChange={handleFilterType}
                    >
                        <Stack direction='row' spacing={.5} >
                            <FormControlLabel value="title" control={<Radio size='small' />} label="Title" />
                            <FormControlLabel value="author" control={<Radio size='small' />} label="Author" />
                            <FormControlLabel value="publisher" control={<Radio size='small' />} label="Publisher" />
                            <FormControlLabel value="tag" control={<Radio size='small' />} label="Tag" />
                        </Stack>
                    </RadioGroup>
                </FormControl>
            </Stack >
        </Box >
    )
}

export default Filter