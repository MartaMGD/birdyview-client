import React from 'react'
import { Link } from 'react-router-dom';

export default function Article({ post }) {

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
            </li>
        </div>
    );
}

