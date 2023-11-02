import React from 'react'
import {BsFacebook } from 'react-icons/bs';
import {BiLogoInstagram} from 'react-icons/bi';
import {BiLogoTwitter } from 'react-icons/bi';
import {BsYoutube } from 'react-icons/bs';
import './footer.css'
 
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logo.svg'alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>we are a designer and developers that create high quality wordpress</p>
                    <div className='icon'>
                        <li><BsFacebook/></li>
                        <li><BiLogoInstagram/></li>
                        <li><BiLogoTwitter/></li>
                        <li><BsYoutube/></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>MY Account</h3>
                <ul>
                    <li>account</li>
                    <li>order</li>
                    <li>cart</li>
                    <li>Shipping</li>
                    <li>return</li>

                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Term & Condition</li>
                </ul>
            </div>
        </div>
    </div>


    </>
  )
}

export default Footer
