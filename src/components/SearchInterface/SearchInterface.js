import '../../css/SearchInterface.css';

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
                <span>Resultados</span>
            </div>
        </main>
    )
}
