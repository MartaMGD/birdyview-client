import { Link } from 'react-router-dom';
import Article from '../components/Article/Article';

export default function Articles({ posts }) {

    return (
        <>
            <h1 className="container titleStyle"> Últimos artículos </h1>
            <main className="container mainBlogStyle">
                <Link
                    to={`/articulos/nuevoarticulo`}>
                    <button className="newPost">
                        Nueva publicación
                    </button>
                </Link>
                {posts.map((p) => (
                    <Article post={p} />
                ))}
            </main>
        </>
    )
}
