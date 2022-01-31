import HomeImage from '../../assets/images/HomeImage.jpg';
export default function Hero() {
    return (
        <div>
            {/* Hero Image with hover effect */}
            <div className="heroContainer">
                <img className="heroImage"
                    src={HomeImage}
                    alt="Welcome" />
                <div className="heroEffect">
                    <p className="heroText">
                        Bienvenido a BirdyView
                    </p>
                </div>
            </div>
        </div>
    )
}
