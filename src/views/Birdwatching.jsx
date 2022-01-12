import BirdwatchingTable from "../components/BirdWatchingTable/BirdWatchingTable";

export default function Birdwatching(props) {

    return (
        <main className="container birdwatchingPage">
            <h3>Hola {props.userSession.name}, ¿Algún avistamiento hoy?</h3>
            <BirdwatchingTable/>
        </main>
    );
}