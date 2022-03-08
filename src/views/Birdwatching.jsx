import BirdwatchingTable from "../components/BirdWatchingTable/BirdWatchingTable";
import { useContext } from 'react';
import { Context } from '../context/Context';

export default function Birdwatching() {
    const { user } = useContext(Context);
    return (
        <main className="container birdwatchingPage">
            <h3>Hola, {user.username} ¿Algún avistamiento hoy?</h3>
            <BirdwatchingTable />
        </main>
    );
}