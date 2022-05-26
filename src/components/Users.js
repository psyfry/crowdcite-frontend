import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserList } from '../reducers/userListReducer'
import UserCard from './UserCard'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
const Users = () => {
    const users = useSelector((state) => state.userList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserList())
    }, [ dispatch ])
    if (!users) {
        return null
    }
    const userArray = users.map((x, index) => <UserCard key={`${x.username}{index}`} username={x.username} firstName={x.firstName} lastName={x.lastName} displayName={x.displayName} avatarColor={x.avatarColor} articles={x.articles} />)
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Stack direction='column' spacing={1}>
                {userArray}
            </Stack>
        </Box>)
}

export default Users
