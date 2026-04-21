import { createContext, useContext, useState, type ReactNode } from "react";

export type LocationId = "grand-anse" | "true-blue";

export type Branch = {
  id: LocationId;
  name: string;
  short: string;
  address: string;
  hours: string;
  hoursNote?: string;
  tel?: string;
  instagram?: string;
  instagramUrl?: string;
  servesBreakfast: boolean;
  mapsQuery: string;
};

export const BRANCHES: Record<LocationId, Branch> = {
  "grand-anse": {
    id: "grand-anse",
    name: "Cilantro Grand Anse",
    short: "Grand Anse",
    address: "Le Marquis Complex, Grand Anse, St. George",
    hours: "Mon – Sat · 7:00 AM – 9:00 PM",
    hoursNote: "Closed Sunday",
    tel: "+1 (473) 403-3557",
    instagram: "@cilantro.gnd",
    instagramUrl: "https://instagram.com/cilantro.gnd",
    servesBreakfast: true,
    mapsQuery: "Le+Marquis+Complex+Grand+Anse+Grenada",
  },
  "true-blue": {
    id: "true-blue",
    name: "Cilantro TB",
    short: "True Blue",
    address: "True Blue, St. George",
    hours: "Mon – Sat · 11:00 AM – 8:30 PM",
    hoursNote: "Closed Sunday",
    tel: "+1 (473) 403-3557",
    instagram: "@cilantro.tb",
    instagramUrl: "https://instagram.com/cilantro.tb",
    servesBreakfast: false,
    mapsQuery: "262H+QCP+True+Blue+Grenada",
  },
};

type Ctx = {
  location: LocationId;
  setLocation: (id: LocationId) => void;
  branch: Branch;
};

const LocationCtx = createContext<Ctx | null>(null);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<LocationId>("grand-anse");
  return (
    <LocationCtx.Provider
      value={{ location, setLocation, branch: BRANCHES[location] }}
    >
      {children}
    </LocationCtx.Provider>
  );
}

export function useLocation() {
  const ctx = useContext(LocationCtx);
  if (!ctx) throw new Error("useLocation must be used within LocationProvider");
  return ctx;
}
