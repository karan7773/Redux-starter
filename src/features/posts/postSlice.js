import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:1,
        title:"Learning Redux",
        content:"ywfd qweyg wdvd ewfew"
    },
    {
        id:2,
        title:"Learning toolkit",
        content:"ywfd qweyg wdvd ewfew"
    }
]

export const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
        AddPost:(state,action)=>{
            console.log(action);
            return [...state,action.payload]
        }
    }
})

export const {AddPost}=postSlice.actions;

export default postSlice.reducer