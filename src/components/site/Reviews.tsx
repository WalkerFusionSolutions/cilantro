"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    quote:
      "A hidden gem in Grand Anse. Don't be fooled by the takeaway booth — step inside and you'll find one of the best dining experiences on the island.",
    name: "Sarah M.",
    source: "Tripadvisor",
  },
  {
    quote:
      "Authentic Venezuelan flair you simply won't find anywhere else in Grenada. The arepas are unreal.",
    name: "James P.",
    source: "Tripadvisor",
  },
  {
    quote:
      "The best server we've ever had on holiday — and the food matched. Pulpo was perfectly charred. We'll be back tomorrow.",
    name: "Helena & Tom",
    source: "Tripadvisor",
  },
  {
    quote:
      "Family-run with so much heart. Every plate tastes like it was made for you. A must-visit.",
    name: "Marco D.",
    source: "Google",
  },
];

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section id="reviews" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Loved by Locals & Travelers
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Words from our table.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative rounded-3xl bg-card p-8 shadow-soft md:p-14">
            <Quote className="absolute -top-5 left-8 h-12 w-12 rounded-full bg-primary p-3 text-primary-foreground shadow-glow" />

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {reviews.map((r, i) => (
                  <div key={i} className="min-w-0 flex-[0_0_100%] px-2">
                    <div className="mb-4 flex justify-center gap-1">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star
                          key={k}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-center font-display text-2xl italic leading-relaxed text-foreground md:text-3xl">
                      "{r.quote}"
                    </p>
                    <div className="mt-8 text-center">
                      <p className="font-semibold">{r.name}</p>
                      <p className="text-sm text-muted-foreground">
                        via {r.source}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="rounded-full border border-border p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-2 rounded-full transition-all ${
                      selected === i ? "w-8 bg-primary" : "w-2 bg-border"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="rounded-full border border-border p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Next review"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
