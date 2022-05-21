import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
//import { getUserList } from '../reducers/userListReducer'
import User from './User'

import UserCard from './UserCard'
const Users = ({ users }) => {
    //const users = useSelector((state) => state.userList)
    /*     const dispatch = useDispatch()
        useEffect(() => {
            dispatch(getUserList())
        }, [ dispatch ]) */
    console.log(users)
    if (!users) {
        return null
    }
    const userArray = users.map((x, index) => <UserCard key={index} username={x.username} />)
    return (<>
        {userArray}
    </>)
}

export default Users
