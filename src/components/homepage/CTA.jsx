import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function CTA () {

    const navigate= useNavigate()
    const redirection = (page) => {
        navigate(page)
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 0.3}} className="cta">
            <div>
                <p className="ctaP">Smile with Confidence</p>
                <h1 className="ctaH1">Advanced care with a gentle touch.</h1>
            </div>
            <div style={{gap: '20px'}}>
                <button onClick={()=>{redirection('/smilecare/appointment')}} style={{fontSize: '1.5rem'}}>Free Consultation !</button>
                <h2>CALL 234 234 234</h2>
            </div>
        </motion.div>
    )
}