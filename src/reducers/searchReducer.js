import articleService from "../services/articleService"
export const setSearchQuery = (tag) => {
    return async (dispatch) => {
        const results = await articleService.getTaggedArticles(tag)
        dispatch({
            type: 'SET_SEARCH_QUERY',
            data: results
        })
    }
}
export const setFilterQuery = (tag) => {
    return async (dispatch) => {
        dispatch({
            type: 'SET_SEARCH_QUERY',
            data: tag
        })
    }
}
const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return action.data
        default:
            return state
    }
}

export default searchReducer