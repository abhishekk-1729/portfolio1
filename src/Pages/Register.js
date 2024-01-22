import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export default function Register() {

    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })



    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleInput = (event)=>{
        console.log(event);
        let name= event.target.name;
        let value = event.target.value;
        setUser({
            ...user,
            [name]:value,
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // first time regsister krte h jab tb page reload krdeta h
        try {
            const response = await fetch('https://abhishek.nssiitd.in/portfolio/api/auth/register',{
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(user)
            })
            // alert(response);
            const res_data= await response.json();
            console.log(res_data);

            if(response.ok){
                
                storeTokenInLS(res_data.token);
                setUser({username:"",email:"",phone:"",password:""});
                navigate("/");
            }else{
                alert(res_data.extraDetails?res_data.extraDetails:res_data.message)
            }
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Registration</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/register.png" alt="Register Here" />
                    </div>
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text"
                                name = "username"
                                placeholder="username"
                                id="username"
                                required
                                autoComplete="off"
                                value={user.username}
                                onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email"
                                name = "email"
                                placeholder=" Enter your email"
                                id="email"
                                required
                                autoComplete="off" 
                                value={user.email}
                                onChange={handleInput}/>
                            </div>
                            <div>
                                <label htmlFor="phone">phone</label>
                                <input type="number"
                                name = "phone"
                                placeholder="phone"
                                id="phone"
                                required
                                autoComplete="off" 
                                value={user.phone}
                                onChange={handleInput}/>
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
                            <br />
                            <div>
                            <button type="submit" >
                                Register Now
                            </button>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
    </>
  )
}
