import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';

export default function About() {

    const {user} = useAuth();

    return (
        <>
        <main>
        <section className="section-hero">
            <div className='container grid grid-two-cols'>
                <div className="hero-content">
                    <p>Hi</p>
                    <h1>This is Abhishek Kumar. Your dost yar and bhut kuch</h1>
                    <p>To kese h ap log</p>
                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">
                                Contact Now
                            </button>
                        </a>
                        <a href="/services">
                            <button className="btn secondary-btn">
                                Learn more
                            </button>
                        </a>
                    </div>

                </div>
                <div className="hero-image">
                    <img src="/images/home.png" alt="namaste" width = "100" height = "100" />
                </div>
            </div>
        </section>
        <section>
            <div>
                
            </div>
        </section>
    </main>
        </>
        )
}
