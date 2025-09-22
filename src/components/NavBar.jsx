
import Logo from '../assets/Blue__white_and_green_Medical_care_logo-removebg-preview.png'
import secondLogo from '../assets/hoverLogo.png'
import menu from '../assets/more (1).png'
import { useMenuState } from '../utils/zustands'

import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar () {
    const [hovered, setHoverd]= useState(false)
    const [menuBar, setMenu]= useState(false)
    const { open , toggleMenu } = useMenuState()
    
    const [screenWidth, setScreenWidth] = useState({
        initial: null,
        change: null
    })

    const navigate= useNavigate()
    
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

    const redirection = (page) => {
        navigate(page)
    }

    const handleMenu = () => {
        setMenu(prev => !prev)
    }

    const pagesHandling = (page) => {
        if(location.pathname == page) {
            return {color:' #4DA6FF', transform: screenWidth == 'phoneSize'? 'scale(1.2)' : 'scale(1.5)'}
        }
    }

    return (
        <>  
            <div onClick={()=>{redirection('/SmileCare/')}} className='logoBox'>
                <motion.img initial={{opacity: 0.9}} animate={{scale: hovered ? 1.1 : 1, opacity: 1 }} exit={{opacity: 0.9}}
                transition={{duration: 0.3, ease: "easeInOut"}} className='logo'  src={hovered? secondLogo : Logo} alt="logo" 
                onMouseEnter={()=>{setHoverd(true)}} onMouseLeave={()=>{setHoverd(false)}}
                />
                <h1>SmileCare</h1>
                <span></span>
            </div>
            
            <div className='pages'>
                { screenWidth.initial > 600 || screenWidth.change > 600 ? 
                (
                <>
                <button onClick={()=>{redirection('/SmileCare/')}} style={pagesHandling('/SmileCare/')}>Welcome</button>
                <button onClick={()=>{redirection('/SmileCare/doctors')}} style={pagesHandling('/SmileCare/doctors')}>Meet The Doctors</button>
                <button onClick={()=>{redirection('/SmileCare/aboutus')}} style={pagesHandling('/SmileCare/aboutus')}>About Us</button>
                <button id='nbBook'>Appointment</button>
                </>
                ) : 
                (
                <div className='menuBox'>
                    <img onClick={toggleMenu} style={{transform: open? 'rotate(-90deg)' : ''}} className={`myMenu ${open? 'open' : 'closed'}`} src={menu} alt="menu" />
                </div>
                )

                }
            </div>
            
        </>
    )
}