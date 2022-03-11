import axios from 'axios';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Context } from '../../context/Context';

export default function BirdwatchingTable() {

    // States to register new bird in birdwatching table/agenda
    const pathlocation = useLocation();
    const path = pathlocation.pathname.split("/")[2];

    const [birdInfo, setBirdInfo] = useState([]);
    const [birdname, setBirdname] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');

    const { user } = useContext(Context);

    const [updateMode, setUpdateMode] = useState(false);

    // Petition to read birds (GET)
    useEffect(() => {
        const fetchBirds = async () => {
            const res = await axios.get("http://localhost:5000/api/birdwatching/")
            setBirdInfo(res.data);
            setBirdname(res.data.birdname)
            setLocation(res.data.location)
            setDate(res.data.date)
            setHour(res.data.hour)
        }
        fetchBirds();
    }, [path]);

    // Handle to submit bird (POST)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBird = {
            birdname: birdname,
            location: location,
            date: date,
            hour: hour,
            username: user.username
        }

        await axios.post("http://localhost:5000/api/birdwatching/", newBird)
            .then(() => {
                setBirdInfo([...birdInfo, newBird]);
            });

    }

    // Handle to update bird (PUT)
    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/birdwatching/${birdInfo._id}`, {

                username: user.username,
                birdname,
                location,
                date,
                hour
            });
            window.location.reload();
        } catch (err) {
            alert("Ha ocurrido un error al actualizar. Inténtalo de nuevo.")
        }
    }

    // Handle to remove birds
    const removeBirds = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/birdwatching/${birdInfo._id}`, {
                data: { username: user.username },
            });
            setBirdInfo();
        } catch (err) {
            alert("Ha ocurrido un error. Inténtalo de nuevo")
        }
    };

    console.log(birdInfo._id);
    return (
        <>

            <table id="tableStyle">
                <thead>
                    <tr>
                        <th>Usuario</th>
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
                                {bird.username}
                            </td>

                            {updateMode ? <input
                                type="text"
                                value={birdname}
                                placeholder="Nombre del pájaro"
                                className="inputEditMode"
                                onChange={(e) => setBirdname(e.target.value)} /> : (
                                <td className="birdtd" key={bird._id}>
                                    {bird.birdname}
                                </td>
                            )}


                            {updateMode ? <input
                                type="text"
                                value={location}
                                placeholder="Localización"
                                className="inputEditMode"
                                onChange={(e) => setLocation(e.target.value)} /> : (
                                <td className="locationtd" key={bird._id}>
                                    {bird.location}
                                </td>
                            )}


                            {updateMode ? <input
                                type="text"
                                value={date}
                                placeholder="Fecha"
                                className="inputEditMode"
                                onChange={(e) => setDate(e.target.value)} /> : (
                                <td className="watcheddaytd" key={bird._id}>
                                    {bird.date}
                                </td>
                            )}


                            {updateMode ? <input
                                type="text"
                                value={hour}
                                placeholder="Hora"
                                className="inputEditMode"
                                onChange={(e) => setHour(e.target.value)} /> : (
                                <td className="watchedtd" key={bird._id}>
                                    {bird.hour}
                                </td>
                            )}

                            {!updateMode &&
                                <td className="optionButtons" key={bird._id}>
                                    <button className="editButton"
                                        onClick={() => setUpdateMode(true)}>Editar</button>
                                    <button className="deleteButton"
                                        onClick={removeBirds}>X</button>
                                </td>
                            }


                            {updateMode &&
                                <button className="updateButton"
                                    onClick={handleUpdate}>
                                    Actualizar
                                </button>
                            }
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