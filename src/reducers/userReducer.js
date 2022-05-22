//import login from '../services/login'
//import userService from "../services/userService"
//Action Creators

export const setUser = (user) => {
    return async (dispatch) => {
        dispatch({
            type: 'SET_USER',
            data: user
        })
    }
}

export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: 'SIGN_OUT'
        })
    }
}
/* export const createUser = () => {
    
} */
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
