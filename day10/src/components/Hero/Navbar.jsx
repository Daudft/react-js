import React from 'react'

const Navbar = () => {

    const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Resources", href: "#resources" },
  { label: "Solutions", href: "#solutions" },
  { label: "Company", href: "#company" },
  { label: "Pricing", href: "#pricing" },
  { label: "The Poly Effect", href: "#thepolyeffect" }
];

  return (
    <nav className='w-[70%] m-auto  flex justify-between items-center py-3 px-4 '>
        
        <div className='links flex gap-4 items-center' >
            <h2 className='mr-4 font-mono font-extrabold text-xl '>Poly</h2>
            
            {navLinks.map((link)=>(
            <a className='text-sm' href={link.href}>{link.label}</a>
        ))}

        </div>
        <div className="btns">
            <button className='py-1 px-3 text-sm bg-gray-100 rounded mr-1'>Log In</button>
            <button className='py-1 px-3 bg-black text-white text-sm rounded'>Start Free</button>
        </div>
        
      
    </nav>
  )
}

export default Navbar
