import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'

function TaskItem() {
  return (
    <>
        <li className='flex items-center gap-4 text-black dark:text-white'>
            <div className='flex cursor-pointer'>
                <span className='w-[22.4px] h-[22.4px] rounded-full border border-purple-main' />
                <CheckCircleIcon className='w-7 text-purple-main cursor-pointer hidden'/>
            </div>
            <p className='font-light'>Start new project</p>
        </li>
    </>
  )
}

export default TaskItem