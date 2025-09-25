import { motion, AnimatePresence } from "framer-motion"
import { usePopUpState } from "../utils/zustands"

export default function PopUp (props){
    return (
        <AnimatePresence mode="wait">
            <motion.div 
            initial={{opacity: 0, y: '-10%'}} animate={{opacity: 1, y: '0%'}} transition={{duration: 0.5}} exit={{opacity: 0, y: '-10%'}}
            className="popUp">
                {props.text}
            </motion.div>
        </AnimatePresence>
    )
}