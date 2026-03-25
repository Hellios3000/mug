export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <article className="prose lg:prose-xl">
        <h1 className="text-4xl font-extrabold mb-6">Огляд на тему: {params.slug}</h1>
        <div className="text-gray-500 mb-8">Опубліковано: 20 травня 2024</div>
        <div className="space-y-6 text-lg text-gray-800">
          <p>Друк на чашках — це не просто нанесення картинки. Це створення настрою. 
          Використовуючи метод сублімації, ми гарантуємо, що малюнок не трісне і не зблідне.</p>
          <p>Ми використовуємо спеціальні чорнила, які при нагріванні переходять у газоподібний стан 
          і вбираються в лаковий шар горнятка. Це робить поверхню ідеально гладкою.</p>
          <h2>Технічні характеристики наших чашок:</h2>
          <ul>
            <li>Матеріал: Кераміка преміум класу</li>
            <li>Об'єм: 330 мл</li>
            <li>Висота: 9.5 см</li>
            <li>Метод друку: Сублімація</li>
          </ul>
        </div>
      </article>
    </div>
  );
}