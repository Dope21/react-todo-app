import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Task from './components/pages/Task';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { useState } from 'react';

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

  return (
    <>
    <Router>
        <div className="relative w-full h-screen bg-purple-main">
          <div className={"absolute inset-0 bg-black opacity-40 z-10 " + (navShow ? "visible" : "invisible")} onClick={navHide} />
          <Sidebar navShow={navShow ? "" : "translate-x-[-100%]"} navItemClick={getNavClick} />
          <Hero menuClick={getMenuClick} />
            <Routes>
              <Route path='/' exact element={<Task />}/>
              <Route path='/about' exact element={<About />}/>
              <Route path='/login' exact element={<Login />}/>
              <Route path='/register' exact element={<Register/>}/>
            </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
