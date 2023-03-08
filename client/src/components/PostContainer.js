import React from "react";
import PostCard from "./PostCard";
import {Link} from 'react-router-dom';



function PostContainer({posts}) {

    const postArray = posts.map((post) => (
        <Link to ="/posts/:id">
            <PostCard
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