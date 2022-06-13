import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Task from './components/pages/Task';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { useEffect, useState } from 'react';
import { removeUser } from './utils/Authen';

function App() {

  const [navShow, setNavShow] = useState(false)

  const getMenuClick = (click) => {
    click ? setNavShow(true) : setNavShow(false) 
  }

  const getNavClick = (click) => {
    click ? setNavShow(false) : setNavShow(true)
  }

  const navHide = () => {
    setNavShow(false)
  }

  useEffect( () => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3333/authen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token 
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.status !== 'ok') {
        removeUser()
      }
    })
  },[])

  return (
    <>
    <Router>
        <div className="relative w-full h-screen bg-purple-main">
          <div className={"absolute inset-0 bg-black opacity-40 z-10 " + (navShow ? "visible" : "invisible")} onClick={navHide} />
          <Sidebar 
            navShow={navShow ? "" : "translate-x-[-100%]"} 
            navItemClick={getNavClick} 
          />
          <Hero menuClick={getMenuClick} />
          <main className='bg-white dark:bg-purple-dark rounded-t-xl min-h-[575px] px-7 pt-7 pb-28'>
            <div className='h-full max-w-xl mx-auto'>
              <Routes>
                <Route path='/' exact element={<Task />}/>
                <Route path='/task' exact element={<Task />}/>
                <Route path='/about' exact element={<About />}/>
                <Route path='/login' exact element={<Login />}/>
                <Route path='/register' exact element={<Register/>}/>
              </Routes>
            </div>
          </main>
        </div>
    </Router>
    </>
  );
}

export default App;
