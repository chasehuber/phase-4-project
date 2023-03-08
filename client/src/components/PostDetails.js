import NewReplyForm from "./NewReplyForm"

function PostDetails({handleNewReply , currentPost}) {



    return (
        <>
        <h1>hi post deets</h1>
        <NewReplyForm handleNewReply={handleNewReply} currentPost="1"/>
        </>
    )
}

export default PostDetails