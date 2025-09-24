import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import Navbar from "./components/NavBar"
import HomePage from "./Pages/HomePage"
import MyMenu from "./components/homepage/Menu"
import NotFound from "./Pages/404"

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
      {screenWidth.initial > 600 || screenWidth.change > 600  ? '' : <MyMenu />}
      <main>
        <Routes>
          <Route path="/smilecare/" element={<HomePage />}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </BrowserRouter>
    </>
  )
}

export default App
