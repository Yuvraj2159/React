
import { useState } from 'react'
import './App.css'



function App() {
  
  const [value,setValue]=useState(0); //value , setSate=>function
  const [data,setData]=useState(0); //value , setSate=>function

  return ( 
    <>
    
    <div className='bg-orange-500 m-auto' >
      This is state value: <span>{value}</span>
      <button className='bg-orange-500 px-10' onClick={()=>setValue((value)=>value+1)}>Increment:{value}</button>
      <button className='bg-orange-500 px-10' onClick={()=>setValue((value)=>value-1)}>Decrement:{value}</button>
      
    </div>
    <div className='bg-gray-500 m-auto'>
      This is state data: <span> {data}</span>
    <button className='bg-gray-500 px-10' onClick={()=>setData((Data)=>Data+1)}>Increment Data:{data}</button>
    <button className='bg-gray-500 px-10' onClick={()=>setData((Data)=>Data-1)}>Decrement Data:{data}</button>
    <button className='bg-gray-500 px-10' onClick={()=>setData((Data)=> Data*Data)}>Multiply Data: {data}</button>
    </div>
    </>
  )
}

export default App
