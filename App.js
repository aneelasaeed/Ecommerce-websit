
import React, {useState} from 'react'
import Nav from "./components/Nav";
 import Rout from './components/rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer';
import Productdetail from './components/Productdetail';


const App = () => {
  const[cart, setCart]= useState([])
  const [close, setClose] = useState(false)
  const[detail,setDetail]=useState([])
const[product, setProduct] = useState(Productdetail)
const searchbtn =(product) =>
{
  const change = Productdetail.filter((x) =>
  
{
   return x.Cat === product
})
 setProduct(change)
}
const view =(product)=>
{
   setDetail ([{...product}])
   setClose(true)
}
   const addtocart=(product)=> 
   {  
    
   }

  return (
    <>
    <BrowserRouter> 
    <Nav searchbtn={searchbtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}  />
    </BrowserRouter>
    <Footer/>
   
    </>
  );
};

export default App;  
