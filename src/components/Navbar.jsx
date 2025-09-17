import React, { useState } from 'react';
import Logo from '../assets/main-logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Hamburger menyuni boshqarish uchun state

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className='fixed top-0 z-50 w-full h-18 flex items-center justify-between px-15 bg-black/90 text-white border-b border-gray-800 dark:bg-gray-900/90 dark:text-gray-100'>
            <img src={Logo} alt="SmartShop Logo" className='w-auto h-15 cursor-pointer' />
            {/* Hamburger menyusi mobile uchun */}
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-white focus:outline-none'>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {/* Desktop menyusi */}
            <ul className={`text-[18px] text-white flex gap-8 ${isOpen ? 'flex-col absolute top-18 left-0 w-full bg-black/90 p-4' : 'hidden md:flex'}`}>
                <li>
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("home");
                            setIsOpen(false); // Menyu yopilsin
                        }}
                        className='duration-300 hover:text-yellow-400 font-medium cursor-pointer'>
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("about");
                            setIsOpen(false);
                        }}
                        className='duration-300 hover:text-yellow-400 font-medium cursor-pointer'>
                        About Us
                    </a>
                </li>
                <li>
                    <a
                        href="#products"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("products");
                            setIsOpen(false);
                        }}
                        className='duration-300 hover:text-yellow-400 font-medium cursor-pointer'>
                        Products
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("contact");
                            setIsOpen(false);
                        }}
                        className='duration-300 hover:text-yellow-400 font-medium cursor-pointer'>
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
