import React from 'react'
import userImage from '../public/user.png'
import Image from 'next/image'

const UserDetails = ({ username, firstName, lastName, email, jobTitle, bio }) => {
    return (
        <div>
            <div className='w-[502px] h-[70px] bg-[#C5DFFF] rounded-tl-[8px] rounded-tr-[8px] text-black py-[20px] px-[163px] font-[500] text-[24px] leading-[29px]  '>USERS DETAILS</div>

            <div className='w-[156px] h-[138px] rounded-full absolute top-[100px] right-[160px] '>

                <Image src={userImage} alt="" />

                <div className='absolute top-[173px] right-[-120px] w-[400px] '>
                    <p className=' font-[500] text-[18px] leading-[22px] text-center '>@{username}</p>
                </div>

                <div className='absolute w-[304px] h-[87px] top-[225px] left-[-60px] bg-[#DBDBDB] flex font-[500] text-[14px] leading-[17px] text-black items-start border-[1px] border-solid border-[#6C6C6C] rounded-[4px] box-border p-[8px] '>
                    {bio}
                </div>

                <div className='absolute top-[345px] left-[-60px]'>
                    <p className=' font-[500] text-[10px] leading-[12px] text-black '>Full Name</p>
                    <div className='absolute w-[304px] h-[31px] top-[15px] left-[0px] bg-[#DBDBDB] flex font-[500] text-[12px] leading-[15px] text-black items-start border-[1px] border-solid border-[#6C6C6C] rounded-[4px] box-border p-[8px] '>
                        {firstName}{" "}{lastName}
                    </div>
                </div>

                <div className='absolute top-[410px] left-[-60px]'>
                    <p className=' font-[500] text-[10px] leading-[12px] text-black '>Job Title</p>
                    <div className='absolute w-[304px] h-[31px] top-[15px] left-[0px] bg-[#DBDBDB] flex font-[500] text-[12px] leading-[15px] text-black items-start border-[1px] border-solid border-[#6C6C6C] rounded-[4px] box-border p-[8px] '>
                        {jobTitle}
                    </div>
                </div>

                <div className='absolute top-[470px] left-[-60px]'>
                    <p className=' font-[500] text-[10px] leading-[12px] text-black '>Email</p>
                    <div className='absolute w-[304px] h-[31px] top-[15px] left-[0px] bg-[#DBDBDB] flex font-[500] text-[12px] leading-[15px] text-black items-start border-[1px] border-solid border-[#6C6C6C] rounded-[4px] box-border p-[8px] '>
                        {email}
                    </div>
                </div>

            </div>



        </div>
    )
}

export default UserDetails