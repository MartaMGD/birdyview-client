import '../css/globalstyle.css';
import { useParams } from 'react-router';
import { getBirdById } from '../selectors/getBirdById';

export default function Birdpage(props) {
    const { birdId } = useParams();

    const bird = getBirdById(birdId);

    return (
        <div className="container birdPageWrapper">
            <img className="infoBirdPhoto"
                src={`/birdimages/${bird.id}.jpg`}
                alt="Pájaro info" />
            <h2> Nombre común: {bird.birdname}</h2>
            <h3> Nombre científico: {bird.scientificname}</h3>
            <span><b>Habitat:</b> {bird.habitat}</span>
            <span><b>Altura:</b> {bird.height}</span>
            <span><b>Envergadura:</b> {bird.wingspan}</span>
            <p className="birdParagStyle"><b>Descripción:</b> {bird.description} </p>
        </div>
    )
}
