import '../css/globalstyle.css';
import { useParams } from 'react-router';
import { getPostbyId } from '../selectors/getPostById';

export default function BlogEntryPage(props) {
    const { postId } = useParams();

    const post = getPostbyId(postId);

    return (
        <>
            <div className="container mainBlogStyle">
                <h2>{post.articletitle}</h2>
                <p>{post.articlecontent}</p>
            </div>

            {/* COMMENTS */}
            <div className="container commentBoxStyle">
            <h3>Comentarios</h3>    

            <input 
            className="commentNameInputStyle"
            type="text"
            placeholder= "Nombre" />

            <input 
            className="commentInputStyle"
            type="text"
            placeholder= "Deja tu comentario..." />
            </div>
        </>
    )


}
