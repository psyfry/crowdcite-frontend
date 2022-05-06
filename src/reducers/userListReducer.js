import userService from '../services/userService'

export const getUserList = () => {
    return async (dispatch) => {
        const users = await userService.getUsers()
        dispatch({
            type: 'GET_USER_LIST',
            data: users
        })
    }
}

const userListReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER_LIST':
            return action.data
        default:
            return state
    }
}

export default userListReducer
