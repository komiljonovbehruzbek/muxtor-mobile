import React from "react";

import { FaShippingFast, FaCheck } from "react-icons/fa";
import { FaScrewdriverWrench, FaCreditCard } from "react-icons/fa6";

const reviews = [
    { id: 1, name: "Jamshid", text: "Zo‘r xizmat! Telefonni tezda tuzatishdi va narxi ham maqbul edi.", rating: 5 },
    { id: 2, name: "Dilnoza", text: "Aksessuarlar sifati juda yaxshi, do‘konga yana boraman.", rating: 5 },
    { id: 3, name: "Anvar", text: "Ishonchli servis va professional xodimlar. Rekomendatsiya qilaman.", rating: 5 },
];

function Home() {
    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <main>
            {/* HERO (gradient fon) */}
            <section id="home-hero" className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-15 py-10 sm:py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                                Welcome to <span className="text-yellow-400">Smart Shop</span>
                            </h1>
                            <p className="mt-2 sm:mt-4 text-gray-200 max-w-xs sm:max-w-md md:max-w-xl">
                                Eng so‘nggi smartfonlar, original aksessuarlar va tezkor servis — hammasi bir joyda. Bizning mutaxassislar har doim yordamga tayyor.
                            </p>
                            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => scrollToId("products")}
                                    className="px-4 sm:px-5 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded-md shadow hover:scale-[1.02] transition-transform w-full sm:w-auto"
                                >
                                    Shop Now
                                </button>
                                <button
                                    onClick={() => scrollToId("contact")}
                                    className="px-4 sm:px-5 py-2 sm:py-3 border border-white/20 rounded-md hover:bg-white/5 transition w-full sm:w-auto mt-2 sm:mt-0"
                                >
                                    Contact Us
                                </button>
                            </div>
                            <ul className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-300 flex-wrap">
                                <li className="flex gap-2 items-center duration-300 hover:text-yellow-400"><FaShippingFast className="text-xl sm:text-2xl" /> Tez yetkazib berish</li>
                                <li className="flex gap-2 items-center duration-300 hover:text-yellow-400"><FaCheck className="text-xl sm:text-2xl" /> Original mahsulotlar</li>
                                <li className="flex gap-2 items-center duration-300 hover:text-yellow-400"><FaScrewdriverWrench className="text-xl sm:text-2xl" /> Kafolatli servis</li>
                            </ul>
                        </div>
                        <div className="order-first md:order-last">
                            <div className="w-full rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
                                    alt="iPhone 15 Pro"
                                    className="w-full h-40 sm:h-64 md:h-96 object-cover transform transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BANNER (store image) */}
            <section className="py-6 sm:py-8 md:py-12">
                <div className="container mx-auto px-4 sm:px-6 md:px-15">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://simgedekor.com/uploads/urunler/2203711-telefoncu-dukkani-magaza-dekorasyonu-07.png"
                            alt="Smart Shop store"
                            className="w-full h-40 sm:h-56 md:h-80 object-cover brightness-75"
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-3 sm:px-6 md:px-16">
                            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
                                Visit our store in Namangan
                            </h3>
                            <p className="mt-1 sm:mt-2 text-white/90 max-w-xs sm:max-w-lg">
                                Real do‘kon va professional maslahat — o‘zingiz ko‘rib tanlang.
                            </p>
                            <a
                                href="https://www.google.com/maps/place/MUHTOR+MOBILE/@41.114938,72.079485,19z/data=!4m6!3m5!1s0x38bcaddb7b0e5923:0x1278abeef0d69451!8m2!3d41.1149381!4d72.0794854!16s%2Fg%2F11srk6slkz?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                className="mt-2 sm:mt-4 px-3 sm:px-5 py-1 sm:py-2 bg-yellow-400 rounded-md text-black font-semibold"
                            >
                                Xaritaga qarash
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-6 sm:py-8 md:py-12">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        Join thousands of happy customers
                    </h3>
                    <p className="mt-1 sm:mt-2 text-gray-300">
                        Hoziroq bog‘laning yoki do‘konimizga tashrif buyuring.
                    </p>
                    <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-center gap-3">
                        <a
                            href="#contact"
                            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 rounded-md font-semibold text-black w-full sm:w-auto"
                        >
                            Contact Us
                        </a>
                        <a
                            href="https://www.google.com/maps/place/MUHTOR+MOBILE/@41.114938,72.079485,19z/data=!4m6!3m5!1s0x38bcaddb7b0e5923:0x1278abeef0d69451!8m2!3d41.1149381!4d72.0794854!16s%2Fg%2F11srk6slkz?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D"
                            className="px-4 sm:px-6 py-2 sm:py-3 border border-white/20 rounded-md w-full sm:w-auto"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </section>

            {/* REVIEWS (dark) */}
            <section className="bg-gray-900 text-white py-8 sm:py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-15">
                    <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-4 sm:mb-6">Customer Reviews</h2>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {reviews.map((r) => (
                            <blockquote
                                key={r.id}
                                className="min-w-[220px] sm:min-w-[260px] bg-gray-800/70 rounded-lg p-3 sm:p-4 shadow-md"
                            >
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black">
                                        {r.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">{r.name}</p>
                                        <p className="text-xs sm:text-sm text-yellow-400">
                                            {"★".repeat(r.rating)}
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-200">{r.text}</p>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Home;
