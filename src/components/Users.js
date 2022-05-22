import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
//import { getUserList } from '../reducers/userListReducer'
//import UserCard from './UserCard'

import UserCard from './UserCard'
const Users = ({ userList }) => {
    //const users = useSelector((state) => state.userList)
    /*     const dispatch = useDispatch()
        useEffect(() => {
            dispatch(getUserList())
        }, [ dispatch ]) */
    console.log(userList)
    if (!userList) {
        return null
    }
    const userArray = userList.map((x, index) => <UserCard key={index} username={x.username} firstName={x.firstName} lastName={x.lastName} />)
    return (
        <div>
            {userArray}
        </div>)
}

export default Users
