import { Globe, Layers, ShoppingBag, Compass } from "lucide-react";

type Service = {
  icon: typeof Globe;
  title: string;
  desc: string;
  meta: string;
  sysCode: string;
  tags: { label: string; accent?: "indigo" | "cyan" }[];
  span: "wide" | "narrow";
};

const items: Service[] = [
  {
    icon: Globe,
    title: "Лендинги и сайты",
    desc: "Быстро, чисто, с целью. Создаём интерфейсы, которые превращают посетителей в клиентов через выверенный UX.",
    meta: "ID_01 // WEB_CORE",
    sysCode: "SYS_V01",
    tags: [
      { label: "#performance" },
      { label: "#seo_ready" },
      { label: "#fast_load", accent: "indigo" },
    ],
    span: "wide",
  },
  {
    icon: Layers,
    title: "Веб-приложения",
    desc: "Сложная логика, удобный интерфейс. Разработка масштабируемых SaaS и корпоративных систем.",
    meta: "ID_02 // APP_LOGIC",
    sysCode: "SYS_V02",
    tags: [{ label: "#react" }, { label: "#api_driven" }],
    span: "narrow",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Магазины, которые продают. Интеграция с платёжными шлюзами и складскими системами.",
    meta: "ID_03 // SALE_MOD",
    sysCode: "SYS_V03",
    tags: [{ label: "#checkout" }, { label: "#scalability", accent: "cyan" }],
    span: "narrow",
  },
  {
    icon: Compass,
    title: "IT-консалтинг",
    desc: "Помогаем выбрать правильное решение. Аудит кода, архитектуры и выбор стека под ваши задачи.",
    meta: "ID_04 // STRAT_DEP",
    sysCode: "SYS_V04",
    tags: [
      { label: "#architecture" },
      { label: "#security_audit" },
      { label: "#legacy_optimization" },
    ],
    span: "wide",
  },
];

function tagClass(accent?: "indigo" | "cyan") {
  if (accent === "indigo")
    return "bg-primary/10 text-primary";
  if (accent === "cyan")
    return "bg-[color:var(--cyan)]/10 text-[color:var(--cyan)]";
  return "bg-muted text-muted-foreground";
}

export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="label-mono text-[color:var(--cyan)]">// Что мы делаем</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1]">
            Спектр услуг — от первого <span className="text-primary">экрана</span> до сложных систем
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {items.map(({ icon: Icon, title, desc, meta, tags, span }) => (
            <div
              key={title}
              className={`relative bg-card p-8 transition-colors hover:bg-muted ${
                span === "wide" ? "md:col-span-7" : "md:col-span-5"
              }`}
            >
              <span
                className="absolute top-4 right-4 text-[10px] text-muted-foreground/70 font-medium font-mono"
              >
                {meta}
              </span>

              <div className="flex flex-col h-full">
                <div className="mb-12 w-10 h-10 rounded-sm bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-muted-foreground max-w-md">{desc}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t.label}
                      className={`px-2 py-1 text-[10px] font-medium uppercase rounded-sm font-mono ${tagClass(t.accent)}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4 text-muted-foreground">
          <div className="h-px w-8 bg-border" />
          <p className="text-[11px] uppercase tracking-wider font-mono">
            Мы развиваемся. Веб — это наш старт, не наш потолок.
          </p>
        </div>
      </div>
    </section>
  );
}
