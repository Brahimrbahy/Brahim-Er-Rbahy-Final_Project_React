
import images from './constant/images';
import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestSquare, FaGooglePlusG, FaInstagram } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav className='flex flex-col'>
      <div className='flex items-center justify-between bg-[#f5f5f5] px-9'>
        <div className='hidden md:flex items-center text-[#8e8e8e]'>
          <Link to="/" className='hover:text-[#e65540] p-[10px]'><FaFacebookF size={18} /></Link>
          <Link to="/" className='hover:text-[#e65540] p-[10px]'><FaTwitter size={18} /></Link>
          <Link to="/" className='hover:text-[#e65540] p-[10px]'><FaPinterestSquare size={18} /></Link>
          <Link to="/" className='hover:text-[#e65540] p-[10px]'><FaGooglePlusG size={18} /></Link>
          <Link to="/" className='hover:text-[#e65540] p-[10px]'><FaInstagram size={18} /></Link>
        </div>
        <div>
          <p className='text-[#8e8e8e]'>
            Free shipping for standard order over $100
          </p>
        </div>
        <div className='hidden md:flex items-center space-x-3 text-[#8e8e8e]'>
          <p>fashe@example.com</p>
          <select name="" id="" className='border-none px-2 ring-offset-white'>
            <option value="" className='focus:bg-[#e65540] hover:bg-[#e65540]'>EUR</option>
            <option value="" className='focus:bg-[#e65540] hover:bg-[#e65540]'>USD</option>
            <option value="" className='focus:bg-[#e65540] hover:bg-[#e65540]'>GBP</option>
            <option value="" className='focus:bg-[#e65540] hover:bg-[#e65540]'>PKR</option>
            <option value="" className='focus:bg-[#e65540] hover:bg-[#e65540]'>CAD</option>
            <option value="" className='focus:bg-[#e65540] hover:bg-[#e65540]'>JPY</option>
          </select>
        </div>
      </div>
      <div className='flex justify-between px-[50px] items-center h-[80px]'>
        <div>
          <img src={images.logo} alt="Logo" className='h-[27px] w-[120px]' />
        </div>
        <div>
          <ul className='flex flex-col md:flex-row items-center pr-30'>
            <Link to="/home"><li className='px-[15px] py-[20px] hover:text-[#e65540] cursor-pointer transition-all duration-200'>Home</li></Link>
            <Link to="/shop"><li className='px-[15px] py-[20px] hover:text-[#e65540] cursor-pointer transition-all duration-200'>Shop</li></Link>
            <Link to="/sale"><li className='px-[15px] py-[20px] hover:text-[#e65540] cursor-pointer transition-all duration-200'>Sale</li></Link>
            <Link to="/features"><li className='px-[15px] py-[20px] hover:text-[#e65540] cursor-pointer transition-all duration-200'>Features</li></Link>
            <Link to="/blog"><li className='px-[15px] py-[20px] hover:text-[#e65540] cursor-pointer transition-all duration-200'>Blog</li></Link>
            <Link to="/about"><li className='px-[15px] py-[20px] hover:text-[#e65540] cursor-pointer transition-all duration-200'>About</li></Link>
            <Link to="/contact"><li className='px-[15px] py-[20px] hover:text-[#e65540] cursor-pointer transition-all duration-200'>Contact</li></Link>
          </ul>
        </div>
        <div className='flex items-center space-x-2 text-[#aeaeae]'>
          <span className='border-r-2 pr-2'>
            <IoPersonCircleOutline className='w-[27px] h-[27px]' />
          </span>
          <span>
            <HiOutlineShoppingBag className='w-[27px] h-[27px]' />
          </span>

        </div>
      </div>
    </nav>
  );
}

export default Nav;




