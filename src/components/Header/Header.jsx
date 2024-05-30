import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faChevronDown, faFire, faHeart, faHome, faMagnifyingGlass, faSearch, faTruckFast, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import './Header.scss';
import Button from '../Button/Button';
import { Wrapper } from '../Poper';
import CartSlideOver from '../CartSlideOver/CartSlideOver';
import NavMobileSlideOver from '../NavMobileSlideOver/NavMobileSlideOver';

const Header = () => {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <header className='mb-10 bg-black'>
            <CartSlideOver open={cartOpen} setOpen={setCartOpen} />

            <div className='logo w-full flex items-center justify-center h-10 mt-6'>
                <img src="http://localhost:3000/images/Foodtuck.png" alt="" />
            </div>
            <div className='lg:flex hidden px-40 w-full h-[60px] items-center justify-between'>
                <div className='flex items-center'>
                    <nav>
                        <ul className='flex items-center h-[60px] font-bold'>
                            <li className='pr-3 hover:text-secondary relative text-white'><Link to="/" >Home</Link></li>
                            <li className='px-3 hover:text-secondary relative text-white'><NavLink to="/Shop" >Shop</NavLink></li>
                            <li className='px-3 hover:text-secondary relative text-white'><NavLink to="/aboutus" >About Us</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className='flex items-center'>
                    <div className="relative mr-2">
                        <input type="text" className="text-white bg-transparent border-2 border-primary rounded-3xl w-60 pr-10 outline-none focus:border-transparent" placeholder='Tìm kiếm tai đây...' />
                        <FontAwesomeIcon icon={faSearch} className="text-white absolute top-[15px] right-4" />
                    </div>

                    <NavLink to="/Login"><div><FontAwesomeIcon icon={faUser} className='text-white text-[20px] mx-2' /></div></NavLink>
                    <div><FontAwesomeIcon icon={faCartShopping} className='text-white text-[20px] mx-2' onClick={() => setCartOpen(true)} /></div>
                </div>
            </div>

        </header >

    );
};

export default Header;
