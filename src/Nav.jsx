
import React, { useState } from 'react';
import images from './constant/images';
import { FaFacebookF, FaTwitter, FaPinterestSquare, FaGooglePlusG, FaInstagram } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-router';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex flex-col w-full'>

      <div className='flex items-center justify-between bg-[#f5f5f5] px-4 md:px-9 '>
        <div className='hidden md:flex items-center text-[#8e8e8e]'>
          <Link to="/" className='hover:text-[#e65540] p-[10px]'><FaFacebookF size={18} /></Link>
          <Link to="/" className='hover:text-[#e65540] p-[10px]'><FaTwitter size={18} /></Link>
          <Link to="/" className='hover:text-[#e65540] p-[10px]'><FaPinterestSquare size={18} /></Link>
          <Link to="/" className='hover:text-[#e65540] p-[10px]'><FaGooglePlusG size={18} /></Link>
          <Link to="/" className='hover:text-[#e65540] p-[10px]'><FaInstagram size={18} /></Link>
        </div>
        <p className='text-xs md:text-sm text-[#8e8e8e] text-center'>
          Free shipping for standard order over $100
        </p>
        <div className='hidden md:flex items-center space-x-3 text-[#8e8e8e]'>
          <p className='text-sm'>fashe@example.com</p>
          <select className='border-none px-2 text-sm bg-transparent'>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="PKR">PKR</option>
            <option value="CAD">CAD</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
      </div>

      <div className='flex items-center justify-between px-4 md:px-[50px] h-[80px]'>
        <Link to="/">
          <img src={images.logo} alt="Logo" className='h-[27px] w-[120px]' />

        </Link>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        <ul className={`flex-col md:flex-row md:flex items-center gap-4 md:gap-0 absolute md:static left-0 top-[80px] bg-white md:bg-transparent w-full md:w-auto px-4 md:px-0 transition-all duration-300 z-10 ${isOpen ? 'flex' : 'hidden'}`}>
          <Link to="/home">
            <li className="px-[15px] py-[20px] hover:text-[#e65540] text-center cursor-pointer transition-all duration-200">
              Home
            </li>
          </Link>

          <Link to="/shop">
            <li className="px-[15px] py-[20px] hover:text-[#e65540] text-center cursor-pointer transition-all duration-200">
              Shop
            </li>
          </Link>

          <Link to="/sale">
            <li className="px-[15px] py-[20px] hover:text-[#e65540] text-center cursor-pointer transition-all duration-200">
              Sale
            </li>
          </Link>

          <Link to="/features">
            <li className="px-[15px] py-[20px] hover:text-[#e65540] text-center cursor-pointer transition-all duration-200">
              Features
            </li>
          </Link>

          <Link to="/blog">
            <li className="px-[15px] py-[20px] hover:text-[#e65540] text-center cursor-pointer transition-all duration-200">
              Blog
            </li>
          </Link>

          <Link to="/about">
            <li className="px-[15px] py-[20px] hover:text-[#e65540] text-center cursor-pointer transition-all duration-200">
              About
            </li>
          </Link>

          <Link to="/contact">
            <li className="px-[15px] py-[20px] hover:text-[#e65540] text-center cursor-pointer transition-all duration-200">
              Contact
            </li>
          </Link>
        </ul>

        <div className='hidden md:flex items-center space-x-2 text-[#aeaeae]'>
          <span className='border-r-2 pr-2'>
            <Link to="/login">
              <IoPersonCircleOutline className='w-[27px] h-[27px]' />
            </Link>
          </span>
          <span>
            <Link to="/cart">
              <HiOutlineShoppingBag className='w-[27px] h-[27px]' />
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
