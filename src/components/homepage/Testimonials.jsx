import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Testimonials () {
    const [show, setShow]= useState({
        testimonialSection: false, 
        testimonialCards: false
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


    const testimonial = [
        {
            client: 'Sarah M.',
            testimonial: 'Best dental experience I’ve ever had! The team at SmileCare is so kind and professional. They explained everything clearly and made me feel completely at ease. I actually look forward to my next appointment!'
        
        },
        {
            client: 'James L',
            testimonial: 'Finally, a dentist I can trust. Pricing was transparent, and there were no hidden fees. The staff truly care about their patients, and my kids loved their visit too. Highly recommend SmileCare for the whole family.'
        },
        {
            client: 'Emily R.',
            testimonial: 'Exceptional service and amazing results. I had my first consultation for free, and the follow-up care has been outstanding. My smile has never looked better, and I feel more confident than ever.'
        }
    ]

    const handlingScroll = () => {

        if(screenWidth.change < 600 || screenWidth.initial < 600){
            if(window.scrollY > 740) {
                setShow(prev =>({
                    ...prev, 
                    testimonialSection: true
                }))
            } else {
                setShow(prev =>({
                    ...prev, 
                    testimonialSection: false
                }))
            }

            if (window.scrollY > 800) {
                setShow(prev => ({
                    ...prev, 
                    testimonialCards: true
                }))
            } else {
                setShow(prev => ({
                    ...prev, 
                    testimonialCards: false
                }))
            }
        } else {
            if(window.scrollY > 1050) {
                setShow(prev =>({
                    ...prev, 
                    testimonialSection: true
                }))
            } else {
                setShow(prev =>({
                    ...prev, 
                    testimonialSection: false
                }))
            }
            
            if(window.scrollY > 1280) {
                setShow(prev => ({
                    ...prev, 
                    testimonialCards: true
                }))
            } else {
                setShow(prev => ({
                    ...prev, 
                    testimonialCards: false
                }))
            }
        }
    }

    useEffect(()=>{

            window.addEventListener('scroll', handlingScroll)
            return ()=>{ window.removeEventListener('scroll', handlingScroll) }

    },[screenWidth])

    return (
        <motion.div initial={{opacity: 0, y: '5%'}} animate={{ opacity: show.testimonialSection ? 1 : 0, y: show.testimonialSection ? "0%" : "5%" }} transition={{duration: 0.3 , ease: 'easeInOut'}}  className="testimonials">
            <div className="testimonialText">
                <h1 style={{color: '#1E3A8A'}}>Kind words from our patients</h1>
            </div>
            <div className='testimonialsBox'>
                {testimonial.map((e, i)=>{
                    return  <motion.div initial={{opacity: 0}} animate={{opacity: show.testimonialCards ? 1 : 0}} transition={{duration: 0.3, delay: `0.${5 + i + i}`}}
                    key={i} className="card">
                                <p>{e.testimonial}</p>
                                <h1>—  {e.client}</h1>
                            </motion.div>
                })}
            </div>
        </motion.div>
    )
}