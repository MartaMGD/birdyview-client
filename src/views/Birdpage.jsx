import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { API_URL } from '../config/config';

export default function Birdpage(props) {
    const { birdId } = useParams();
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setBirds(data.birds));
    }, [])

    const getBirdById = (_id = '') => {

        return birds.find(bird => bird._id === _id);
    }
    
    const bird = getBirdById(birdId);

    return (
        <div className="container birdPageWrapper">
            <img className="infoBirdPhoto"
                src={`/birdimages/${bird._id}.jpg`}
                alt="Pájaro info" />
            <h2>{bird.name}</h2>
            <h3> Nombre científico: {bird.scientificname}</h3>
            <span><b>Altura:</b> {bird.height}</span>
            <span><b>Envergadura:</b> {bird.wingspan}</span>
            <p className="birdParagStyle"><b>Descripción:</b> {bird.description} </p>
        </div>
    )

}
