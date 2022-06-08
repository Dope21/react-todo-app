import { MenuIcon } from '@heroicons/react/outline'
import React from 'react'

function Hero() {

  const handleMenu = () => {
    
  }

  return (
    <>
      <div className='text-white px-7 py-8'>
        <div className='w-full'>
          <MenuIcon className='w-6 ml-auto cursor-pointer' onClick={handleMenu}/>
        </div>
        <div className='flex flex-col items-center justify-center py-8'>
          <h1 className='font-bold text-6xl'>TODO APP</h1>
          <p className='font-light'>Create your task for free!</p>
        </div>
      </div>
    </>
  )
}

export default Hero