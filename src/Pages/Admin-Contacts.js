import {React,useEffect,useState} from 'react'
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';

export default function AdminUsers() {
    const [contacts,setContacts] = useState([]);
    
    const {authorizationToken} = useAuth();

    const handleDeleteContact = async(id) => {
        try {
            console.log(id);
            const response = await fetch(`https://abhishek.nssiitd.in/portfolio/api/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken
                },
            })

            if(response.ok){
                console.log("userDeleted");
                getContacts();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getContacts = async() => {
        try {
            const response = await fetch("http://localhost:8000/api/admin/contacts",{
                method:"GET",
                headers:{
                    Authorization: authorizationToken
                }
            });
            
            console.log(response);
            if(response.ok){
    
                const res_data = await response.json();
                console.log("contacts_users:",res_data);
                setContacts(res_data);
            }
        } catch (error) {
            
            console.log(error);
        }

    }

    useState(()=>{
        getContacts();
    },[])
    



  return (

    <>
    <>
            <section className="admin-contacts-section">
                <div className="container">
                    <h1>
                        Admin Contacts Data
                    </h1>
                </div>
                <div className="container admin-contacts">
                    <table>
                        <thead>
                            <tr >
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((curElem,index)=>{
                                const {_id,username,message,email} = curElem;
                                
                                return(
                                    <tr key={index}>
                                        <td>{username}</td>
                                        <td>{email}</td>
                                        <td>{message}</td>
                                        <td><Link to ={`/admin/contacts/${_id}/edit`}>Edit</Link></td>
                                        <td><button onClick={()=>handleDeleteContact(_id)}>Delete</button></td>
                                    </tr>
                                )
                            
  
                        })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            </>
</>


  )
  
}
