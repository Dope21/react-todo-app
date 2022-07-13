import { TrashIcon } from '@heroicons/react/outline'
import { memo } from 'react'
import { Checked, UnChecked } from './CheckBox'

function TaskItem({ task, taskState, delButton, delTask }) {
  const setTaskState = id => {
    taskState(id)
  }

  const deleteTask = id => {
    delTask(id)
  }

  return (
    <li className="relative flex items-center justify-start gap-4 text-black dark:text-white">
      <div
        className="flex cursor-pointer select-none"
        onClick={() => setTaskState(task.id)}
      >
        {task.state ? <Checked /> : <UnChecked />}
      </div>
      <p
        className={`
          font-light 
          bg-transparent 
          border-0 
          outline-none 
          transition-all 
          max-w-xl 
          break-before-auto 
          ${task.state ? 'text-slate-400 line-through' : ''}
        `}
      >
        {task.text}
      </p>
      <div
        className={`
          bg-red-600 
          absolute 
          px-5 py-2 
          cursor-pointer 
          transition-all 
          text-white 
          ${delButton ? 'visible right-0' : 'invisible right-[-100%]'}
        `}
        onClick={() => deleteTask(task.id)}
      >
        <TrashIcon className="w-5" />
      </div>
    </li>
  )
}

export default memo(TaskItem)
