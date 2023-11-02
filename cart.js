import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css'

const Cart = ( cart,setCart) => {
  return (
    <>
    <div className='cartcontainer'>
      {cart.length===0 && 
      <div className='emptycart'>
      <h2 className='empty'>Cart is Empty</h2>
      <Link to='/product'></Link>
      </div>
       }
      <div className='contant'>
        {
          cart.map((curElm) =>
          {
            return(
              <div className='cart_item'>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.title}></img>
                  </div>
            <div className='detail'>
              <h4>{curElm.Cat}</h4>
              <h3>{curElm.title}</h3>
              <p>{curElm.price}</p>
              <button><AiOutlineClose/></button>
              </div>
              </div>
            )
          })
        }
       
      </div>
    </div>
    </>

   )
}

export default Cart   