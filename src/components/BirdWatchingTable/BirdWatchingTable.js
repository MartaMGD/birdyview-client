import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../../config/config';
import { useEffect } from 'react';
import { birds } from '../../data/hardcodeddata';

export default function BirdwatchingTable() {

    const [birdInfo, setBirdInfo] = useState([]);

    const [birdname, setBirdname] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');

    // Handle to submit bird 
    const handleSubmit = (e) => {
        e.preventDefault();

        const newBird = {
            birdname: birdname,
            location: location,
            date: date,
            hour: hour
        }

        axios.post("http://localhost:5000/birdwatching", newBird)
            .then(response => console.log(response.data));

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

                            <td className="watcheddaytd" key={bird.date}>
                                {bird.date}
                            </td>

                            <td className="watchedtd" key={bird.hour}>
                                {bird.hour}
                            </td>

                            <td className="optionButtons" key={bird.hour}>
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

                    <select onChange={(e) => setBirdname(e.target.value)}
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
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <input type="date"
                        placeholder="Día"
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <input type="time"
                        placeholder="Hora del avistamiento"
                        onChange={(e) => setHour(e.target.value)}
                    />

                    <button type="submit">Añadir</button>
                </div>
            </form>

        </>


    );
}