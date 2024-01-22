import {React, useEffect ,useState} from 'react'
import { useAuth } from '../store/auth';
import { useParams } from 'react-router-dom';

export default function AdminUpdate() {

    const {authorizationToken} = useAuth();

    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        isAdmin:false
    })

    // const navigate = useNavigate();

    const params = useParams();

    const [userData, setUserData] = useState(true);

    if (user && userData) {
      setUser({
        username: user.username,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin
      });
      setUserData(false);
    }

    const handleInput = (event)=>{
        console.log(event);
        let name= event.target.name;
        let value = event.target.value;
        setUser({
            ...user,
            [name]:value,
        })
    };

    const getUser = async () =>{
        try {
            
            const response = await fetch(`https://abhishek.nssiitd.in/portfolio/api/admin/users/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization: authorizationToken
                }
                
            });

            if(response.ok){
                const res_data = await response.json();
                setUser(res_data);
                console.log("Dataishere",res_data);
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getUser();
    },[])

    const handleSubmit = async (event) =>{
        event.preventDefault();

        try {
            console.log(user);
            const response = await fetch(`https://abhishek.nssiitd.in/portfolio/api/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    Authorization: authorizationToken,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            })

            if(response.ok){
                const res_data = await response.json();
                console.log("res",res_data);
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
            <section className="section-contact">
            <div className="contact-content container">
                    <h1 className="main-heading">Update User</h1>
                </div>
                <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                name = "username"
                                placeholder="username"
                                id="username"
                                required
                                autoComplete="off"
                                value={user.username}
                                onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email"
                                name = "email"
                                placeholder="email"
                                id="email"
                                required
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="phone">phone</label>
                                <textarea type="number"
                                name = "phone"
                                placeholder="phone"
                                id="phone"
                                required
                                autoComplete="off"
                                value={user.phone}
                                onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="isAdmin">isAdmin</label>
                                <textarea type="boolean"
                                name = "isAdmin"
                                placeholder="isAdmin"
                                id="isAdmin"
                                required
                                autoComplete="off"
                                value={user.isAdmin}
                                onChange={handleInput} />
                            </div>
                            <div>

                  
                            <button type="submit" >
                                Update User
                            </button>
                            </div>
                        </form>
                    </section>
      
            </section>
    </>
  )
}


