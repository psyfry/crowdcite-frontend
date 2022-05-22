/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'http://localhost:3030/api/articles'
let token = null
const watchlistUrl = 'http://localhost:3030/api/watchlist'
const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getArticles = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getArticle = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const addArticle = async (newArticle) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl, newArticle, config)
    return response.data
}

const watchArticle = async (id, username) => {
    const config = {
        headers: { Authorization: token }
    }
    console.log({ id });
    const response = await axios.put(`${baseUrl}/${id}/watch`, username, config)
    return response.data
}

const deleteArticle = async (id) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}
const addComment = async (id, comment) => {
    const commentObj = {
        comments: comment
    }
    console.log(commentObj)
    const response = await axios.put(`${baseUrl}/comment/${id}`, commentObj)
    console.log(response.data)
    return response
}
const getWatchlist = async () => {
    console.log({ token });
    const config = {
        headers: { 'Authorization': token }
    }
    const response = await axios.get(`${watchlistUrl}`, config)
    return response.data
}
export default {
    addArticle,
    getArticles,
    getArticle,
    setToken,
    watchArticle,
    deleteArticle,
    addComment, getWatchlist
}
