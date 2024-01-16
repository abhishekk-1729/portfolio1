import React, { useState } from 'react';
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { SideBarData } from '../Pages/SideBarData';


export default function Learnings() {

  return (
    <>

        <div className='box'>
        <nav className= 'nav-menu active' >
          <ul className='nav-menu-items'>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path}>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
<Outlet/>
    </>
  );
}

