import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export default function Register() {

    const [services,setServices] = useState({
        service:"",
        description:"",
        price:"",
        provider:""
    })

    const {authorizationToken} = useAuth();

    

    const handleInput = (event)=>{
        console.log(event);
        let name= event.target.name;
        let value = event.target.value;
        setServices({
            ...services,
            [name]:value,
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // first time regsister krte h jab tb page reload krdeta h
        try {
            const response = await fetch('https://abhishek.nssiitd.in/portfolio/api/admin/service',{
                method:"POST",
                headers:{
                    'Content-Type':"application/json",
                    'Authorization': authorizationToken
                },
                body:JSON.stringify(services)
            })
            // alert(response);
            const res_data= await response.json();
            console.log(res_data);

            if(response.ok){
                setServices({service:"",description:"",price:"",provider:""});
                // navigate("/");
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
                    <h1 className="main-heading">Add Service</h1>
                </div>
                <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="service">service</label>
                                <input type="text"
                                name = "service"
                                placeholder="service"
                                id="service"
                                required
                                autoComplete="off"
                                value={services.service}
                                onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="description">description</label>
                                <input type="text"
                                name = "description"
                                placeholder=" Enter your description"
                                id="description"
                                required
                                autoComplete="off" 
                                value={services.description}
                                onChange={handleInput}/>
                            </div>
                            <div>
                                <label htmlFor="price">price</label>
                                <input type="text"
                                name = "price"
                                placeholder="price"
                                id="price"
                                required
                                autoComplete="off" 
                                value={services.price}
                                onChange={handleInput}/>
                            </div>
                            <div>
                                <label htmlFor="provider">provider</label>
                                <input type="text"
                                name = "provider"
                                placeholder="provider"
                                id="provider"
                                required
                                autoComplete="off" 
                                value={services.provider}
                                onChange={handleInput}/>
                            </div>

                            <div>

                  
                            <button type="submit" >
                                Add Service
                            </button>
                            </div>
                        </form>
                    </section>
      
            </section>
    </>
  )
}
