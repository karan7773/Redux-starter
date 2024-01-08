import { createSlice } from "@reduxjs/toolkit";

const InitialState={
    counter:0,
}

export const counterSlice=createSlice({
    name:'counter',
    InitialState,
    reducers:{
        increment:(state)=>{
            state.counter+=1
        },
        decrement:(state)=>{
            state.counter-=1
        },
        reset:(state)=>{
            state.counter=0
        }
    }
})

export const {increment,decrement,reset}=counterSlice.actions;

export default counterSlice.reducer;