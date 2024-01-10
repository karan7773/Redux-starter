import { useSelector,useDispatch } from "react-redux";

import React from 'react'
import NewPost from "./NewPost";

const ListofPosts = () => {

    const posts=useSelector((state)=>state.posts)

    const rendurPost=posts.map((post)=>{
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0,100)}</p>
            </article>
        )
    })

    return (
        <div>
            <h1>All Posts</h1>
            <NewPost/>  
            {rendurPost}
        </div>
    )
}

export default ListofPosts
