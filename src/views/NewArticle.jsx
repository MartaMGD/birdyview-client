import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';

export default function NewArticle() {
    const [item, setItem] = useState();
    return (
        <>
            <form className="newArticle container">
                <div className="titleStyle">
                    <span className><b>Nueva publicación</b></span>
                </div>

                <div className="newArticleForm">

                    <span className="newArticleSpan">Autor</span>
                    <input
                        className="newArticleInput"
                        type="text"
                        placeholder="Introduce un nombre" />

                    <span className="newArticleSpan">Título</span>
                    <input
                        className="newArticleInput"
                        type="text"
                        placeholder="Introduce un título" />

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
                        placeholder="Cuerpo del artículo" />
                </div>
            </form>
        </>
    )
}
