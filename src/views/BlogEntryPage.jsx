import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BlogEntryPage({ posts }) {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path);
            setPost(res.data)
        };
        getPost();
    })
    return (
        <>
            <div className="container mainEntryStyle">
                <Link
                    to={`/articulos/${post._id}`}>
                    <button className="returnButton"> Volver </button>
                </Link>
                <h1 className="entryTitle">{post.title}</h1>
                <span>Fecha: {new Date(post.createdAt).toDateString()}</span>
                <span>Autor: {post.username} </span>
                {post.photo &&
                    <img className="articlePhoto"
                        src={post.photo}
                        alt="Foto artículo" />
                }
                <img className="photoSeparator" src="/photoseparator.png" alt="Separator" />
                <p>{post.body}</p>
            </div>
        </>
    )

}
