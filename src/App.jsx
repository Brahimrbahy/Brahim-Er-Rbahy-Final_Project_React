
import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './Nav'
import Home from './Home'

function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    
      
    </>
  )
}

export default App
