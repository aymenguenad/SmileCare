import { motion } from "framer-motion"
import heroSectionImg from '../../assets/heroSectionImg.jpg'

export default function HeroSection () {
    return (
        <motion.div className="heroSection" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} >
            <img id="hsImg" src={heroSectionImg} alt="dentist" />
        </motion.div>
    )
}