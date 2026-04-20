import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cilantro · Latin Food & Bar — Grand Anse, Grenada",
  description:
    "Authentic Venezuelan fusion in Grand Anse, Grenada. Arepas, grilled octopus, fresh catch & rum cocktails. Family-owned. Open Mon–Sat.",
  openGraph: {
    title: "Cilantro · Latin Food & Bar",
    description:
      "Ambassadors of the Venezuelan Arepa in the heart of Grenada — a hidden gem in Le Marquis Complex, Grand Anse.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

