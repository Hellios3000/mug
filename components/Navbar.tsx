import Link from "next/link";
import { ShoppingCart, Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-brand-600">
          MyCup<span className="text-gray-800">.ua</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/catalog" className="hover:text-brand-600">Каталог</Link>
          <Link href="/custom" className="hover:text-brand-600">Свій дизайн</Link>
          <Link href="/b2b" className="hover:text-brand-600">Опт / B2B</Link>
          <Link href="/blog" className="hover:text-brand-600">Блог</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </Link>
          <Menu className="md:hidden w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}