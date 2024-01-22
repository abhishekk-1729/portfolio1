import {React,useEffect,useState} from 'react'
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';

export default function AdminUsers() {
    const [users,setUsers] = useState([]);
    
    const {authorizationToken} = useAuth();

    const handleDeleteUser = async(id) => {
        try {
            console.log(id);
            const response = await fetch(`https://abhishek.nssiitd.in/portfolio/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken
                },
            })

            if(response.ok){
                console.log("userDeleted");
                getUsers();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getUsers = async() => {
        try {
            const response = await fetch("https://abhishek.nssiitd.in/portfolio/api/admin/users",{
                method:"GET",
                headers:{
                    Authorization: authorizationToken
                }
            });
            
            console.log(response);
            if(response.ok){
    
                const res_data = await response.json();
                console.log("data_users:",res_data);
                setUsers(res_data);
            }
        } catch (error) {
            
            console.log(error);
        }

    }

    useState(()=>{
        getUsers();
    },[])
    



  return (

    <>

            <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>
                        Admin Users Data
                    </h1>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr >
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>isAdmin</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((curElem,index)=>{
                                const {_id,username,phone,email,isAdmin} = curElem;
                                
                                return(
                                    <tr key={index}>
                                        <td>{username}</td>
                                        <td>{phone}</td>
                                        <td>{email}</td>
                                        <td>{isAdmin?"true":"false"}</td>
                                        <td><Link to ={`/admin/users/${_id}/edit`}>Edit</Link></td>
                                        <td><button onClick={()=>handleDeleteUser(_id)}>Delete</button></td>
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


