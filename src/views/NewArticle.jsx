import React from 'react';

export const NewArticle = () => {
    return (
        <>
            <form className="newArticle">
                <div>Nueva publicación</div>
                <span>Título</span>
                <input type="text" />
                <span>Autor</span>
                <input type="text" />
                <span>Artículo</span>
                <input className="newArticleBody" type="text" />
            </form>
        </>
    )
}
