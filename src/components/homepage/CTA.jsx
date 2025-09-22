import { motion } from "framer-motion"

export default function CTA () {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 0.3}} className="cta">
            <div>
                <h2>Smile with Confidence</h2>
                <h1>Advanced care with a gentle touch.</h1>
            </div>
            <div style={{gap: '20px'}}>
                <button>Free Consultation !</button>
                <h2>CALL 234 234 234</h2>
            </div>
        </motion.div>
    )
}