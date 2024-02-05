import { createSlice, nanoid } from "@reduxjs/toolkit";

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
        AddPost:{
            reducer(state,action){
                console.log(action.payload) ;
                state.push(action.payload)
            },
            prepare(title,content){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const {AddPost}=postSlice.actions;

export default postSlice.reducer