import { createStore, combineReducers, applyMiddleware } from 'redux'
//import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import articleReducer from './reducers/articleReducer'
import noticeReducer from './reducers/noticeReducer'
import userReducer from './reducers/userReducer'
import userListReducer from './reducers/userListReducer'
import watchlistReducer from './reducers/watchlistReducer'


const reducer = combineReducers({
    articles: articleReducer,
    errorMessage: noticeReducer,
    user: userReducer,
    userList: userListReducer,
    watchlist: watchlistReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store
/* export const store = configureStore({
    reducer: {
        articles: articleReducer,
        errorMessage: noticeReducer,
        user: userReducer,
        userList: userListReducer
    }
}) */

