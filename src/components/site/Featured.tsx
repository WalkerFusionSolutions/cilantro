import { Reveal } from "./Reveal";
import pabellon from "@/assets/dish-pabellon.jpg";
import pulpo from "@/assets/dish-pulpo.jpg";
import snapper from "@/assets/dish-snapper.jpg";
import Image from "next/image";

const dishes = [
  {
    img: pabellon,
    name: "Pabellón Criollo",
    desc: "Venezuela's national dish — shredded beef, black beans, white rice, sweet plantains.",
    price: "EC$58",
  },
  {
    img: pulpo,
    name: "Pulpo a la Parrilla",
    desc: "Tender grilled octopus with chimichurri and rosemary potatoes.",
    price: "EC$95",
  },
  {
    img: snapper,
    name: "Catch of the Day",
    desc: "Whole grilled red snapper with tropical salsa and Creole spice.",
    price: "Market",
  },
];

export function Featured() {
  return (
    <section className="bg-charcoal py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Signature Plates
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Dishes worth crossing the island for.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {dishes.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-2xl bg-charcoal/60 ring-1 ring-cream/10 transition-all hover:ring-primary">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold text-cream">
                      {d.name}
                    </h3>
                    <span className="font-medium text-primary">{d.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-cream/70">{d.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
