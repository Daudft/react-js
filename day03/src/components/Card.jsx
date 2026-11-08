import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (prop) => {
  return (
    <div>
      <div className="card">
        <div>
          <div className="top">
          <img src={prop.logo} alt="" />
          <button>Save <Bookmark size={13}/> </button>
        </div>

        <div className="center">
          <h2>{prop.name}</h2>
          <h3>Role <span>{prop.role}</span></h3>
          <div className="tags">
            <h5>{prop.tag1}</h5>
            <h5>{prop.tag2}</h5>
          </div>
        </div>
        
      </div>
        


        <div className="bottom">
          <h4>{prop.pay}</h4>
          <button>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Card
