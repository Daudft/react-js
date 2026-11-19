import React from 'react'

const CenterText = () => {
  return (
    
      <div className="box flex flex-col justify-center items-center gap-3 absolute">
        <h1 className='text-8xl font-extrabold text-white text-center tracking-tighter'>Your Website Should <br />Be Working Harder <br /> Than You Are.</h1>
        <p className='text-white text-sm leading-3.5 text-center'>Ploy is a marketing platform that turn your website <br />into your company's growth engine.  </p>
        <div className="buttons flex gap-2 mt-3">
          <button className='py-2 px-5 bg-black text-white rounded-full'>Start Now</button>
          <button className='py-2 px-5 bg-white text-black rounded-full'>Demo</button>
        </div>

      
        
      
    </div>
  )
}

export default CenterText
