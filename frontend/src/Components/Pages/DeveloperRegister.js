import React, { useState } from "react";
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';


const DeveloperRegister = () => {

    const [user, setUser] = useState({
        supplier_id : "",
        username : "",
        password : "",
        email : "",
        phone : ""
      });
     
      const {  customer_id, username, password, email, phone} = user;
      let navigate=useNavigate();
       
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
       
      const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3000/registerSupplier",user);
        alert('Data Inserted successfully');
        navigate('/supplieract');
      };


    return (
     

            <div className="container mt-5" style={{"marginLeft":"7rem"}}>
                <div className="signup-content"> 
                    <div className="signup-form">
                        <h2 className="form-title">Register As a Developer</h2>
                        <br/>
                        <form onSubmit={e => onSubmit(e)}>
                        
                           <div className="form-group"> 
                                <label>First Name : </label>
                                <input type="text" name="firstname" id="firstname" 
                                    value={customer_id}
                                    onChange={e=>onInputChange(e)}
                                    placeholder="First Name"
                                />
                            </div>
                            <br/>

                            <div className="form-group"> 
                                <label>Last Name : </label>
                                <input type="text" name="lastname" id="lastname" 
                                    value={username}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="Name"
                                />
                            </div>
                            <br/>

                            <div className="form-group"> 
                            <label>Email : </label>
                                <input type="email" name="email" id="email" 
                                    value={email}
                                    onChange={e=>onInputChange(e)}                                
                                    placeholder="Email ID"
                                />
                            </div>
                            <br/>

                            <div className="form-group"> 
                                <label>Upload Profile : </label>
                                <input type="file" name="profile" id="profile" 
                                    value={phone}
                                    onChange={e=>onInputChange(e)}                                
                                    placeholder="profile"    
                                />
                                <button id="profile">Submit</button>
                            </div>
                            <br/>
                            <button className="btn btn-primary btn-block" >Register</button>
 
                        </form>

                        <div>

                        </div>
                    </div>
                </div>
            </div>
   
    )
}
export default DeveloperRegister;