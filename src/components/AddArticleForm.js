import React, { useState } from 'react'
import { TextField, Button, Card } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

const AddArticleForm = ({ createArticle }) => {
    const [ title, setTitle ] = useState('')
    const [ author, setAuthor ] = useState('')
    const [ url, setUrl ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ doi, setDoi ] = useState('')
    const [ publisher, setPublisher ] = useState('')
    const [ pubDate, setPubDate ] = useState('')
    const [ tags, setTags ] = useState('')
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
                <TextField
                    id='tags'
                    label='tags'
                    variant='outlined'
                    onChange={({ target }) => setTags(target.value)}
                />
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
                <Button variant='outlined' startIcon={<DeleteIcon />}>
                    Cancel
                </Button>
                <br />
            </form>
        </Card>
    )
}

export default AddArticleForm
