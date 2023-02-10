import React, {useState} from 'react';
import Input from './InputReusableComponent';
import Button from './ButtonReusableComponent';
import  './ComponentStyle/RegistrationStyle.css';

import { database } from '../Firebase';
import {ref,push,child,update} from "firebase/database";

function RegistrationForm() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
  

   
   

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

        
    }
 
      

        const handleSubmit = () =>{
            let obj = {
                    firstName : firstName,
                    lastName:lastName,
                    email:email,
                    password:password,
                    confirmPassword:confirmPassword,
                }       
        
            const newPostKey = push(child(ref(database), 'posts')).key;
            const updates = {};
            updates['/' + newPostKey] = obj

            return update(ref(database), updates);
        }
    return(
      <form className="form">
        <h3 id="regTitle">REGISTER</h3>
       
        
              <div className="form2">
                  <div className="form_label">First Name </div>
                  <Input className="form_input" id="firstName" type={"text"}  handleChange = {(e) => handleInputChange(e)}/>
             
          
                  <div className="form_label" >Last Name </div>
                  <Input className="form_input" id="lastName" type={"text"}  handleChange = {(e) => handleInputChange(e)}/>
            
           
                  <div className="form_label" >Email </div>
                  <Input className="form_input" id="email" type={"email"}  handleChange = {(e) => handleInputChange(e)}/> 
            
           
                  <div className="form_label" >Password </div>
              <Input className="form_input" id="password" type={"password"} handleChange = {(e) => handleInputChange(e)}/>
            
          
                  <div className="form_label" >Confirm Password </div>
                  <Input className="form_input" id="confirmPassword" type={"password"}  handleChange = {(e) => handleInputChange(e)}/>
             
           <br></br>
           <br></br>
              <Button style={{ backgroundColor: "white", color: "purple", height: "20px", width:"50px" }} handleClick={()=>handleSubmit()}  type={"submit"}  className={"rbutton"}> Click!!  </Button>
           <br></br>
           </div>
         
      </form>  
    
    )       
}
export default RegistrationForm;