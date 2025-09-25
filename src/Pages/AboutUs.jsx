import { motion } from "framer-motion"

export default function AboutUs () {
    return (
        <motion.div 
        initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}
        className="aboutUs">
            <h2>About us</h2>
            <p>At SmileCare, our mission is to combine modern innovation with compassionate care to create smiles that are as healthy as they are beautiful. We are dedicated to providing personalized dental services that prioritize comfort, precision, and long-lasting results.</p>
            
            <div>
                <h4>Commitment to Excellence</h4>
                <p>We hold ourselves to the highest standards of clinical excellence. From comprehensive treatment planning to restorative and cosmetic dentistry, our team ensures that every patient receives care tailored to their individual needs. In urgent cases, we do everything possible to provide prompt and effective treatment.</p>
            </div>
            <div>
                <h4>Education & Prevention</h4>
                <p>We believe that prevention is the foundation of lifelong oral health. That’s why we focus on regular checkups, thorough examinations, oral cancer screenings, and digital imaging when needed. Beyond treating problems, we emphasize patient education, helping you understand how daily habits like brushing, flossing, and nutrition impact your overall dental health.</p>
            </div>
            <div>
                <h4>Safety First</h4>
                <p>Your safety is our top priority. We strictly adhere to sterilization and cross-contamination protocols recommended by leading organizations, including the American Dental Association (ADA), OSHA, and the CDC. Our goal is to provide care in a clean, safe, and trusted environment.</p>
            </div>
            <div>
                <h4>Expertise & Innovation</h4>
                <p>Our team consists of highly skilled professionals who are passionate about ongoing education. By attending advanced training, conferences, and hands-on workshops, we stay up to date with the latest technologies and techniques. This commitment allows us to deliver cutting-edge solutions with a personal touch.</p>
            </div>
            <div>
                <h4>A Patient-Centered Experience</h4>
                <p>We know that visiting the dentist can sometimes cause anxiety. That’s why we strive to create a welcoming atmosphere where every patient feels at ease. Building trust and treating each person with respect is the foundation of our practice. Our friendly staff works to ensure your visits are comfortable, stress-free, and even enjoyable.</p>
                <p>We’re honored to be a part of your journey toward better oral health — and we look forward to giving you many more reasons to smile.</p>
            </div>
        </motion.div>  
    )
}