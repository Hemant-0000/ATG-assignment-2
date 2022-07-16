import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User';
import UserDetails from './UserDetails';
import no_data from '../public/no_data.png'
import Image from 'next/image'

const UserList = () => {

    const [users, setUsers] = useState([])

    const [click, setClick] = useState(false)
    const [uid, setUid] = useState()
    const [error, setError] = useState(false)


    const fetchUsers = async () => {
        try {
            const res = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            setUsers(res.data)
        } catch (error) {
            setError(true)
            console.error(`Internal Server Error: ${error}`)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
        {error ? <div className='absolute top-[0px] left-[400px]  w-[700px] h-full '> <Image src={no_data} alt="No data found" /></div>
        :
        <div>
            {/* Heading  */}
            <div className='w-[623px] h-[70px] absolute top-[175px] left-[105px] bg-[#C5DFFF] rounded-tl-[8px] rounded-tr-[8px] text-black py-[20px] pl-[223px] font-[500] text-[24px] leading-[29px] '>USERS LIST</div>

            {/* Users */}
            <div className='absolute top-[265px] left-[105px] '>
                {users.map((user, index) => {
                    return <div key={user.id} onClick={() => { setClick(true), setUid(user.id) }} >
                        <User id={user.id} avatar={user.avatar} firstName={user.profile.firstName} lastName={user.profile.lastName} />
                        {
                            click ? users.filter(user => user.id === uid).map((user, index) => {
                                return <div className='absolute top-[-90px] left-[780px]' key={user.id}>
                                    <UserDetails id={user.id} avatar={user.avatar} firstName={user.profile.firstName} lastName={user.profile.lastName} username={user.profile.username} email={user.profile.email} bio={user.Bio} jobTitle={user.jobTitle} />
                                </div>
                            }) : (
                                <>
                                <div className='absolute top-[90px] left-[780px] w-[502px] h-[200px] bg-[#ccced0] rounded-lg text-[#606060] px-[50px] py-[90px] font-[500] text-[24px] leading-[29px] '>USERS DETAILS WILL APPEAR HERE</div>
                                </>
                            )

                        }
                    </div>
                })}

            </div>




        </div>
        }
        </>
    )
}

export default UserList