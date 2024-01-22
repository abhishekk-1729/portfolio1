import React, { useEffect, useState } from 'react'
import { createContext ,useContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("");
    const [services,setServices] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const authorizationToken = `Bearer ${token}`;

    const userAuthentication= async()=>{
        if(token){
            try {
                const response = await fetch('https://abhishek.nssiitd.in/portfolio/api/auth/user',{
                    method:"GET",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                
                if(response.ok){
                    const res_data = await response.json();
                    console.log(res_data.userData);
                    setUser(res_data.userData);
                    setIsLoading(false);

                }
                else{
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    
    useEffect(()=>{
        userAuthentication();
    },[])

    const getServices = async()=>{
        try {
            const response = await fetch("http://localhost:8000/api/services/getServices",{
                method:"GET"
            }
            );
            if(response.ok){
                const res_data = await response.json();
                console.log("data",res_data.data);
                setServices(res_data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getServices();
    },[])

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token",serverToken);
    }

    let isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }
    return <AuthContext.Provider value={{isLoggedIn,LogoutUser,storeTokenInLS,user,services,authorizationToken,isLoading}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {

    const authContextValue =  useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of provider")
    }
    return authContextValue;
}
