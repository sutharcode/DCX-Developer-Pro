import React, { useState } from "react";
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';


const Contact = () => {

    const [user, setUser] = useState({
        
        fullname : "",
      
        email : "",
        phone : "",
        radio:"",
        location:"",
        Budget:"",
        checkbox:"",
        website:"",
        date:"",
        pageno:"",
        color:""
        
      });
     
      const {  fullname, email, phone,radio,location,Budget,checkbox,website,date,pageno,color} = user;
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


            <div className="container mt-5" >
                <div className="signup-content"> 
                    <div className="signup-form">
                        <h4 className="form-title" style={{"color":"#006DCC"}}>Contact Us</h4>
                        
                        <form onSubmit={e => onSubmit(e)}>
                        
                           <div className="form-group"> 
                                <label>Full Name : </label>
                                <input type="text" name="fullname" id="fullname" 
                                    value={fullname}
                                    onChange={e=>onInputChange(e)}
                                    placeholder="Full Name"
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
                                <label>Phone Number: </label>
                                <input type="number" name="phoneno" id="phoneno" 
                                    value={phone}
                                    onChange={e=>onInputChange(e)}
                                    placeholder="phone number"
                                />
                            </div>
                            <br/>


                            <div className="form-group"> 
                                <label>Best time to call: </label>
                                <input type="radio" name="radio" id="Morning" 
                                    value={radio}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="radio"
                                />Morning
                                <input type="radio" name="radio" id="Noon" 
                                    value={radio}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="radio"
                                />Noon
                                <input type="radio" name="radio" id="Evening" 
                                    value={radio}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="radio"
                                />Evening
                            </div>
                            <br/>


                            <div className="form-group"> 
                                <label>Location : </label>
                                <input type="text" name="location" id="location" 
                                    value={location}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="Location"
                                />
                            </div>
                            <br/>

                            
                            {/* <button className="btn btn-primary btn-block" >submit Enqiury</button> */}
 
                        </form>

                        <div>

      



          <div class="card-deck"> 
            <div class="card">
              <div class="card-body">
            
                  {/* <h1>hello</h1> */}
            
                        <h5 className="form-title" style={{"color":"#006DCC"}}>About your Project</h5>
                        <br/>
                        <form onSubmit={e => onSubmit(e)}>
                        
                           <div className="form-group"> 
                                <label>Budget: </label>
                                <input type="range" name="Budget" id="Budget" 
                                    value={Budget}
                                    onChange={e=>onInputChange(e)}
                                    placeholder="Budget"
                                />
                                 <input type="text" name="Budget" id="Budget" 
                                    value={Budget}
                                    onChange={e=>onInputChange(e)}
                                    placeholder="Budget"
                                />
                            </div>
                            <br/>

                            <div className="form-group"> 
                                <label>services needed :(check all apply) </label><br/>
                                <input type="checkbox" name="checkbox" id="checkbox" 
                                    value={checkbox}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="checkbox"
                                />HTMl
                                <input type="checkbox" name="checkbox" id="checkbox" 
                                    value={checkbox}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="checkbox"
                                />PHP<br/>
                                <input type="checkbox" name="checkbox" id="checkbox" 
                                    value={checkbox}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="checkbox"
                                />ASP
                                <input type="checkbox" name="checkbox" id="checkbox" 
                                    value={checkbox}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="checkbox"
                                />Java<br/>
                                <input type="checkbox" name="checkbox" id="checkbox" 
                                    value={checkbox}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="checkbox"
                                />C++
                                <input type="checkbox" name="checkbox" id="checkbox" 
                                    value={checkbox}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="checkbox"
                                />Design
                            </div>
                            <br/>




                            <div className="form-group"> 
                            <label>Current Website : </label>
                                <input type="text" name="website" id="website" 
                                    value={website}
                                    onChange={e=>onInputChange(e)}                                
                                    placeholder="website"
                                />
                            </div>
                            <br/>

                            <div className="form-group"> 
                            <label>start Date : </label>
                                <input type="date" name="date" id="date" 
                                    value={date}
                                    onChange={e=>onInputChange(e)}                                
                                    placeholder="date"
                                />
                            </div>
                            <br/>


                            


                            <div className="form-group"> 
                                <label>number of pages : </label>
                                <input type="text" name="pageno" id="pageno" 
                                    value={pageno}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="pageno"
                                />
                            </div>
                            <br/>


                            <div className="form-group"> 
                                <label>Main website color : </label>
                                <input type="color" name="color" id="color" 
                                    value={color}
                                    onChange={e=>onInputChange(e)}                                    
                                    placeholder="color"
                                />
                            </div>
                            <br/>

                            
                            {/* <button className="btn btn-primary btn-block" >submit Enqiury</button> */}
 
                        </form>

                        <div></div></div></div>
                </div>
              </div>
            </div>
          </div>


          <button className="btn btn-primary btn-block" >submit Enqiury</button>
            </div>
       
   
            
    )
}
export default Contact;