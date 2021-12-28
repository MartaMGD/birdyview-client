import '../../css/BirdFullInfoCard.css';

export default function BirdFullInfoCard(props) {
    return (
        <main className="birdPageWrapper">
            <div className="birdInfoStyle">
                <img className="birdPhotoInfo"
                    src={`/birdimages/${props.id}.jpg`}
                    alt="Imagen pájaro" />
                <div className="birdCardcontainer">
                    <h3>Nombre común: {props.birdname}</h3>
                    <h4>Nombre científico: {props.scientificname}</h4>
                    <h4>Habitat: {props.habitat}</h4>
                    <h4>Altura: {props.height}</h4>
                    <h4>Envergadura: {props.wingspan}</h4>
                    <p>Descripción: {props.description}</p>
                </div>
            </div>
        </main>
    )
}

