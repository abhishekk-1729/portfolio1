import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Navbar from './Components/Navbar';
import Logout from './Pages/Logout';
import AdminLayout from './Components/layouts/Admin-layout'
import AdminUsers from './Pages/Admin-Users'
import AdminContacts from './Pages/Admin-Contacts'
import AdminUpdate from './Pages/Admin-Update'
import AdminContactUpdate from './Pages/Admin-ContactUpdate'
import AdminService from './Pages/Admin-ServiceUpdate'
import Learnings  from './Pages/Learnings';
import MernWeb  from './Pages/MernWeb';

export default function App() {
  return (
    <>

    {/* A ‹BrowserRouter› stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack. */}

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/service" element={<Service/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/logout" element={<Logout/>}/>
        <Route path = "/admin" element={<AdminLayout/>}>
          <Route path = "users" element={<AdminUsers/>}/>
          <Route path = "contact" element={<AdminContacts/>}/>
          <Route path = "users/:id/edit" element={<AdminUpdate/>}/>
          <Route path = "contacts/:id/edit" element={<AdminContactUpdate/>}/>
          <Route path = "addService" element={<AdminService/>}/>
        </Route>
        <Route path = "/learnings" element={<Learnings/>}>
          <Route path = "mernweb" element={<MernWeb/>}/>
  <Route path = "webdev" element={<MernWeb/>}/>
  <Route path = "orgHierarchy" element={<MernWeb/>}/>
  <Route path = "mlops" element={<MernWeb/>}/>
  <Route path = "smsspam" element={<MernWeb/>}/>
  {/* <Route path = "sophia" element={<MernWeb/>}/> */}
        </Route>
      </Routes>
      </BrowserRouter> 


    </>
  )
}
