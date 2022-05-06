var hide
export const setErrorMessage = (message, timeout) => {
    const seconds = timeout * 1000
    if (typeof hide === 'number') {
        clearInterval(hide)
    }
    return async (dispatch) => {
        dispatch({
            type: 'NEW_MESSAGE',
            data: { message }
        })
        hide = setTimeout(() => {
            dispatch({
                type: 'RESET_MESSAGE'
            })
        }, seconds)
    }
}

const noticeReducer = (state = null, action) => {
    switch (action.type) {
        case 'NEW_MESSAGE':
            return action.data.message
        case 'RESET_MESSAGE':
            return null
        default:
            return state
    }
}
export default noticeReducer
