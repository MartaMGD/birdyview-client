import { useState } from 'react';
import { API_URL } from '../../config/config';
import { useEffect } from 'react';
import { birds } from '../../data/hardcodeddata';

export default function BirdwatchingTable() {

    const [birdInfo, setBirdInfo] = useState([]);

    const [birdname, setBirdname] = useState("");
    const [location, setLocation] = useState("");
    const [watchedday, setWatchedday] = useState("");
    const [watchedtime, setWatchedtime] = useState("");

    // const handleAddBird = (event) => {
        
    // }
    // useEffect(() => {
    //     fetch(API_URL)
    //         .then(response => response.json())
    //         .then(data => {
    //             setBirdname(data.birds)
    //         });
    // }, [])

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

        if (birdname.length !== 0 & location.length !== 0 & watchedday.length !== 0 & watchedtime !== 0) {
            setBirdInfo((previousBirds) => [...previousBirds, newBird]);
        } else {
            alert("Por favor, rellena todos los campos.")
        }

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
                        <th>Opciones</th>
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

                            <td className="optionButtons" key={bird.watchedtime}>
                                <button className="editButton">Editar</button>
                                <button className="deleteButton">X</button>
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