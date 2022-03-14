import Article from '../components/Article/Article';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/Context';

export default function Articles({ posts }) {
    const { user } = useContext(Context);
    return (
        <>
            <h1 className="container titleStyle"> Últimos artículos </h1>
            <main className="container mainBlogStyle">
                {user &&
                    <Link
                        to={`/articulos/nuevoarticulo`}>
                        <button className="newPost">
                            Nueva publicación
                        </button>
                    </Link>
                }
                {posts.map((p) => (
                    <Article post={p} />
                ))}
            </main>
        </>
    )
}
