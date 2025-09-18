import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import cors from 'cors';

dotenv.config();

const app = express();
const bot = new TelegramBot(process.env.BOT_TOKEN);

// CORS sozlamasi
app.use(cors({
    origin: '*', // Vercel deploy URL bilan cheklash mumkin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(bodyParser.json());

// Webhook endpoint
app.post('/api/webhook', (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

// Test endpoint
app.get('/api/hello', (req, res) => {
    res.send('✅ Server ishlayapti!');
});

// Xabar yuborish endpoint
app.post('/api/send-message', async (req, res) => {
    try {
        const { name, email, message, location } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Ma\'lumotlar to‘liq emas!' });
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

        const ownerId = process.env.OWNER_ID;
        if (ownerId) {
            await bot.sendMessage(ownerId, msgText);
        }

        return res.json({ success: true, message: 'Xabar muvaffaqiyatli yuborildi!' });
    } catch (error) {
        console.error('❌ Xato:', error.message);
        return res.status(500).json({ success: false, message: 'Server xatosi' });
    }
});

// Webhookni Telegramga ulash
bot.setWebHook('https://muxtor-mobile-uchkurgan-atkogfl3a-behruzbeks-projects-bf1771cb.vercel.app/api/webhook');
// Bot xabarlariga javob
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Xabar qabul qilindi!');
});

// Vercel uchun eksport
export default app;
