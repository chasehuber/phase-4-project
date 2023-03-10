import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import NewReplyForm from "./NewReplyForm"
import ReplyCard from "./ReplyCard";

function PostDetails({posts, handleNewReply , currentPost, currentUser, setReplies, statereplies, setCurrentPost, onDeletePost}) {
    const {id, title, body, breed, creator_id, replies} = currentPost
    const history = useHistory()
    const handleDelete = () => {
        if (currentPost.creator_id === currentUser.id) {
        console.log("currentUser id: ", currentUser.id);
        console.log("currentPost id: ", currentPost.id);
        
        fetch(`/posts/${id}`,
        { method: 'DELETE'})
        .then(() => onDeletePost(id))

        history.push('/posts')
    }
    else {
        alert("You cannot delete a post that you didn't post!")
    }
}

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
        <h1>{currentPost.creator_id}</h1>
        <div>
            <p>{title}</p>
            <p>{breed}</p>
            <p>{body}</p>
            <div>{replyArray}</div>
            <button onClick={handleDelete}>Delete Post</button>
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