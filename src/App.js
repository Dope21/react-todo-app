import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Task from './components/pages/Task';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {

  return (
    <>
    <Router>
        <div className="relative w-full h-screen bg-purple-main">
          <div className={"absolute inset-0 bg-white dark:bg-black opacity-40 invisible"} />
          <Sidebar />
          <Hero/>
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
