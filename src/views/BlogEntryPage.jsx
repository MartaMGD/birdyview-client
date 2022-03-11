import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../context/Context';

export default function BlogEntryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const { user } = useContext(Context);

    // To update post (PUT)
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [body, setBody] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path);
            setPost(res.data)
            setTitle(res.data.title)
            setPhoto(res.data.photo)
            setBody(res.data.body)
        };
        getPost();
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
                data: { username: user.username },
            });
            navigate("/articulos");
            window.location.reload();
        } catch (err) {
            alert("Ha ocurrido un error al intentar eliminar el artículo. Inténtalo de nuevo.")
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/posts/${post._id}`, {

                username: user.username,
                title,
                photo,
                body
            });
            window.location.reload();
        } catch (err) {
            alert("Ha ocurrido un error al actualizar. Inténtalo de nuevo.")
        }
    }

    return (
        <>
            <div className="container mainEntryStyle">

                {post.username === user.username &&
                    <div className="articleButtons">

                        <button
                            className="editButton"
                            onClick={() => setUpdateMode(true)}>
                            Editar
                        </button>

                        <Link
                            to={`/articulos/`}>
                            <button
                                className="deleteButton"
                                onClick={handleDelete}>
                                Eliminar
                            </button>
                        </Link>
                    </div>
                }
                <Link
                    to={`/articulos/`}>
                    <button className="returnButton"> Volver </button>
                </Link>

                <div className="entryDateAuthor">
                    <span className="authorName">Fecha: {new Date(post.createdAt).toLocaleDateString()}</span>
                    <span className="authorName">Autor: {post.username} </span>
                </div>

                {updateMode ? <input
                    className="newArticleInput"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} /> : (
                    <h1 className="entryTitle">
                        {post.title}
                    </h1>
                )}

                {updateMode ? <input
                    className="newArticleInput"
                    type="text"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)} /> : (
                    <img className="articlePhoto"
                        src={post.photo}
                        alt="Foto artículo"
                    />
                )}

                <img className="photoSeparator" src="/photoseparator.png" alt="Separator" />

                {updateMode ? <textarea
                    className="newArticleBody"
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)} /> : (
                    <p>
                        {post.body}
                    </p>
                )}

                {updateMode && post.username === user.username &&
                    <button
                        onClick={handleUpdate}>
                        Actualizar
                    </button>
                }

            </div>
        </>
    )

}
