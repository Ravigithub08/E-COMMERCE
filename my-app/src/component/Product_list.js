import Card from "./Card";
import {useEffect,useState,useContext} from "react";
import Header from "./header";
import {UserContext} from '../App';
function Product_list({}){

    const [data,setdata] = useState([]); 
    const {cat,setcat,card,setcard} = useContext(UserContext);
    
  console.log(cat);
  useEffect(()=>{

      console.log('enter');
      if(cat == "products"){
        
        
        
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setdata(json))
            console.log(data)

      }
      else{
        fetch(`https://fakestoreapi.com/products/category/${cat}`)
        .then(res=>res.json())
        .then(json=>setdata(json))
        

      }

   

  },[cat]);

    return(
        <div className="product_list" >
            
            {data.map((item, index)=>( <Card product={item} key={index} setcard={setcard} /> ))}
                       
        </div>
    );

};
export default Product_list;