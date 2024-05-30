import { faCartArrowDown, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Paginations from '../../components/Paginations/Paginations';
import BoxProduct from '../../components/BoxProduct/BoxProduct';

const ShopPage = () => {
    return (
        <div className=''>
            <div className='shop_banner w-full h-[240px] bg-[#0C1117] flex items-center justify-center flex-col'>
                <div className='text-white font-bold text-3xl mb-2'>Our Shop</div>
                <div>
                    <ol className="flex items-center whitespace-nowrap">
                        <li className="inline-flex items-center">
                            <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href="#">
                                Home
                            </a>
                            <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </li>
                        <li className="inline-flex items-center text-sm font-semibold text-primary truncate dark:text-neutral-200" aria-current="page">
                            Shop
                        </li>
                    </ol>
                </div>
            </div>
            <div className='lg:px-40 bg-white flex gap-10 py-10 mb-20'>
                <div className='w-3/4'>
                    <div className='flex mb-4'>
                        <div className='flex items-center mr-6'>
                            <div className='mr-4 text-black'>Sort By: </div>
                            <div className="relative w-60 max-w-full mx-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >

                                </svg>
                                <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none">
                                    <option>Project manager</option>
                                    <option>Software engineer</option>
                                    <option>IT manager</option>
                                    <option>UI / UX designer</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='mr-4 text-black'>Show: </div>
                            <div className="relative w-60 max-w-full mx-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >

                                </svg>
                                <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none">
                                    <option>Project manager</option>
                                    <option>Software engineer</option>
                                    <option>IT manager</option>
                                    <option>UI / UX designer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-10'>
                        <BoxProduct />
                        <BoxProduct />
                        <BoxProduct />
                        <BoxProduct />
                        <BoxProduct />
                        <BoxProduct />
                        <BoxProduct />
                        <BoxProduct />
                        <BoxProduct />
                        <BoxProduct />
                        <BoxProduct />
                        <BoxProduct />
                        <BoxProduct />
                    </div>
                    <Paginations />
                </div>
                <div className='w-1/4 px-4 text-black'>
                    <div className='mb-4'>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="max-w-md mx-auto">
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full py-2 pl-12 pr-4 text-gray-500 border rounded-md outline-none focus:bg-white focus:border-indigo-600"
                                />
                            </div>
                        </form>
                    </div>

                    <div className='mb-4'>
                        <div className='font-bold text-xl mb-2'>Category</div>
                        <div className="form-control">
                            <label className="cursor-pointer label mb-2 flex justify-between">
                                <span className="label-text text-text_1">Remember me</span>
                                <input type="checkbox" className="rounded-full" />
                            </label>
                            <label className="cursor-pointer label mb-2 flex justify-between">
                                <span className="label-text text-text_1">Remember me</span>
                                <input type="checkbox" className="rounded-full" />
                            </label>
                            <label className="cursor-pointer label mb-2 flex justify-between">
                                <span className="label-text text-text_1">Remember me</span>
                                <input type="checkbox" className="rounded-full" />
                            </label>
                            <label className="cursor-pointer label mb-2 flex justify-between">
                                <span className="label-text text-text_1">Remember me</span>
                                <input type="checkbox" className="rounded-full" />
                            </label>
                            <label className="cursor-pointer label mb-2 flex justify-between">
                                <span className="label-text text-text_1">Remember me</span>
                                <input type="checkbox" className="rounded-full" />
                            </label>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <img src="http://localhost:3000/images/shop_2.png" alt="" className='w-full object-cover h-[300px]' />
                    </div>

                    <div className='mb-4'>
                        <div className='font-bold text-xl mb-2'>Filter By Price</div>
                        <div><input type="range" className='w-full' /></div>
                    </div>

                    <div>
                        <div className='font-bold text-xl mb-2'>Product Tags</div>
                        <div className='flex flex-wrap'>
                            <div>
                                <div className='border-b text-text_1 mr-2 w-fit hover:text-primary border-primary cursor-pointer'>Our M ádsaenu</div>
                            </div>
                            <div>
                                <div className='border-b text-text_1 mr-2 w-fit hover:text-primary border-primary cursor-pointer'>Our Men ádu</div>
                            </div>
                            <div>
                                <div className='border-b text-text_1 mr-2 w-fit hover:text-primary border-primary cursor-pointer'>Our Menu</div>
                            </div>
                            <div>
                                <div className='border-b text-text_1 mr-2 w-fit hover:text-primary border-primary cursor-pointer'>Our Menu</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
