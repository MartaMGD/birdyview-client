import { Link } from 'react-router-dom';

export default function BirdCard(props) {
    return (
        <div className="birdCard">
            <img className="birdPhotoCard"
                src={`/birdimages/${props._id}.jpg`}
                alt="Imagen pájaro" />
            <div className="birdCardcontainer">
                <div className="birdDataContainer">
                    <h3 className="birdNameCard"><b>{props.name}</b></h3>
                    <p className="scientificNameCard">{props.scientificname}</p>
                    <button className="toPageStyle">
                        <Link
                            to={`/birdpage/${props._id}`}>
                            Saber más
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
