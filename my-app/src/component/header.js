 import { useState } from "react";
function Header(){

    const [isclick,setclick]=useState(false);

    return(
        <div className="header" >
            <span>Shop Kart</span>


            <nav>
                <ul>
                    <li>Home</li>
                    <li className="cat-menu" onMouseOver={()=>{setclick(true)}} onMouseOut={()=>{setclick(false)}} >Category
                    <div style={{height : isclick ? "320px":"0"}}>
                        <ul>
                            <li>All</li>
                            <li>Men`s</li>
                            <li>Women`s</li>
                            <li>Jewlery</li>
                            <li>Electronics</li>
                        </ul>
                    </div>
                    
                    </li>
                    <li>About</li>
                    <li>Sign in</li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;