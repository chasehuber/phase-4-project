import React from "react";


function PostCard({post, setCurrentPost}) {
    // console.log("from postcard:", post)
    const {title, body, breed, creator_id, replies} = post
    // console.log("from postcard:", replies)



    const handlePostClick = (e) => {
        setCurrentPost({...post, [e.target.name]: e.target.value })
    }

    return (
        <div onClick={handlePostClick}>
            <p>{title}</p>
            <p>{breed}</p>
            <p>{body}</p>
        </div>
    )
}

export default PostCard