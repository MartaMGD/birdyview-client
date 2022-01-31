import BirdCard from '../BirdCard/BirdCard';
import { birds } from '../../data/hardcodeddata';
import { useState } from 'react';

export default function SearchInterface() {

    const [filterBird, setFilterBird] = useState('')

    return (
        <main>
            <div >
                <form className="searchFormWrapper">
                    <span className="filterSpan">Introduce un ave</span>
                    <input
                        type="text"
                        placeholder="Introduce tu búsqueda"
                        className="searchInterfaceInput"
                        name="searchText"
                        autoComplete="off"
                        onChange={event => { setFilterBird(event.target.value) }} />
                    {/* 
                    <button className="searchButton"
                        type="submit">
                        Buscar
                    </button> */}

                    <span className="filterSpan">Filtra por orden o provincia</span>
                    <div className="filterBoxesContainer">
                        <select className="selectStyle">
                            <option> Ascendente </option>
                            <option> Descendente </option>
                        </select>

                        <select className="selectStyle">
                            <option> Huelva </option>
                            <option> Sevilla </option>
                            <option> Cádiz </option>
                            <option> Málaga </option>
                            <option> Córdoba </option>
                            <option> Jaén </option>
                            <option> Granada </option>
                            <option> Almería </option>
                        </select>
                    </div>
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
