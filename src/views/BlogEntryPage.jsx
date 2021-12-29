import '../css/globalstyle.css';
import { useParams } from 'react-router';
import { getPostbyId } from '../selectors/getPostById';

export default function BlogEntryPage(props) {
    const { postId } = useParams();

    const post = getPostbyId(postId);

    return (
        <div className="container mainBlogStyle">
            <h2>{post.articletitle}</h2>
            <p>{post.articlecontent}</p>
        </div>
    )
}
