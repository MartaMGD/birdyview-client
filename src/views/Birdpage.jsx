import '../css/globalstyle.css';
import { birds } from '../data/hardcodeddata';
import BirdFullInfoCard from '../components/BirdFullInfoCard/BirdFullInfoCard';

export default function Birdpage() {
    return (
        <main className="birdPageWrapper">
            {
                birds.map((bird, i) => {
                    return (
                        <BirdFullInfoCard
                            key={i}
                            id={bird.id}
                            birdname={bird.birdname}
                            scientificname={bird.scientificname}
                            habitat={bird.habitat}
                            height={bird.height}
                            wingspan={bird.wingspan}
                            description={bird.description} />
                    )
                })
            }
        </main>
    )
}
