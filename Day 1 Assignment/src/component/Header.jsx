import React from 'react'

function Header() {
  return (
    <>
    <div className='w-full h-[80px] bg-blue-400 flex justify-between'>
        <div className='min-h-full bg-green-300 w-[600px] flex justify-evenly items-center'>
        <a href="#" className='text-white text-xl'>Home</a>
            <a href="#" className='text-white text-xl'>About</a>
            <a href="#" className='text-white text-xl'>Contact</a>
            <a href="#" className='text-white text-xl'>Help</a>
        </div>
        <div className=' w-[200px] bg-orange-500 flex justify-around items-center'>
            <a href="*">Login</a>
            <a href="#">Register</a>
        </div>
    </div>
    

    </>
  ) 
}

export default Header