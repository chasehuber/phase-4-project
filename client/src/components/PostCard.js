import React from "react";
import ReplyCard from "./ReplyCard";

function PostCard({post, setCurrentPost}) {
    // console.log("from postcard:", post)
    const {title, body, breed, creator_id, replies} = post
    // console.log("from postcard:", replies)

    const replyArray = replies.map((reply) => (
        <ReplyCard
            key={reply.id}
            reply={reply}
        />
    ))

    const handleClick = (e) => {
        setCurrentPost({...post, [e.target.name]: e.target.value })
    }

    return (
        <div onClick={handleClick}>
            <p>{title}</p>
            <p>{breed}</p>
            <p>{body}</p>
            <div>{replyArray}</div>
        </div>
    )
}

export default PostCard