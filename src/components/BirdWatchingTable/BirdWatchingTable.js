import { useState } from 'react';
import '../../css/BirdWatchingTable.css';

export default function TablaPajaros() {

    // Estado general
    const [birdInfo, setBirdInfo] = useState([]);

    // const [newBird, setNewBird] = useState({
    //     birdname: "",
    //     location: "",
    //     watchedtime: ""
    // });

    const [birdname, setBirdname] = useState("");
    const [location, setLocation] = useState("");
    const [watchedtime, setWatchedtime] = useState("");

    // HANDLES
    const handleBirdNameChange = (e) => {
        setBirdname(e.target.value);
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleTimeChange = (e) => {
        setWatchedtime(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBird = {
            birdname: birdname,
            location: location,
            watchedtime: watchedtime
        }

        setBirdInfo((previousBirds) => [...previousBirds, newBird]);
    }



    return (
        <>

            <table id="tableStyle">
                <thead>
                    <tr>
                        <th>Ave</th>
                        <th>Localización</th>
                        <th>Hora</th>
                    </tr>
                </thead>

                <tbody>

                    {birdInfo?.map((bird) =>
                        <tr>
                            <td className="birdtd" key={bird.birdname}>
                                {bird.birdname}
                            </td>

                            <td className="locationtd" key={bird.location}>
                                {bird.location}
                            </td>

                            <td className="watchedtd" key={bird.watchedtime}>
                                {bird.watchedtime}
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>

            <form onSubmit={handleSubmit}>
                <div className="addBirdFormStyle">
                    <span className="birdwatchingSpanStyle">Añade un nuevo avistamiento</span>
                    <input type="text"
                        placeholder="Nombre del ave"
                        onChange={handleBirdNameChange}
                         />

                    <input type="text"
                        placeholder="Localización"
                        onChange={handleLocationChange}
                         />

                    <input type="text"
                        placeholder="Hora del avistamiento"
                        onChange={handleTimeChange}
                         />

                    <button type="submit">Añadir</button>
                </div>
            </form>

        </>


    );
}