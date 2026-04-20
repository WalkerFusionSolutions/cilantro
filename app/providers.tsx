"use client";

import type { ReactNode } from "react";

import { LocationProvider } from "@/components/site/LocationContext";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocationProvider>
      <main className="min-h-screen bg-background">
        <Nav />
        {children}
        <Footer />
      </main>
    </LocationProvider>
  );
}

