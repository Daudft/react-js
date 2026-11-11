import React from 'react'

const Navbar = () => {

  return (
    <div className='w-full flex  ' >
        <h3 className=' flex-1 text-center py-2 px-4 bg-black text-white border-gray-500 rounded-md mr-[3px]'>Greens</h3>
        <h3 className=' flex-1 text-center py-2 px-4  border rounded-md border-gray-500'>Home</h3>
        <h3 className=' flex-1 text-center py-2 px-4  border rounded-md border-gray-500'>Golf</h3>
        <h3 className=' flex-1 text-center py-2 px-4  border rounded-md border-gray-500'>Guest House</h3>
        <h3 className=' flex-1 text-center py-2 px-4  border rounded-md border-gray-500'>More</h3>
      
    </div>
  )
}

export default Navbar
