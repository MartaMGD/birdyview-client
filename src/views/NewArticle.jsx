import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Context } from '../context/Context';

export default function NewArticle() {
    const navigate = useNavigate();

    // States to send article info to database
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [extract, setExtract] = useState("");
    const [body, setBody] = useState("");

    const { user } = useContext(Context);

    // Handle to submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            username: user.username,
            title,
            extract,
            photo,
            body
        };

        try {
            const res = await axios.post("http://localhost:5000/api/posts", newPost);
            navigate("/articulos/" + res.data._id);
            window.location.reload();
        } catch (err) {
            alert("Error al publicar. Inténtalo de nuevo.")
        }

    };

    return (
        <>
            <form
                className="newArticle container">
                <div className="titleStyle">
                    <span className><b>Nueva publicación</b></span>
                </div>

                <div className="newArticleForm">

                    <span className="newArticleSpan">Título</span>
                    <input
                        className="newArticleInput"
                        type="text"
                        value={title}
                        placeholder="Introduce un título"
                        onChange={e => setTitle(e.target.value)} />

                    <span className="newArticleSpan">Extracto</span>
                    <textarea
                        className="newArticleBody"
                        type="text"
                        value={extract}
                        placeholder="Introduce un título"
                        onChange={e => setExtract(e.target.value)} />

                    <span className="newArticleSpan">Imagen</span>
                    <input
                        className="newArticleInput"
                        type="text"
                        value={photo}
                        placeholder="Introduce una URL"
                        onChange={(e) => setPhoto(e.target.value)} />

                    <span className="newArticleSpan">Artículo</span>
                    <textarea
                        className="newArticleBody"
                        type="text"
                        value={body}
                        placeholder="Cuerpo del artículo"
                        onChange={e => setBody(e.target.value)} />

                    <button
                        className="newArticleButton"
                        onClick={handleSubmit}>Enviar</button>
                </div>

            </form>
        </>
    )
}

