import { Link } from 'react-router-dom';

export default function BirdCard(props) {
    return (
        <div className="birdCard">
            <img className="birdPhotoCard"
                src={`/birdimages/${props._id}.jpg`}
                alt="Imagen pájaro" />
            <div className="birdCardcontainer">
                <h4><b>{props.name}</b></h4>
                <p>{props.scientificname}</p>
                <h5 className="toPageStyle">

                    <Link
                        to={`/birdpage/${props._id}`}>
                        Saber más
                    </Link>
                </h5>
            </div>
        </div>
    )
}
