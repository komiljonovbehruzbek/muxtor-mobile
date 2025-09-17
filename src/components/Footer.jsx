import React from 'react';

import Logo from "../assets/main-logo.png";

import { GoLink } from "react-icons/go";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className='w-full pt-6 sm:pt-10 px-4 sm:px-15 bg-gray-50 dark:bg-gray-900 flex flex-col'>
            <div className="w-full text-white p-4 sm:p-6">
                <img src={Logo} alt="SmartShop logo" className='h-12 sm:h-15 duration-300 hover:scale-[1.07] cursor-pointer mx-auto' />
                <p className='text-base sm:text-[18px] text-center sm:text-center'><span className='text-xl sm:text-2xl font-semibold'>SMART</span><span className='text-xl sm:text-2xl font-semibold text-yellow-400'>SHOP</span> &#8212; Sizning ishonchli texnologiya hamkoringiz. Original mahsulotlar, tezkor servis va do'stona yordam — hammasi bir joyda.</p>
                <div className="w-full flex flex-col sm:flex-row py-4 sm:py-5">
                    <ul className='w-full sm:w-[50%] flex gap-3 flex-col text-black sm:text-white mb-4 sm:mb-0'>
                        <h2 className='text-xl sm:text-2xl text-yellow-400 font-semibold text-center sm:text-left'>HAVOLALAR</h2>
                        <li>
                            <a
                                href="#home"
                                className='flex gap-2 items-center text-white group'
                            >
                                <GoLink className='text-3xl sm:text-4xl rounded-full p-1 sm:p-2 duration-500 group-hover:bg-yellow-400 group-hover:text-black group-hover:ml-2 sm:group-hover:ml-3' />
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className='flex gap-2 items-center text-white group'
                            >
                                <GoLink className='text-3xl sm:text-4xl rounded-full p-1 sm:p-2 duration-500 group-hover:bg-yellow-400 group-hover:text-black group-hover:ml-2 sm:group-hover:ml-3' />
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#products"
                                className='flex gap-2 items-center text-white group'
                            >
                                <GoLink className='text-3xl sm:text-4xl rounded-full p-1 sm:p-2 duration-500 group-hover:bg-yellow-400 group-hover:text-black group-hover:ml-2 sm:group-hover:ml-3' />
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className='flex gap-2 items-center text-white group'
                            >
                                <GoLink className='text-3xl sm:text-4xl rounded-full p-1 sm:p-2 duration-500 group-hover:bg-yellow-400 group-hover:text-black group-hover:ml-2 sm:group-hover:ml-3' />
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className='w-full sm:w-[50%] flex flex-col'>
                        <h2 className='text-xl sm:text-2xl text-yellow-400 font-semibold text-center sm:text-left'>BIZ IJTIMOIY TARMOQLARDA</h2>
                        <li>
                            <a
                                href="t.me/muhtor_mobile55"
                                className='flex gap-1 items-center text-white group mt-2 sm:mt-3'
                            >
                                <FaTelegramPlane className='text-3xl sm:text-4xl rounded-full p-1 sm:p-2 duration-500 group-hover:bg-yellow-400 group-hover:text-black' />
                                <span className='scale-[0.5] opacity-0 -ml-8 sm:-ml-10 duration-500 group-hover:opacity-100 group-hover:-ml-0 group-hover:scale-[1] text-sm sm:text-base'>Telegram</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/muhtor_mobile"
                                className='flex gap-1 items-center text-white group mt-2 sm:mt-0'
                            >
                                <FaInstagram className='text-3xl sm:text-4xl rounded-full p-1 sm:p-2 duration-500 group-hover:bg-yellow-400 group-hover:text-black' />
                                <span className='scale-[0.5] opacity-0 -ml-8 sm:-ml-10 duration-500 group-hover:opacity-100 group-hover:-ml-0 group-hover:scale-[1] text-sm sm:text-base'>Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full flex items-center justify-center p-4 sm:p-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d751.4742786609763!2d72.079483!3d41.114938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcaddb7b0e5923%3A0x1278abeef0d69451!2sMUHTOR%20MOBILE!5e0!3m2!1sen!2sus!4v1758128411905!5m2!1sen!2sus"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className='w-[90%] sm:w-[80%] h-48 sm:h-[90%] rounded-2xl'
                ></iframe>
            </div>
            <div className="w-full border-[1px] border-t-white flex justify-center py-5">
                <span className='text-white'>© Copyright 2025. Smart Shop</span>
            </div>
        </div>
    );
}

export default Footer;
