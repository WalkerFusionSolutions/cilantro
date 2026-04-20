import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Featured } from "@/components/site/Featured";
import { Menu } from "@/components/site/Menu";
import { Reviews } from "@/components/site/Reviews";
import { Visit } from "@/components/site/Visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <Menu />
      <Reviews />
      <Visit />
    </>
  );
}

