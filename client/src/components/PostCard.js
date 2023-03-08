import React from "react";
import ReplyCard from "./ReplyCard";

function PostCard({post}) {
    console.log("from postcard:", post)
    const {title, body, breed, creator_id, replies} = post
    console.log("from postcard:", post.title)

    const replyArray = replies.map((reply) => (
        <ReplyCard
            key={reply.id}
            reply={reply}
        />
    ))

    return (
        <div>
        <h1>{title}</h1>
        <h2>{breed}</h2>
        <p>{body}</p>
        </div>
    )
}

export default PostCard