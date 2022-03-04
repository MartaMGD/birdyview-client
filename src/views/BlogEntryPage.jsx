import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { getPostbyId } from '../selectors/getPostById';
import axios from 'axios'; 
import { useState, useEffect } from 'react';
import CommentBox from '../components/CommentBox/CommentBox';

export default function BlogEntryPage() {
    // State and fetch for ARTICLE INFO
    const [postInfo, setPostInfo] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/posts/")
            .then((response) => {
                setPostInfo(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    // States and handles for COMMENTS
    const [commentInfo, setCommentInfo] = useState([]);
    const [newCommentName, setnewCommentName] = useState("");
    const [newCommentBody, setNewCommentBody] = useState("");

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

    const { postId } = useParams();
    const post = getPostbyId(postId);


    return (
        <>
        {postInfo.map((post, i) => {
            return (
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
            )
        })}

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

            <CommentBox commentInfo={commentInfo}/>
        </>
    )

}
