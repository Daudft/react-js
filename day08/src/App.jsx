import React, { useState } from 'react'

const App = () => {


  const [Num, setNum] = useState(0)
  const [a, setA] = useState({name:"ali",age:22})
  const [Arr, setArr] = useState([1,2,3,4])


  function Change(){
    const newA = {...a};
    newA.name = "Khan"
    newA.age = 34
    setA(newA)
  }

  function ChangeArr(){
    const newArr = [...Arr];
    newArr.pop();
    newArr.push(22)

    setArr(newArr)
  }

  function increase(){
    setNum(Num + 1);
  }

  function decrease(){
    setNum(Num - 1)
  }

  function jumpby5(){
    setNum(Num + 5)
  }
  function lessby5(){
    setNum(Num - 5)
  }
  return (

    <div>
      <h1 className='bg-red-400 w-fit py-10 px-52 text-9xl m-2'>{Num}</h1>
      <button onClick={increase} className='py-2 px-4 bg-gray-700 text-white mx-2 rounded'>Increase</button>
      <button onClick={decrease} className='py-2 px-4 bg-gray-700 text-white mx-2 rounded'>Decrease</button>
      <button onClick={jumpby5} className='py-2 px-4 bg-gray-700 text-white mx-2 rounded'>Increase by 5</button>
      <button onClick={lessby5} className='py-2 px-4 bg-gray-700 text-white mx-2 rounded'>Decrease by 5</button>
      

      <h2>{a.name},{a.age}</h2>
      <button onClick={Change} className='p-3 bg-blue-500 rounded'>Change</button>

      <h2>{Arr}</h2>
      <button onClick={ChangeArr} className='p-3 bg-blue-500 rounded'>Change</button>
    </div>



  )




}

export default App
