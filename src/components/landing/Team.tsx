const team = [
  { name: "Айдар", role: "Tech lead", spec: "Архитектура · TypeScript", initial: "А" },
  { name: "Данияр", role: "Full-stack engineer", spec: "Node · React · Python", initial: "Д" },
  { name: "Алия", role: "Product designer", spec: "UX · интерфейсы", initial: "А" },
  { name: "Ержан", role: "DevOps engineer", spec: "Cloud · CI/CD", initial: "Е" },
];

export function Team() {
  return (
    <section id="team" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="label-mono text-[color:var(--cyan)]">Команда</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Люди, которые делают проекты</h2>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((m) => (
            <div key={m.name} className="glass glow-border rounded-lg p-6 text-center">
              <div
                className="mx-auto h-20 w-20 rounded-md flex items-center justify-center text-2xl font-bold font-display"
                style={{
                  background: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 80%, transparent), color-mix(in oklab, var(--cyan) 60%, transparent))",
                }}
              >
                {m.initial}
              </div>
              <h3 className="mt-4 font-semibold">{m.name}</h3>
              <p className="text-sm text-primary mt-0.5">{m.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{m.spec}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
