import { useState } from 'react';
import '../../css/BirdWatchingTable.css';

export default function BirdwatchingTable() {
    const [birds, setBirds] = useState([])
    const [bird, setBird] = useState("");

    // const [locations, setLocations] = useState([])
    // const [location, setLocation] = useState("");

    // const [watchedBirds, setWatchedBirds] = useState([])
    // const [watchedBird, setWatchedBird] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        const newBird = {
            id: "",
            text: bird
        }

        setBirds([...birds].concat(newBird))
        setBird("")

        // const newLocation = {
        //     id: "",
        //     text: location
        // }

        // setLocations([...locations].concat(newLocation))
        // setLocation("")

        // const newWatchedBird = {
        //     id: "",
        //     text: watchedBird
        // }

        // setWatchedBirds([...watchedBirds].concat(newWatchedBird))
        // setWatchedBird("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>


                <table id="tableStyle">
                    <thead>
                        <tr>
                            <th>Ave, localización y hora</th>
                            {/* <th>Localización</th>
                            <th>Hora</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        <tr >
                            {birds.map((bird) =>
                                <td className="birdtd" key={bird.id}>
                                    {bird.text}
                                </td>
                            )}

                            {/* {locations.map((location) =>
                                <td className="locationtd" key={location.id}>
                                    {location.text}
                                </td>
                            )}

                            {watchedBirds.map((watchedBird) =>
                                <td className= "watchedtd" key={watchedBird.id}>
                                    {watchedBird.text}
                                </td>
                            )} */}
                        </tr>
                    </tbody>
                </table>

                <div className="addBirdFormStyle">
                    <span className="birdwatchingSpanStyle">Añade un nuevo avistamiento</span>
                    <input type="text"
                        placeholder="Nombre del ave"
                        onChange={(e) => setBird(e.target.value)}
                        value={bird} />

                    {/* <input type="text"
                        placeholder="Localización"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location} />

                    <input type="text"
                        placeholder="Hora del avistamiento"
                        onChange={(e) => setWatchedBird(e.target.value)}
                        value={watchedBird} /> */}

                    <button type="submit">Añadir</button>
                </div>
            </form>

        </>


    );
}