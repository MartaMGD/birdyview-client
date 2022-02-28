import { Link } from 'react-router-dom';
import HomeInfoBoxImage from '../../assets/images/HomeInfoBoxImage.png';

export default function HomeInfoBox() {
    return (
        <div className="infoBoxStyle">
            <img className="infoBoxImage"
                src={HomeInfoBoxImage}
                alt="Birdwatching news" />
            <div className="infoBoxEffect">
                <span className="infoBoxText">
                    Registra tus últimos avistamientos
                    <button className="knowMoreButton">
                        <Link
                            to="/avistamientos">
                            Saber más
                        </Link>
                    </button>
                </span>
            </div>
        </div>
    )
}
