import {createContext,useState} from "react";

export const UserContext=createContext(null);


export const UserProvider=(props)=>{
    const temp = {first_name: '',last_name: '',user_name: '',email: '',password: '',}
    const [user,setUser] = useState(()=>{
        const userss=localStorage.getItem("k");
        if(!userss) {return JSON.stringify(temp)}
        return JSON.parse(userss);
    });
    localStorage.setItem("k",JSON.stringify(user))
    return (
        <UserContext.Provider value={{user,setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}