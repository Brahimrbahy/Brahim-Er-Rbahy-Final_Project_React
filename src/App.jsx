
import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import Contact from './Contact'
import Login from './Login'
import Shop from './Shop'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />

      </Routes>
      <Footer />


    </>
  )
}

export default App
