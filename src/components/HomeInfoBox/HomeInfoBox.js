import '../../css/HomeInfoBox.css';
import HomeInfoBoxImage from '../../assets/images/HomeInfoBoxImage.png';

export default function HomeInfoBox() {
    return (
        <div className="infoBoxStyle">
        <img className="infoBoxImage"
            src={HomeInfoBoxImage}
            alt="Birdwatching news" />
        <div className="infoBoxEffect">
            <span className="infoBoxText">
                Descubre los últimos avistamientos 
            </span>
        </div>
    </div>
    )
}
