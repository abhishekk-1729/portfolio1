import React, { useState } from 'react'
import { useAuth } from '../store/auth';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const handleInput = (event)=>{
        console.log(event);
        let name= event.target.name;
        let value = event.target.value;
        setUser({
            ...user,
            [name]:value,
        })
    };

    const {storeTokenInLS} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        // first time regsister krte h jab tb page reload krdeta h
        alert(user);
        try {
            const response = await fetch('http://localhost:8000/api/auth/login',{
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(user)
            })
        
            console.log("login successfully");
            console.log(response);
            const res_data= await response.json();
            if(response.ok){
                storeTokenInLS(res_data.token);
                setUser({email:"",password:""});
                navigate("/");
            }
            else{
                alert(res_data.extraDetails?res_data.extraDetails:res_data.message);
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>

            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Login</h1>
                </div>
                    <div className="container grid grid-two-cols">
                        <div className="contact-img">
                        <img src="/images/login.png" alt="Please login with your credentials" />
                    </div>
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email"
                                name = "email"
                                placeholder="email"
                                id="email"
                                required
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password"
                                name = "password"
                                placeholder="password"
                                id="password"
                                required
                                autoComplete="off" 
                                value={user.password}
                                onChange={handleInput}/>
                            </div>
                            <div>
                            <button type="submit">
                                Login Now
                            </button>
                            </div>
                        </form>
                    </section>
            </div>
    </section>
    </>
  )
}
