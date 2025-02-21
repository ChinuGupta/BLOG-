import { createContext, ReactNode, useContext, useState } from "react";
type proptype={
    isLoggedIn:boolean;
    login:(email:string,password:string)=>void;
    logout:()=>void;
}
const AuthContext=createContext<proptype|null>(null);
export default function AuthProvider({children}:{children:ReactNode}) {
    const [isLoggedIn,setIsloggedIn]=useState<boolean>(false);
    const login = (email:string,password:string)=>{
        sessionStorage.setItem("email",email)
        sessionStorage.setItem("password",password)
        setIsloggedIn(true);
    }
    const logout=()=>{
        sessionStorage.clear();
        setIsloggedIn(false);
    }
  return (
    <AuthContext.Provider value={{isLoggedIn,login,logout}}>{children}</AuthContext.Provider>
  )
}
export const useAuth=()=>{
    const context=useContext(AuthContext)
    if(context)
    {
        return useContext(AuthContext);
    }
    throw new Error("Context invalid");
}
