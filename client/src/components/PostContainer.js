import React from "react";
import PostCard from "./PostCard";
import {Link} from 'react-router-dom';



function PostContainer({posts, currentPost, setCurrentPost}) {



    const postArray = posts.map((post) => (
        <Link to ={`/posts/${post.id}`} >
            <PostCard
                currentPost={currentPost}
                setCurrentPost={setCurrentPost}
                key={post.id}
                post={post}
            />
        </Link>
    ))

    return (
        <div>
        {postArray}
        </div>
    )
}

export default PostContainer