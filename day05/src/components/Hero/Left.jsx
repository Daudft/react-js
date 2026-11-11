import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Logo from './Logo'

const Left = () => {
  return (
    <div className='w-[50%] h-full flex flex-col justify-between px-6'>
        
              <Navbar/>
        
        
        <div className='self-end'>
         <Content/>
        </div>
        
        <Logo/>
    </div>
  )
}

export default Left
