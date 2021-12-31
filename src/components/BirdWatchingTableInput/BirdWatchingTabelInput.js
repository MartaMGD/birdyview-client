import { useState } from 'react';
import '../../css/BirdWatchingTable.css';

export default function BirdWatchingTabelInput() {

    const [newBird, setNewBird] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        setNewBird("");
    }

    return (
        <>
        < div className="addBirdFormStyle" >
            <span className="birdwatchingSpanStyle">Añade un nuevo avistamiento</span>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="watchedbird"
                    required="required"
                    placeholder="Ave"
                    onChange={event => setNewBird(event.target.value)}
                    value={newBird}
                />

                {/* <input
        type="text"
        name="location"
        required="required"
        placeholder="Localización"
    />

    <input
        type="text"
        name="localhour"
        required="required"
        placeholder="Hora"
    /> */}
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
        </div >
        </>
    )
}
