import { useMenuState } from '../../utils/zustands'
import { useState, useEffect } from 'react'

export default function MyMenu (){
    const { open } = useMenuState()
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
        <div style={{top: open? '18%' : '-20%'}} className='menuSlide'>
            <a href=""> Welcome </a>
            <a href=""> Meet The Doctors </a>
            <a href=""> About us </a>
            <a href=""> Appointement request </a>
        </div>
    )
}