'use client';

const plans = [
  {
    name: 'Раннее бронирование',
    price: '2000 ₸',
    features: ['Доступ ко всем сессиям', 'Материалы воркшопа', 'Кофе-брейк'],
    badge: 'Лучшее',
    highlight: true,
  },
  {
    name: 'Стандарт',
    price: '2500 ₸',
    features: ['Все пункты раннего', 'Запись сессий'],
    badge: 'По умолчанию',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#0b1220] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff2d55]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Стоимость участия
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff2d55] to-[#40e0d0] mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white/5 backdrop-blur-sm border ${
                plan.highlight ? 'border-[#ff2d55] ring-2 ring-[#ff2d55]/20' : 'border-white/10'
              } rounded-2xl p-8 relative`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff2d55] to-[#40e0d0] text-white text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="text-5xl font-bold text-[#40e0d0] mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3 text-[#9aa4b2]">
                    <span className="text-[#40e0d0] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#9aa4b2] text-sm max-w-2xl mx-auto">
            <strong className="text-white">Оплата:</strong> Через Kaspi. После регистрации высылайте ссылку на оплату в чат организатора.
          </p>
        </div>
      </div>
    </section>
  );
}
