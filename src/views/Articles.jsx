import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Articles() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/posts/")
            .then((response) => {
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

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
                                            <button className="editButton">
                                                Editar
                                            </button>

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
