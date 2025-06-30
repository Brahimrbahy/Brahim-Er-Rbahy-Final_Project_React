import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';
import images from './constant/images';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const Nav = () => {
    return (
        <nav className='flex flex-col'>
            <div className='flex items-center'>
                <div className='flex'>
                    <Link to="/"><FaFacebookF /></Link>
                    <Link to="/"><FaTwitter /></Link>
                    <Link to="/"><FaPinterestSquare /></Link>
                    <Link to="/"><FaGooglePlusG /></Link>
                    <Link to="/"><FaInstagram /></Link>

                </div>
                <div>
                    <img src={images.logo} alt="" />
                </div>
                <div className='flex'>
                    <p>fashe@example.com</p>
                    <select name="" id="">
                        <option value="">EUR</option>
                        <option value="">USD</option>
                        <option value="">GBP</option>
                        <option value="">PKR</option>
                        <option value="">CAD</option>
                        <option value="">JPY</option>
                    </select>
                    <span className='border-r-1'><IoPersonCircleOutline /></span>
                    <span><HiOutlineShoppingBag /></span>
                </div>

            </div>
            <div>
              <ul className='flex'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Sale</li>
                    <li>Features</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
           
        </nav>
    );
}

export default Nav;
