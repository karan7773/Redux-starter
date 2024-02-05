import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddPost } from './postSlice'
import { nanoid } from '@reduxjs/toolkit'


function NewPost() {

    const dispatch=useDispatch();

    const [newPost,setNewpost]=useState({
        title: "",
        content:""
    })
    const handdleAddPost=()=>{
        // console.log(newPost);
        if(newPost.title && newPost.content){
            dispatch(AddPost(newPost.title,newPost.content))
            setNewpost((post)=>({...post,id:"",title:"",content:""}))
        }
    }
    return (
    <div>
        <h1>Add New Post</h1>
        <label>Title</label>
        <input 
            type='text' 
            value={newPost.title}
            onChange={(e)=>{setNewpost((post)=>{return {...post,title:e.target.value}})}}
            placeholder='Enter Title'>
        </input>
        <br></br>
        <label>Content</label>
        <textarea
            value={newPost.content}
            onChange={(e)=>{setNewpost((post)=>{return {...post,content:e.target.value}})}}
            placeholder='Enter content'></textarea>

        <button onClick={handdleAddPost}>Add New Post</button>

    </div>
  )
}

export default NewPost
