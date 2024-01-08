import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { increment,decrement,reset } from './CounterSlice'

const Counter = () => {
    const count=useSelector((state)=>state.Counter.count);
    const dispatch=useDispatch();
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
        Counter
        </div>
    )
}

export default Counter
