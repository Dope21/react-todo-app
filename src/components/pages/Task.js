import { TrashIcon } from '@heroicons/react/outline'
import React, { useState, useEffect } from 'react'
import TaskForm from '../TaskForm'
import TaskList from '../TaskList'

function Task() {

  const [delState, setDelState] = useState(false)
  const [tasks, setTasks] = useState( () => {
      const saveTasks = localStorage.getItem('tasks') 
      if (saveTasks) {
        return JSON.parse(saveTasks)
      } else {
        return []
      }
    }
  )

  const addNewTask = (newTask) => {
    const task = {
      id: Math.floor(Math.random() * 10000),
      state: false,
      text: newTask
    }
    const allTasks = [task, ...tasks]
    setTasks( tasks => tasks = allTasks)
  }

  const updateTask = (id) => {
    let updateTask = tasks.map(task => {
      if (task.id === id) {
        task.state = !task.state
      }
      return task
    })
    setTasks(tasks => tasks = updateTask.sort((a, b) => a.state - b.state))
  }

  const deleteTask = (id) => {
    let updateTask = tasks.filter(task => task.id !== id )
    setTasks(tasks => tasks = updateTask)
  }

  const delToggle = () => {
    setDelState( delState => delState = !delState )
  }

  useEffect( () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  return (
    <>
      <div className='flex flex-col overflow-hidden min-h-screen '>
        <TaskForm newTask={addNewTask}/>
        <TaskList 
          allTasks={tasks}
          taskState={updateTask}
          delState={delState}
          delTask={deleteTask}
        />
      </div>
      <div className='flex justify-center fixed bottom-0 left-0 w-full p-7'>
        <div className='max-w-xl flex justify-end w-full'>
          <div 
            className='bg-purple-main rounded-full text-white w-[60px] h-[60px] flex items-center justify-center cursor-pointer'
            onClick={delToggle}
          >
            <TrashIcon className='w-7'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Task