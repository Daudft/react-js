import React from 'react'

const App = () => {

  function formSubmit(e){
    e.preventDefault()
    console.log(e)
    
    console.log("Form Submitted");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formSubmit(e)
      }} >
        <input className=' m-3 p-3 rounded bg-red-500' type="text"  placeholder='Enter your name'/>
        <button className='py-2 px-4 bg-amber-400 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default App
