import { Link } from 'react-router-dom';
import '../../css/BirdCard.css';

export default function BirdCard(props) {
    console.log(props.id);
    return (
        <div className="birdCard">
            <img className="birdPhotoCard"
                src={`/birdimages/${props.id}.jpg`}
                alt="Imagen pájaro" />
            <div className="birdCardcontainer">
                <h4><b>{props.birdname}</b></h4>
                <p>{props.scientificname}</p>
                <h5 className="toPageStyle">
                    <Link
                        to="/birdpage">
                        Saber más
                    </Link>
                </h5>
            </div>
        </div>
    )
}
