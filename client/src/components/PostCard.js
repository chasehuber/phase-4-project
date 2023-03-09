import React from "react";


function PostCard({post, setCurrentPost}) {
    // console.log("from postcard:", post)
    const {title, body, breed, creator_id, replies} = post
    // console.log("from postcard:", replies)

    let reply_count = post.replies.map ((reply) => reply)
    const reply_count_total = reply_count.length

    const handleClick = (e) => {
        setCurrentPost({...post, [e.target.name]: e.target.value })
    }

    return (

        <div onClick={handleClick} className="basic-button">
            <p>Title: {title}</p>
            <p>Category: {breed}</p>
            <p>{body}</p>
            <p>Replies: {reply_count_total}</p>
        </div>
    )
}

export default PostCard