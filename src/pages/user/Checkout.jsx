import React, { useState } from 'react';

function Checkout() {
    const [voucherOpen, setVoucherOpen] = useState(false);

    return (
        <div>
            <div className='shop_banner w-full h-[240px] bg-[#0C1117] flex items-center justify-center flex-col'>
                <div className='text-white font-bold text-3xl mb-2'>Checkout</div>
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
                            Checkout
                        </li>
                    </ol>
                </div>
            </div>

            <div className='lg:px-40 bg-white text-black flex flex-col gap-10 py-10 mb-20'>
                <div className="flex gap-5">
                    <div className="w-2/3 border-r-2 pr-4">
                        <div className={`trs-1 mb-4 overflow-hidden ${voucherOpen ? 'h-[150px]' : 'h-[30px]'}`}>
                            <div>
                                <div className="coupon_checkout_toggle mb-4  z-10 relative bg-white">
                                    <p>Bạn có mã ưu đãi? <button className="text-primary underline font-semibold coupon_checkout_toggle_btn" onClick={() => setVoucherOpen(!voucherOpen)}>Ấn
                                        vào đây để nhập mã</button></p>
                                </div>
                                {voucherOpen && (
                                    <form className="coupon_checkout max-w-[450px] border-dashed border-2 border-[#ddd] flex justify-center flex-col items-center mb-6 py-4 rounded-lg z-0 relative">
                                        <p className="mb-2 text-center">Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới.</p>
                                        <div className="flex justify-center w-full">
                                            <div className="">
                                                <input type="text" className="h-10 rounded-lg border mr-2 px-2 w-[260px]" />
                                            </div>
                                            <div>
                                                <button className="bg-primary text-white rounded-lg px-5 py-2">ÁP DỤNG</button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>


                        <div>
                            <form orm action>
                                <p className="text-lg font-bold mb-2">Thông tin liên hệ</p>
                                <div className="mb-6 text-sm">
                                    <label >Email</label><span className="text-red-600">*</span><br />
                                    <input className="rounded-lg w-full p-2 border-primary focus:border-secondary border outline-none" type="email" name id />
                                </div>
                                <hr className="h-[2px]" />
                                <p className="text-lg font-bold mb-2 mt-4">Thông tin vận chuyển</p>
                                <div className="mb-4">
                                    <label >Họ và tên</label><span className="text-red-600">*</span>
                                    <input className="rounded-lg w-full p-2 border-primary focus:border-secondary border outline-none" type="text" name />
                                </div>
                                <div className="mb-4">
                                    <label >Số điện thoại</label><span className="text-red-600">*</span>
                                    <input className="rounded-lg w-full p-2 border-primary focus:border-secondary border outline-none" type="text" name />
                                </div>
                                <div className="mb-4">
                                    <label >Địa chỉ</label><span className="text-red-600">*</span><br />
                                    <textarea name id cols={30} rows={4} className="w-full border border-primary rounded-lg outline-none p-2" defaultValue={""} />
                                </div>
                                <div className="flex gap-2 mb-6">
                                    <div className="basis-1/3">
                                        <label className="  dark:text-white">Tỉnh</label><span className="text-red-600">*</span>
                                        <select id="countries" className="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-blue-500">
                                            <option selected>Choose a country</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                    <div className="basis-1/3">
                                        <label className=" dark:text-white">Huyện</label><span className="text-red-600">*</span>
                                        <select id="countries" className="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-blue-500">
                                            <option selected>Choose a country</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                    <div className="basis-1/3">
                                        <label className=" dark:text-white">Xã</label><span className="text-red-600">*</span>
                                        <select id="countries" className="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-blue-500">
                                            <option selected>Choose a country</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className="h-[2px]" />
                                <p className="text-base font-bold mt-4 mb-2">Phương thức thanh toán</p>
                                <div>
                                    <ul className="grid w-full gap-6 md:grid-cols-2">
                                        <li>
                                            <input type="radio" id="hosting-small" name="hosting" defaultValue="hosting-small" className="hidden peer" required />
                                            <label className="inline-flex h-[90px] items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">Thanh toán khi nhận hàng</div>
                                                </div>
                                                <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="hosting-big" name="hosting" defaultValue="hosting-big" className="hidden peer" />
                                            <label className="inline-flex h-[90px] items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">Thanh toán online</div>
                                                </div>
                                                <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="flex-1">
                        <div>
                            <p className="text-lg font-bold mb-4">Đơn hàng</p>
                            <div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <div>
                                    <div className="flex items-center justify-between py-3 text-sm">
                                        <div className="flex items-center">
                                            <div className="h-20 w-20 rounded-lg bg-[#f1f8e9] overflow-hidden mr-3">
                                                <img src="/public/images/s3qqpek5.png" alt className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="mb-2">Vlahc ewesd</p>
                                                <div className="text-sm">100.000<span className="underline">đ</span></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="mb-2"> x 1</div>
                                            <div className="text-base">100.000<span className="underline">đ</span></div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="h-[2px] mb-4" />
                                <div className="flex w-full text-sm justify-between py-3">
                                    <div>Tổng phụ:</div>
                                    <div>100.000<span className="underline">đ</span></div>
                                </div>
                                <div>
                                    <div className="flex w-full text-sm justify-between py-3">
                                        <div>Phí vận chuyển</div>
                                        <div>20.000<span className="underline">đ</span></div>
                                    </div>
                                    <div className="flex w-full text-sm justify-between py-3">
                                        <div>Giảm giá</div>
                                        <div>10.000<span className="underline">đ</span></div>
                                    </div>
                                    <div className="flex w-full text-sm justify-between py-3">
                                        <div>Thuế</div>
                                        <div>20.000<span className="underline">đ</span></div>
                                    </div>
                                    <hr />
                                    <div className="flex w-full justify-between py-3 font-bold">
                                        <div className="text-lg">Tổng thanh toán</div>
                                        <div className="text-price text-[22px]">200.000<span className="underline">đ</span></div>
                                    </div>
                                    <hr className="h-[2px] mb-4" />
                                    <div className="text-center">
                                        <button className="rounded-lg bg-primary text-white hover:bg-secondary w-full h-12 font-bold">Đặt
                                            hàng</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
