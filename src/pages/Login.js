

import LoginForm from "../components/LoginForm";
import React, {useState} from 'react';

function Login() {
const [state, setState] = React.useState(null);

 const handleCallback = (idC,nameC) =>{
    this.setState({id:idC,name:nameC})
}
    return (
      <div>

     <LoginForm ></LoginForm>
      </div>
    );
  }
  
  export default Login;
  