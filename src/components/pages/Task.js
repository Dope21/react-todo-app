import React, { useState, useEffect } from 'react'
import TaskForm from '../TaskForm'
import TaskItem from '../TaskItem'
import TrashButton from '../TrashButton'

function Task() {
  const [delState, setDelState] = useState(false)
  const [tasks, setTasks] = useState(() => {
    const saveTasks = localStorage.getItem('tasks')
    if (saveTasks) {
      return JSON.parse(saveTasks)
    } else {
      return []
    }
  })

  const addNewTask = newTask => {
    const task = {
      id: Math.floor(Math.random() * 10000),
      state: false,
      text: newTask,
    }
    const allTasks = [...tasks]
    allTasks.unshift(task)
    setTasks(tasks => (tasks = allTasks))
  }

  const updateTask = id => {
    let updateTask = tasks.map(task => {
      if (task.id === id) {
        task.state = !task.state
      }
      return task
    })
    setTasks(tasks => (tasks = updateTask.sort((a, b) => a.state - b.state)))
  }

  const deleteTask = id => {
    let updateTask = tasks.filter(task => task.id !== id)
    setTasks(tasks => (tasks = updateTask))
  }

  const delToggle = () => {
    setDelState(!delState)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
      <div className="flex flex-col overflow-hidden min-h-screen ">
        <TaskForm newTask={addNewTask} />
        <ul className="flex flex-col gap-4">
          {tasks.length !== 0 &&
            tasks.map(task => {
              return (
                <TaskItem
                  task={task}
                  taskState={updateTask}
                  delButton={delState}
                  delTask={deleteTask}
                  key={task.id}
                />
              )
            })}
        </ul>
      </div>
      <TrashButton onClick={delToggle} />
    </>
  )
}

export default Task
