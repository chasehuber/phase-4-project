import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import NewReplyForm from "./NewReplyForm"
import ReplyCard from "./ReplyCard";

function PostDetails({posts, handleNewReply , currentPost, currentUser, setReplies, statereplies, setCurrentPost, onDeletePost}) {
    const {id, title, body, breed, creator_id, replies} = currentPost
    const [postCreator, setPostCreator] = useState('');
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
        fetch(window.location.href)
        .then(r => r.json())
        .then(data => setCurrentPost(data))
    }, [posts])

    useEffect(() => {
        fetch(`/users/${currentPost.creator_id}`)
        .then(r => r.json())
        .then(data => setPostCreator(data.user_name))
    }, [])

    const replyArray = replies.map((reply) => (
        <ReplyCard
            key={reply.id}
            reply={reply}
        />
    ))

    const deleteButton = <button className="basic-button bg-red-600 hover:bg-red-400 text-white" onClick={handleDelete}>Delete Post</button>

    return (
        <>
        <div className="w-4/6 mx-auto">
            <div>
                <div className="basic-box">
                    <div className="basic-box">
                        <h1>{postCreator}</h1>
                    </div>
                    <div>
                        <p className="basic-box">{title}</p>
                        <p className="basic-box">{breed}</p>
                        <p className="basic-box">{body}</p>
                        {currentUser.id === creator_id ? deleteButton : null}
                    </div>
                </div>

                <div>{replyArray}</div>
                <NewReplyForm
                    replies={statereplies} 
                    handleNewReply={handleNewReply}
                    setCurrentPost={setCurrentPost} 
                    currentPost={currentPost}
                    currentUser={currentUser}
                    setReplies={setReplies}
                />
            </div>
        </div>
        </>
    )
}

export default PostDetails