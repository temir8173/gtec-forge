import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Approach } from "@/components/landing/Approach";
import { Stack } from "@/components/landing/Stack";
import { Work } from "@/components/landing/Work";
import { Team } from "@/components/landing/Team";
import { Contact } from "@/components/landing/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "gtec.kz — Мы строим IT-продукты. Не шаблоны." },
      {
        name: "description",
        content:
          "Команда инженеров из Казахстана. Создаём веб-решения любой сложности: сайты, веб-приложения, e-commerce, IT-консалтинг.",
      },
      { property: "og:title", content: "gtec.kz — IT-продукты, не шаблоны" },
      {
        property: "og:description",
        content: "Технологический партнёр для бизнеса. Современный стек, инженерный подход, долгое сопровождение.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Approach />
      <Stack />
      <Work />
      <Team />
      <Contact />
    </main>
  );
}
