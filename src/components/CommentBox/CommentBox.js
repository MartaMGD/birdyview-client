export default function CommentBox({ commentInfo }) {
    return (
        <>
            {
                commentInfo?.map((com) => {
                    return (

                        <div className="container commentStyle">
                            <span className="commentName"
                                key={com.setnewCommentName}>
                                Nombre: {com.newCommentName}
                            </span>

                            <p className="commentContent"
                                key={com.setNewCommentBody}>
                                {com.newCommentBody}
                            </p>
                        </div>

                    )
                })
            }
        </>
    )
}
