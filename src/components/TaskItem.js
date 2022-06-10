import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { TrashIcon } from '@heroicons/react/outline'

function TaskItem({
  completeTask,
  deleteTask,
  addTasks,
  deleteShow
}) {
  const checkBox = <CheckCircleIcon className='w-7 text-purple-main cursor-pointer text-center'/> 
  const unCheckBox = <div className='w-7 h-7 flex items-center justify-center'>
                      <span className='rounded-full border border-purple-main w-[22.4px] h-[22.4px]' />
                     </div>

  return addTasks.map ((task, index) => (
    <>
      <li 
        className='relative flex items-center justify-start gap-4 text-black dark:text-white' 
        key={index}
      >
        <div 
          className='flex cursor-pointer select-none' 
          onClick={()=> { completeTask(task.id) }}>
            { task.state ? checkBox :  unCheckBox }
        </div>
        <div>
          <p
            className={'font-light bg-transparent border-0 outline-none transition-all max-w-xl break-before-auto '+(task.state ? 'text-slate-400 line-through' : '') } 
            key={task.id} 
          >
            {task.text}
          </p>
          <div className='h-[1px] bg-slate-400 absolute'></div>
        </div>
        <div 
          className={'bg-red-600 absolute px-5 py-2 cursor-pointer transition-all '+ (deleteShow ? 'visible right-0' : 'invisible right-[-100%]')}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon className='w-5'/>
        </div>
      </li>      
    </>
  ))
}

export default TaskItem