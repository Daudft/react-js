import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")

  function formSubmit(e){
    e.preventDefault()
    
    
    console.log("Form Submitted by",name);
    setName("")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formSubmit(e)
      }} >
        <input value={name} onChange={(e)=>{
          setName(e.target.value)
        }} className=' m-3 p-3 rounded bg-red-500' type="text"  placeholder='Enter your name'/>
        <button className='py-2 px-4 bg-amber-400 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default App
