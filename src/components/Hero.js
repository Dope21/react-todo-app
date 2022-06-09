import { MenuIcon } from '@heroicons/react/outline'
import React from 'react'

function Hero(props) {

  const handleMenu = () => {
    props.menuClick("true")
  }

  return (
    <>
      <div className='text-white px-7 sm:px-0 py-8 grid max-w-xl mx-auto'>
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