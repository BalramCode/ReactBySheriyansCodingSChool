import React, { useState } from 'react'
const App = () => {
  const [Num, setNum] = useState([10,34,56])
  return (
    <div>
      <p className='h-20 p-10 m-10 bg-amber-300'>Value : {Num}</p>
      <button onClick={()=>{
        const newNum=[...Num];
        newNum.push(20);
        setNum(newNum)
      }}>Change</button>
    </div>
  )
}

export default App
