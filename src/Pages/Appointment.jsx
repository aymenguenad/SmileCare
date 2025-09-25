import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Appointement () {
    const [isAClient, setClient]= useState(true)
    const [popUp, setPopUp]= useState(false)
    const refYes = useRef()
    const refNo = useRef()

    useEffect(()=>{
        if (!refYes.current) return;
        if (!refNo.current) return;

        const yesAnswer = refYes.current;
        const noAnswer = refNo.current;

        const handleYesAnswer = () => {
            setClient(true);
        };


        const handleNoAnswer = () => {
            setClient(false);
        };

        yesAnswer.addEventListener('click', handleYesAnswer)
        noAnswer.addEventListener('click', handleNoAnswer)

        return ()=>{
            yesAnswer.removeEventListener('click', handleYesAnswer)
            noAnswer.removeEventListener('click', handleNoAnswer)
        } 

        
    },[])

    useEffect(()=>{
        if(popUp){
        setTimeout(()=>{
            setPopUp(false)
        },5000)
        }

    },[popUp])

    const handlePopUp = () => {
        setPopUp(true)
    }


    return (
        <div className="appointmentPage">
            <h4>Request An Appointment</h4>
            <p>The journey to a healthy, radiant smile begins with your first appointment. You can reach our office directly by phone or simply complete the appointment request form below. Once submitted, our scheduling coordinator will be in touch to confirm your visit.</p>
            <h4>Our Schedule: </h4>
            <div className="workingHours">
                <p>Mon: 8:00 am – 5:00 pm</p>
                <p>Tue: 8:00 am – 5:00 pm</p>
                <p>Wed: 7:00 am – 5:00 pm</p>
                <p>Thu: 7:00 am – 5:00 pm</p>
                <p>Fri: 7:00 am – 12:00 pm</p>
            </div>
            <hr />
            <form className="appointmentForm" action="">
                <h4>Personal Information: </h4>
                <div className="personalInfo">
                    <label > Name: </label>
                    <input type="text" placeholder="Steve Doe"/>
                </div>
                <div className="personalInfo">
                    <label > Email: </label>
                    <input type="email" placeholder="steveDoe@example.com"/>
                </div>
                <div className="personalInfo">
                    <label > Phone Number: </label>
                    <input type="phone" required placeholder="(888)-888-888"/>
                </div>
                <fieldset className="isAPatient">
                    <legend>Are You A Patient?</legend>
                    <div>
                        <input ref={refYes} type="radio" id="isAPatient" name="patient" value='isAPatient' defaultChecked />
                        <label htmlFor="isAPatient">Yes</label>
                    </div>
                    <div>
                        <input ref={refNo} type="radio" id="isntAPatient" name="patient" value='isntAPatient' />
                        <label htmlFor="isntAPatient">No</label>
                    </div>
                </fieldset>
                <AnimatePresence mode="smooth">
                    {!isAClient && 
                    <motion.div 
                    initial={{opacity: 0, y: "-5%"}} animate={{opacity: 1, y: "0%"}} transition={{duration: 0.5}} exit={{opacity: 0, y: "-5%"}}
                    className="howDidYouKnowAboutUs">
                        <label htmlFor="">How Did You Know About Us ?</label>
                        <textarea name="" id=""></textarea>
                    </motion.div>}
                </AnimatePresence>
            <hr />
            <h4>When Are You Available ?</h4>
                <fieldset className="patientDayAvailability">
                    <legend> Prefered days </legend>
                    <div>
                        <input type="checkbox" id="monday" name="monday" value='monday' />
                        <label htmlFor="monday">Monday</label>
                    </div>
                    <div>
                        <input type="checkbox" id="tuesday" name="tuesday" value='tuesday' />
                        <label htmlFor="tuesday">Tuesday</label>
                    </div>
                    <div>
                        <input type="checkbox" id="wednesday" name="wednesday" value='wednesday' />
                        <label htmlFor="wednesday">Wednesday</label>
                    </div>
                    <div>
                        <input type="checkbox" id="thursday" name="thursday" value='thursday' />
                        <label htmlFor="thursday">Thursday</label>
                    </div>
                    <div>
                        <input type="checkbox" id="friday" name="friday" value='friday' />
                        <label htmlFor="friday">Friday</label>
                    </div>
                    <div>
                        <input type="checkbox" id="anyDay" name="anyDay" value='anyDay' />
                        <label htmlFor="anyDay">Any Day</label>
                    </div>
                </fieldset>
                <fieldset className="patientTimeAvailability">
                    <legend>Prefered Time</legend>
                    <div>
                        <input type="checkbox" id="morning" name="morning" value='morning' />
                        <label htmlFor="morning">Morning</label>
                    </div>
                    <div>
                        <input type="checkbox" id="afternoon" name="afternoon" value='afternoon' />
                        <label htmlFor="afternoon">Afternoon</label>
                    </div>
                    <div>
                        <input type="checkbox" id="anyTime" name="anyTime" value='anyTime' />
                        <label htmlFor="anyTime">Any Time</label>
                    </div>
                </fieldset>
            <hr />
            <h4>Reasons For Visit </h4>
            <p className="pToEdit"> Please describe the nature of your appointment?</p>
            <textarea name="appointmentDescription" className="appointmentDescription"></textarea>
            <p >Note: Messages sent using this form are not considered private. Please contact our office by telephone if sending highly confidential or private information.</p>
            <button onClick={handlePopUp} type="button" className="formSubmit">Submit Request</button>
            </form>
            <AnimatePresence mode="wait">
                {popUp && 
                    <motion.div 
                    initial={{opacity: 0, y: '-10%'}} animate={{opacity: 1, y: '0%'}} transition={{duration: 0.5}} exit={{opacity: 0, y: '-10%'}}
                    className="popUp">
                        An email will be sent to you soon with further details
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}