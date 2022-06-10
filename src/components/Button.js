import React from 'react'

function Button({
    text,
    type
}) {
  return (
    <>
        <button 
            type={type}
            className='text-white bg-purple-main rounded-md py-2 px-7 font-bold'
        >
            {text}
        </button>
    </>
  )
}

export default Button