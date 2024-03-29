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
import WebDev  from './Pages/WebDev';
import MlOps  from './Pages/MlOps';
import OrgHierarchy  from './Pages/OrgHierarchy';
import Sophia  from './Pages/Sophia';
import SmsSpam  from './Pages/SmsSpam';
import NSSIITDApp  from './Pages/NSSIITDApp';
import QuickMart  from './Pages/QuickMart';

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
  <Route path = "webdev" element={<WebDev/>}/>
  <Route path = "orgHierarchy" element={<OrgHierarchy/>}/>
  <Route path = "mlops" element={<MlOps/>}/>
  <Route path = "smsspam" element={<SmsSpam/>}/>
  <Route path = "sophia" element={<Sophia/>}/>
  <Route path = "nssiitdapp" element={<NSSIITDApp/>}/>
  <Route path = "quickmart" element={<QuickMart/>}/>
        </Route>
      </Routes>
      </BrowserRouter> 


    </>
  )
}
