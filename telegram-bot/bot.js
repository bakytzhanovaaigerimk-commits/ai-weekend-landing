require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Замените YOUR_BOT_TOKEN на токен вашего бота от @BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Хранилище регистраций (в продакшене используйте базу данных)
const registrations = [];

// Команда /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId,
    '👋 Добро пожаловать на регистрацию AI WEEKEND!\n\n' +
    '📅 Даты: 25-26 октября 2025\n' +
    '📍 Место: г. Астана\n' +
    '💰 Стоимость: 2000 ₸\n\n' +
    'Для регистрации нажмите /register'
  );
});

// Команда /register
bot.onText(/\/register/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Введите ваше ФИО:');

  // Ожидаем ввод имени
  bot.once('message', (msg) => {
    const fullName = msg.text;

    bot.sendMessage(chatId, 'Введите ваш номер телефона:');

    // Ожидаем ввод телефона
    bot.once('message', (msg) => {
      const phone = msg.text;

      bot.sendMessage(chatId, 'Выберите день участия:', {
        reply_markup: {
          inline_keyboard: [
            [
              { text: '25 октября (Суббота)', callback_data: '25.10.2025' },
              { text: '26 октября (Воскресенье)', callback_data: '26.10.2025' }
            ],
            [
              { text: 'Оба дня', callback_data: 'both' }
            ]
          ]
        }
      });

      // Обработка выбора даты
      bot.once('callback_query', (query) => {
        const selectedDate = query.data;
        let dateText = '';

        if (selectedDate === 'both') {
          dateText = '25-26 октября 2025';
        } else {
          dateText = selectedDate;
        }

        // Сохраняем регистрацию
        const registration = {
          id: registrations.length + 1,
          fullName,
          phone,
          date: dateText,
          timestamp: new Date().toISOString(),
          chatId
        };

        registrations.push(registration);

        // Отправляем подтверждение
        bot.sendMessage(chatId,
          '✅ Регистрация успешна!\n\n' +
          `👤 ФИО: ${fullName}\n` +
          `📞 Телефон: ${phone}\n` +
          `📅 Дата: ${dateText}\n\n` +
          '💳 Для оплаты переведите 2000 ₸ на Kaspi:\n' +
          '💳 Номер: [УКАЖИТЕ НОМЕР KASPI]\n\n' +
          'После оплаты отправьте скриншот чека в этот чат.'
        );

        bot.answerCallbackQuery(query.id);

        // Уведомляем администратора (замените ADMIN_CHAT_ID на свой ID)
        const adminChatId = process.env.ADMIN_CHAT_ID;
        if (adminChatId) {
          bot.sendMessage(adminChatId,
            `🆕 Новая регистрация #${registration.id}\n\n` +
            `👤 ${fullName}\n` +
            `📞 ${phone}\n` +
            `📅 ${dateText}`
          );
        }
      });
    });
  });
});

// Команда /list (только для админа)
bot.onText(/\/list/, (msg) => {
  const chatId = msg.chat.id;

  // Проверка на админа
  if (chatId.toString() !== process.env.ADMIN_CHAT_ID) {
    bot.sendMessage(chatId, '❌ У вас нет доступа к этой команде.');
    return;
  }

  if (registrations.length === 0) {
    bot.sendMessage(chatId, 'Регистраций пока нет.');
    return;
  }

  let message = `📋 Список регистраций (${registrations.length}):\n\n`;

  registrations.forEach((reg) => {
    message += `#${reg.id}\n`;
    message += `👤 ${reg.fullName}\n`;
    message += `📞 ${reg.phone}\n`;
    message += `📅 ${reg.date}\n`;
    message += `⏰ ${new Date(reg.timestamp).toLocaleString('ru-RU')}\n\n`;
  });

  bot.sendMessage(chatId, message);
});

// Обработка скриншотов оплаты
bot.on('photo', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId,
    '✅ Спасибо! Ваш платеж получен и будет проверен.\n' +
    'С вами свяжутся в ближайшее время для подтверждения.'
  );

  // Уведомляем админа
  const adminChatId = process.env.ADMIN_CHAT_ID;
  if (adminChatId) {
    bot.forwardMessage(adminChatId, chatId, msg.message_id);
    bot.sendMessage(adminChatId, `Чек от пользователя ${msg.from.first_name} (ID: ${chatId})`);
  }
});

console.log('🤖 Telegram бот запущен...');
