import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import Navbar from "./components/NavBar"
import HomePage from "./Pages/HomePage"
import MyMenu from "./components/homepage/Menu"
import NotFound from "./Pages/404"
import MeetTheDoctors from "./Pages/MeetTheDoctors"

function App() {
    const [screenWidth, setScreenWidth] = useState({
        initial: null,
        change: null
    })
    useEffect(() => {
        setScreenWidth(prev => ({
            ...prev,
            initial: window.innerWidth
        }))
        
        window.addEventListener('resize', ()=>{
            setScreenWidth(prev => ({
                ...prev, 
                change: window.innerWidth
            }))
        })

        return () => {
            window.removeEventListener('resize', ()=>{
            setScreenWidth(prev => ({
                ...prev, 
                change: window.innerWidth
            }))
        })
        }

    }, [window.innerWidth])

  return (
    <>
    <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
      {screenWidth.initial > 1024 || screenWidth.change > 1024  ? '' : <MyMenu />}
      <main>
        <Routes>
          <Route path="/smilecare/" element={<HomePage />}/>
          <Route path="/smilecare/doctors" element={<MeetTheDoctors />}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </BrowserRouter>
    </>
  )
}

export default App
