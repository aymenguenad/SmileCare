import DoctorCard from "../components/MeetTheDoctors.jsx/DoctorCard"

import doctorJones from '../assets/doctorJones.jpg'
import doctorMeyers from '../assets/DoctorMeyers.png'
import doctorLebel from '../assets/ai-generated-9019518_1280.png'

export default function MeetTheDoctors () {

    const doctorsInfo = [
    {
        name: 'Dr. James Thompson',
        bio: 'Dr. Thompson earned his Doctor of Dental Surgery degree from Boston University in 2005. With nearly two decades of experience, he specializes in preventive and cosmetic dentistry, ensuring every patient leaves with a confident smile. Raised in Portland, he values community care and often volunteers at local dental health outreach programs.',
        img: doctorJones
    },
    {
        name: 'Dr. Jonathan Meyers',
        bio: 'A graduate of the University of Michigan School of Dentistry, Dr. Meyers has been practicing comprehensive family dentistry since 2010. His expertise ranges from restorative treatments to pediatric care, with a particular passion for educating young patients about lifelong oral health. Outside the office, he enjoys hiking with his family and coaching youth soccer.',
        img: doctorMeyers
    },
    {
        name: 'Dr. Mark Lebel',
        bio: 'Dr. Lebel graduated from Tufts University School of Dental Medicine in 1997, where he served as senior class president. Practicing at 1330 Dental Associates ever since, he specializes in general family dentistry, including restorative and esthetic treatments, implant restorations, and pediatric care. Deeply rooted in the Falmouth community, he continues the legacy of his family’s dental tradition.',
        img: doctorLebel
    }
    ]

    return (
        <div className="doctorsPage">
            <p style={{color: '#4DA6FF'}}>Meet The Doctors </p>
            <div className="cardsDisplay">
                {doctorsInfo.map((e, i)=>{
                    return(
                    <div key={i}>
                        <DoctorCard  img={e.img} name={e.name} biography={e.bio}  />
                        <hr />
                    </div>
                    )
                })}
            </div>
        </div>
    )
}