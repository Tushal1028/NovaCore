import React,{useContext, useState} from "react";
import { CounterContext } from "../Context/Counter";

const Counter=()=>{
    const countstate=useContext(CounterContext)

    return(
        <div>
            <button onClick={()=>{countstate.Setcount(countstate.count+1)}}>Increment</button>
            <button onClick={()=>{countstate.Setcount(countstate.count-1)}}>Decrement</button>
        </div>
    )
}

export default Counter;