import { useState } from 'react'
import './App.css'
import goodtimes1 from "./films/good times/goodtimestill1.png"
import NavBar from './navbar'
import Home from "./pages/MainHome"
import Projects from "./pages/Projects"
import Movies from './pages/Movies'
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
      <div id = "div">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </div>
    </HashRouter>


    </>
  )
}

export default App; 