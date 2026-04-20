import { Instagram, MapPin, Clock, Phone } from "lucide-react";
import { BRANCHES } from "./LocationContext";
import logo from "@/assets/logo.png";
import Image from "next/image";

export function Footer() {
  const branches = [BRANCHES["grand-anse"], BRANCHES["true-blue"]];

  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.1fr_2fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="inline-block">
              <Image
                src={logo}
                alt="Cilantro Latin Food & Bar"
                className="h-[104px] w-auto brightness-0 invert"
                sizes="240px"
              />
            </a>
            <p className="mt-5 max-w-xs text-sm text-cream/70">
              Latin Food &amp; Bar — fusion of flavor, served warm in the heart of Grenada.
            </p>
          </div>

          {/* Visit Us — dual branch */}
          <div>
            <h3 className="font-display text-2xl font-semibold">Visit Us</h3>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {branches.map((b) => (
                <div key={b.id} className="rounded-2xl border border-cream/10 bg-cream/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {b.short}
                  </p>
                  <h4 className="mt-1 font-display text-lg font-semibold">{b.name}</h4>

                  <ul className="mt-4 space-y-3 text-sm text-cream/75">
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{b.address}</span>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{b.hours}</span>
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
                    {b.instagram && (
                      <li className="flex gap-3">
                        <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <a
                          href={b.instagramUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="transition-colors hover:text-primary"
                        >
                          {b.instagram}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-cream/60">
          <p>© 2026 Cilantro Latin Food &amp; Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
