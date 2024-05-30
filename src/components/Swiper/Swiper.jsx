import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const OrganicSwiper = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay
        >
            <SwiperSlide> <div className="swiper-slide rounded-lg">
                <a href="" className="h-[300px] block w-[250px] ">
                    <img src="http://localhost:3000/images/unsplash_dphM2U1xq0U.png" alt="" className="h-[270px] w-full object-cover hover:-translate-y-1" style={{ transition: '2s' }} />
                    <p className="font-bold text-primary">Organic</p>
                </a>
            </div>
            </SwiperSlide>
            <SwiperSlide> <div className="swiper-slide rounded-lg">
                <a href="" className="h-[300px] block w-[250px]">
                    <img src="http://localhost:3000/images/unsplash_dphM2U1xq0U.png" alt="" className="h-[270px] w-full object-cover hover:-translate-y-1" style={{ transition: '2s' }} />
                    <p className="font-bold text-primary">Organic</p>
                </a>
            </div>
            </SwiperSlide>
            <SwiperSlide> <div className="swiper-slide rounded-lg">
                <a href="" className="h-[300px] block w-[250px] ">
                    <img src="http://localhost:3000/images/unsplash_dphM2U1xq0U.png" alt="" className="h-[270px] w-full object-cover:-translate-y-1" style={{ transition: '2s' }} />
                    <p className="font-bold text-primary">Organic</p>
                </a>
            </div>
            </SwiperSlide>
            <SwiperSlide> <div className="swiper-slide rounded-lg">
                <a href="" className="h-[300px] block w-[250px]">
                    <img src="http://localhost:3000/images/unsplash_dphM2U1xq0U.png" alt="" className="h-[270px] w-full object-cover hover:-translate-y-1" style={{ transition: '2s' }} />
                    <p className="font-bold text-primary">Organic</p>
                </a>
            </div>
            </SwiperSlide>
            <SwiperSlide> <div className="swiper-slide rounded-lg">
                <a href="" className="h-[300px] block w-[250px]">
                    <img src="http://localhost:3000/images/unsplash_dphM2U1xq0U.png" alt="" className="h-[270px] w-full object-cover hover:-translate-y-1" style={{ transition: '2s' }} />
                    <p className="font-bold text-primary">Organic</p>
                </a>
            </div>
            </SwiperSlide>
            <SwiperSlide> <div className="swiper-slide rounded-lg">
                <a href="" className="h-[300px] block w-[250px]">
                    <img src="http://localhost:3000/images/unsplash_dphM2U1xq0U.png" alt="" className="h-[270px] w-full object-cover hover:-translate-y-1" style={{ transition: '2s' }} />
                    <p className="font-bold text-primary">Organic</p>
                </a>
            </div>
            </SwiperSlide>
            <SwiperSlide> <div className="swiper-slide rounded-lg">
                <a href="" className="h-[300px] block w-[250px]">
                    <img src="http://localhost:3000/images/unsplash_dphM2U1xq0U.png" alt="" className="h-[270px] w-full object-cover hover:-translate-y-1" style={{ transition: '2s' }} />
                    <p className="font-bold text-primary">Organic</p>
                </a>
            </div>
            </SwiperSlide>
            <SwiperSlide> <div className="swiper-slide rounded-lg">
                <a href="" className="h-[300px] block w-[250px]">
                    <img src="http://localhost:3000/images/unsplash_dphM2U1xq0U.png" alt="" className="h-[270px] w-full object-cover hover:-translate-y-1" style={{ transition: '2s' }} />
                    <p className="font-bold text-primary">Organic</p>
                </a>
            </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default OrganicSwiper;