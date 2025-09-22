import { AnimatePresence } from "framer-motion"
import HeroSection from "../components/homepage/HeroSection"
import CTA from "../components/homepage/CTA"
import ServicesSection from "../components/homepage/ServicesSection"
import Testimonials from "../components/homepage/Testimonials"
import Questions from "../components/homepage/questions"


export default function HomePage () {
    return (
        <AnimatePresence mode="wait">
            <div className="homePage">
                <HeroSection />
                <CTA />
                <ServicesSection />
                <Testimonials />
                <Questions />
            </div>
        </AnimatePresence>
    )
}