import articleService from "../services/articleService"

export const getWatchlist = () => {
    return async (dispatch) => {
        const watchlist = await articleService.getWatchlist()
        dispatch({
            type: 'GET_WATCHLIST',
            data: watchlist
        })
    }
}
export const toggleWatched = (id, username) => {
    return async (dispatch) => {
        const watchedArticle = await articleService.watchArticle(id, username)
        dispatch({
            type: 'TOGGLE_WATCH',
            data: watchedArticle
        })
        const watchlist = await articleService.getWatchlist()
        dispatch({
            type: 'GET_WATCHLIST',
            data: watchlist
        })
    }

}
const watchlistReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_WATCHLIST':
            return action.data
        default: {
            return state
        }
    }
}

export default watchlistReducer