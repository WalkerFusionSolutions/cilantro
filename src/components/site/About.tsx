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
              <p className="text-sm uppercase tracking-widest">Family-Owned</p>
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
            What looks like a humble takeaway booth opens into an intimate,
            candle-lit dining room — a Grenadian secret kept by those who know.
            We are a family-owned kitchen specializing in Venezuelan fusion,
            blending the flavors of home with the bounty of the Caribbean.
          </p>
          <blockquote className="mt-8 border-l-2 border-primary pl-6 font-display text-xl italic text-foreground">
            "Providing an unforgettable experience through the fusion of
            flavor."
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
