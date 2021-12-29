import { blogentries } from '../data/blogdata';
import '../css/globalstyle.css';

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
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </main>
    )
}
