import dentist from '../../assets/pexels-fr3nks-305568.jpg'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Questions () {
    const [show, setShow]= useState({
        section: false, 
        elements: false
    })

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


    const handleScroll = () => {
        if(screenWidth.initial < 600 || screenWidth.change < 600) {
            if(window.scrollY > 2000){
                setShow(prev => ({
                    ...prev, 
                    section: true
                }))
            } else {
                setShow(prev => ({
                    ...prev, 
                    section: false
                }))
            }  
            if (window.scrollY > 2150){
                setShow(prev => ({
                    ...prev, 
                    elements: true
                }))
            } else {
                setShow(prev => ({
                    ...prev, 
                    elements: false
                }))
            }
        } else {
        if(window.scrollY > 1950){
            setShow(prev => ({
                ...prev, 
                section: true
            }))
        } else {
            setShow(prev => ({
                ...prev, 
                section: false
            }))
        }

        if (window.scrollY > 2130) {
            setShow(prev => ({
                ...prev, 
                elements: true
            }))
        } else {
            setShow(prev => ({
                ...prev, 
                elements: false
            }))
        }
    }
    }

    useEffect(()=>{

        window.addEventListener('scroll', handleScroll)
        return ()=>{ window.removeEventListener('scroll', handleScroll)}

    },[screenWidth, window.scrollY])

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: show.section ? 1 : 0}} transition={{duration: 0.3, ease: 'easeInOut'}} className="questionForm">
            <img id="qfImg" src={dentist} alt="dentist" />
            <motion.form initial= {{opacity: 0}} animate={{opacity: show.elements ? 1 : 0}} transition={{duration: 0.3, ease: 'easeInOut', delay: 0.3}} action="">
                <label htmlFor=""> Any Questions? </label>
                <input type="text" placeholder="Full name"/>
                <input type="tel" placeholder="Phone number"/>
                <input type="text" placeholder="Email"/>
                <textarea name="message" id="mesage" placeholder="Message"></textarea>
                <button type='submit'>Submit</button>
            </motion.form>
            <motion.div initial= {{opacity: 0}} animate={{opacity: show.elements ? 1 : 0}} transition={{duration: 0.3, ease: 'easeInOut', delay: 0.6}}>
                <p>Have questions or feedback? We’d love to hear from you. Call our office directly or use the quick contact form below to get in touch.</p>
                <a href="https://www.google.com/maps?q=39.7392,-104.9903" target="_blank" rel="noopener noreferrer"> 1234 Main Street, Denver, CO </a>
                <a href="tel:+1234567890" className="mobile-only">+1 (234) 567-890</a>
                <a href="mailto:contact@smilecare.com">contact@smilecare.com</a>
            </motion.div>
        </motion.div>
    )
}