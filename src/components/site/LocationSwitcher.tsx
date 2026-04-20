import { MapPin } from "lucide-react";
import { useLocation, BRANCHES, type LocationId } from "./LocationContext";
import { cn } from "@/lib/utils";

export function LocationSwitcher({ className }: { className?: string }) {
  const { location, setLocation } = useLocation();
  const ids = Object.keys(BRANCHES) as LocationId[];
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/70 p-1 shadow-soft backdrop-blur",
        className,
      )}
      role="group"
      aria-label="Select location"
    >
      <MapPin className="ml-2 h-3.5 w-3.5 text-primary" aria-hidden />
      {ids.map((id) => {
        const active = id === location;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setLocation(id)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-all",
              active
                ? "bg-primary text-primary-foreground shadow"
                : "text-foreground/70 hover:text-foreground",
            )}
          >
            {BRANCHES[id].short}
          </button>
        );
      })}
    </div>
  );
}
