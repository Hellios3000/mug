import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">MyCup.ua</h3>
            <p className="text-gray-400 text-sm">
              Ваш надійний партнер у світі оригінальних подарунків. Створюємо чашки, які приносять радість кожного ранку.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Каталог</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/catalog/patriotic">Патріотичні</Link></li>
              <li><Link href="/catalog/pro-it">Для IT-фахівців</Link></li>
              <li><Link href="/catalog/zodiac">Знаки зодіаку</Link></li>
              <li><Link href="/catalog/animals">Тварини</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Інформація</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/shipping">Доставка та оплата</Link></li>
              <li><Link href="/faq">Часті запитання</Link></li>
              <li><Link href="/contacts">Контакти</Link></li>
              <li><Link href="/privacy">Політика конфіденційності</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ми в соцмережах</h4>
            <div className="flex space-x-4">
              <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-brand-600 cursor-pointer transition">Inst</span>
              <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-brand-600 cursor-pointer transition">Fb</span>
              <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-brand-600 cursor-pointer transition">Pin</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          © 2024 MyCup Ukraine. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}