import Link from "next/link";

const posts = [
  { slug: "yak-dohlyadaty-za-chashkoyu", title: "Як доглядати за чашкою з принтом: поради", excerpt: "Щоб принт залишався яскравим роками, дотримуйтесь цих правил..." },
  { slug: "top-10-podarunkiv-it", title: "Топ-10 чашок для програмістів 2024", excerpt: "Що подарувати розробнику? Огляд найсмішніших та найстильніших принтів..." },
  { slug: "vybir-keramika-porcelana", title: "Кераміка чи порцеляна: що краще для друку?", excerpt: "Розбираємось у технічних характеристиках матеріалів для сублімації..." }
];

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Блог про чашки та подарунки</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="border rounded-lg overflow-hidden flex flex-col">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6 flex-grow">
              <h2 className="text-xl font-bold mb-3">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-brand-600 font-bold hover:underline">
                Читати далі →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}