import React from 'react'
import userAvatar from '../public/user.png'
import UserDetails from './UserDetails'

const User = ({ avatar, firstName, lastName }) => {

    const handleClick = () => {
        <div className='absolute top-[175px] left-[833px] '>
            <UserDetails avatar={avatar} firstName={firstName} lastName={lastName} />
        </div>
    }

    return (
        <>
            <div onClick={handleClick}>
                <div className='w-[623px] h-[70px] bg-[#ECECEC] rounded-[4px]  font-[500] text-[24px] leading-[29px] mb-[10px] flex hover:bg-[#D4D4D4] cursor-pointer '>
                    <div className='m-[8px] w-[52px] h-[50px] rounded-full '><img src='https://icon2.cleanpng.com/20180920/att/kisspng-user-logo-information-service-design-5ba34f886b6700.1362345615374293844399.jpg' alt='user' /></div>
                    <p className='my-[18.5px] ml-[10px] text-[24px] font-[500] leading-[29px] text-black '>{firstName}{" "}{lastName}</p>
                </div>
            </div>
        </>
    )
}

export default User