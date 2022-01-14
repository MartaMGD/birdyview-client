import '../../css/SearchInterface.css';
import BirdCard from '../BirdCard/BirdCard';
import { birds } from '../../data/hardcodeddata';
import { useState } from 'react';

export default function SearchInterface() {

    const [filterBird, setFilterBird] = useState('')

    return (
        <main>
            <div >
                <form className="searchFormWrapper">
                    <input
                        type="text"
                        placeholder="Introduce tu búsqueda"
                        className="searchInterfaceInput"
                        name="searchText"
                        autoComplete="off"
                        onChange={event => { setFilterBird(event.target.value) }} />

                    <button className="searchButton"
                        type="submit">
                        Buscar
                    </button>
                </form>
            </div>

            <div className="showBirds">
                {birds.filter((bird) => {
                    if (filterBird == "") {
                        return bird
                    } else if (bird.birdname.toLowerCase().includes(filterBird.toLowerCase())) {
                        return bird
                    }
                }
                ).map((bird, i) => {
                    return (
                        <BirdCard
                            key={i}
                            id={bird.id}
                            birdname={bird.birdname}
                            scientificname={bird.scientificname} />
                    );
                })}
            </div>
        </main>
    )
}
