import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Друк на чашках та замовлення горняток з принтами в Україні | MyCup",
  description: "Замовляйте унікальні чашки з принтами, фото та написами. Якісний друк на горнятках: патріотичні, для програмістів, подарункові. Доставка по Україні.",
  keywords: "друк на чашках, чашка з принтом купити, замовити чашку з фото, іменні чашки, патріотичні чашки, подарунок мамі",
  openGraph: {
    title: "Чашки з принтами на замовлення | Найкращі ціни в Україні",
    description: "Створіть свій унікальний дизайн або оберіть з каталогу. Сублімаційний друк преміум якості.",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "MyCup - Магазин Чашок з Принтами",
    "description": "Продаж чашок з оригінальними принтами та друк під замовлення",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UA"
    }
  };

  return (
    <html lang="uk">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}