import React, { useState } from 'react'
import { TextField, Button, Card, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
//import PublishIcon from '@mui/icons-material/Publish';
//import SendIcon from '@mui/icons-material/Send'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Tags from './Tags'
import Stack from '@mui/material/Stack';
import { setErrorMessage } from '../reducers/noticeReducer'
import { createArticle, editArticle } from '../reducers/articleReducer'
import { useDispatch } from 'react-redux'

const AddArticleForm = ({ isEdit, prevTitle,
    prevAuthor,
    prevUrl,
    prevDescription,
    prevDoi,
    prevPublisher,
    prevPubDate,
    prevTags, id }) => {
    const [ title, setTitle ] = useState('')
    const [ author, setAuthor ] = useState('')
    const [ url, setUrl ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ doi, setDoi ] = useState('')
    const [ publisher, setPublisher ] = useState('')
    const [ pubDate, setPubDate ] = useState('')
    const [ tags, setTags ] = useState([])
    const [ tagValue, setTagValue ] = useState('')

    if (isEdit === true) {
        setTitle(prevTitle)
        setAuthor(prevAuthor)
        setUrl(prevUrl)
        setDescription(prevDescription)
        setDoi(prevDoi)
        setPublisher(prevPublisher)
        setPubDate(prevPubDate)
        setTags(prevTags)
    }
    const formName = isEdit ? 'Edit' : "Add"
    const dispatch = useDispatch()
    const handleAddTag = () => {
        const newTag = tags.concat(tagValue)
        setTags(newTag)
        setTagValue('')
    }
    const handleDeleteTag = (event) => {
        event.preventDefault()
        const deletedTag = event.currentTarget.parentElement.id
        const filteredTags = tags.filter(x => x !== deletedTag)
        setTags(filteredTags)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (author !== '' && title !== '') {
            const articleObj = {
                title,
                author,
                url,
                description,
                doi,
                publisher,
                pubDate,
                tags
            }
            try {
                if (isEdit) {
                    dispatch(editArticle(id, articleObj))
                    dispatch(
                        setErrorMessage(
                            `Edit Successful`,
                            5
                        )
                    )
                } else if (!isEdit) {
                    dispatch(createArticle(articleObj))
                    dispatch(
                        setErrorMessage(
                            `${title} by ${author} added`,
                            5
                        )
                    )
                }
                setTitle('')
                setAuthor('')
                setUrl('')
                setDescription('')
                setDoi('')
                setPublisher('')
                setPubDate('')
                setTags([])
            } catch (exception) {
                //dispatch(setErrorMessage('Error: Unhandled Exception', 10))
                dispatch(setErrorMessage(`Error: ${exception}`, 10))
            }
        } else {
            dispatch(setErrorMessage('Error: Missing Required Fields', 5))
        }
    }


    return (
        <Card sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

            <form onSubmit={handleSubmit}>
                <Stack direction='column' spacing={.5}>
                    <Typography>{formName} Article</Typography>
                    <TextField
                        id='title'
                        label='Title'
                        variant='outlined'
                        onChange={({ target }) => setTitle(target.value)}
                        value={title}
                    />
                    <br />
                    <TextField
                        id='author'
                        label='Author'
                        variant='outlined'
                        onChange={({ target }) => setAuthor(target.value)}
                        value={author}
                    />
                    <br />
                    <TextField
                        id='url'
                        label='URL'
                        variant='outlined'
                        onChange={({ target }) => setUrl(target.value)}
                        value={url}
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
                        value={description}
                    />
                    <br />
                    <TextField
                        id='DOI'
                        label='DOI'
                        variant='outlined'
                        onChange={({ target }) => setDoi(target.value)}
                        value={doi}
                    />
                    <br />
                    <Stack direction='row' spacing={1}><TextField
                        id='tags'
                        label='tags'
                        variant='outlined'
                        onChange={({ target }) => setTagValue(target.value)} value={tagValue}
                    /><Button variant='contained' onClick={handleAddTag}>Add Tag</Button>
                    </Stack>
                    <Stack direction='row' spacing={1}><Tags tags={tags} handleDelete={handleDeleteTag} isDeletable='true' /></Stack>
                    <br />
                    <TextField
                        id='Publisher'
                        label='Publisher'
                        variant='outlined'
                        onChange={({ target }) => setPublisher(target.value)}
                        value={publisher}
                    />
                    <br />
                    <TextField
                        id='pub-date'
                        label='Publication Date'
                        variant='outlined'
                        onChange={({ target }) => setPubDate(target.value)}
                        value={pubDate}
                    />
                    <br />
                    <Button
                        variant='contained'
                        endIcon={<CloudUploadIcon />}
                        type='submit'>
                        Submit
                    </Button>
                    <Button variant='outlined' startIcon={<DeleteIcon />} href={'/Articles'}>
                        Cancel
                    </Button>
                    <br />
                </Stack>
            </form>
        </Card >
    )
}

export default AddArticleForm
