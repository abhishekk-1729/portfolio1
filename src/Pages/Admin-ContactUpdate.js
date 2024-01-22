import {React, useEffect ,useState} from 'react'
import { useAuth } from '../store/auth';
import { useParams } from 'react-router-dom';

export default function AdminUpdate() {

    const {authorizationToken} = useAuth();


    const defaultContactFormData = {
        username: "",
        email: "",
        message: "",
      };

    const [Contact,setContact] = useState({
        username:"",
        email:"",
        message:""
    })

    // const navigate = useNavigate();

    const params = useParams();

    const [contactData, setContactData] = useState(true);

    if (contactData && Contact) {
      setContact({
        username: Contact.username,
        email: Contact.email,
        message: Contact.message,
      });
      setContactData(false);
    }

    const handleInput = (event)=>{
        console.log(event);
        let name= event.target.name;
        let value = event.target.value;
        setContact({
            ...Contact,
            [name]:value,
        })
    };

    const getContact = async () =>{
        try {
            
            const response = await fetch(`https://abhishek.nssiitd.in/portfolio/api/admin/contacts/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization: authorizationToken
                }
                
            });

            if(response.ok){
                const res_data = await response.json();
                setContact(res_data);
                console.log("Dataishere",res_data);
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getContact();
    },[])

    const handleSubmit = async (event) =>{
        event.preventDefault();

        try {
            console.log(Contact);
            const response = await fetch(`https://abhishek.nssiitd.in/portfolio/api/admin/contacts/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    Authorization: authorizationToken,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(Contact)
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
                    <h1 className="main-heading">Update Contact</h1>
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
                                value={Contact.username}
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
                                value={Contact.email}
                                onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="message">message</label>
                                <textarea type="text"
                                name = "message"
                                placeholder="message"
                                id="message"
                                required
                                autoComplete="off"
                                value={Contact.message}
                                onChange={handleInput} />
                            </div>
                            <div>
                                <button type="submit" >
                                    Update Contact
                                </button>
                            </div>
                        </form>
                </section>

            </section>
    </>
  )
}


