import BirdwatchingTable from "../components/BirdWatchingTable/BirdWatchingTable";

export default function Birdwatching() {
    return (
        <main className="container birdwatchingPage">
            <h3>Hola, ¿Algún avistamiento hoy?</h3>
            <BirdwatchingTable/>
        </main>
    );
}