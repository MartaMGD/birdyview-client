import { useState } from 'react';

export default function BirdwatchingTable() {
    const [birds, setBirds] = useState([])
    const [bird, setBird] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        const newBird = {
            id: "",
            text: bird,
            completed: false
        }

        setBirds([...birds].concat(newBird))
        setBird("")
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>

                    <input type="text"
                        placeholder="Nombre del ave"
                        onChange={(e) => setBird(e.target.value)}
                        value={bird} />

                    <button type="submit">Añadir</button>
                    {birds.map((bird) => <li key={bird.id}>
                        {bird.text}
                    </li>)}

                    <input type="text"
                        placeholder="Nombre del ave"
                        onChange={(e) => setBird(e.target.value)}
                        value={bird} />

                    <button type="submit">Añadir</button>
                    {birds.map((bird) => <li key={bird.id}>
                        {bird.text}
                    </li>)}
                </form>
            </div>

        </>


    );
}