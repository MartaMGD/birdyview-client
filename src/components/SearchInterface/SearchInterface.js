import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from "../../config/config.js";
import BirdCard from '../BirdCard/BirdCard';

export default function SearchInterface() {

    const provinces = [
        { slug: 'Todas' },
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
    const [provinceSelected, setProvinceSelected] = useState(provinces[0].slug);

    useEffect(() => {
        const fetchBirdInfo = async () => {
            const res = await axios.get(API_URL)
            setBirds(res.data.birds);
        }
        fetchBirdInfo();
    }, []);

    console.log(birds);
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

            <div className="showBirds">
                {birds.filter((bird) => {
                    if (filterBird === "") {
                        return bird
                    } else if (bird.name.toLowerCase().includes(filterBird.toLowerCase().trim())) {
                        return bird
                    }
                }).filter((bird) => {
                    if (provinceSelected === "Todas") {
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
