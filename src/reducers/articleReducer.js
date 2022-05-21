import articleService from '../services/articleService'
export const initializeArticles = () => {
    return async (dispatch) => {
        const articles = await articleService.getArticles()
        dispatch({
            type: 'INIT_ARTICLES',
            data: articles
        })
    }
}
export const createArticle = (content) => {
    return async (dispatch) => {
        const newArticle = await articleService.addArticle(content)
        dispatch({
            type: 'ADD_ARTICLE',
            data: newArticle
        })
        const articles = await articleService.getArticles()
        dispatch({
            type: 'INIT_ARTICLES',
            data: articles
        })
    }
}
export const toggleWatchlist = (id) => {
    return async (dispatch) => {
        const watchedArticle = await articleService.toggleWatchlist(id)
        dispatch({
            type: 'WATCH',
            data: watchedArticle
        })
        const articles = await articleService.getArticles()
        dispatch({
            type: 'INIT_ARTICLES',
            data: articles
        })
    }
}

export const deleteArticle = (id) => {
    return async (dispatch) => {
        const deletedArticle = articleService.deleteArticle(id)
        dispatch({
            type: 'DELETE_ARTICLE',
            data: deletedArticle
        })
        const articles = await articleService.getArticles()
        dispatch({
            type: 'INIT_ARTICLES',
            data: articles
        })
    }
}
export const createComment = (id, comment) => {
    return async (dispatch) => {
        const updatedArticle = await articleService.addComment(id, comment)
        dispatch({
            type: 'ADD_COMMENT',
            data: updatedArticle
        })
        const articles = await articleService.getArticles()
        dispatch({
            type: 'INIT_ARTICLES',
            data: articles
        })
    }
}

const articleReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_ARTICLES': {
            return action.data
        }
        case 'ADD_ARTICLE': {
            return [ ...state, action.data ]
        }
        case 'DELETE_ARTICLE': {
            const id = action.data.id
            return state.map((y) => (y.id !== id ? y : null))
        }
        case 'ADD_COMMENT': {
            const id = action.data.id
            const newArticleObj = action.data
            return state.map((x) => (x.id !== id ? x : newArticleObj))
        }
        default: {
            return state
        }
    }
}

export default articleReducer
