import React from "react";

import { MdSmartphone } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { FaShippingFast, FaCheck } from "react-icons/fa";
import { FaScrewdriverWrench, FaCreditCard } from "react-icons/fa6";

function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="py-8 sm:py-12 md:py-16 bg-white text-gray-900"
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-15">
                <div className="max-w-2xl sm:max-w-3xl mx-auto text-center mb-6 sm:mb-8 md:mb-12">
                    <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                        Biz haqimizda
                    </h2>
                    <p className="mt-2 sm:mt-3 text-gray-600">
                        <span className="font-semibold text-yellow-400">Smart Shop</span> — Sizning ishonchli texnologiya hamkoringiz. Original mahsulotlar, tezkor servis va do'stona yordam — hammasi bir joyda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                    <div>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Biz 2020-yildan beri Toshkent va atrofidagi mijozlarga telefon savdosi va ta'mirlash xizmatlarini taqdim etib kelmoqdamiz. Malakali ustalar, original ehtiyot qismlar va tezkor mijozlarga xizmat — bizning asosiy tamoyillarimiz. Do'konimizda flagman smartfonlar, original aksessuarlar va kafolatli servis mavjud.
                        </p>

                        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                            <article className="p-3 sm:p-4 bg-gray-50 rounded-lg shadow-sm text-center group cursor-pointer">
                                <div className="mx-auto w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full duration-300 group-hover:bg-yellow-400 group-hover:text-white text-black text-xl sm:text-2xl font-bold">
                                    <MdSmartphone />
                                </div>
                                <h4 className="mt-2 sm:mt-3 font-semibold">Telefon sotish</h4>
                                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                                    Original va kafolatli qurilmalar — rasmiy ta'minotdan.
                                </p>
                            </article>

                            <article className="p-3 sm:p-4 bg-gray-50 rounded-lg shadow-sm text-center group cursor-pointer">
                                <div className="mx-auto w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full duration-300 group-hover:bg-yellow-400 group-hover:text-white text-black text-xl sm:text-2xl font-bold">
                                    <FaScrewdriverWrench />
                                </div>
                                <h4 className="mt-2 sm:mt-3 font-semibold">Ta'mirlash</h4>
                                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Tez va ishonchli servis, original ehtiyot qismlar.</p>
                            </article>

                            <article className="p-3 sm:p-4 bg-gray-50 rounded-lg shadow-sm text-center group cursor-pointer">
                                <div className="mx-auto w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full duration-300 group-hover:bg-yellow-400 group-hover:text-white text-black text-xl sm:text-2xl font-bold">
                                    <SlEarphones />
                                </div>
                                <h4 className="mt-2 sm:mt-3 font-semibold">Aksessuarlar</h4>
                                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Qopqoq, quloqchin va zaryadlovchi — hammasi original.</p>
                            </article>
                        </div>

                        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                            <div className="text-center">
                                <p className="text-xl sm:text-2xl font-extrabold text-gray-900">5000+</p>
                                <p className="text-xs sm:text-sm text-gray-500">Mamnun mijoz</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xl sm:text-2xl font-extrabold text-gray-900">15</p>
                                <p className="text-xs sm:text-sm text-gray-500">Yillik tajriba</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xl sm:text-2xl font-extrabold text-gray-900">10000+</p>
                                <p className="text-xs sm:text-sm text-gray-500">Sotilgan mahsulotlar</p>
                            </div>
                        </div>

                        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <a href="#contact" className="inline-block px-3 sm:px-5 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded-md shadow hover:scale-[1.02] transition-transform w-full sm:w-auto">
                                Biz bilan bog'laning
                            </a>
                            <a href="#products" className="inline-block px-3 sm:px-5 py-2 sm:py-3 border border-gray-200 rounded-md hover:bg-gray-50 w-full sm:w-auto mt-2 sm:mt-0">
                                Mahsulotlarni ko'rish
                            </a>
                        </div>
                    </div>

                    <div className="w-full rounded-xl overflow-hidden shadow-xl mt-6 sm:mt-0">
                        <img
                            src="https://simgedekor.com/uploads/urunler/2203711-telefoncu-dukkani-magaza-dekorasyonu-07.png"
                            alt="Smart Shop store interior"
                            className="w-full h-40 sm:h-60 md:h-80 object-cover brightness-95 duration-500 hover:scale-105 cursor-pointer"
                            loading="lazy"
                        />
                    </div>
                </div>

                <section className="text-gray-900 py-8 sm:py-12 md:py-16">
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-4 sm:mb-6">Why Choose Us</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                            <div className="p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-2xl sm:text-3xl"><FaCheck className="text-2xl sm:text-3xl text-green-500" /></div>
                                <h4 className="font-semibold mt-2 sm:mt-3">Original Mahsulotlar</h4>
                                <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-600">
                                    Faqat original va tekshirilgan jihozlar.
                                </p>
                            </div>
                            <div className="p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-2xl sm:text-3xl"><FaShippingFast className="text-2xl sm:text-3xl text-orange-500" /></div>
                                <h4 className="font-semibold mt-2 sm:mt-3">Tez Yetkazib Berish</h4>
                                <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-600">
                                    Shahar ichida tez yetkazib berish imkoniyati.
                                </p>
                            </div>
                            <div className="p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-2xl sm:text-3xl"><FaScrewdriverWrench className="text-2xl sm:text-3xl text-gray-500" /></div>
                                <h4 className="font-semibold mt-2 sm:mt-3">Kafolatli Servis</h4>
                                <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-600">
                                    Ta'mirlash va kafolat — mijozlarimiz uchun.
                                </p>
                            </div>
                            <div className="p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-2xl sm:text-3xl"><FaCreditCard className="text-2xl sm:text-3xl text-blue-500" /></div>
                                <h4 className="font-semibold mt-2 sm:mt-3">Oson To‘lov</h4>
                                <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-600">
                                    Naqd, plastik yoki onlayn to‘lov turlarini qabul qilamiz.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default About;
