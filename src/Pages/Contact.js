import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { useNavigate } from 'react-router-dom';

export default function Contact() {

    const {user} = useAuth();

    const defaultContactFormData = {
        username: "",
        email: "",
        message: "",
      };

    const [Contact,setContact] = useState({
        username:"",
        email:"",
        message:""
    })

    const navigate = useNavigate();

    const [userData, setUserData] = useState(true);

    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
    

    const handleInput = (event)=>{
        console.log(event);
        let name= event.target.name;
        let value = event.target.value;
        setContact({
            ...Contact,
            [name]:value,
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // first time regsister krte h jab tb page reload krdeta h
        try {
            const response = await fetch('http://localhost:8000/api/form/contact',{
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(Contact)
            })
            console.log(response);
            if(response.ok){
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
            }
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <>

            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className='main-heading'>Contact us</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/support.png" alt="we are always ready to help"/>
                    </div>
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                name = "username"
                                placeholder="Username"
                                id="username"
                                required
                                autoComplete="off"
                                value={Contact.username}
                                onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                name = "email"
                                placeholder="Email"
                                id="email"
                                required
                                autoComplete="off"
                                value={Contact.email}
                                onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea type="text"
                                name = "message"
                                placeholder="Message"
                                id="message"
                                required
                                autoComplete="off"
                                value={Contact.message}
                                onChange={handleInput} 
                                cols="50"
                                rows="4">
                                </textarea>
                            </div>
                            <div>
                            <button type="submit">
                                Submit
                            </button>
                            </div>
                        </form>
                    </section>
                    </div>
               
            </section>
    </>
  )
}
