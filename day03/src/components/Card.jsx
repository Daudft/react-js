import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
  return (
    <div>
      <div className="card">
        <div>
          <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmRc6Q5XlB63S4JuXiGfpCxElTlpzb2ReGxejwukmgQ&s=10" alt="" />
          <button>Save <Bookmark size={13}/> </button>
        </div>

        <div className="center">
          <h2>Muhammad Ali</h2>
          <h3>Role <span>UI/UX Designer</span></h3>
          <div className="tags">
            <h5>Figma</h5>
            <h5>Abode</h5>
          </div>
        </div>
        
      </div>
        


        <div className="bottom">
          <h4>120$/h</h4>
          <button>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Card
