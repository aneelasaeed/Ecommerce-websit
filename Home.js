import React from 'react'
 import { Link } from 'react-router-dom'
 import {  HiOutlineArrowRight } from 'react-icons/hi';
 import {FaTruckMoving} from 'react-icons/fa';
 import {BsArrowRight, BsCurrencyDollar} from 'react-icons/bs';
 import {CiPercent} from 'react-icons/ci';
 import {FaHeadphones} from 'react-icons/fa';
 import {AiOutlineShoppingCart,AiOutlineCloseCircle} from 'react-icons/ai';
 import {BsEye} from 'react-icons/bs';
 import {AiOutlineHeart} from 'react-icons/ai';
 import Homeproduct  from './homeproduct';
 import './Home.css'

const Home = ({detail,view,close ,setClose}) => {
  return (
     <>
      {close ? (
        <div className='product_detail'>
          <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'>
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
            return (
                <div className='productbox' key={curElm.id}>
                 <div className='img_box'>
                 <img src={curElm.Img} alt={curElm.title}></img>
                 </div>
                 <div className='detail'>
                 <h4>{curElm.Cat}</h4>
                 <h2>{curElm.title}</h2>
                 <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8....</p>
                 <h3>{curElm.price}</h3>
                 <button>Add to CART</button>
             </div>
             </div>
            );
            })}
        <div className='productbox'></div>
        </div>
        </div>
      ):null} 

               

                  

                


 

        
        
     <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best NoteBook Collection 2023</h2>
                <Link to='/product' className='link'>shop now <HiOutlineArrowRight/></Link>
             
            </div>
            <div className='img_box'>
                <img src='./img/slider-img.png'alt='sliderimg'></img>
            </div>
        </div>
     </div>
     <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='box-img'>
                <img src='./img/Mobile Phone.png'alt='mobilephone'></img>
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='box-img'>
                <img src='./img/smart watch.png'alt='smart watch'></img>
                </div>
                <div className='detail'>
                    <p>18 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='box-img'>
                <img src='./img/headphone.png'alt='headphone'></img>
                </div>
                <div className='detail'>
                    <p>52 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='box-img'>
                <img src='./img/cpu heat.jpg'alt='cpu heat'></img>
                </div>
                <div className='detail'>
                    <p>63 products</p>
                </div>
            </div>
        </div>
     </div>
     <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <FaTruckMoving/>
                </div>
                <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>Order above $1000</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <BsCurrencyDollar/>
                </div>
                <div className='detail'>
                    <h3>Reture & Refund</h3>
                    <p>Money Back Gaurently</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <CiPercent/>
                </div>
                <div className='detail'>
                    <h3>Memmber Discount</h3>
                    <p>On every Order</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <FaHeadphones/>
                </div>
                <div className='detail'>
                    <h3>Customer Support</h3>
                    <p>Every time Call Support</p>
                </div>
            </div>
        </div>

     </div>
     <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
            {
              Homeproduct .map((curElm) =>
                {
                return (
                     <div className=' box' key={curElm.id}>
                        <div className='img_box'>
                            <img src={curElm.Img}alt={curElm.title}></img>
                            <div className='icon'>
                                <li><AiOutlineShoppingCart/></li>
                           <li onClick={() => view(curElm)}>
                            <BsEye/></li>
                                <li><AiOutlineHeart/></li>
                            </div>
                        </div>
                        <div  className='detail'>
                            <p>{curElm.Cat}</p>
                            <h3>{curElm.title}</h3>
                            <h4>{curElm.price}</h4>
                        </div>
                        
                     </div>
                )

                })  
            }
        </div>
     </div>
    <div className='banner'>
        <div className='container'>
        <div className='detail'>
            <h4>LATEST TECHNOOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen-2021</h3>
            <p>$986</p>
            <Link to='/product' className='link'>shop Now<BsArrowRight/></Link>
        </div>
        <div className='img_box'> 
            <img src='./img/slider-img.png' alt='sliderimg'></img>
        </div>
    </div>
    </div>
     </>
  )
}

export default Home
