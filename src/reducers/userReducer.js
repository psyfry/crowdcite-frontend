//import login from '../services/login'

//Action Creators

export const setUser = (user) => {
    console.log('userObj action:', user)
    return async (dispatch) => {
        dispatch({
            type: 'SET_USER',
            data: user
        })
    }
}

export const signOut = () => {
    return async (dispatch) => {
        dispatch({
            type: 'SIGN_OUT'
        })
    }
}
const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.data
        case 'SIGN_OUT':
            return null
        default:
            return state
    }
}
export default userReducer
