import { Link } from "react-router-dom";
import {FaRegStar,FaStar} from "react-icons/fa";
function Card({product,setcard}) {
    
    return(
    
        
        <div className="card">
            
            <img src={product.image} style={{width:"300px",height:"300px"}} />
            
            <h3 className="title">{product.title}</h3>
            <p className="prize">{product.price}</p>
            <div style={{display:"flex",alignItems:"center"}}>{Array.from({length:Math.floor(product.rating.rate)},(e,index)=>(<span><FaStar size={30} color="yellow" /></span>))}
                {Array.from({length:5 - Math.floor(product.rating.rate)},(e,index)=>(<span><FaRegStar size={30} color="yellow" /></span>))}
                <span className="rate">{product.rating.rate}</span>
            
            </div>
            
            <Link to={"/Card_details/"+product.id} ><button className="btn" >Add Cart</button></Link>
        </div>
    
    );
}
export default Card;