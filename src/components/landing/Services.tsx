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
          {items.map(({ icon: Icon, title, desc, meta, sysCode, tags, span }) => (
            <div
              key={title}
              className={`group relative bg-card p-8 transition-colors hover:bg-muted ${
                span === "wide" ? "md:col-span-7" : "md:col-span-5"
              }`}
            >
              <span
                className="absolute top-4 right-4 text-[10px] text-muted-foreground/70 font-medium font-mono"
              >
                {meta}
              </span>

              <div className="flex flex-col h-full">
                {/* Engineering blueprint icon badge */}
                <div className="mb-12 relative w-14 h-14 select-none">
                  {/* Base + grid */}
                  <div className="absolute inset-0 bg-primary/[0.04] border border-primary/15" />
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--primary) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--primary) 0.5px, transparent 0.5px)",
                      backgroundSize: "8px 8px",
                    }}
                  />

                  {/* Crosshairs */}
                  <div className="absolute top-1/2 left-1 w-1 h-px bg-primary/40 -translate-y-1/2" />
                  <div className="absolute top-1/2 right-1 w-1 h-px bg-primary/40 -translate-y-1/2" />
                  <div className="absolute top-1 left-1/2 h-1 w-px bg-primary/40 -translate-x-1/2" />
                  <div className="absolute bottom-1 left-1/2 h-1 w-px bg-primary/40 -translate-x-1/2" />

                  {/* Drafting corner extensions */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-primary/70 transition-all duration-300 group-hover:-top-1.5 group-hover:-left-1.5" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-primary/70 transition-all duration-300 group-hover:-bottom-1.5 group-hover:-right-1.5" />

                  {/* Icon */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Icon
                      strokeWidth={1.5}
                      className="w-6 h-6 text-primary"
                    />
                  </div>

                  {/* Micro label */}
                  <div
                    className="absolute -bottom-1.5 left-1 text-[7px] font-bold bg-card px-0.5 border-x font-mono leading-none"
                    style={{
                      color: "var(--cyan)",
                      borderColor: "color-mix(in oklab, var(--cyan) 30%, transparent)",
                    }}
                  >
                    {sysCode}
                  </div>

                  {/* Cyan accent dot */}
                  <div
                    className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full"
                    style={{
                      backgroundColor: "var(--cyan)",
                      boxShadow: "0 0 4px color-mix(in oklab, var(--cyan) 60%, transparent)",
                    }}
                  />
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
