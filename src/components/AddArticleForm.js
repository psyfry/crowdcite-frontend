import React, { useState } from 'react'
import { TextField, Button, Card } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Tags from './Tags'
import Stack from '@mui/material/Stack';
const AddArticleForm = ({ createArticle }) => {
    const [ title, setTitle ] = useState('')
    const [ author, setAuthor ] = useState('')
    const [ url, setUrl ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ doi, setDoi ] = useState('')
    const [ publisher, setPublisher ] = useState('')
    const [ pubDate, setPubDate ] = useState('')
    const [ tags, setTags ] = useState([])
    const [ tagValue, setTagValue ] = useState('')
    const handleAddTag = () => {
        const newTag = tags.concat(tagValue)
        setTags(newTag)
        setTagValue('')
    }
    const handleDelete = (event) => {
        event.preventDefault()
        const deletedTag = event.currentTarget.parentElement.id
        const filteredTags = tags.filter(x => x !== deletedTag)
        setTags(filteredTags)
    }
    const addArticle = (event) => {
        event.preventDefault()
        createArticle({
            title,
            author,
            url,
            description,
            doi,
            publisher,
            pubDate,
            tags
        })
        setTitle('')
        setAuthor('')
        setUrl('')
        setDescription('')
        setDoi('')
        setPublisher('')
        setPubDate('')
        setTags('')
    }

    return (
        <Card sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <form onSubmit={addArticle}>
                <TextField
                    id='title'
                    label='Title'
                    variant='outlined'
                    onChange={({ target }) => setTitle(target.value)}
                />
                <br />
                <TextField
                    id='author'
                    label='Author'
                    variant='outlined'
                    onChange={({ target }) => setAuthor(target.value)}
                />
                <br />
                <TextField
                    id='url'
                    label='URL'
                    variant='outlined'
                    onChange={({ target }) => setUrl(target.value)}
                />
                <br />
                <TextField
                    id='description'
                    label='Description'
                    multiline
                    maxRows={3}
                    placeholder='Description'
                    variant='outlined'
                    onChange={({ target }) => setDescription(target.value)}
                />
                <br />
                <TextField
                    id='DOI'
                    label='DOI'
                    variant='outlined'
                    onChange={({ target }) => setDoi(target.value)}
                />
                <br />
                <Stack direction='row' spacing={1}><Tags tags={tags} handleDelete={handleDelete} isDeletable='true' /></Stack>
                <Stack direction='row' spacing={1}><TextField
                    id='tags'
                    label='tags'
                    variant='outlined'
                    onChange={({ target }) => setTagValue(target.value)} value={tagValue}
                /><Button variant='contained' onClick={handleAddTag}>Add Tag</Button>
                </Stack>
                <br />
                <TextField
                    id='Publisher'
                    label='Publisher'
                    variant='outlined'
                    onChange={({ target }) => setPublisher(target.value)}
                />
                <br />
                <TextField
                    id='pub-date'
                    label='Publication Date'
                    variant='outlined'
                    onChange={({ target }) => setPubDate(target.value)}
                />
                <br />
                <Button
                    variant='contained'
                    endIcon={<SendIcon />}
                    type='submit'>
                    Submit
                </Button>
                <Button variant='outlined' startIcon={<DeleteIcon />} href={'/Articles'}>
                    Cancel
                </Button>
                <br />
            </form>
        </Card >
    )
}

export default AddArticleForm
