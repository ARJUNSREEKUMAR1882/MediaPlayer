import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Watch from './pages/Watch'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/watch' element={<Watch/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
// To indicate base url we use backlash(/)