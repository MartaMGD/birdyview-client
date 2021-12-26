import SearchInterface from '../components/SearchInterface/SearchInterface';
import '../css/globalstyle.css';


export default function HomeSearch() {
    return (
        <main className="container">
            <h2 className="searchPageImage">
                Buscador
            </h2>
            <SearchInterface/>
        </main>
    )


}
