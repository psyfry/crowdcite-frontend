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
import userService from './services/userService'
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
import Watchlist from './components/Watchlist'
import Notifications from './components/Notifications'
import Signup from './components/Signup'
const App = () => {
    const articles = useSelector((state) => state.articles)
    const errorMessage = useSelector((state) => state.errorMessage)
    const user = useSelector((state) => state.user)
    const userList = useSelector((state) => state.userList)
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    //const [watch, setCurrentUser] = useState('')
    const dispatch = useDispatch()
    const addArticleRef = useRef()
    useEffect(() => {
        dispatch(initializeArticles())
    }, [ dispatch ])
    console.log({ userList });
    useEffect(() => {
        const loggedUser = window.localStorage.getItem('articleListUser')
        if (loggedUser) {
            const user = JSON.parse(loggedUser)
            dispatch(setUser(user))
            articleService.setToken(user.token)
        }
    }, [ dispatch ])

    useEffect(() => {
        dispatch(getUserList())

    }, [])

    const handleAddArticle = (articleObj) => {
        if (articleObj.title !== '' && articleObj.url !== '') {
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
                dispatch(setErrorMessage('Error: Unhandled Exception', 10))
            }
        } else {
            dispatch(setErrorMessage('Error: Missing Required Fields', 10))
        }
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
            dispatch(setErrorMessage('Error: Invalid Credentials', 10))
        }
    }

    const handleCreateUser = async (newUser) => {
        try {
            await userService.createUser(newUser)
            dispatch(setErrorMessage('Success! User Created. You can now login', 10))
        } catch (exception) {
            dispatch(setErrorMessage('Error: Registration failed', 10))
        }
    }
    const handleSignout = () => {
        dispatch(signOut())
        window.localStorage.removeItem('articleListUser')
        dispatch(setErrorMessage('Signed out', 5))
        setUsername('')
        setPassword('')
    }
    const toggleWatchlist = async (articleId) => {
        try {
            await articleService.watchArticle(articleId, user.username)
            dispatch(setErrorMessage("Added to Watchlist", 5))
        } catch (exception) {
            dispatch(setErrorMessage("Error: Toggle Watchlist Failed", 5))
        }
    }
    return (
        <div className='App'>
            <NavBar user={user} handleSignout={handleSignout} />
            {errorMessage && <Notifications message={errorMessage} />}
            <Routes>
                <Route path='/Articles/:id' element={<Article handleAddWatchlist={toggleWatchlist} />} />
                <Route path='/Articles' element={<Articles articles={articles} user={user} toggleWatchlist={toggleWatchlist} />} />
                <Route path='/Users/:id' element={<User />} />
                <Route path='/Watchlist' element={<Watchlist user={user} />} />
                <Route path='/Login' element={<Login handleLogin={handleLogin} handleUsername={({ target }) => setUsername(target.value)}
                    handlePassword={({ target }) => setPassword(target.value)}
                    username={username}
                    password={password} />} />
                <Route path='/signup' element={<Signup handleCreateUser={handleCreateUser} />} />
                <Route
                    path='/Add'
                    element={
                        <AddArticleForm createArticle={handleAddArticle} />
                    }
                />
                <Route path='/Users' element={<Users users={userList} />} />
                <Route path='/Search' element={<Search />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
