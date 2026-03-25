import Link from "next/link";
import { Truck, Palette, ShieldCheck, Zap } from "lucide-react";

const categories = [
  { name: "Патріотичні", slug: "patriotic", img: "🇺🇦" },
  { name: "Для IT-шників", slug: "it-cups", img: "💻" },
  { name: "Меми та гумор", slug: "memes", img: "😂" },
  { name: "Чашки-хамелеони", slug: "chameleon", img: "✨" },
  { name: "Для мам та тат", slug: "family", img: "❤️" },
  { name: "Знаки зодіаку", slug: "zodiac", img: "♈" }
];

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="bg-brand-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Чашки з принтами, що <span className="text-brand-600">вражають</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Друк за 1 день. Від 1 одиниці до великого гурту. 
            Сублімація преміум класу, що не змивається роками.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog" className="px-8 py-4 bg-brand-600 text-white rounded-lg font-bold hover:bg-brand-700 transition">
              Перейти до каталогу
            </Link>
            <Link href="/custom" className="px-8 py-4 border-2 border-brand-600 text-brand-600 rounded-lg font-bold hover:bg-brand-50 transition">
              Створити свій дизайн
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Популярні категорії</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/catalog/${cat.slug}`} className="group p-6 bg-white border rounded-xl hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3 group-hover:scale-110 transition">{cat.img}</div>
              <h3 className="font-semibold text-gray-800">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[ 
              { icon: Zap, title: "Швидкість", desc: "Відправка в день замовлення" },
              { icon: Palette, title: "Якість", desc: "Яскраві кольори та стійкість" },
              { icon: Truck, title: "Доставка", desc: "Нова Пошта та Укрпошта" },
              { icon: ShieldCheck, title: "Надійність", desc: "100% гарантія повернення" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <feature.icon className="w-12 h-12 text-brand-600 mb-4" />
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 prose max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Чому варто замовити чашку з принтом саме у нас?</h2>
        <p className="text-gray-700 leading-relaxed">
          Наші горнятка виготовляються методом сублімації — це технологія, при якій фарба проникає 
          глибоко в структуру кераміки під дією температури в термопресі. Об'єм чашки 330 мл — 
          ідеальний стандарт для кави та чаю. Ми використовуємо тільки заготовки класу Premium, 
          що дозволяє мити їх навіть у посудомийній машині.
        </p>
      </article>
    </div>
  );
}