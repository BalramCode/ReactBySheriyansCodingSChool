import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigat=useNavigate();
    function HandleClick(){
        navigat("/about")
    }
  return (
    <>
    <div>Home</div>
    <button onClick={HandleClick}>Go To About</button>
    </>
  )
}

export default Home