import './CartSlideOver.scss';
import React, { useState } from 'react';

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function CartSlideOver({ open, setOpen }) {
    const [quantity, setQuantity] = useState(0);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-14 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="relative rounded-md text-primary hover:text-orange-200 focus:outline-none focus:ring-2 focus:ring-white font-bold"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>

                                    <div className="flex h-full flex-col overflow-y-scroll bg-white pb-6 pt-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 text-right">
                                                Giỏ hàng của bạn
                                            </Dialog.Title>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6 flex-col text-black">
                                            {/* Nội dung giỏ hàng */}
                                            <div className='hidden'>
                                                <div className='text-center h-screen w-full flex items-center justify-center'>
                                                    <p>Giỏ hàng trống.</p>
                                                    <a href='/shop' className='underline text-xl flex items-center justify-center'>
                                                        <p className='px-5'>Mua sắm ngay</p>
                                                    </a>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='flex justify-between border-b-2 pb-2'>
                                                    <img src="http://localhost:3000/images/sp_1.png" alt="" className='w-20 h-20 object-cover' />
                                                    <div className='flex flex-col justify-between w-[200px]'>
                                                        <div className='text-sm h-10 w-[200px]'>San pham A12 asdsa sdsa dsa ds asd </div>
                                                        <div className='mr-2'>
                                                            <button onClick={() => { if (quantity > 0) setQuantity(quantity - 1) }} className='px-2 text-primary font-bold rounded-lg border-2 border-primary'>-</button>
                                                            <input
                                                                type="number"
                                                                min={0}
                                                                value={quantity}
                                                                className='w-10 rounded-lg border-2 border-primary h-[26px] detai_quantity mx-2 text-center'
                                                                onWheel={(e) => e.preventDefault()} // Ngăn chặn việc cuộn để thay đổi giá trị
                                                                onKeyDown={(e) => e.preventDefault()} // Ngăn chặn việc nhập từ bàn phím
                                                            />

                                                            <button onClick={() => setQuantity(quantity + 1)} className='px-2 text-primary font-bold rounded-lg border-2 border-primary'>+</button>

                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col justify-between items-end'>
                                                        <div className='text-primary text-sm'>200.000<span>d</span></div>
                                                        <div><FontAwesomeIcon icon={faTrash} className='hover:text-red-600 cursor-pointer' /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='fixed bottom-0 p-4 w-full text-center'>
                                            <button className='bg-primary px-36 py-4 rounded-lg border-2 border-primary hover:bg-white hover:text-primary'>Thanh toan</button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
