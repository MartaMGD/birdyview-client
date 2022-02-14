import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { API_URL } from '../config/config';

export default function Birdpage() {
    const { birdId } = useParams();
    const [bird, setBird] = useState();

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setBird(getBirdById(data.birds, birdId)));
    }, [])

    // This "selector" finds inside the data and returns the bird with the same id. 
    const getBirdById = (birds, _id) => {
        return birds.find(bird => bird._id === _id);
    }

    if (!bird) {
        return <p>Cargando...</p>
    }

    return (
        <div className="container birdPageWrapper">
            <img className="infoBirdPhoto"
                src={`/birdimages/${bird._id}.jpg`}
                alt="Pájaro info" />
            <img className="infoBirdSeparator" src="/photoseparator.png" alt="Separator" />
            <div className="birdInfo">
                <div className="birdName">
                    <h2>{bird.name}</h2>
                </div>
                <h3> Nombre científico: {bird.scientificname}</h3>
                <span><b>Altura:</b> {bird.height}</span>
                <span><b>Envergadura:</b> {bird.wingspan}</span>
                <span className="birdParagStyle"><b>Descripción:</b> {bird.description} </span>
            </div>
        </div>
    )

}
