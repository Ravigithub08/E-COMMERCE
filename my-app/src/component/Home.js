import img from './woman.png';
import { useEffect,useState } from "react";
import Card from './Card';
import { Avatar,loremIpsum } from 'react-lorem-ipsum';
import img2 from './pexels.jpg';
import img3 from './collection-03.jpg';
import Star from './star';
function Home(){


    
    const [data,setdata]=useState([]);
    useEffect(()=>{

        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>setdata(json))

    })




return(
    <>
    <div className="hero">
        <div className='h1'>
            <img src={img2} style={{width:"100%",height:'calc(100vh - 110px)',objectFit:"cover"}}></img>
            <div className='hero-text'>
            <h1>Selling only the best things <br/> online</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholderbr text commonly used to<br/> 
            demonstrate the visual form of a document or a typeface without relying on meaningful content.<br/>
            demonstrate the visual form of a document or a typeface without relying on meaningful content</p>

            <button>Explore</button>
            </div>
            
            

        </div>

        <div className='brand' style={{display:"flex",justifyContent:"space-around"}}>
            <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-006.png"></img>
            <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-004.png"></img>
            <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-003.png"></img>
            <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-001.png"></img>
            <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-008.png"></img>
        
        </div>

    </div>

    <div className='heading' style={{display:"flex",alignItems:"center",flexDirection:"column",gap:"5px",marginBottom:"20px",marginTop:"50px"}}>
        <p>Popular Products</p>
        <h1>Trending Now</h1>
    </div>

    <div className="product_trending" >
            
            {data.map((item, index)=>( <Card product={item} key={index}  /> ))}
                       
    </div>

    <div className='heading' style={{display:"flex",alignItems:"center",flexDirection:"column",gap:"5px",marginBottom:"20px",marginTop:"50px"}}>
        
        <h1>Why Chosse Us</h1>
    </div>


    <div style={{display:"flex",justifyContent:"center",marginTop:"50px",marginBottom:"50px",backgroundColor:"burlywood",paddingBottom:"30px",paddingTop:"30px"}}>
       
    <div className='choose-us'>
        
        <div style={{lineHeight:"30px"}}>
            <h2 style={{marginBottom:"10px"}}>Fast Delivery</h2>
           <p>{loremIpsum({avgSentencesPerParagraph : 3})}</p>
            
        </div>
        <div style={{lineHeight:"30px"}}>
            <h2 style={{marginBottom:"10px"}}>Free Shipping</h2>
            <p>{loremIpsum({avgSentencesPerParagraph : 3})}</p>
            
        </div>
        <div style={{lineHeight:"30px"}}>
            <h2 style={{marginBottom:"10px"}}>Easy Returns</h2>
            <p>{loremIpsum({avgSentencesPerParagraph : 3})}</p>
            
        </div>

    </div>
    </div>

    <div className='about'>
        <div className='about-1'>
            <div></div>
            <img src={img3} alt='about-img'  />
        </div>
        <div className='about-2'>
            <h1 style={{marginBottom:"20px"}}>About Us</h1>
            <p>{loremIpsum()}</p>
        </div>

    </div>

    <div className='heading' style={{display:"flex",alignItems:"center",flexDirection:"column",gap:"5px",marginBottom:"20px",marginTop:"50px"}}>
        
        <h1>Customer Reviews</h1>
    </div>


    <div className='review-con'>
    <div className='review'>
        <Star/>
        <p style={{textAlign:"center",fontWeight:"500"}}>{loremIpsum({avgSentencesPerParagraph:3})}</p>
        <p>John</p>
    </div>
    <div className='review'>
    <Star/>
        <p style={{textAlign:"center",fontWeight:"500"}}>{loremIpsum({avgSentencesPerParagraph:3})}</p>
        <p>John</p>
    </div>
    <div className='review'>
    <Star/>
        <p style={{textAlign:"center",fontWeight:"500"}}>{loremIpsum({avgSentencesPerParagraph:3})}</p>
        <p>John</p>
    </div>
    <div className='review'>
    <Star/>
        <p style={{textAlign:"center",fontWeight:"500"}}>{loremIpsum({avgSentencesPerParagraph:3})}</p>
        <p>John</p>
    </div>

    </div>

    <div className='footer'> 
        <div className='f-items'>
            <h1>Shop Kart</h1>
        </div>
        <div className='f-items'>
            
        </div>
        <div className='f-items'></div>
        <div className='f-items'>
        <h2>Links</h2>
        <ul>
            <li>Home</li>
            <li>Category</li>
            <li>Services</li>
            <li>About</li>
        </ul>
        </div>
        <div className='f-items'>
        <h2>Category</h2>
        <ul>
            <li>All</li>
            <li>Electronics</li>
            <li>Mens</li>
            <li>Womens</li>
        </ul>
        
        </div>
        <div className='f-items'>
        <h2>Subscribe</h2>
            <div><input type='text' placeholder='Enter Email'/></div>
            
            <button>Subscribe</button>
        </div>
    </div>


    </>
);

}
export default Home;