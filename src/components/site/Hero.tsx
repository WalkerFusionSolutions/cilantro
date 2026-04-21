"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-arepas.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Authentic Venezuelan arepas at Cilantro restaurant in Grenada"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            Ambassadors of the{" "}
            <span className="italic text-primary">Venezuelan Arepa</span> in the
            heart of Grenada.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-cream/80">
            A hidden gem where authentic Latin flavor meets Caribbean warmth.
            Family-owned, fire-grilled, lovingly served.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-deep shadow-glow"
            >
              <a href="#menu">
                View Menu <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
            >
              <a href="#branches">Book a Table</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-cream/60"
      >
        Scroll
      </motion.div>
    </section>
  );
}
