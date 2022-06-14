import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorMessage } from '../reducers/noticeReducer'
import { createArticle, editArticle } from '../reducers/articleReducer'

import { TextField, Button, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import DeleteIcon from '@mui/icons-material/Delete'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Tags from './Tags'
import Stack from '@mui/material/Stack';
import { closeDialog, unsetEdit } from '../reducers/articleFormReducer'

const ArticleFormModal = ({ isEdit, prevValues }) => {
    const [ title, setTitle ] = useState('')
    const [ author, setAuthor ] = useState('')
    const [ url, setUrl ] = useState('https://')
    const [ description, setDescription ] = useState('')
    const [ doi, setDoi ] = useState('')
    const [ publisher, setPublisher ] = useState('')
    const [ pubDate, setPubDate ] = useState('')
    const [ tags, setTags ] = useState([])
    const [ tagValue, setTagValue ] = useState('')

    const inputFocusRef = useRef()

    const open = useSelector((state) => state.articleDialog.isOpen)

    const handleClose = () => {
        dispatch(closeDialog())
    }
    //console.log({ prevValues });
    const [ id, prevTitle, prevAuthor, prevUrl, prevDescription, prevTags, prevDoi, prevPubDate, prevPublisher ] = prevValues
    //console.log({ id });
    //console.log({ prevDoi });
    /* setting state here causes infinite refreshes b/c this component is called on the App parent. Either use refs or memoization or move to a lower level like Article or Articles      
    if (isEdit === true) {
            setTitle(prevTitle)
            setAuthor(prevAuthor)
            setUrl(prevUrl)
            setDescription(prevDescription)
            setDoi(prevDoi)
            setPublisher(prevPublisher)
            setPubDate(prevPubDate)
            setTags(prevTags)
        } */

    const formName = isEdit ? 'Edit' : "Add"
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
                if (isEdit) {
                    dispatch(editArticle(id, articleObj))
                    dispatch(
                        setErrorMessage(
                            `Edit Successful`,
                            5
                        )
                    )
                    dispatch(unsetEdit())
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
                setUrl('https://')
                setDescription('')
                setDoi('')
                setPublisher('')
                setPubDate('')
                setTags([])
                dispatch(closeDialog())
                dispatch(unsetEdit())
            } catch (exception) {
                dispatch(setErrorMessage(`Error: ${exception}`, 10))
            }
        } else {
            dispatch(setErrorMessage('Error: Missing Required Fields', 5))
        }
    }

    if (isEdit && !prevValues) {
        return null
    }

    return (
        <Dialog open={open} onClose={handleClose} keepMounted>
            <DialogTitle>{formName} Article</DialogTitle>

            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <Stack direction='column' spacing={.5}>
                        {isEdit ? <Typography>Prev. Title: {prevTitle}</Typography> : <></>}
                        <TextField
                            id='title'
                            label='Title'
                            variant='outlined'
                            onChange={({ target }) => setTitle(target.value)}
                            value={title}
                            autoFocus={true}
                        />
                        <br />
                        {isEdit ? <Typography>Prev. Author: {prevAuthor}</Typography> : <></>}
                        <TextField
                            id='author'
                            label='Author'
                            variant='outlined'
                            onChange={({ target }) => setAuthor(target.value)}
                            value={author}
                        />
                        <br />
                        {isEdit ? <Typography>Prev. URL:{prevUrl}</Typography> : <></>}
                        <TextField
                            id='url'
                            label='URL'
                            variant='outlined'
                            onChange={({ target }) => setUrl(target.value)}
                            value={url}
                        />
                        <br />
                        {isEdit ? <Typography>Prev. Description: {prevDescription}</Typography> : <></>}
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
                        {isEdit ? <Typography>Prev. DOI: {prevDoi}</Typography> : <></>}
                        <TextField
                            id='DOI'
                            label='DOI'
                            variant='outlined'
                            onChange={({ target }) => setDoi(target.value)}
                            value={doi}
                        />
                        <br />
                        {isEdit ? <Typography>Prev. Tags: {prevTags}</Typography> : <></>}
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
                        {isEdit ? <Typography>Prev. Publisher: {prevPublisher}</Typography> : <></>}
                        <TextField
                            id='Publisher'
                            label='Publisher'
                            variant='outlined'
                            onChange={({ target }) => setPublisher(target.value)}
                            value={publisher}
                        />
                        <br />
                        {isEdit ? <Typography>Prev. Publication Date: {prevPubDate}</Typography> : <></>}
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
