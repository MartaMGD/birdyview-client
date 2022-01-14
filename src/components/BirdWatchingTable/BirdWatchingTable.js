import { useState } from 'react';
import '../../css/BirdWatchingTable.css';
import { birds } from '../../data/hardcodeddata';

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
    const [watchedday, setWatchedday] = useState("");
    const [watchedtime, setWatchedtime] = useState("");

    // HANDLES
    const handleBirdNameChange = (e) => {
        setBirdname(e.target.value);
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleWatchedDayChange = (e) => {
        setWatchedday(e.target.value);
    }

    const handleTimeChange = (e) => {
        setWatchedtime(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBird = {
            birdname: birdname,
            location: location,
            watchedday: watchedday,
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
                        <th>Día</th>
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

                            <td className="watcheddaytd" key={bird.watchedday}>
                                {bird.watchedday}
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

                    <select onChange={handleBirdNameChange}
                    value={birdname}>
                        {
                            birds.map((bird, i) => {
                                return (
                                    <option key={i}>
                                        {bird.birdname}
                                    </option>
                                )
                            })
                        }
                    </select>

                    <input type="text"
                        placeholder="Localización"
                        onChange={handleLocationChange}
                    />

                    <input type="date"
                        placeholder="Día"
                        onChange={handleWatchedDayChange}
                    />

                    <input type="time"
                        placeholder="Hora del avistamiento"
                        onChange={handleTimeChange}
                    />

                    <button type="submit">Añadir</button>
                </div>
            </form>

        </>


    );
}