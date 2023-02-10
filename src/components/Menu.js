
import  './ComponentStyle/MenuStyle.css';  
import Button from './ButtonReusableComponent';
import Input from './InputReusableComponent';
import { Link } from 'react-router-dom';
function Menu(){
    
    return <div className="navbar">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <nav>
          <Link to ="/">Home</Link>
          <Link to ="/products">Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/my-profile"><i className="fa fa-fw fa-user"></i> MyProfile</Link>
       
    <form action="/" >
      <div className="search">
      <Input className={"menuInput"} style={{ backgroundColor: "white", color: "purple" }} id={"searchText"} type={"text"} placeholder={"Search..."}  ></Input>
      <Button style={{ backgroundColor: "white", color: "purple", height: "32px", width:"50px" }} type="submit" className="rbutton2" >Click me</Button>
      </div>
    </form>
  
 </nav> 
       
         
      </div>

  }
  export default Menu;