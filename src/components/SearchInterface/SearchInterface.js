import BirdCard from '../BirdCard/BirdCard';
// import { birds } from '../../data/hardcodeddata';
import { useState, useEffect } from 'react';
import {API_URL} from "../../config/config.js"

export default function SearchInterface() {

    const [filterBird, setFilterBird] = useState('')
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        fetch(API_URL)
          .then(response => response.json())
          .then(data => setBirds(data.birds));
      }, [])

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
                    if (filterBird === "") {
                        return bird
                    } else if (bird.name.toLowerCase().includes(filterBird.toLowerCase())) {
                        return bird
                    }
                })
                .map((bird, _id) => {
                    return (
                        <BirdCard
                            key={bird._id}
                            _id={bird._id}
                            name={bird.name}
                            scientificname={bird.scientificname} />
                    );
                })}
            </div>
        </main>
    )
}
