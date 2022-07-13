import Button from './Button'
import React, { useState } from 'react'

function TaskForm(props) {
  const [inputTask, setInputTask] = useState('')

  const handleInputChange = e => {
    setInputTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputTask !== '') {
      props.newTask(inputTask)
      setInputTask('')
    } else return
  }

  return (
    <>
      <div className="mb-4">
        <form
          className="relative flex items-center gap-4 transition-all"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="font-light bg-black bg-opacity-10 w-full p-2 rounded-md border-0 outline-none text-black dark:text-white"
            placeholder="What do you want to do?"
            value={inputTask}
            onChange={handleInputChange}
          />
          <Button text="Enter" type="submit" />
        </form>
      </div>
    </>
  )
}

export default TaskForm
