import Product from "./Product";
import img1 from "../images/pinkPalette.jpg"
import img2 from "../images/purplePalette.webp"
import img3 from "../images/ruj2.webp"
import img4 from "../images/ruj3.png"
import img5 from "../images/rimel1.webp"
import img6 from "../images/rimel2.jpeg"
import img7 from "../images/highlighter1.jpg"
import img8 from "../images/highlighter2.jpg"
import  './ComponentStyle/ProductListStyle.css';

function ProductsList(){
    const IMAGES = [
        img1,img2
       ];
       
       
    return <div className="container">
        
      <Product name=" Soft Beauty" price="200" image={img1} />
       <Product name=" Sweet Kiss" price="70" image={img4}  />   
    
    
      <Product name=" Black Drama" price="120" image={img6}  />   
       <Product name=" Lady Like" price="110" image={img3}  />  
        <Product name=" Pink  Star" price="30" image={img8}  />   
      <Product name=" Lash Love" price="55" image={img5}  />   
      
      <Product name=" Diamond" price="50" image={img7}  />   
        <Product name=" Pink Land" price="150" image={img2}  />   
      
    
      
      </div>
  }
  export default ProductsList;