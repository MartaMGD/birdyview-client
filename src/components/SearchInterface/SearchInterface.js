import BirdCard from '../BirdCard/BirdCard';
import { useState, useEffect } from 'react';
import { API_URL } from "../../config/config.js"

export default function SearchInterface() {

    const provinces = [
        { slug: 'All' },
        { slug: 'Jaén' },
        { slug: 'Córdoba' },
        { slug: 'Sevilla' },
        { slug: 'Huelva' },
        { slug: 'Cádiz' },
        { slug: 'Málaga' },
        { slug: 'Granada' },
        { slug: 'Almería' },
    ]

    const [filterBird, setFilterBird] = useState('');
    const [birds, setBirds] = useState([]);
    const [copyBirds, setCopyBirds] = useState([]);
    const [provinceSeleted, setProvinceSelected] = useState(provinces[0].value);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setBirds(data.birds)
                setCopyBirds(data.birds)
            });
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

                    <span className="filterSpan">Filtra por provincia</span>
                    <select className="selectStyle"
                    value={provinceSeleted}
                    onChange={e => setProvinceSelected(e.target.value)}>
                    
                    {provinces.map((province, index) => {
                        return (
                            <option key={index} value={province.slug}>{province.slug}</option>
                        )
                    })}
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
