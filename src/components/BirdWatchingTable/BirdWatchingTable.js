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

    // Petition to read birds (GET)
    useEffect(() => {
        const fetchBirds = async () => {
            const res = await axios.get("http://localhost:5000/api/birdwatching/");
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
                    </tr>
                </thead>

                <tbody>

                    {birdInfo?.map((bird) =>
                        <tr>
                            <td className="birdtd usernameTd" key={bird._id}>
                                {bird.username}
                            </td>

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