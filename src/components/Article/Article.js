import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Article({ post }) {
    const { user } = useContext(Context);

    return (
        <div>
            <li className="articleEntryStyle">
                <Link
                    to={`/articulos/${post._id}`}>
                    <span className="clickBlogText">
                        <h3 className="articleTitleStyle">{post.title}</h3>
                    </span>
                </Link>
                <span>Autor: {post.username}</span>

                <p>

                    {post.extract}

                </p>

                {user &&
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
                }
            </li>
        </div>
    );
}

