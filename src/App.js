import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Task from './components/pages/Task'
import About from './components/pages/About'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import { useEffect, useState } from 'react'
import { authenUser } from './utils/ManageUser'
import Content from './components/Content'

function App() {
  const [navShow, setNavShow] = useState(false)

  const getMenuClick = click => {
    click ? setNavShow(true) : setNavShow(false)
  }

  const getNavClick = click => {
    click ? setNavShow(false) : setNavShow(true)
  }

  const navHide = () => {
    setNavShow(false)
  }

  useEffect(
    () => async () => {
      const token = localStorage.getItem('token')
      const res = await authenUser(token)

      if (res.status !== 'ok') {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
      }
    },
    []
  )

  return (
    <>
      <Router>
        <div className="relative w-full h-screen bg-purple-main">
          <div
            className={
              'absolute inset-0 bg-black opacity-40 z-10 ' +
              (navShow ? 'visible' : 'invisible')
            }
            onClick={navHide}
          />
          <Sidebar
            navShow={navShow ? '' : 'translate-x-[-100%]'}
            navItemClick={getNavClick}
          />
          <Hero menuClick={getMenuClick} />
          <Content>
            <Routes>
              <Route path="/" exact element={<Task />} />
              <Route path="/task" exact element={<Task />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
            </Routes>
          </Content>
        </div>
      </Router>
    </>
  )
}

export default App
