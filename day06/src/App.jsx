import React from 'react'

const App = () => {

  function abc(){
    console.log("Button Clicked")
  }

  function cb(elem){
    console.log(elem)

  }
  return (
    <div className='w-full h-screen bg-green-400'>
      <h1 className='p-2'>Hello Ali</h1>
      <button onClick={abc} className='py-2 px-12 bg-amber-700 m-2'>Click</button>
      <button onClick={()=>{
        console.log("function inside onclick")
      }} className='py-2 px-12 bg-blue-700 m-2'>Click</button>


      <button onClick={(elem)=>{cb(elem)}} className='py-2 px-12 bg-amber-700 m-2'>Click</button>

      <input onChange={(elem)=>{console.log(elem.target.value)}} className='p-3 border-2' type="text" placeholder='Enter your name ' />
    </div>
  )
}

export default App
