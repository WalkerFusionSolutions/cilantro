import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./Reveal";
import { Sun } from "lucide-react";

type Item = { name: string; desc?: string; price: string };
type Category = {
  id: string;
  label: string;
  note?: string;
  grandAnseOnly?: boolean;
  groups?: { title?: string; items: Item[] }[];
  items?: Item[];
};

const ec = (n: string) => `EC$${n}`;

const menu: Category[] = [
  {
    id: "appetizers",
    label: "Appetizers",
    items: [
      { name: "Asopado", price: ec("42") },
      { name: "Bisque de Camarón", desc: "Shrimp bisque", price: ec("29") },
      { name: "Ceviche de Pescado", desc: "Lime-cured fish", price: ec("46") },
      { name: "Salpicón de Camarones", desc: "Shrimp salpicón", price: ec("58") },
      { name: "Crispy Sea & Garden Bites", price: ec("49") },
      { name: "Salpicón de Mariscos", desc: "Mixed seafood", price: ec("46") },
      { name: "Fried Eggplant Rolls", price: ec("24") },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    items: [
      { name: "Ensalada César", price: ec("28") },
      { name: "Ensalada de Gallina", desc: "Venezuelan chicken salad", price: ec("35") },
      { name: "Southwest Chicken Salad", price: ec("39") },
    ],
  },
  {
    id: "pastries",
    label: "Pastries & Breads",
    groups: [
      {
        title: "Empanadas & Cachitos",
        items: [
          { name: "Chicken Empanada", price: ec("8") },
          { name: "Meat Empanada", price: ec("9") },
          { name: "Mortadella Cachito", price: ec("10") },
          { name: "Ham Cachito", price: ec("10") },
        ],
      },
      {
        title: "Breads",
        items: [
          { name: "Butter Bread", price: ec("5") },
          { name: "Aniseed Bread", price: ec("6") },
          { name: "Garlic Bread", price: ec("7") },
          { name: "Milk Bread", price: ec("6") },
          { name: "Cheese Bread", price: ec("8") },
        ],
      },
    ],
  },
  {
    id: "entrees",
    label: "Entrées",
    items: [
      { name: "Chicken Cordon Bleu Tropicale", price: ec("58") },
      { name: "Caldereta de Pescado", desc: "Fish stew", price: ec("65") },
      { name: "Arroz Marinera", desc: "Seafood rice · 2 pax", price: ec("150") },
      { name: "Catch of the Day", price: ec("67") },
      { name: "Langostino al Champiñón", desc: "Prawns in mushroom sauce", price: ec("67") },
      { name: "Lomito al Vino", desc: "Tenderloin in red wine", price: ec("98") },
      { name: "Pulpo a la Parrilla", desc: "Grilled octopus", price: ec("58") },
      { name: "Pabellón Criollo", desc: "Beef, beans, rice, plantains", price: ec("47") },
      { name: "Parrilla Mar y Tierra", desc: "Surf & turf grill · 2 pax", price: ec("150") },
      { name: "Plato Mixto", price: ec("45") },
      { name: "Pollo Asado", desc: "Roast chicken", price: ec("43") },
      { name: "Pollo Salteado", desc: "Sautéed chicken", price: ec("49") },
      { name: "Puerco Salteado", desc: "Sautéed pork", price: ec("49") },
    ],
  },
  {
    id: "arepas",
    label: "Arepas",
    note: "The specialty — handmade daily.",
    items: [
      { name: "Catira", desc: "Chicken & yellow cheese", price: ec("28") },
      { name: "Dominó", desc: "Black beans & white cheese", price: ec("24") },
      { name: "Ensalada de Gallina", desc: "Chicken salad arepa", price: ec("20") },
      { name: "Mechada", desc: "Shredded beef", price: ec("28") },
      { name: "Pabellón", desc: "Beef, beans, plantain, cheese", price: ec("29") },
      { name: "Peluda", desc: "Shredded beef & yellow cheese", price: ec("32") },
      { name: "Pernil", desc: "Slow-roasted pork", price: ec("26") },
      { name: "Pollo", desc: "Shredded chicken", price: ec("23") },
      { name: "Reina Pepiada", desc: "Avocado chicken", price: ec("29") },
      { name: "Solo Queso", desc: "White cheese only", price: ec("25") },
    ],
  },
  {
    id: "burritos",
    label: "Burritos & Fusion",
    groups: [
      {
        title: "Bowls & Burritos",
        items: [
          { name: "Beef Bowl / Burrito", price: ec("32–42") },
          { name: "Pork Bowl / Burrito", price: ec("32–42") },
          { name: "Chicken Bowl / Burrito", price: ec("32–42") },
          { name: "Mix Bowl / Burrito", price: ec("32–42") },
          { name: "Vegan Bowl / Burrito", price: ec("32–42") },
        ],
      },
      {
        title: "Quesadillas & Nachos",
        items: [
          { name: "Beef Quesadilla", price: ec("47") },
          { name: "Pork Quesadilla", price: ec("47") },
          { name: "Chicken Quesadilla", price: ec("42") },
          { name: "Mix Quesadilla", price: ec("47") },
          { name: "Veggie Quesadilla", price: ec("37") },
          { name: "Nachos", price: ec("24") },
        ],
      },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    grandAnseOnly: true,
    note: "Served until late morning at Grand Anse only.",
    groups: [
      {
        title: "Plates",
        items: [
          { name: "Classic Plate", price: ec("19") },
          { name: "Morning Mix", price: ec("19") },
          { name: "Cheesy Ham Omelet", price: ec("20") },
          { name: "Venezuelan Breakfast", price: ec("28") },
          { name: "Morning Stack", price: ec("19") },
        ],
      },
      {
        title: "Breakfast Burritos",
        items: [
          { name: "Breakfast Burrito", desc: "Eggs, beans, cheese, salsa", price: ec("22") },
        ],
      },
      {
        title: "Sourdough Paninis",
        items: [
          { name: "Mortadella Melt", price: ec("27") },
          { name: "Classic Panini", price: ec("27") },
          { name: "Ham & Cheese", price: ec("16") },
          { name: "Pulled Pork", price: ec("23") },
          { name: "Shredded Beef", price: ec("23") },
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Bienmesabe", desc: "Coconut & rum cake", price: ec("25") },
      { name: "Paradise Choco Cake", price: ec("25") },
      { name: "Chocolate Moment", price: ec("22") },
      { name: "Quesillo", desc: "Plain or coconut", price: ec("20") },
      { name: "Lemon Pie", price: ec("25") },
      { name: "Tarta de Fresa", desc: "Strawberry tart", price: ec("22") },
      { name: "Tiramisu", price: ec("25") },
      { name: "Tres Leches", price: ec("25") },
    ],
  },
  {
    id: "sides",
    label: "Sides & Extras",
    groups: [
      {
        title: "Sides",
        items: [
          { name: "Black Beans", price: ec("9") },
          { name: "White Rice", price: ec("8") },
          { name: "Pico de Gallo", price: ec("8") },
          { name: "Yuca / Cassava", price: ec("10") },
          { name: "Sweet Plantains", price: ec("10") },
          { name: "Tostones", price: ec("10") },
          { name: "House Salad", price: ec("12") },
        ],
      },
      {
        title: "Extras",
        items: [
          { name: "Avocado", price: ec("12") },
          { name: "Extra Cheese", price: ec("7") },
          { name: "Extra Protein", price: ec("15") },
          { name: "Guasacaca Sauce", price: ec("7") },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    groups: [
      {
        title: "Sodas",
        items: [
          { name: "Soft Drink", price: ec("6") },
          { name: "Sparkling Soda", price: ec("9") },
          { name: "Premium Soda", price: ec("12") },
        ],
      },
      {
        title: "Water & Juice",
        items: [
          { name: "Still Water", price: ec("5") },
          { name: "Sparkling Water", price: ec("12") },
          { name: "Fresh Juice", price: ec("15") },
          { name: "Papelón con Limón", desc: "Cane sugar lemonade", price: ec("14") },
          { name: "Fresh Coconut", price: ec("12") },
          { name: "Bottle Juice (carafe)", price: ec("25") },
        ],
      },
      {
        title: "Coffee & Tea",
        items: [
          { name: "Espresso", price: ec("8") },
          { name: "Americano", price: ec("9") },
          { name: "Cappuccino", price: ec("12") },
          { name: "Latte", price: ec("13") },
          { name: "Flavored Latte", price: ec("17") },
          { name: "Tea", price: ec("8") },
        ],
      },
    ],
  },
];

function ItemRow({ it }: { it: Item }) {
  return (
    <div className="group flex items-baseline gap-4 border-b border-dashed border-border pb-4">
      <div className="flex-1">
        <h4 className="font-display text-lg font-semibold transition-colors group-hover:text-primary">
          {it.name}
        </h4>
        {it.desc && (
          <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
        )}
      </div>
      <span className="whitespace-nowrap font-medium text-primary">
        {it.price}
      </span>
    </div>
  );
}

function CategoryBody({ c }: { c: Category }) {
  return (
    <div className="space-y-10">
      {c.note && (
        <div className="flex flex-wrap items-center gap-3">
          {c.grandAnseOnly && (
            <Badge className="bg-primary/10 text-primary hover:bg-primary/15">
              <Sun className="mr-1 h-3 w-3" /> Grand Anse only
            </Badge>
          )}
          <p className="text-sm italic text-muted-foreground">{c.note}</p>
        </div>
      )}
      {c.items && (
        <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
          {c.items.map((it) => (
            <ItemRow key={it.name} it={it} />
          ))}
        </div>
      )}
      {c.groups?.map((g) => (
        <div key={g.title}>
          {g.title && (
            <h3 className="mb-5 font-display text-2xl font-semibold tracking-tight text-foreground">
              <span className="border-b-2 border-primary pb-1">{g.title}</span>
            </h3>
          )}
          <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
            {g.items.map((it) => (
              <ItemRow key={it.name} it={it} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            The Menu
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Crafted with fire, herbs &amp; heritage.
          </h2>
          <p className="mt-4 text-muted-foreground">
            All prices in Eastern Caribbean Dollars (EC$).
          </p>
        </Reveal>

        {/* Desktop: Tabs */}
        <Reveal delay={0.1} className="mt-12 hidden md:block">
          <Tabs defaultValue={menu[0].id} className="w-full">
            <div className="overflow-x-auto">
              <TabsList className="mx-auto flex h-auto w-max gap-2 bg-secondary/60 p-1.5">
                {menu.map((c) => (
                  <TabsTrigger
                    key={c.id}
                    value={c.id}
                    className="whitespace-nowrap rounded-md px-4 py-2 font-display text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {c.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menu.map((c) => (
              <TabsContent key={c.id} value={c.id} className="mt-12">
                <CategoryBody c={c} />
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>

        {/* Mobile: Accordions */}
        <Reveal delay={0.1} className="mt-10 md:hidden">
          <Accordion
            type="single"
            collapsible
            defaultValue={menu[0].id}
            className="w-full"
          >
            {menu.map((c) => (
              <AccordionItem key={c.id} value={c.id} className="border-border">
                <AccordionTrigger className="font-display text-xl font-semibold tracking-tight hover:text-primary hover:no-underline">
                  <span className="flex items-center gap-2">
                    {c.label}
                    {c.grandAnseOnly && (
                      <Sun className="h-4 w-4 text-primary" aria-label="Grand Anse only" />
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <CategoryBody c={c} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

      </div>
    </section>
  );
}
