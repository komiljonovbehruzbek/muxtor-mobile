import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(bodyParser.json());

// Telegram bot
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: false });

// IDs
const ownerId = process.env.OWNER_ID || null;
const workerId = process.env.WORKER_ID || null;

// Test
app.get("/", (req, res) => {
    res.send("✅ Server ishlayapti!");
});

// Test bot endpoint (vaqtincha, keyin o'chiring)
app.get("/test-bot", async (req, res) => {
    try {
        if (ownerId) {
            await bot.sendMessage(ownerId, "Test xabar! Bot ishlayapti.");
            res.send("✅ Bot test muvaffaqiyatli! Xabar owner ga yuborildi.");
        } else {
            res.send("❌ OWNER_ID topilmadi. .env ni tekshiring.");
        }
    } catch (err) {
        console.error("❌ Bot test xatosi:", err.message);
        res.send("❌ Bot xatosi: " + err.message);
    }
});

// Order yuborish
app.post("/send-message", async (req, res) => {
    try {
        console.log("📩 Keldi:", req.body); // 🔥 test uchun log

        const { name, email, message, location } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "Ma'lumotlar to‘liq emas!" });
        }

        let msgText = `
🆕 Yangi xabar:
👤 Mijoz: ${name}
✉️ Email: ${email}
📫 Xabar: ${message}
`;

        if (location) {
            msgText += `📍 Joylashuv: https://www.google.com/maps?q=${location.lat},${location.lon}`;
        }

        // Telegramga yuborish (alohida try-catch)
        if (ownerId) {
            try {
                await bot.sendMessage(ownerId, msgText);
                console.log("✅ Owner ga yuborildi!");
            } catch (botError) {
                console.error("❌ Owner ga yuborilmadi:", botError.message);
                // Xato bo'lsa ham, javob qaytarish
            }
        }
        if (workerId) {
            try {
                await bot.sendMessage(workerId, msgText);
                console.log("✅ Worker ga yuborildi!");
            } catch (botError) {
                console.error("❌ Worker ga yuborilmadi:", botError.message);
                // Xato bo'lsa ham, javob qaytarish
            }
        }

        console.log("✅ Javob qaytarildi!");

        // 🔥 Muhim joy: har doim javob qaytarish
        return res.json({ success: true, message: "Xabar muvaffaqiyatli yuborildi!" });
    } catch (error) {
        console.error("❌ Server xatolik:", error);
        return res.status(500).json({ success: false, message: "Server xatolik yuz berdi" });
    }
});

// Start
app.listen(PORT, () => {
    console.log(`🚀 Server ${PORT}-portda ishlayapti...`);
});
