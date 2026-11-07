import React from 'react'
import Card from './Card'

const Main = () => {
  return (
    <div className='main'>
      <div className="parent">
        <Card user="Ali Khan" />
        <Card user="Usman Khan" />
        <Card user="Naveed Khan" />
        <Card user="Zain Khan"/>
      </div>
    </div>
  )
}

export default Main