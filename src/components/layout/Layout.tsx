import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
      <div className='w-3/12'>
        <Sidebar />
      </div>
      <div className='w-9/12'>
        {children}
      </div>
      </div>
    </div>
  )
}

export default Layout