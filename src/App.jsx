import { useState } from 'react'
import HomeNav from './components/HomeNav/HomeNav'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import experiences from './assets/experiences.js'


function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project experiences={experiences} />}  />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
