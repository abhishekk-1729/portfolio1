import React from 'react'
import { useAuth } from '../store/auth'

export default function Service() {

    const {services} = useAuth();
    return (

        <section className="section-contact">
        <div className="contact-content container">
            <h1 className="main-heading">Projects</h1>
        </div>
        <section className="service-content">
        <div className="container grid grid-three-cols">

                {
                    services.map((curElem,index)=>{

                    const {price,description,provider,service}  = curElem;

                    return(    
                            <div className="card">
                                <div className="card-img">
                                    <img src="/images/design.png" alt="our services info" width="200" />
                                </div>
                                <div className="card-details">
                                    <p>{provider}</p>
                                    <h2>{price}</h2>
                                    <h2>{description}</h2>
                                </div>
                            </div>
                    )

                    })
                }
            </div>
            </section>

        </section>
    

    )
}
