
import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'

function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
    
      
    </>
  )
}

export default App
