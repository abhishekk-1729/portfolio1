import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../store/auth';

export default function AdminLayout() {

    const {user,isLoading} = useAuth();

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(!user.isAdmin){
        return <Navigate to="/"/>
    }
  return (
    <>
      <header>
        <div className="container">
            <nav>
                <ul>
                    <li><NavLink to="/admin/users">Users</NavLink></li>
                    <li><NavLink to="/admin/contact">Contacts</NavLink></li>
                    <li><NavLink to="/admin/addService">Services</NavLink></li>
                </ul>
            </nav>
        </div>
      </header>
      <Outlet/>
    </>
  )
}
