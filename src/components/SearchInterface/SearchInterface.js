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
    const [provinceSelected, setProvinceSelected] = useState(provinces[0].slug);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setBirds(data.birds)
                setCopyBirds(data.birds)

                console.log(birds);
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
                    value={provinceSelected}
                    onChange={e => setProvinceSelected(e.target.value)}>
                    
                    {provinces.map((province, index) => {
                        return (
                            <option key={index} value={province.slug}>{province.slug}</option>
                        )
                    })}
                    </select>
                </form>
            </div>

            {/* REGULAR FILTER */}
            <div className="showBirds">
                {birds.filter((bird) => {
                    if (filterBird === "") {
                        return bird
                    } else if (bird.name.toLowerCase().includes(filterBird.toLowerCase().trim())) {
                        return bird
                    }
                }).filter((bird) => {
                    if (provinceSelected === "All") {
                        return bird
                    } else if (bird.location.includes(provinceSelected)) {
                        return bird
                    }
                })
                    .map((bird, i) => {
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
