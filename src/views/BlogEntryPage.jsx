import { useParams } from 'react-router';
import { useState } from 'react';
import { getPostbyId } from '../selectors/getPostById';
import CommentBox from '../components/CommentBox/CommentBox';

export default function BlogEntryPage(props) {
    const { postId } = useParams();

    const post = getPostbyId(postId);


    return (
        <>
            <div className="container mainEntryStyle">
                <h2>{post.articletitle}</h2>
                <img className="articlePhoto"
                src={`/articleimages/${post.id}.jpg`}
                alt="Foto artículo" />
                <img className="photoSeparator" src="/photoseparator.png" alt="Separator" />
                <p>{post.articlecontent}</p>
            </div>

            {/* COMMENTS */}
            <div className="container commentBoxStyle">
                <h3>Comentarios</h3>

                <input
                    className="commentNameInputStyle"
                    type="text"
                    placeholder="Nombre"
                />

                <input
                    className="commentInputStyle"
                    type="text"
                    placeholder="Deja tu comentario..."
                />

                <img className="articleSeparator" src="/articleseparator.png" alt="Separator" />
            </div>

            <CommentBox />
        </>
    )

}
