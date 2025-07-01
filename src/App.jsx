
import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import Contact from './Contact'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />


    </>
  )
}

export default App
