import { PlusIcon, TrashIcon } from '@heroicons/react/outline'
import React from 'react'
import TaskItem from '../TaskItem'

function Task() {

  return (
    <>
      <main className='bg-white dark:bg-purple-dark rounded-t-xl min-h-[575px] px-7 pt-7 pb-28'>
        <div className='h-full'>
          <div>
            <ul className='flex flex-col gap-4'>
              <TaskItem/>
            </ul>
          </div>
          <div className='flex items-center justify-between fixed bottom-0 left-0 w-full p-7'>
            <div className='bg-purple-main rounded-full text-white w-[60px] h-[60px] flex items-center justify-center cursor-pointer'>
              <TrashIcon className='w-7'/>
            </div>
            <div className='bg-purple-main rounded-full text-white w-[60px] h-[60px] flex items-center justify-center cursor-pointer'>
              <PlusIcon className='w-7'/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Task