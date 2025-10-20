'use client';

import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    status: '',
    comment: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка отправки формы
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="registration" className="py-24 px-6 bg-[#0f1724] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#ff2d55]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#40e0d0]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Зарегистрироваться
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff2d55] to-[#40e0d0] mx-auto mb-6"></div>
          <p className="text-[#9aa4b2] max-w-xl mx-auto">
            Оставь данные — мы пришлём подтверждение и ссылку на оплату
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-white font-medium mb-2 text-sm">
              ФИО *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#9aa4b2] focus:border-[#ff2d55] focus:outline-none transition-colors"
              placeholder="Введите ваше полное имя"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm">
              Телефон (Kaspi) *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#9aa4b2] focus:border-[#ff2d55] focus:outline-none transition-colors"
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#9aa4b2] focus:border-[#ff2d55] focus:outline-none transition-colors"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-white font-medium mb-2 text-sm">
              Юридический статус *
            </label>
            <select
              id="status"
              name="status"
              required
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#ff2d55] focus:outline-none transition-colors"
            >
              <option value="" className="bg-[#0b1220]">Выберите статус</option>
              <option value="Самозанятый" className="bg-[#0b1220]">Самозанятый</option>
              <option value="ИП" className="bg-[#0b1220]">ИП</option>
              <option value="Физ. лицо" className="bg-[#0b1220]">Физ. лицо</option>
            </select>
          </div>

          <div>
            <label htmlFor="comment" className="block text-white font-medium mb-2 text-sm">
              Комментарий
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#9aa4b2] focus:border-[#ff2d55] focus:outline-none transition-colors resize-none"
              placeholder="Дополнительная информация (необязательно)"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#ff2d55] to-[#40e0d0] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#ff2d55]/30 transition-all transform hover:scale-[1.02]"
          >
            Зарегистрироваться и оплатить
          </button>

          <p className="text-[#9aa4b2] text-xs text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
          </p>
        </form>
      </div>
    </section>
  );
}
