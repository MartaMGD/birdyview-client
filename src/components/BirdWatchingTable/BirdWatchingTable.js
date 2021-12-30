import { useState } from 'react';
import '../../css/BirdWatchingTable.css';
import {birdviews} from '../../data/birdwatchingdata';

export default function BirdwatchingTable() {

    const [birds, setBirds] = useState(birdviews);
    const [addFormData, setAddFormData] = useState({
        watchedbird: "",
        location: "",
        timewatched: "",
        photographed: ""
    });

    const handleAddFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('watchedbird');
        const fieldValue = e.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newBird = 
        {   id: birdviews.id,
            watchedbird: addFormData.watchedbird,
            location: addFormData.location,
            timewatched: addFormData.timewatched,
            // photographed: addFormData.photographed,
        };

        const newBirds = [...birds, newBird];
        setBirds(newBirds);
    };

    return (
        <>
            <table id="tableStyle">
                <thead>
                    <tr>
                        <th>Ave</th>
                        <th>Localización</th>
                        <th>Hora</th>
                        {/* <th>¿Fotografiado?</th> */}
                    </tr>
                </thead>
                <tbody>
                    {birdviews.map((view) => (
                        <tr>
                            <td>{view.watchedbird}</td>
                            <td>{view.location}</td>
                            <td>{view.timewatched}</td>
                            {/* <td>{view.photographed}</td> */}
                        </tr>
                    ))}

                </tbody>
            </table>

            {/* INPUTS TO ADD BIRDS */}
            <div className="addBirdFormStyle">
                <span className="birdwatchingSpanStyle">Añade un nuevo avistamiento</span>
                <form onSubmit={handleAddFormSubmit}>
                    <input
                        type="text"
                        name="watchedbird"
                        required="required"
                        placeholder="Ave"
                        onChange={handleAddFormChange}
                    />

                    <input
                        type="text"
                        name="location"
                        required="required"
                        placeholder="Localización"
                        onChange={handleAddFormChange}
                    />

                    <input
                        type="text"
                        name="localhour"
                        required="required"
                        placeholder="Hora"
                        onChange={handleAddFormChange}
                    />
{/* 
                    <span className="birdwatchingSpanStyle">¿Fotografiado?</span>
                    <select name="transporte"
                    onChange={handleAddFormChange}>
                        <option>Sí</option>
                        <option>No</option>
                    </select> */}

                    <button type="submit">
                        Añadir
                    </button>
                </form>
            </div>
        </>
    )
}