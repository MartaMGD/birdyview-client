import { useState } from "react";
import BirdwatchingTable from "../components/BirdWatchingTable/BirdWatchingTable";
import BirdWatchingTabelInput from "../components/BirdWatchingTableInput/BirdWatchingTabelInput";

export default function Birdwatching(props) {

    const [birds, setBirds] = useState([]);

    return (
        <main className="container">
            <h3>Hola {props.userSession.name}, ¿Algún avistamiento hoy?</h3>
            <BirdwatchingTable setBirds={setBirds} />
            <BirdWatchingTabelInput birds={birds} setBirds={setBirds} />
        </main>
    );
}