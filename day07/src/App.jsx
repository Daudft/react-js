import React, { useState } from 'react'


const App = () => {

const [num, setNum] = useState(0)

function increase(){
  setNum(num+1)
}
function decrease(){
  setNum(num-1)
}
function jump5(){
  setNum(num+5)
}

  return (
    <div className='w-full h-screen bg-green-400 p-10'>
      <h1 className=' rounded p-25 font-extrabold bg-zinc-400 w-fit text-9xl'>{num}</h1>
      <button onClick={increase} className='py-2 px-8 bg-blue-500 text-white m-5 rounded'>Increase</button>
      <button onClick={decrease} className='py-2 px-8 bg-red-500 text-white m-5 rounded'>Increase</button>
      <button onClick={jump5} className='py-2 px-8 bg-red-500 text-white m-5 rounded'>Increase by 5</button>
    </div>
  )
}

export default App
