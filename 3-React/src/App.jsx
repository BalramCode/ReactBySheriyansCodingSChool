import { useState, useEffect } from "react"
import React from 'react'
import axios from "axios"
import Card from "./components/Card";

const App = () => {
  const [UserData, setUserData] = useState([]);
  const [index, setIndex] = useState(0);
  const getData = async () => {
    let data = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(data.data)
  }
  let printUserData = <h1>No User</h1>
  if (UserData.length > 0) {
    printUserData = UserData.map((elm, inx) => {
      return (
        <div key={index}>
          <Card elm={elm} />
        </div>
      )
    })
  }
  useEffect(() => {
    getData();
  }, [index])

  return (
    <div className=' bg-white h-full text-2xl'>
      <button
        onClick={getData}
        className='px-5 py-5 m-5 rounded-2xl bg-green-300 active:scale-90 hover:bg-red-800'>Get Data
      </button>
      <div className="flex flex-wrap ">
        {printUserData}
      </div>
      <div className="flex gap-10 justify-center items-center">
        <button
        style={{opacity:(index==1)?0.5:1}}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([]);
            }
          }}
          className="m-2 p-3 text-yellow-600 rounded-2xl active:scale-90 hover:bg-amber-950 bg-black">Prev</button>
          <button>Page-{index}</button>
        <button
          onClick={() => {
            setIndex(index + 1)
            setUserData([]);

          }}
          className="m-2 p-3 text-yellow-600 rounded-2xl active:scale-90 hover:bg-amber-950 bg-black">Next</button>
      </div>
    </div >

  )
}

export default App
