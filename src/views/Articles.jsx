import { blogentries } from '../data/blogdata';
import '../css/globalstyle.css';
import { Link } from 'react-router-dom';

export default function Articles() {
    return (
        <main className="container">
            <h2 className="titleStyle"> Últimos artículos </h2>
            {
                <div className="mainBlogStyle">
                    <ul className="list-group">
                        {blogentries.map((entry, i) => {
                            return (
                                <li
                                    key={i}>
                                    <h3 className="articleTitleStyle">{entry.articletitle}</h3>
                                    <p className="articleEntryStyle">{entry.articlecontent}</p>

                                    <Link
                                        to={`/articulos/${entry.id}`}>
                                        Sigue leyendo
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </main>
    )
}
