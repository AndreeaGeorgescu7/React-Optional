const Input = (props) => {
    return <input style={props.style}  onChange={props.handleChange} id={props.id}  type={props.type} className={props.className}   placeholder={props.place} />;
  };
  
export default Input;