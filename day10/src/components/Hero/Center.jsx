import React from 'react'
import heroImg from "../../assets/heroimg.jpg";
import CenterText from './CenterText';

const Center = () => {
  return (
    <div className=' w-[97%] h-[90vh] mt-2 m-auto bg-amber-400 rounded-md  overflow-hidden'>
        <img className='w-full h-full object-cover' src={heroImg} alt="" />

        <CenterText/>
        
      
    </div>
  )
}

export default Center
