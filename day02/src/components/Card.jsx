import React from 'react'

const Card = (prop) => {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1793631604583-a416fbe3e432?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
      <h1>{prop.user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card