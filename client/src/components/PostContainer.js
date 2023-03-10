import React from "react";
import PostCard from "./PostCard";
import {Link} from 'react-router-dom';
import SearchPost from './SearchPost'



function PostContainer({posts, currentPost, setCurrentPost, changeSearch, search}) {



    const postArray = posts.map((post) => (
        <Link key={post.id} to ={`/posts/${post.id}`} >
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
            <SearchPost
                search={search}
                changeSearch={changeSearch}
            />
            <div className="min-w-5/6 w-4/6 mx-auto">
                {postArray}
            </div>
        </div>
    )
}

export default PostContainer