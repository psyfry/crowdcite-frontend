/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseUrl = 'http://localhost:3030/api/users'

const getUsers = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getUser = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const getWatchlist = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}/watchlist`)
    return response.data
}
const createUser = async (newUser) => {
    const response = await axios.post(baseUrl, newUser)
    return response.data
}
export default { getUser, getUsers, getWatchlist, createUser }
