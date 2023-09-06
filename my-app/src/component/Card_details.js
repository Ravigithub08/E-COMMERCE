import { Button } from "bootstrap";
import {FaRegStar,FaStar} from "react-icons/fa";
import {useContext,useEffect,useState} from "react";
import {UserContext} from '../App';
import { useParams } from "react-router-dom";

function Card_details(){
    const {cat,setcat,card,setcard} = useContext(UserContext);
    const [p_data,set_p_data] = useState({})

    const {id}=useParams();
    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>set_p_data(json))

        
     },[p_data])
     if (p_data.rating){
        
        console.log(p_data.rating.rate)
     }

    return(
        <section className="card-d-wrap">

            <div style={{textAlign:"center"}}>
                <img src={p_data.image} style={{width:"50%",minHeight:"80%"}} />

            </div>
            <div className="card-content">
                <h1 style={{marginBottom:"10px"}} >{p_data.title}</h1>
                
                {/* here we use ternary operator for check data fully fetched or not afte that we get rate value*/ }

                {p_data.rating?<div style={{display:"flex",alignItems:"center"}}>{Array.from({length:Math.floor(p_data.rating.rate)},(e,index)=>(<span><FaStar size={30} color="yellow" /></span>))}
                {Array.from({length:5 - Math.floor(p_data.rating.rate)},(e,index)=>(<span><FaRegStar size={30} color="yellow" /></span>))}
                <span className="rate">{p_data.rating.rate}</span>
                </div>:<p>loading</p>}

               
                <p className="prize">{p_data.price}</p>

               
                
                <div>
                    <span><button style={{padding:"10px 15px 10px 15px",fontSize:"20px", fontWeight:"700",backgroundColor:"red",border:"none"}}>+</button></span>
                    <span style={{padding:"10px",fontSize:"20px", fontWeight:"700"}}>1</span>
                    <span><button style={{padding:"10px 17px 10px 17px",fontSize:"20px", fontWeight:"700",backgroundColor:"red",border:"none"}} >-</button></span>
                    <span  style={{marginLeft:"10px",fontSize:"20px"}}>Quantity</span>
                </div>

                <div className="buy-con"><button>Add Cart</button><button>Buy Now</button></div>
                <h3>Product Description</h3>
                <p>{p_data.description}</p>


            </div>


            
        </section>
    );
}
export default Card_details;