"use client";

import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { BRANCHES } from "./LocationContext";

export function Visit() {
  const branches = [BRANCHES["grand-anse"], BRANCHES["true-blue"]];

  return (
    <section id="branches" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Our Branches
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Two homes. One Cilantro.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Find us at Grand Anse or True Blue.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-6 md:grid-cols-2">
          {branches.map((b) => (
            <article
              key={b.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {b.short}
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-semibold">
                    {b.name}
                  </h3>
                </div>
                {b.instagram && b.instagramUrl && (
                  <a
                    href={b.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${b.instagram} on Instagram`}
                    className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/15"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
              </div>

              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{b.address}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-foreground">{b.hours}</p>
                    {b.hoursNote && <p className="text-muted-foreground/80">{b.hoursNote}</p>}
                  </div>
                </li>
                {b.tel && (
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <a
                      href={`tel:${b.tel.replace(/[^0-9+]/g, "")}`}
                      className="transition-colors hover:text-primary"
                    >
                      {b.tel}
                    </a>
                  </li>
                )}
              </ul>

              <div className="mt-6 overflow-hidden rounded-xl border border-border bg-muted/20">
                <iframe
                  title={`${b.name} map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(b.mapsQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-deep">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapsQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
                {b.tel && (
                  <Button asChild size="lg" variant="outline">
                    <a href={`tel:${b.tel.replace(/[^0-9+]/g, "")}`}>Call</a>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </Reveal>

      </div>
    </section>
  );
}
