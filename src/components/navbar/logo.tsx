import React from 'react'
import { BsFillBuildingsFill } from 'react-icons/bs'

const Logo = () => {
    return (
        <div className='flex space-x-2 items-center cursor-pointer hover:text-blue-900 Duration ' >
            <div>
                <BsFillBuildingsFill className='h-16 w-auto text-blue-600 hover:text-blue-900' />
            </div>
            <div className='uppercase md:text-2xl text-xl font-bold text-gray-600 hover:text-blue-900'>
               Crown Services
            </div>
        </div>
    )
}

export default Logo