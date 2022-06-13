import React from 'react'

function Input({
    name,
    type,
    holder,
    label
}) {
  return (
    <>
        <div className='flex flex-col gap-2 dark:text-white text-black mb-5'>
            <label htmlFor={name} className='font-bold'>{label}</label>
            <input 
                type={type} 
                id={name} 
                name={name}
                placeholder={holder}
                className='bg-black bg-opacity-10 py-3 px-4 rounded-md outline-none'
                required
            />
        </div>
    </>
  )
}

export default Input