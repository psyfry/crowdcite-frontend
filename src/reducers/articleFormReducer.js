
//* REFACTOR: Convert state into an array containing [dialogOpen, isEdit]
export const openDialog = () => {
    return async (dispatch) => {
        dispatch({
            type: 'OPEN_DIALOG',
            data: true
        })
    }
}
export const closeDialog = () => {
    return async (dispatch) => {
        dispatch({
            type: 'CLOSE_DIALOG',
            data: false
        })
    }
}

const articleFormReducer = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return action.data
        case 'CLOSE_DIALOG':
            return action.data
        default: {
            return state
        }
    }
}

export default articleFormReducer