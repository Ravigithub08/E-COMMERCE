
import './App.css';
import Header from './component/header';
import Product_list from './component/Product_list';
import Sidebar from './component/Sidebar';
import Card_details from './component/Card_details';
import {useEffect,useState,createContext} from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './component/Home';


export const UserContext = createContext();

function App() {

const [cat,setcat]=useState('products');
const [card,setcard]=useState({});




  
  return (
    
    <div>
      <Header />
      <BrowserRouter>
    <UserContext.Provider value={{cat,setcat,card,setcard}}>
    <Routes>
    <Route path='/' element={<Home/>} />

      <Route path='/product' element={<>  <Sidebar/> <Product_list /> </>} />
      <Route path='/Card_details/:id' element={<Card_details />} />
    </Routes>
    </UserContext.Provider>
  </BrowserRouter>
    </div>
  
  );
}

export default App;
