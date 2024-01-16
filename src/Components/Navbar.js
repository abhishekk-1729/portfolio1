// use pascal convention only

import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useAuth } from '../store/auth'

export default function Navbar() {

    const {isLoggedIn} = useAuth();
  return (
    <>
      <div>
        <div className="container">
            <div className="logo-brand">
                <a href="/">Abhishek Kumar</a>
            </div>

            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    {/* <li><NavLink to="/about">About </NavLink></li> */}
                    <li><NavLink to="/service">Projects</NavLink></li>
                    <li><NavLink to="/learnings">Learnings</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/admin">Admin Portal</NavLink></li>
                    {isLoggedIn?
                    <li><NavLink to="/logout">Logout</NavLink></li>:<>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li></>}
                </ul>
            </nav>
        </div>
      </div>
    </>
  )
}
