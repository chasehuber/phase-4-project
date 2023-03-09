import React, {useEffect} from "react";
import NewReplyForm from "./NewReplyForm"
import ReplyCard from "./ReplyCard";

function PostDetails({posts, handleNewReply , currentPost, currentUser, setReplies, statereplies, setCurrentPost}) {
    console.log("postdeets", currentPost)

    const {id, title, body, breed, creator_id, replies} = currentPost

    //Fetching So That currentPost Is Updated As New Replies Are Submitted
    useEffect(() => {
        fetch(`/posts/${id}`)
        .then(r => r.json())
        .then(data => setCurrentPost(data))
    }, [posts])

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
            replies={statereplies} 
            handleNewReply={handleNewReply}
            setCurrentPost={setCurrentPost} 
            currentPost={currentPost}
            currentUser={currentUser}
            setReplies={setReplies}
        />
        </>
    )
}

export default PostDetails