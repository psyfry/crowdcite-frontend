
//* REFACTOR: Convert state into an object with tho following keys:
//* {dialogOpen: bool, isEdit: bool }
export const openDialog = () => {
    return (dispatch) => {
        dispatch({
            type: 'OPEN_DIALOG',
            data: true
        })
    }
}
export const closeDialog = () => {
    return (dispatch) => {
        dispatch({
            type: 'CLOSE_DIALOG',
            data: false
        })
    }
}

export const setEdit = () => {
    return (dispatch) => {
        /*         dispatch({
                    type: 'SET_PREV_VALUES',
                    data: prevArr
                }) */
        dispatch({
            type: 'SET_EDIT',
            data: true
        })
    }
}
export const setPrevValues = (prevArr) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_PREV_VALUES',
            data: prevArr
        })
    }
}
export const unsetEdit = () => {
    return (dispatch) => {
        dispatch({
            type: 'SET_PREV_VALUES',
            data: []
        })
        dispatch({
            type: 'UNSET_EDIT',
            data: false
        })
    }
}
const articleFormReducer = (state = { isOpen: false, isEdit: false, prevValues: [] }, action) => {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return { isEdit: state.isEdit, isOpen: action.data, prevValues: state.prevValues }
        case 'CLOSE_DIALOG':
            return { isEdit: state.isEdit, isOpen: action.data, prevValues: state.prevValues }
        case 'SET_EDIT':
            return { isEdit: action.data, isOpen: state.isOpen, prevValues: state.prevValues }
        case 'UNSET_EDIT':
            return { isEdit: action.data, isOpen: state.isOpen, prevValues: state.prevValues }
        case 'SET_PREV_VALUES':
            return { isEdit: state.isEdit, isOpen: state.isOpen, prevValues: action.data }
        default: {
            return state
        }
    }
}

export default articleFormReducer