import BirdCard from '../BirdCard/BirdCard';
// import { birds } from '../../data/hardcodeddata';
import { useState, useEffect } from 'react';
import {API_URL} from "../../config/config.js"

export default function SearchInterface() {

    const [filterBird, setFilterBird] = useState('');
    const [selectLocation, setSelectLocation] = useState('');
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        fetch(API_URL)
          .then(response => response.json())
          .then(data => setBirds(data.birds));
      }, [])
      
    // For the filter by location select
    const birdsCopy = [...birds];

    const handleSelectChange = (event) => {
        setSelectLocation(event.target.value);
    }

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

                    <span className="filterSpan">Filtra por provincia</span>
                        <select 
                        className="selectStyle"
                        value={selectLocation}
                        onChange={handleSelectChange}>
                            <option value="Huelva"> Huelva </option>
                            <option value="Sevilla"> Sevilla </option>
                            <option value="Cádiz"> Cádiz </option>
                            <option value="Málaga"> Málaga </option>
                            <option value="Córdoba"> Córdoba </option>
                            <option value="Jaén"> Jaén </option>
                            <option value="Granada"> Granada </option>
                            <option value="Almería"> Almería </option>
                        </select>
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
