export default function DoctorCard (props) {
    return (
        <div className="docCard">
            <img id="docPicture" src={props.img} alt="doctorImg" />
            <div className="docInfo">
                <h1>{props.name}</h1>
                <p>{props.biography}</p>
            </div>
        </div>
    )
}