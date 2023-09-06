import {useContext} from "react";
import {UserContext} from '../App';
function Sidebar(){
    const {cat,setcat,card,setcard} = useContext(UserContext);


    return(
        <section className="sidebar">
            <h1>Category</h1>

            <div className="c-items" >

            <label className="l-con">
                    <input type="radio" name="option" value="products" onChange={(e)=>{setcat(e.target.value)}} />
                    All
                </label>
                <label className="l-con">
                    <input type="radio" name="option" value="jewelery" onChange={(e)=>{setcat(e.target.value)}} />
                    jewelery
                </label>
                <label className="l-con">
                    <input type="radio" name="option" value="electronics" onChange={(e)=>{setcat(e.target.value)}}/>
                    electronics
                </label>
                <label className="l-con">
                    <input type="radio" name="option" value="men's clothing" onChange={(e)=>{setcat(e.target.value)}} />
                    men's clothing
                </label>
                <label className="l-con">
                    <input type="radio" name="option" value="women's clothing" onChange={(e)=>{setcat(e.target.value)}} />
                    women's clothing
                </label>
            </div>

        
        </section>
    );

}
export default Sidebar;