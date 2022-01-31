import { blogentries } from '../data/blogdata';
import { Link } from 'react-router-dom';

export default function Articles() {
    return (
        <>
            <h1 className="container titleStyle"> Últimos artículos </h1>
            <main className="container mainBlogStyle">

                {
                    <div>
                        <ul className="list-group">
                            {blogentries.map((entry, i) => {
                                return (
                                    <li className="articleEntryStyle"
                                        key={i}>

                                        <h3 className="articleTitleStyle">{entry.articletitle}</h3>

                                        <p>

                                            {entry.extract}

                                        </p>

                                        <Link
                                            to={`/articulos/${entry.id}`}>
                                            <span className="clickBlogText">
                                                Sigue leyendo
                                            </span>
                                        </Link>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </main>
        </>
    )
}
