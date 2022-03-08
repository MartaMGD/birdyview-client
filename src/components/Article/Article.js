import React from 'react'
import { Link } from 'react-router-dom';

export default function Article({ post }) {

    return (
        <div>
            <li className="articleEntryStyle">
                <Link
                    to={`/articulos/${post._id}`}>
                    <span className="clickBlogText">
                        <h1 className="articleTitleStyle">{post.title}</h1>
                    </span>
                </Link>
                <div className="authorTag">
                    <h5 className="authorName">Por: {post.username}</h5>
                </div>

                <p>

                    {post.extract}

                </p>
            </li>
        </div>
    );
}

