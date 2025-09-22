import ssbackground from '../../assets/ssbackground.png'
import manSmiling from '../../assets/dentist-doing-check-up-patient.jpg'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


export default function ServicesSection (){
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

    }, [window.innerHeight])

    
    const handleScroll = ()=>{
            console.log(window.scrollY)
            if(window.scrollY > 275){
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

            if(window.scrollY > 445){
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

    useEffect(()=>{
        if (screenWidth.initial < 600 || screenWidth.change){
            setShow({
                section: true,
                elements: true
            })
        } else {
            window.addEventListener('scroll', handleScroll)
        }
        return ()=>{window.removeEventListener('scroll', ()=>{console.log(window.scrollY)})}
    },[window.scrollY, screenWidth])


    return (
        <motion.div initial={{opacity: 0}} animate={{ opacity: show.section ? 1 : 0}} transition={{duration: screenWidth.initial < 600 ? 1 : 0.5 , ease: 'easeInOut'}} style={{backgroundColor: '#1E3A8A'}} className="servicesSection">
            <div className='ssBoxContainer'>
                <motion.div initial={{opacity: 0}} animate={{ opacity: show.elements ? 1 : 0}} transition={{duration: 0.5 , ease: 'easeInOut'}} className='ssTextBox'>
                    <h1>Dentistry Made Simple, Caring, and Affordable </h1>
                    <p>At SmileCare, we believe that dentistry should be simple, 
                        transparent, and stress-free. From children as young as 3 to 
                        seniors, our team welcomes every patient with warmth and 
                        professionalism.</p>
                    
                    <p>✔ Clear & Honest Pricing — no hidden fees, just fair care.</p>
                    <p>✔ Skilled & Caring Dentists — years of expertise with a gentle touch.</p>
                    <p>✔ Exclusive Welcome Offer — enjoy your first consultation free.</p>

                    <h3>Healthy smiles, lifelong trust — that’s the SmileCare promise.</h3>

                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{ opacity: show.elements ? 1 : 0}} transition={{duration: 0.3, delay: 0.3 , ease: 'easeInOut'}} style={{width: '60%'}}>
                    <img id='ssImg' src={manSmiling} alt="img" />
                </motion.div>
            </div>
        </motion.div>
    )
}