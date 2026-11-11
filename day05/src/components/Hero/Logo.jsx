import React from 'react'
import Button from './Button'

const Logo = () => {
  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-8xl leading-20 font-medium'><span className='text-orange-400'>G</span>o<span className='text-blue-950'>l</span>f <br /> cl<span className='text-green-600'>ub.</span></h1>

      <Button/>
    </div>
  )
}

export default Logo
