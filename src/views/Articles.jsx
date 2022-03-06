import { Link } from 'react-router-dom';

export default function Articles({posts}) {

    return (
        <>
            <h1 className="container titleStyle"> Últimos artículos </h1>
            <main className="container mainBlogStyle">

                {
                    <div>
                        <Link
                            to={`/articulos/nuevoarticulo`}>
                            <button className="newPost">
                                Nueva publicación
                            </button>
                        </Link>
                        <ul className="list-group">
                            {posts.map((post, i) => {
                                return (
                                    <li className="articleEntryStyle"
                                        key={i}>

                                        <Link
                                            to={`/articulos/${post._id}`}>
                                            <span className="clickBlogText">
                                                <h3 className="articleTitleStyle">{post.title}</h3>
                                            </span>
                                        </Link>

                                        <p>

                                            {post.extract}

                                        </p>

                                        <div className="articleButtons">

                                            <Link
                                                to={`/articulos/editararticulo/`}>
                                                <button className="editButton">
                                                    Editar
                                                </button>
                                            </Link>

                                            <Link
                                                to={`/articulos/`}>
                                                <button className="deleteButton">
                                                    Eliminar
                                                </button>
                                            </Link>
                                        </div>
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
