import React, {useState} from 'react';
import Input from './InputReusableComponent';
import Button from './ButtonReusableComponent';
import  './ComponentStyle/RegistrationStyle.css';

import { database } from '../Firebase';
import {ref,push,child,update} from "firebase/database";

function LoginForm() {

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [user, setUser] = React.useState(null);
  
  
    const handleInputChange = (e) => {
        const {id , value} = e.target;
    
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
  
        
    }

        const handleLogin = () =>{
           
            setUser({ id: '1', name: 'User' }); 
           
            
        }
    return(
        <form className="form">
        <h3 id="regTitle">LOGIN</h3>
        
              <div className="form2">
  
                  <div className="form_label" >Email </div>
                  <Input className="form_input" id="email" type={"email"}  handleChange = {(e) => handleInputChange(e)}/> 
            
           
                  <div className="form_label" >Password </div>
              <Input className="form_input" id="password" type={"password"}  handleChange = {(e) => handleInputChange(e)}/>
            
              <br></br>
        <br></br>
              <Button style={{ backgroundColor: "white", color: "purple", height: "20px", width:"50px" }} handleClick={()=>handleLogin()}  type={"submit"} className={"rbutton"} >Clickk</Button>
           </div>
         
      </form>   
   
    )       
}
export default LoginForm;