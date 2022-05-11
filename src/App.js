import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {
    createArticle,
    deleteArticle,
    initializeArticles
} from './reducers/articleReducer'
import { setErrorMessage } from './reducers/noticeReducer'
import { setUser, signOut } from './reducers/userReducer'
import { getUserList } from './reducers/userListReducer'
import loginService from './services/login'
import articleService from './services/articleService'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Routes, Route } from 'react-router'
import AddArticleForm from './components/AddArticleForm'
import Articles from './components/Articles'
import Article from './components/Article'
import Users from './components/Users'
import User from './components/User'
import Login from './components/Login'
import Search from './components/Search'
const App = () => {
    const articles = useSelector((state) => state.articles)
    const errorMessage = useSelector((state) => state.errorMessage)
    const user = useSelector((state) => state.user)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const addArticleRef = useRef()
    useEffect(() => {
        dispatch(initializeArticles())
    }, [dispatch])

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('articleListUser')
        if (loggedUser) {
            const user = JSON.parse(loggedUser)
            dispatch(setUser(user))
            articleService.setToken(user.token)
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(getUserList())
    }, [dispatch])

    const handleAddArticle = (articleObj) => {
        if (articleObj.author !== '' && articleObj.url !== '') {
            try {
                dispatch(createArticle(articleObj))
                addArticleRef.current.toggleVisibility()
                dispatch(
                    setErrorMessage(
                        `${articleObj.title} by ${articleObj.author} added`,
                        5
                    )
                )
            } catch (exception) {
                dispatch(setErrorMessage('Error: Unhandled Exception', 5))
            }
        } else {
            dispatch(setErrorMessage('Error: Missing Required Fields', 5))
        }
        //history.push('/')
        dispatch(initializeArticles())
    }
    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({ username, password })
            window.localStorage.setItem('articleListUser', JSON.stringify(user))
            articleService.setToken(user.token)
            dispatch(setUser(user))
            setUsername('')
            setPassword('')
        } catch (exception) {
            dispatch(setErrorMessage('Error: Invalid Credentials', 5))
        }
    }

    const handleSignout = () => {
        dispatch(signOut())
        window.localStorage.removeItem('articleListUser')
        dispatch(setErrorMessage('Signed out', 5))
        setUsername('')
        setPassword('')
    }
    return (
        <div className='App'>
            <NavBar user={user} />
            <Routes>
                <Route path='/Articles/:id' element={<Article />} />
                <Route path='/Articles' element={<Articles />} />
                <Route path='/Users/:id' element={<User />} />
                <Route path='/Login' element={<Login />} />
                <Route
                    path='/Add'
                    element={
                        <AddArticleForm createArticle={handleAddArticle} />
                    }
                />
                <Route path='/Users' element={<Users />} />
                <Route path='/Search' element={<Search />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
