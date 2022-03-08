import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../../config/config';
import { useEffect } from 'react';


export default function BirdwatchingTable() {

    const [birdInfo, setBirdInfo] = useState([]);
    const [birdname, setBirdname] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');

    // Petition to read birds (GET)
    useEffect(() => {
        axios.get("http://localhost:5000/birdwatching/")
            .then((response) => {
                setBirdInfo(response.data)
            })
            .catch(() => {
                console.log('ERR');
            });
    }, []);

    // Handle to submit bird (POST)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBird = {
            birdname: birdname,
            location: location,
            date: date,
            hour: hour
        }

        await axios.post("http://localhost:5000/birdwatching/", newBird)
            .then((response) => {
                setBirdInfo([...birdInfo, newBird]);
            });

        setBirdInfo([...birdInfo, newBird]);
    }

    // Handle to update bird (PUT)
    const updateBird = (id) => {
        const newName = prompt("Introduce un nuevo nombre");
        const newLocation = prompt("Introduce una nueva localización");
        const newDate = prompt("Introduce una nueva fecha");
        const newHour = prompt("Introduce una nueva hora");

        axios.put("http://localhost:5000/birdwatching/", {
            newName: newName,
            newLocation: newLocation,
            newDate: newDate,
            newHour: newHour,
            id: id
        }).then(() => {
            setBirdInfo(birdInfo.map((bird) => {
                return bird._id == id ? {
                    _id: id,
                    birdname: newName,
                    location: newLocation,
                    date: newDate,
                    hour: newHour,
                }
                    : bird
            }))
        })
    };

    // Handle to remove birds
    const removeBirds = (id) => {
        axios.delete(`http://localhost:5000/birdwatching/delete/${id}`).then(() => {
            setBirdInfo(
                birdInfo.filter((bird) => {
                    return bird._id != id;
                })
            )
        });
    };

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
                            <td className="birdtd" key={bird._id}>
                                {bird.birdname}
                            </td>

                            <td className="locationtd" key={bird._id}>
                                {bird.location}
                            </td>

                            <td className="watcheddaytd" key={bird._id}>
                                {bird.date}
                            </td>

                            <td className="watchedtd" key={bird._id}>
                                {bird.hour}
                            </td>

                            <td className="optionButtons" key={bird._id}>
                                <button className="editButton"
                                    onClick={() => updateBird(bird._id)}>Editar</button>
                                <button className="deleteButton"
                                    onClick={() => removeBirds(bird._id)}>X</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>

            <form>
                <div className="addBirdFormStyle">
                    <span className="birdwatchingSpanStyle">Añade un nuevo avistamiento</span>

                    <input type="text"
                        placeholder="Nombre"
                        onChange={(e) => setBirdname(e.target.value)}
                    />

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

                    <button
                    onClick={handleSubmit} 
                    type="submit">Añadir</button>
                </div>
            </form>

        </>


    );
}