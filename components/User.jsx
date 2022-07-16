import React from 'react'
import userImage from '../public/user.png'
import Image from 'next/image'

const User = ({ firstName, lastName }) => {

    return (
        <>
            <div>
                <div className='w-[623px] h-[70px] bg-[#ECECEC] rounded-[4px]  font-[500] text-[24px] leading-[29px] mb-[10px] flex hover:bg-[#D4D4D4] cursor-pointer '>
                    <div className='m-[8px] w-[52px] h-[50px] rounded-full '><Image src={userImage} alt='user' /></div>
                    <p className='my-[18.5px] ml-[10px] text-[24px] font-[500] leading-[29px] text-black '>{firstName}{" "}{lastName}</p>
                </div>
            </div>

        </>
    )
}

export default User