"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    quote:
      "When you first walk in you may think it is fast food/take away but sit down at one of the tables and the friendly service and the quality of the food will overwhelm you. I will be coming back next time I am in Grenada.",
    name: "Sam",
    source: "Tripadvisor",
  },
  {
    quote:
      "Cilantro is truly a gem in Grenada! The food is beyond amazing—every bite is bursting with flavor and cooked to perfection. The service is outstanding: warm, welcoming, and genuine, making you feel right at home the moment you walk in.",
    name: "Deborah",
    source: "Tripadvisor",
  },
  {
    quote:
      "Great service and great food! Value for money. Variety of Flavourful Food great quantity. Small clean space well organised and welcoming staff. Great spot easy to find in Grand Anse!",
    name: "Karlene P.",
    source: "Tripadvisor",
  },
  {
    quote:
      "Without a doubt, this is the best place on the entire island to eat: excellent flavor and food quality, with an incredible variety of tastes. It's extremely clean, and on top of that, they make their own homemade desserts that taste amazing!!",
    name: "Pablo R.",
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
