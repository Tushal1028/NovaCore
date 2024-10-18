// const React = require("react");
import {createContext,useState} from "react";

export const CounterContext=createContext(null);

export const CounterProvider=(props)=>{
    const[count,Setcount]=useState(()=>{
        const counter=localStorage.getItem("counter");
        if (!counter){ return JSON.stringify(5);}
        return JSON.parse(counter);
    });
    localStorage.setItem("counter",JSON.stringify(count))
    return (
        <CounterContext.Provider value={{count,Setcount,name:'tushal'}}>
            {props.children}
        </CounterContext.Provider>
    )
}

