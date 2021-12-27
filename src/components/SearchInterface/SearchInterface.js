import '../../css/SearchInterface.css';
import BirdCard from '../BirdCard/BirdCard';
import { birds } from '../../data/hardcodeddata';

export default function SearchInterface() {
    return (
        <main>
            <div className="searchFormWrapper">
                <form>
                    <input
                        type="text"
                        placeholder="Introduce tu búsqueda"
                        className="searchInterfaceInput"
                        name="searchText"
                        autoComplete="off" />

                    <button className="searchButton"
                        type="submit">
                        Buscar
                    </button>
                </form>
            </div>

            <div className="showBirds">
                {
                    birds.map((bird, i) => {
                        return (
                            <BirdCard
                                key={i}
                                id={bird.id}
                                birdname={bird.birdname}
                                description={bird.description} />
                        )
                    })
                }
            </div>
        </main>
    )
}
