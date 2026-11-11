import React from 'react'
import Navbar from './Navbar'
import Left from './Left'
import Right from './Right'

const Hero = () => {
  return (
    <div className='h-screen w-full bg-zinc-200  flex p-5 overflow-hidden'>
        <Left/>
        <Right/>
      
    </div>
  )
}

export default Hero
