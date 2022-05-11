import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

const AddArticleForm = ({ createArticle }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [doi, setDoi] = useState('')
    const [publisher, setPublisher] = useState('')
    const [pubDate, setPubDate] = useState('')

    const addArticle = (event) => {
        event.preventDefault()
        createArticle({
            title,
            author,
            url,
            description,
            doi,
            publisher,
            pubDate
        })
        setTitle('')
        setAuthor('')
        setUrl('')
        setDescription('')
        setDoi('')
        setPublisher('')
        setPubDate('')
    }

    return (
        <div>
            <form onSubmit={addArticle}>
                <TextField
                    id='title'
                    label='Title'
                    variant='outlined'
                    onChange={({ target }) => setTitle(target.value)}
                />
                <TextField
                    id='author'
                    label='Author'
                    variant='outlined'
                    onChange={({ target }) => setAuthor(target.value)}
                />
                <TextField
                    id='url'
                    label='URL'
                    variant='outlined'
                    onChange={({ target }) => setUrl(target.value)}
                />
                <TextField
                    id='description'
                    label='Description'
                    multiline
                    maxRows={3}
                    placeholder='Description'
                    variant='outlined'
                    onChange={({ target }) => setDescription(target.value)}
                />
                <TextField
                    id='DOI'
                    label='DOI'
                    variant='outlined'
                    onChange={({ target }) => setDoi(target.value)}
                />
                <TextField
                    id='Publisher'
                    label='Publisher'
                    variant='outlined'
                    onChange={({ target }) => setPublisher(target.value)}
                />
                <TextField
                    id='pub-date'
                    label='Publication Date'
                    variant='outlined'
                    onChange={({ target }) => setPubDate(target.value)}
                />
                <Button variant='outlined' startIcon={<DeleteIcon />}>
                    Cancel
                </Button>
                <Button
                    variant='contained'
                    endIcon={<SendIcon />}
                    type='submit'>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default AddArticleForm
