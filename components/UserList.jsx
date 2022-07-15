import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User';
import UserDetails from './UserDetails';

const UserList = () => {

    const [users, setUsers] = useState([])


    const fetchUsers = () => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch(error => console.error(`Error: ${error}`))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    console.log(users)


    return (
        <div>
            {/* Heading  */}
            <div className='w-[623px] h-[70px] absolute top-[175px] left-[105px] bg-[#C5DFFF] rounded-tl-[8px] rounded-tr-[8px] text-black py-[20px] pl-[223px] font-[500] text-[24px] leading-[29px] '>USERS LIST</div>

            {/* Users */}
            <div className='absolute top-[265px] left-[105px] '>
                {users.map((user, index) => {
                    return <User key={user.id} avatar={user.avatar} firstName={user.profile.firstName} lastName={user.profile.lastName} />
                })}
            </div>


        </div>
    )
}

export default UserList