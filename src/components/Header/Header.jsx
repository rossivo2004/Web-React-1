import React, { useState, useEffect  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faChevronDown, faFire, faHeart, faMagnifyingGlass, faTruckFast, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import './Header.scss';
import Button from '../Button/Button';
import { Wrapper } from '../Poper';
import CartSlideOver from '../CartSlideOver/CartSlideOver';

const Header = () => {
    const [showScrollHeader, setShowScrollHeader] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollHeader(true);
            } else {
                setShowScrollHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <CartSlideOver open={cartOpen} setOpen={setCartOpen} />
            <div className='header_top w-full h-10 bg-primary border-b border-[#c489033d] px-40 lg:flex hidden items-center justify-between text-xs text-white font-bold'>
                <div>
                    <p>THỰC PHẨM MART, THỰC PHẨM CAO CẤP</p>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <img src="/public/images/icon-hotline-ok.gif" alt="" className='w-[18px] h-[18px] mr-1' />
                        <p>07070707070</p>
                    </div>
                    <div className='mx-3'>|</div>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faTruckFast} className='mr-1' />
                        <p>GIAO HÀNG SIÊU TỐC</p>
                    </div>
                </div>
            </div>

            <div className='header_center w-full lg:px-40 h-16 lg:h-24 bg-primary flex justify-between items-center px-6 text-white'>
                <div>
                    <a href="">
                        <img src="/src/asset/images/organic-nav-icon.pnghttps://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-12.jpg.webp" alt="" className='h-14 w-14 object-cover' />
                    </a>
                </div>
                <div className='hidden lg:block'>
                    <form className='relative'>
                        <input type="text" className='w-[460px] h-12 rounded-lg pl-4 pr-10  outline-none border-radius border bg-transparent focus:border-none' placeholder='Tìm kiếm tại đây' />
                        <button className='absolute top-[14px] right-[10px]'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                </div>
                <div className='hd_crtl flex items-center'>
                    <div className='shrink-0 mx-3'>
                        <Link to="/Login">
                            <FontAwesomeIcon icon={faUser} className='text-[24px]' />
                        </Link>
                    </div>
                    <div className='shrink-0 mx-3 relative'>
                        <FontAwesomeIcon icon={faHeart} className='text-[24px]' />
                        <span className='text-[12px] text-white absolute top-[-9px] right-[-8px] w-5 h-5 flex items-center justify-center rounded-full bg-primary'>0</span>
                    </div>
                    <div className='shrink-0 mx-3 flex' onClick={() => setCartOpen(true)}>
                        <div className='relative mr-3'>
                            <FontAwesomeIcon icon={faCartShopping} className='text-[24px] cursor-pointer' />
                            <span className='text-[12px] text-white absolute top-[-9px] right-[-8px] w-5 h-5 flex items-center justify-center rounded-full bg-primary'>0</span>
                        </div>
                        <div className='hidden lg:block'>
                            <span>0</span>
                            <span>đ</span>
                        </div>
                    </div>
                    <div className='shrink-0 ml-3 lg:hidden'>
                        <FontAwesomeIcon icon={faBars} className='text-[24px]' />
                    </div>
                </div>
            </div>

            <div className='header_bottom lg:flex hidden px-40 w-full h-[60px] items-center justify-between'>
                <div className='flex items-center'>
                    <Tippy
                        interactive={true}
                        placement='bottom-end'
                        trigger='click'
                        render={attrs => (
                            <div className='header_bottom_list_ct' tabIndex="-1" {...attrs} onClick={e => e.stopPropagation()}>
                                <Wrapper>
                                    <ul className='text-base'>
                                        <li className='py-2'>Hải sản</li>
                                        <li className='py-2'>Hải sản</li>
                                        <li className='py-2'>Hải sản</li>
                                        <li className='py-2'>Hải sản</li>
                                        <li className='py-2'>Hải sản</li>
                                    </ul>
                                </Wrapper>
                            </div>
                        )}
                    >
                        <div className='w-[230px] h-[45px]'>
                            <Button primary className='px-5 flex items-center justify-between'>
                                <FontAwesomeIcon icon={faBars} />
                                Hahah
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Button>
                        </div>
                    </Tippy>
                    <nav>
                        <ul className='flex items-center h-[60px] px-3 font-bold'>
                            <li className='px-3 hover:text-secondary relative'><Link to="/" >Home</Link></li>
                            <li className='px-3 hover:text-secondary relative'><NavLink to="/Shop" >Shop</NavLink></li>
                            <li className='px-3 hover:text-secondary relative'><NavLink to="/Login">Login</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className='font-bold'>
                    <FontAwesomeIcon icon={faFire} className='mr-2 text-red-600' />
                    <a href="">Sản phẩm bán chạy</a>
                </div>

            </div>

            <div className={`header_scroll ${showScrollHeader ? 'translate-y-0' : 'translate-y-[-1000px]'} hidden lg:block w-full h-[70px] fixed top-0 z-20 bg-primary text-white border-b transition-transform duration-300`}></div>

        </header>
    );
};

export default Header;
