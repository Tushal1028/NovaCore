import {createContext,useState} from "react";

export const User_idContext=createContext(null);


export const User_idProvider=(props)=>{
    const temp = {user_id:-1}
    const [user,setUser] = useState(()=>{
        const userss=localStorage.getItem("f");
        if(!userss) {return JSON.stringify(temp)}
        return JSON.parse(userss);
    });
    localStorage.setItem("f",JSON.stringify(user))
    return (
        <User_idContext.Provider value={{user,setUser}}>
            {props.children}
        </User_idContext.Provider>
    )
}