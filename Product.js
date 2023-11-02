import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import Productdetail from './Productdetail';
import './Product.css';

const Product = ({ product, setProduct, detail, view, close, setClose ,addtocart }) => {
  const filterProduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };

  const resetProducts = () => {
    setProduct(Productdetail);
  };

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
      ) : null}

      <div className='products'>
        <h3># Product</h3>
        <p>Home .Product</p>
        <div className='container'>
          <div className='filter'>
            <div className='categories'>
              <h3>categories</h3>
              <ul>
                <li onClick={() => resetProducts()}>All products</li>
                <li onClick={() => filterProduct("Tablet")}>Tablet</li>
                <li onClick={() => filterProduct("smart watch")}>smart watch</li>
                <li onClick={() => filterProduct("Headphone")}>Headphone</li>
                <li onClick={() => filterProduct("Camera")}>Camera</li>
                <li onClick={() => filterProduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className='productbox'>
            <div className='contant'>
              {product.map((curElm) => {
                return (
                  <div className='box' key={curElm.id}>
                    <div className='img_box'>
                      <img src={curElm.Img} alt={curElm.title}></img>
                      <div className='icon'>
                        <li onClick={() => addtocart(curElm)  }>
                          <AiOutlineShoppingCart />
                        </li>
                        <li onClick={() => view(curElm)}>
                          <BsEye />
                        </li>
                        <li>
                          <AiOutlineHeart />
                        </li>
                      </div>
                    </div>
                    <div className='detail'>
                      <p>{curElm.Cat}</p>
                      <h3>{curElm.title}</h3>
                      <h4>{curElm.price}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
