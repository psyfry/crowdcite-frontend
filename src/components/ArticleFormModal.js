import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorMessage } from '../reducers/noticeReducer'
import { createArticle } from '../reducers/articleReducer'

import { TextField, Button } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import DeleteIcon from '@mui/icons-material/Delete'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Tags from './Tags'
import Stack from '@mui/material/Stack';
import { closeDialog } from '../reducers/articleFormReducer'

const ArticleFormModal = () => {
    const open = useSelector((state) => state.articleDialog.isOpen)

    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('')
    const [ url, setUrl ] = useState('https://')
    const [ description, setDescription ] = useState('')
    const [ doi, setDoi ] = useState('')
    const [ publisher, setPublisher ] = useState('')
    const [ pubDate, setPubDate ] = useState('')
    const [ tags, setTags ] = useState([])
    const [ tagValue, setTagValue ] = useState('')

    const inputFocusRef = useRef()

    const handleClose = () => {
        dispatch(closeDialog())
    }
    const dispatch = useDispatch()

    const handleTagKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleAddTag()
        }
    }
    function handleAddTag() {
        if (tagValue !== '' && !tags.includes(tagValue)) {
            const newTag = tags.concat(tagValue)
            setTags(newTag)
        }
        setTagValue('')
        inputFocusRef.current.focus()
    }
    const handleDeleteTag = (event) => {
        event.preventDefault()
        const deletedTag = event.currentTarget.parentElement.id
        const filteredTags = tags.filter(x => x !== deletedTag)
        setTags(filteredTags)
        inputFocusRef.current.focus()
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
                dispatch(createArticle(articleObj))
                dispatch(
                    setErrorMessage(
                        'success', `${title} by ${author} added`,
                        5
                    )
                )
                setTitle('')
                setAuthor('')
                setUrl('https://')
                setDescription('')
                setDoi('')
                setPublisher('')
                setPubDate('')
                setTags([])
                dispatch(closeDialog())
            }
            catch (exception) {
                dispatch(setErrorMessage('error', `Error: ${exception}`, 10))
            }
        } else {
            dispatch(setErrorMessage('error', 'Error: Missing Required Fields', 10))
        }
    }
    return (
        <Dialog open={open} onClose={handleClose} keepMounted>
            <DialogTitle>Add Article</DialogTitle>

            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <Stack direction='column' spacing={.5}>
                        <TextField
                            id='title'
                            label='Title'
                            variant='outlined'
                            onChange={({ target }) => setTitle(target.value)}
                            value={title}
                            autoFocus={true}
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
                            inputRef={inputFocusRef}
                            onKeyPress={(e) => handleTagKeyPress(e)}
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
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        endIcon={<CloudUploadIcon />}
                        type='submit'>
                        Submit
                    </Button>
                    <Button variant='outlined' startIcon={<DeleteIcon />} onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default ArticleFormModal
