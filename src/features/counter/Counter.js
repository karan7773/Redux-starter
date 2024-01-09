import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { increment,decrement } from './CounterSlice'
// import store from './CounterSlice'

const Counter = () => {
    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    console.log(count);
    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            {/* <button onClick={()=>dispatch(reset())}>reset</button> */}
        </div>
    )
}

export default Counter
