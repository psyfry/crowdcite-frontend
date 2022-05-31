import articleService from "../services/articleService"

export const getWatchlist = () => {
    return async (dispatch) => {
        const currentWatchlist = await articleService.getWatchlist()
        dispatch({
            type: 'GET_WATCHLIST',
            data: currentWatchlist
        })
    }
}
export const toggleWatched = (id) => {
    return async (dispatch) => {
        const watchedArticle = await articleService.watchArticle(id)
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
        case 'TOGGLE_WATCH':
            const id = action.data.id
            const returnedArticle = action.data
            return state.map(x => x.id !== id ? x : returnedArticle)
        default:
            return state
    }
}

export default watchlistReducer