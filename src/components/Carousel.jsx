import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Carousel() {
    return (
        <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] pt-18">
            <Swiper
                spaceBetween={10} // Mobile uchun kamroq bo'shliq
                centeredSlides={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-full"
            >
                <SwiperSlide>
                    <div className="relative w-full h-full group">
                        <img
                            src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
                            alt="iPhone 15 Pro"
                            className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                            <h2 className="text-xl sm:text-2xl font-bold">iPhone 15 Pro</h2>
                            <p className="mt-1 sm:mt-2">Yangi avlod qudratli smartfon</p>
                            <a href='#' className="mt-2 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600">
                                Batafsil
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-full group">
                        <img
                            src="https://www.baka.ca/content/images/content/galaxy-s23-ultra-iframe-01.jpg"
                            alt="Samsung Galaxy S23 Ultra"
                            className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                            <h2 className="text-xl sm:text-3xl font-bold">Galaxy S23 Ultra</h2>
                            <p className="mt-1 sm:mt-2">Eng kuchli Galaxy flagmani</p>
                            <a href='#' className="mt-2 sm:mt-4 px-3 sm:px-5 py-1 sm:py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600">
                                Batafsil
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full group">
                        <img
                            src="https://simgedekor.com/uploads/urunler/2203711-telefoncu-dukkani-magaza-dekorasyonu-07.png"
                            alt="Smart Shop"
                            className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                            <h2 className="text-xl sm:text-3xl font-bold">Smart Shop</h2>
                            <p className="mt-1 sm:mt-2">Telefon va aksessuarlar do‘koni</p>
                            <a href='#' className="mt-2 sm:mt-4 px-3 sm:px-5 py-1 sm:py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600">
                                Bog‘lanish
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel;
