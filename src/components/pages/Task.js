import { PlusIcon, TrashIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import TaskItem from '../TaskItem'

function Task() {
  const [inputTask, setInputTask] = useState('')
  const [deleteShow, setDelShow] = useState(false)
  const [tasks, setTasks] = useState( () => {
    const saveTasks = localStorage.getItem('tasks')
    if(saveTasks) {
      return JSON.parse(saveTasks);
    } else {
      return [];
    }
  })

  useEffect( ()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  const handleInputChange = (e) => {
    setInputTask(e.target.value)
  }

  const handleDelete = () => {
    setDelShow(!deleteShow)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 10000),
      state: false,
      text: inputTask
    }
    const newTask = [task, ...tasks]
    setTasks(newTask)
    setInputTask('')
  }

  const completeTask = (id) => {
    let updateTask = tasks.map(task => {
      if (task.id === id) {
        task.state = !task.state
      }
      return task
    })
    setTasks(updateTask.sort((a, b) => a.state - b.state))
  }

  const deleteTask = (id) => {
    let updateTask = tasks.filter(task => task.id !== id )
    setTasks(updateTask)
  }

  return (
    <>
      <main className='bg-white dark:bg-purple-dark rounded-t-xl min-h-[575px] px-7 pt-7 pb-28'>
        <div className='h-full max-w-xl mx-auto'>
            <ul className='flex flex-col gap-4 overflow-hidden min-h-screen '>
              <li>
                <form 
                  className='relative flex items-center gap-4 text-black dark:text-white transition-all'
                  onSubmit={handleSubmit}
                >
                  <input 
                    type='text' 
                    className='font-light bg-black bg-opacity-10 w-full p-2 rounded-md border-0 outline-none text-white' 
                    placeholder='What you want to do?' 
                    value={inputTask} 
                    onChange={handleInputChange}
                  />
                  <button type='submit' className='bg-purple-main p-2 cursor-pointer rounded-md text-white'>enter</button>
                </form>
              </li>
              <TaskItem 
                addTasks={tasks} 
                completeTask={completeTask} 
                deleteTask={deleteTask} 
                deleteShow={deleteShow} 
              />
            </ul>
          <div className='flex justify-center fixed bottom-0 left-0 w-full p-7'>
            <div className='max-w-xl flex justify-between w-full'>
              <div 
                className='bg-purple-main rounded-full text-white w-[60px] h-[60px] flex items-center justify-center cursor-pointer'
                onClick={handleDelete}
              >
                <TrashIcon className='w-7'/>
              </div>
              <div 
                className='bg-purple-main rounded-full text-white w-[60px] h-[60px] flex items-center justify-center cursor-pointer'
              >
                <PlusIcon className='w-7'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Task