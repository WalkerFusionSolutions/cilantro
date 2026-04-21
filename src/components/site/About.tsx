import { Reveal } from "./Reveal";
import interior from "@/assets/interior.jpg";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative">
            <Image
              src={interior}
              alt="Elegant interior of Cilantro restaurant"
              className="rounded-2xl object-cover shadow-soft"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={false}
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-glow md:block">
              <p className="font-display text-3xl font-semibold">Est.</p>
              <p className="text-sm uppercase tracking-widest">2023</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Our Story
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
            A hidden gem with a soul of <em className="text-primary">cilantro</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Cilantro was born from the dream of a Venezuelan family who wanted to share the warmth, flavor, and togetherness of Latin cuisine with the people of Grenada.
          What started as a small idea has grown into a space where culture and community meet over vibrant, homemade food.
          Every dish is prepared with passion, using fresh ingredients and recipes inspired by our roots.
          We move forward with love in everything we do, and every plate that leaves our kitchen carries a piece of that love with it.
          </p>
          <blockquote className="mt-8 border-l-2 border-primary pl-6 font-display text-xl italic text-foreground">
            "At Cilantro, every bite tells a story of family, tradition, and heart."
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
