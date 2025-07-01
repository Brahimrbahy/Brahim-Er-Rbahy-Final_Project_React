
import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='w-full p-[45px] flex flex-col items-center bg-[#f0f0f0] text-sm text-[#555]'>
            <div className='w-full flex flex-col md:flex-row md:justify-between gap-6'>
                <div className='pt-[30px] px-[15px]'>
                    <h2 className='font-bold text-base pb-4'>GET IN TOUCH</h2>
                    <p className='pb-4 leading-[1.6]'>
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018<br />
                        or call us on (+1) 96 716 6879
                    </p>
                    <div className='flex space-x-2'>
                        <Link to="/" className='hover:text-[#e65540] p-2 text-[#555]'><FaFacebookF size={18} /></Link>
                        <Link to="/" className='hover:text-[#e65540] p-2 text-[#555]'><FaTwitter size={18} /></Link>
                        <Link to="/" className='hover:text-[#e65540] p-2 text-[#555]'><FaPinterestSquare size={18} /></Link>
                        <Link to="/" className='hover:text-[#e65540] p-2 text-[#555]'><FaGooglePlusG size={18} /></Link>
                        <Link to="/" className='hover:text-[#e65540] p-2 text-[#555]'><FaInstagram size={18} /></Link>
                    </div>
                </div>

                <div className='pt-[30px] px-[15px] min-w-[150px]'>
                    <h2 className='font-bold text-base pb-4'>CATEGORIES</h2>
                    <ul className='space-y-1 flex flex-col gap-[9px]'>
                        <li className='hover:text-[#e65540] cursor-pointer'>Men</li>
                        <li className='hover:text-[#e65540] cursor-pointer'>Women</li>
                        <li className='hover:text-[#e65540] cursor-pointer'>Dresses</li>
                        <li className='hover:text-[#e65540] cursor-pointer'>Sunglasses</li>
                    </ul>
                </div>

                <div className='pt-[30px] px-[15px] min-w-[150px]'>
                    <h2 className='font-bold text-base pb-4'>LINKS</h2>
                    <ul className='space-y-1 flex flex-col gap-[9px]'>
                        <li className='hover:text-[#e65540] cursor-pointer'>Search</li>
                        <li className='hover:text-[#e65540] cursor-pointer'>About Us</li>
                        <li className='hover:text-[#e65540] cursor-pointer'>Contact Us</li>
                        <li className='hover:text-[#e65540] cursor-pointer'>Returns</li>
                    </ul>
                </div>

                <div className='pt-[30px] px-[15px] min-w-[150px]'>
                    <h2 className='font-bold text-base pb-4'>HELP</h2>
                    <ul className='space-y-1 flex flex-col gap-[9px]'>
                        <li className='hover:text-[#e65540] cursor-pointer'>Track Order</li>
                        <li className='hover:text-[#e65540] cursor-pointer'>Returns</li>
                        <li className='hover:text-[#e65540] cursor-pointer'>Shipping</li>
                        <li className='hover:text-[#e65540] cursor-pointer'>FAQs</li>
                    </ul>
                </div>

                <div className='pt-[30px] px-[15px] flex gap-3 flex-col w-[28%]'>
                    <h2 className='font-bold text-base pb-4'>NEWSLETTER</h2>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className='pb-3 px-4 py-2 border-b-2 border-[#ccc] focus:outline-none focus:border-[#e65540]'
                    />
                    <button className='hover:bg-[#e65540] bg-black text-white py-2 px-4 rounded-[50px] transition h-[46px] w-[179px]'>
                        Subscribe
                    </button>
                </div>
            </div>

            <p className='pt-8 text-center text-xs text-[#777]'>
                Copyright <span className='hover:text-[#e65540] cursor-pointer'>
                    © 2022 Shopify Theme Developed by MassTechnologist
                </span> All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
