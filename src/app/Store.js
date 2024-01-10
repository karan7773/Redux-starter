import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/CounterSlice';
import postsReducer from '../features/posts/postSlice'

export const Store=configureStore( {
    reducer:{
        // counter:counterReducer,
        posts:postsReducer

    }
});

 