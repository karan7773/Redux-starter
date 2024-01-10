import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddPost } from './postSlice'


function NewPost() {

    const dispatch=useDispatch();

    const [newPost,setNewpost]=useState({
        id:"",
        title: "",
        content:""
    })
    const handdleAddPost=()=>{
        console.log(newPost);
        dispatch(AddPost(newPost))
    }
    return (
    <div>
        <input 
            type='number' 
            value={newPost.id}
            onChange={(e)=>{setNewpost((post)=>{return {...post,id:e.target.value}})}}
            placeholder='Enter Title'>
        </input>
        <br/><br/>
        <input 
            type='text' 
            value={newPost.title}
            onChange={(e)=>{setNewpost((post)=>{return {...post,title:e.target.value}})}}
            placeholder='Enter Title'>
        </input>
        <textarea
            value={newPost.content}
            onChange={(e)=>{setNewpost((post)=>{return {...post,content:e.target.value}})}}
            placeholder='Enter content'></textarea>

        <button onClick={handdleAddPost}>Add New Post</button>

    </div>
  )
}

export default NewPost
