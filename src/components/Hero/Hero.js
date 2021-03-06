import HomeImage from '../../assets/images/HomeImage.jpg';

export default function Hero() {
    return (
        <div>
            <div className="heroContainer">
                <img className="heroImage"
                    src={HomeImage}
                    alt="Welcome" />
                <div className="heroEffect">
                    <p className="heroText">
                        ¡Bienvenido a BirdyView!
                        Crea tu cuenta para leer artículos exclusivos.
                    </p>
                </div>
            </div>
        </div>
    )
}
