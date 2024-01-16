import React from 'react'
import { useAuth } from '../store/auth';

export default function Home() {
    const {user} = useAuth();

  return (
    <>
    <div className='main-content'>
        <section className="section-hero">
            <div className='container grid grid-two-cols'>
                <div className="hero-content">
                    <p>Hi {user?user.username:"Guys"}</p>
                    <h1>This is Abhishek Kumar Full Stack Developer   </h1>   
                    <h1>ML Enthusaist</h1>
                    <p>Welcome to my Page</p>
                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">
                                Resume
                            </button>
                        </a>
                        <a href="/service">
                            <button className="btn secondary-btn">
                                Projects
                            </button>
                        </a>
                    </div>

                </div>
                <div className="hero-image">
                    <img src="/images/profile.png" alt="namaste" width = "100" height = "100" />
                </div>
            </div>
        </section>
    </div>
    </>
  )
}
