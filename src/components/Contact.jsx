import React, { useState, useEffect } from "react";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [showModal, setShowModal] = useState(false);
    const [location, setLocation] = useState(null);

    // Modalni faqat birinchi marta ko‘rsatish
    useEffect(() => {
        const seen = localStorage.getItem("seenLocationModal");
        if (!seen) {
            const timer = setTimeout(() => {
                setShowModal(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { ...form, location };

        try {
            console.log("Yuborilayotgan payload:", payload); // 🔥 Debugging
            const res = await fetch("http://localhost:5000/send-message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error(`HTTP xatosi: ${res.status}`);
            }

            const data = await res.json();
            alert(data.message || "Muvaffaqiyat!");

            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("Fetch xatosi:", err);
            alert("❌ Xatolik yuz berdi, qaytadan urinib ko‘ring! " + err.message);
        }
    };

    // Modal buttonlar
    const handleAllow = () => {
        setShowModal(false);
        localStorage.setItem("seenLocationModal", "true");

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const coords = {
                        lat: pos.coords.latitude,
                        lon: pos.coords.longitude,
                    };
                    setLocation(coords);
                    console.log("✅ Joylashuv olingan:", coords); // 🔥 Debugging
                    alert("📍 Joylashuv muvaffaqiyatli olingan!");
                },
                (err) => {
                    console.error("❌ Joylashuv xatosi:", err.message);
                    alert("❌ Joylashuvni olishda xato: " + err.message);
                }
            );
        } else {
            console.error("❌ Geolocation brauzerda qo‘llab-quvvatlanmaydi");
            alert("❌ Brauzeringiz joylashuvni qo‘llab-quvvatlamaydi!");
        }
    };

    const handleDeny = () => {
        setShowModal(false);
        localStorage.setItem("seenLocationModal", "true");
        console.log("📍 Joylashuv rad etildi");
    };

    // Joylashuvni qayta so‘rash uchun tugma (ixtiyoriy)
    const handleRetryLocation = () => {
        localStorage.removeItem("seenLocationModal"); // Modalni qayta ko‘rsatish
        setShowModal(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 p-4 sm:p-6">
            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md space-y-4 sm:space-y-5 border border-yellow-400/30"
            >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-yellow-700">
                    Biz bilan bog‘laning
                </h2>

                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ismingiz"
                    className="w-full p-2 sm:p-3 border-[1px] border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:border-0 focus:ring-yellow-500"
                    required
                />

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email manzilingiz"
                    className="w-full p-2 sm:p-3 border-[1px] border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:border-0 focus:ring-yellow-500"
                    required
                />

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Xabaringiz..."
                    className="w-full p-2 sm:p-3 border-[1px] border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:border-0 focus:ring-yellow-500"
                    rows="3 sm:rows-4"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-2 sm:py-3 rounded-lg shadow-md hover:opacity-90 transition-all cursor-pointer"
                >
                    ✉️ Yuborish
                </button>

                {/* Joylashuvni qayta so‘rash tugmasi */}
                <button
                    type="button"
                    onClick={handleRetryLocation}
                    className="w-full bg-gray-500 text-white font-semibold py-1.5 sm:py-2 rounded-lg hover:bg-gray-600 transition-all cursor-pointer mt-1 sm:mt-2"
                >
                    📍 Joylashuvni qayta so‘rash
                </button>
            </form>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg w-[90%] sm:w-80 space-y-3 sm:space-y-4 text-center">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                            📍 Joylashuvingizni ulashasizmi?
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base">
                            Bu bizga eng yaqin filialimizni ko‘rsatishda yordam beradi.
                        </p>
                        <div className="flex gap-2 sm:gap-3 justify-center">
                            <button
                                onClick={handleAllow}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            >
                                Ruxsat berish
                            </button>
                            <button
                                onClick={handleDeny}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Rad etish
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
