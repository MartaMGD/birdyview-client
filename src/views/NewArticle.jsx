import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import FileBase64 from 'react-file-base64';

export default function NewArticle() {
    const navigate = useNavigate();

    // States to send article info to database
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [extract, setExtract] = useState("");
    const [body, setBody] = useState("");
    const [item, setItem] = useState();

    // Handle to submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            author,
            title,
            extract,
            body
        }

        axios.post("http://localhost:5000/posts/add", newPost)
            .then(response => console.log(response.data))
            .catch(err => {
                console.log(err);
            });

        navigate('/articulos');
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="newArticle container">
                <div className="titleStyle">
                    <span className><b>Nueva publicación</b></span>
                </div>

                <div className="newArticleForm">
                    <span className="newArticleSpan">Autor</span>
                    <input
                        className="newArticleInput"
                        type="text"
                        value={author}
                        placeholder="Introduce un nombre"
                        onChange={e => setAuthor(e.target.value)} />

                    <span className="newArticleSpan">Título</span>
                    <input
                        className="newArticleInput"
                        type="text"
                        value={title}
                        placeholder="Introduce un título"
                        onChange={e => setTitle(e.target.value)} />

                    <span className="newArticleSpan">Extracto</span>
                    <input
                        className="newArticleBody"
                        type="text"
                        value={extract}
                        placeholder="Introduce un título"
                        onChange={e => setExtract(e.target.value)} />

                    <span className="newArticleSpan">Imagen</span>
                    <div className="uploadImage">
                        <FileBase64
                            multiple={false}
                            onDone={({ base64 }) => setItem({
                                item, image: base64
                            })} />
                    </div>

                    <span className="newArticleSpan">Artículo</span>
                    <input
                        className="newArticleBody"
                        type="text"
                        value={body}
                        placeholder="Cuerpo del artículo"
                        onChange={e => setBody(e.target.value)} />

                    <button className="newArticleButton">Enviar</button>
                </div>

            </form>
        </>
    )
}
