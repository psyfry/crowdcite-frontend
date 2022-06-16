var hide
export const setErrorMessage = (type, message, timeout) => {
    const seconds = timeout * 1000
    if (typeof hide === 'number') {
        clearInterval(hide)
    }
    return async (dispatch) => {
        dispatch({
            type: 'NEW_MESSAGE',
            data: { type, message }
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
            const noticeType = action.data.type
            const noticeMessage = action.data.message
            const newNotice = { type: noticeType, message: noticeMessage }
            //return { action.data.type, action.data.message }
            //return { type: noticeType, mesasage: noticeMessage }
            return newNotice
        case 'RESET_MESSAGE':
            return null
        //return { type: null, message: null }
        default:
            return state
    }
}
export default noticeReducer
