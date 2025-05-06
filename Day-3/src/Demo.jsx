
import { useState } from 'react'
import './App.css'


function FavouriteColor() {
  
  const [color,setColor]=useState("red"); //value , setSate=>function
  return (
    <>
    <div className='w-full min-h-[100vh] ' style={{ backgroundColor: color }}>
    
    <div className='text-white'>My favorite color is {color}! </div>
    <div>
      <button className='text-white bg-blue-500' type="button" onClick={() => setColor("blue")}>Blue</button> <br/>
      <button className='text-white bg-red-500' type="button" onClick={() => setColor("red")}>Red</button> <br/>
      <button className='text-white bg-pink-500' type="button" onClick={() => setColor("pink")}>Pink</button> <br/>
      <button className='text-white bg-green-500' type="button"onClick={() => setColor("green")}>Green</button> <br/>
      </div>
      </div>
    </>
  );
}

export default FavouriteColor
