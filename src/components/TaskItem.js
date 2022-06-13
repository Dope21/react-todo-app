import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { TrashIcon } from '@heroicons/react/outline'

function TaskItem({
  completeTask,
  deleteTask,
  deleteShow,
  id,
  state,
  text
}) {
  
  const checkBox = <CheckCircleIcon className='w-7 text-purple-main cursor-pointer text-center'/> 
  const unCheckBox = <div className='w-7 h-7 flex items-center justify-center'>
                      <span className='rounded-full border border-purple-main w-[22.4px] h-[22.4px]' />
                     </div>

  return  (
    <>
      <li className='relative flex items-center justify-start gap-4 text-black dark:text-white'>
        <div className='flex cursor-pointer select-none' onClick={()=> { completeTask(id) }}>
            { state ? checkBox :  unCheckBox }
        </div>
        <div>
          <p className={'font-light bg-transparent border-0 outline-none transition-all max-w-xl break-before-auto '+(state ? 'text-slate-400 line-through' : '') }>
            {text}
          </p>
        </div>
        <div 
          className={'bg-red-600 absolute px-5 py-2 cursor-pointer transition-all text-white '+ (deleteShow ? 'visible right-0' : 'invisible right-[-100%]')}
          onClick={() => deleteTask(id)}
        >
          <TrashIcon className='w-5'/>
        </div>
      </li>      
    </>
  )
}

export default TaskItem
