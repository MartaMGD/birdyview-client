import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CommentBox from '../components/CommentBox/CommentBox';

export default function BlogEntryPage() {
    // State and fetch for ARTICLE INFO
    const { postId } = useParams();
    const [post, setPost] = useState();
    // // States and handles for COMMENTS
    const [commentInfo, setCommentInfo] = useState([]);
    const [newCommentName, setnewCommentName] = useState("");
    const [newCommentBody, setNewCommentBody] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/posts/")
            .then(response => response.json())
            .then(data => setPost(getBirdById(data.posts, postId)));
    }, [])

    // This "selector" finds inside the post and returns the post with the same id. 
    const getBirdById = (posts, _id) => {
        return posts.find(post => post._id === _id);
    }

    if (!post) {
        return <p>Cargando...</p>
    }

    // HANDLES
    const handleName = (e) => {
        setnewCommentName(e.target.value);
    }

    const handleBody = (e) => {
        setNewCommentBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            newCommentName: newCommentName,
            newCommentBody: newCommentBody
        }

        if (newCommentBody.length !== 0 && newCommentName !== 0) {
            setCommentInfo((previousComments) => [...previousComments, newComment]);
        } else {
            alert("Por favor, rellena todos los campos.");
        }
    }

    return (
        <>
            <div className="container mainEntryStyle">
                <Link
                    to={`/articulos`}>
                    <button className="returnButton"> Volver </button>
                </Link>
                <h1 className="entryTitle">{post.title}</h1>
                <span>Autor: {post.author} </span>
                <img className="articlePhoto"
                    src={post.item}
                    alt="Foto artículo" />
                <img className="photoSeparator" src="/photoseparator.png" alt="Separator" />
                <p>{post.body}</p>
            </div>

            {/* COMMENTS */}
            <div className="container commentBoxStyle">
                <h3>Comentarios</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className="commentNameInputStyle"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleName}
                    />

                    <input
                        className="commentInputStyle"
                        type="text"
                        placeholder="Deja tu comentario..."
                        onChange={handleBody}
                    />

                    <button className="commentButton" type="submit">Enviar</button>
                </form>

                <img className="articleSeparator" src="/articleseparator.png" alt="Separator" />
            </div>

            <CommentBox commentInfo={commentInfo} />
        </>
    )

}
