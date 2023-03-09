import React from "react";


function PostCard({post, setCurrentPost}) {
    // console.log("from postcard:", post)
    const {title, body, breed, creator_id, replies} = post
    // console.log("from postcard:", replies)



    const handleClick = (e) => {
        setCurrentPost({...post, [e.target.name]: e.target.value })
    }

    return (

        <div onClick={handleClick} className="basic-button">
            <p>{title}</p>
            <p>{breed}</p>
            <p>{body}</p>
        </div>
    )
}

export default PostCard