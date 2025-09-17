import React from "react";

const featuredPhones = [
    { id: 1, name: "iPhone 15 Pro", img: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg", desc: "Yangi avlod qudratli smartfon", priceLabel: "Narx: so'rov bo‘yicha", link: "https://t.me/muhtor_mobile55" },
    { id: 2, name: "Galaxy S23 Ultra", img: "https://www.baka.ca/content/images/content/galaxy-s23-ultra-iframe-01.jpg", desc: "Kamera va kuch uchun tanlangan", priceLabel: "Narx: so'rov bo‘yicha", link: "https://t.me/muhtor_mobile55" },
    { id: 3, name: "Infinix Hot 50 Pro+", img: "https://www.phoneworld.com.pk/wp-content/uploads/2024/10/Infinix-Hot-50-Pro-Plus.jpg", desc: "Tezlik, dizayn va narx — hammasi bitta telefonda!", priceLabel: "Narx: so'rov bo‘yicha", link: "https://t.me/muhtor_mobile55" },
];

const featuredAccessories = [
    { id: 1, name: "Yesido SF14", img: "https://m.media-amazon.com/images/I/714kyGJzb1L._UF350,350_QL80_.jpg", desc: "Avtomobil uchun qulay va mustahkam telefon ushlagich.", priceLabel: "Narx: so'rov bo‘yicha", link: "https://t.me/muhtor_mobile55" },
    { id: 2, name: "Wayfarer matte black", img: "https://i.pinimg.com/736x/23/99/e2/2399e2187f5c60770c2a2c21837478f2.jpg", desc: "Stilni qadrlaydiganlar uchun qora mat qoplamali ko‘zoynak.", priceLabel: "Narx: so'rov bo‘yicha", link: "https://t.me/muhtor_mobile55" },
    { id: 3, name: "BUDS 3 SM-R530", img: "https://asset.kompas.com/crops/Zbcs0GQuYUh3H5MklezNzdmxJY8=/0x44:1000x710/1200x800/data/photo/2024/07/10/668e3b4f14ea1.jpg", desc: "Yuqori sifatli tovush, aktiv shovqinni bekor qilish.", priceLabel: "Narx: so'rov bo‘yicha", link: "https://t.me/muhtor_mobile55" },
];

function Products() {
    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-15 bg-gradient-to-r from-gray-900 via-black to-gray-800">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    Mahsulotlarimiz
                </h2>
                <p className="mt-2 sm:mt-3 text-gray-300">
                    Orzuyingizdagi telefonni bugun tanlang
                </p>

                <section id="products" className="text-white py-8 sm:py-12">
                    <div className="container mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
                            <h2 className="text-xl sm:text-2xl font-bold">Telefonlar</h2>
                            <a
                                href="https://t.me/muhtor_mobile55"
                                onClick={() => scrollToId("products")}
                                className="text-xs sm:text-sm text-yellow-500 font-medium cursor-pointer mt-2 sm:mt-0"
                            >
                                View all
                            </a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {featuredPhones.map((p) => (
                                <div
                                    key={p.id}
                                    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    <div className="aspect-[4/3] w-full overflow-hidden">
                                        <img
                                            src={p.img}
                                            alt={p.name}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-2 sm:p-4 text-gray-900">
                                        <h3 className="font-semibold text-sm sm:text-lg">{p.name}</h3>
                                        <p className="text-xs sm:text-sm text-gray-700 mt-1">{p.desc}</p>
                                        <div className="mt-2 sm:mt-4 flex items-center justify-between">
                                            <span className="font-medium text-gray-800 text-xs sm:text-base">
                                                {p.priceLabel}
                                            </span>
                                            <a
                                                href={p.link}
                                                className="px-2 sm:px-3 py-1 sm:py-2 bg-yellow-400 rounded-md text-xs sm:text-sm font-semibold"
                                            >
                                                Batafsil
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="products" className="text-white py-8 sm:py-12">
                    <div className="container mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
                            <h2 className="text-xl sm:text-2xl font-bold">Aksesuarlar</h2>
                            <a
                                href="https://t.me/muhtor_mobile55"
                                onClick={() => scrollToId("products")}
                                className="text-xs sm:text-sm text-yellow-500 font-medium cursor-pointer mt-2 sm:mt-0"
                            >
                                View all
                            </a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {featuredAccessories.map((p) => (
                                <div
                                    key={p.id}
                                    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    <div className="aspect-[4/3] w-full overflow-hidden">
                                        <img
                                            src={p.img}
                                            alt={p.name}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-2 sm:p-4 text-gray-900">
                                        <h3 className="font-semibold text-sm sm:text-lg">{p.name}</h3>
                                        <p className="text-xs sm:text-sm text-gray-700 mt-1">{p.desc}</p>
                                        <div className="mt-2 sm:mt-4 flex items-center justify-between">
                                            <span className="font-medium text-gray-800 text-xs sm:text-base">
                                                {p.priceLabel}
                                            </span>
                                            <a
                                                href={p.link}
                                                className="px-2 sm:px-3 py-1 sm:py-2 bg-yellow-400 rounded-md text-xs sm:text-sm font-semibold"
                                            >
                                                Batafsil
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Products;
