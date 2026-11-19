import React from 'react'
import heroImg from "../../assets/heroimg.jpg";
import CenterText from './CenterText';

const Center = () => {
  return (
    <div className=' w-[97%] h-[90vh]  m-auto bg-amber-400 rounded-md  overflow-hidden flex justify-center items-center'>
      <CenterText/>
        <img className='w-full h-full object-cover' src={heroImg} alt="" />

        
        
      
    </div>
  )
}

export default Center
