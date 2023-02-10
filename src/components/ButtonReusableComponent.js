
const Button= (props)  => {
  return <button style={props.style}  onClick={props.handleClick}   type={props.type} className={props.className} >Click</button>;
};
  
export default Button;


