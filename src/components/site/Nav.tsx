"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocationSwitcher } from "./LocationSwitcher";
import { useLocation } from "./LocationContext";
import logo from "@/assets/logo.png";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#branches", label: "Locations" },
];

const WHATSAPP_NUMBER = "14734033557";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { branch } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const orderHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Cilantro! I'd like to place an order for pickup at ${branch.name}.`,
  )}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <a href="#top" className="flex items-center gap-2" aria-label="Cilantro home">
          <Image
            src={logo}
            alt="Cilantro Latin Food & Bar"
            priority
            className="h-[84px] w-auto md:h-[104px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocationSwitcher />
          <Button asChild size="sm" className="bg-primary hover:bg-primary-deep">
            <a href={orderHref} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              Order Now
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            <div className="pb-3">
              <LocationSwitcher />
            </div>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-primary hover:bg-primary-deep">
              <a
                href={orderHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                Order Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
