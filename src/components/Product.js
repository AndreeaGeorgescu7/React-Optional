import Image from "./ImgReusableComponent";
import  './ComponentStyle/ProductListStyle.css';

function Product(props){
    
    return <div>
       <div className="productDescription">
         <Image source={props.image} className={"img"} width={120} height={120} padding={240} />
        
          <div className="productName">{props.name}</div>
         <div> {props.price} Lei</div>  
          </div>
      </div>

  }
  export default Product;