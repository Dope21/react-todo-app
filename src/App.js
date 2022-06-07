import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from "./components/Content";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Task from './components/pages/Task';
import { useState } from 'react';

function App() {

  const [navShow, setNavShow] = useState(true)
  const handleNavShow = () => {
    setNavShow(false)
  }

  return (
    <>
    <Router>
        <div className="relative w-full h-screen">
          <div className={"absolute inset-0 bg-black opacity-40 " + (navShow ? "visible" : "invisible")} onClick={handleNavShow}></div>
          <Sidebar visibility={navShow ? "" : "translate-x-[-100%]"}/>
          <Hero/>
          <Content>
            <Routes>
              <Route path='/' exact element={<Task />}/>
            </Routes>
          </Content>
        </div>
    </Router>
    </>
  );
}

export default App;
