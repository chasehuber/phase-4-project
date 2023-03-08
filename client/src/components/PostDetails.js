
import NewReplyForm from "./NewReplyForm"

function PostDetails({handleNewReply , currentPost, currentUser}) {
    console.log("postdeets", currentPost)

    const {title, body, breed, creator_id, replies} = currentPost

    return (
        <>
        <h1>hi post deets</h1>
        <NewReplyForm 
            handleNewReply={handleNewReply} 
            currentPost={currentPost}
            currentUser={currentUser}
        />
        </>
    )
}

export default PostDetails