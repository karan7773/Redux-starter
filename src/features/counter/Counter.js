import React from 'react'
import { useState } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { increment,decrement,reset,incrementByAmount } from './CounterSlice'

const Counter = () => {

    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    
    const [incrementAmount,setincrementAmount]=useState(0);

    const resetall=()=>{
        setincrementAmount(0);
        dispatch(reset()); 
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <input 
                type="number" 
                value={incrementAmount} 
                onChange={(e)=>{setincrementAmount(Number(e.target.value))}}
            />
            <button onClick={()=>{
                dispatch(incrementByAmount(incrementAmount));
                setincrementAmount(0)}}
            >Add Amount</button>
            <button onClick={()=>resetall()}>reset</button>
        </div>
    )
}

export default Counter
