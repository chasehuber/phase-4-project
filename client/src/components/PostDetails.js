
import NewReplyForm from "./NewReplyForm"
import ReplyCard from "./ReplyCard";

function PostDetails({handleNewReply , currentPost, currentUser}) {
    console.log("postdeets", currentPost)

    const {title, body, breed, creator_id, replies} = currentPost

    const replyArray = replies.map((reply) => (
        <ReplyCard
            key={reply.id}
            reply={reply}
        />
    ))

    return (
        <>
        <h1>hi post deets</h1>
        <div>
            <p>{title}</p>
            <p>{breed}</p>
            <p>{body}</p>
            <div>{replyArray}</div>
        </div>
        <NewReplyForm 
            handleNewReply={handleNewReply} 
            currentPost={currentPost}
            currentUser={currentUser}
        />
        </>
    )
}

export default PostDetails