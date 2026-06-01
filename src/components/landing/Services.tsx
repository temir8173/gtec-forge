import { Globe, Layers, ShoppingBag, Compass } from "lucide-react";

const items = [
  { icon: Globe, title: "Лендинги и сайты", desc: "Быстро, чисто, с целью" },
  { icon: Layers, title: "Веб-приложения", desc: "Сложная логика, удобный интерфейс" },
  { icon: ShoppingBag, title: "E-commerce", desc: "Магазины, которые продают" },
  { icon: Compass, title: "IT-консалтинг", desc: "Помогаем выбрать правильное решение" },
];

export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm text-[color:var(--cyan)] font-medium uppercase tracking-widest">Что мы делаем</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Спектр услуг — от первого экрана до сложных систем</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass glow-border rounded-2xl p-6">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-muted-foreground max-w-xl">
          Мы развиваемся. Веб — это наш старт, не наш потолок.
        </p>
      </div>
    </section>
  );
}
