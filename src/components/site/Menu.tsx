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
      { name: "Asopado", desc: "Sea food soup with shrimp, calamari, octopus, mussels and rice", price: ec("42") },
      { name: "Bisque de Camarón", desc: "Tasty strained soup made of crustaceans lobster, crab, shrimp or prawns", price: ec("29") },
      { name: "Ceviche de Pescado", desc: "Diced bits of raw fish marinated in citrus and seasonings with onion & sweet peppers", price: ec("46") },
      { name: "Salpicón de Camarones", desc: "Venezuelan saucy dish of Spanish origin made from chopped vegetables, and seafood", price: ec("58") },
      { name: "Crispy Sea & Garden Bites", desc: "Fried shrimp, squid, eggplant, and carrot in a light, crispy breading.", price: ec("49") },
      { name: "Salpicón de Mariscos", desc: "Shrimp, mussels, clams, octopus, and squid tossed with onions, sweet chili, olive oil, and lime.", price: ec("46") },
      { name: "Fried Eggplant Rolls", desc: "Golden-fried eggplant slices filled with mozzarella, tomato sauce, and ham, baked and topped with Parmesan.", price: ec("24") },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    items: [
      { name: "Ensalada César", desc: "Lettuce, Parmesan, Caesar dressing, Grilled Chicken, and Bacon", price: ec("28") },
      { name: "Ensalada de Gallina", desc: "Venezuelan salad with potatoes, carrots, shredded chicken breast, onion, and mayonnaise", price: ec("35") },
      { name: "Southwest Chicken Salad", desc: "Lettuce, grilled chicken, tomatoes, corn, avocado, black beans, cheddar, and bacon.", price: ec("39") },
    ],
  },
  {
    id: "pastries",
    label: "Pastries & Breads",
    groups: [
      {
        title: "Empanadas & Cachitos",
        items: [
          { name: "Chicken Empanada", desc: "Latin Baked Chicken Turn Over", price: ec("8") },
          { name: "Meat Empanada", desc: "Latin Baked Ground Meat Turn Over", price: ec("9") },
          { name: "Mortadella Cachito", desc: "Venezuelan Sweet Buttery Roll with Mortadella", price: ec("10") },
          { name: "Ham Cachito", desc: "Venezuelan Sweet Buttery Roll with Ham", price: ec("10") },
        ],
      },
      {
        title: "Breads",
        items: [
          { name: "Butter Bread", price: ec("5") },
          { name: "Aniseed Bread", price: ec("5") },
          { name: "Garlic Bread", price: ec("8") },
          { name: "Milk Bread", price: ec("5") },
          { name: "SmallCheese Bread", price: ec("6") },
        ],
      },
    ],
  },
  {
    id: "entrees",
    label: "Entrées",
    items: [
      { name: "Chicken Cordon Bleu Tropicale", desc: "Breaded chicken breast stuffed with ham and cheese, served with mushrooms, sweet plantains, and cream sauce.", price: ec("58") },
      { name: "Caldereta de Pescado", desc: "Juicy Fish and Tender Potatoes, all slowly cooked in a rich Tomato and Spice Sauce", price: ec("65") },
      { name: "Arroz Marinera (2 Pax. Minimum $75 Each)", desc: "Seafood Rice with a mix of Shrimps, Octopus, Mussels and Calamari", price: ec("150") },
      { name: "Catch of the Day", desc: "Catch of the Day with Butter and Lemon or Garlic Sauce + 2 Sides", price: ec("67") },
      { name: "Langostino al Champiñón", desc: "Prawns cooked with a Garlic sauce and Mushrooms + Garlic Bread", price: ec("67") },
      { name: "Lomito al Vino", desc: "Beef Tenderloin with Red Wine Sauce + 2 sides", price: ec("98") },
      { name: "Pulpo a la Parrilla", desc: "Octopus cooked directly on the grill, with a very special sauce", price: ec("58") },
      { name: "Pabellón Criollo", desc: "Venezuela National Dish with shredded Beef / Chicken / Pork, Rice, Black Beans, Plantains White Cheese & Arepa", price: ec("47") },
      { name: "Parrilla Mar y Tierra (2 Pax. Minimum - $75 Each)", desc: "Seafood, Chicken, Beef and Pork Grill", price: ec("150") },
      { name: "Plato Mixto", desc: "Choose 2 of Beef, Pork & Chicken + 2 Sides", price: ec("45") },
      { name: "Pollo Asado", desc: "Baked Chicken + 2 Sides", price: ec("43") },
      { name: "Pollo Salteado o Puerco", desc: "Sautéed Chicken or Pork and Veggies + 2 Sides", price: ec("49") },
    ],
  },
  {
    id: "arepas",
    label: "Arepas",
    note: "The specialty — handmade daily.",
    items: [
      { name: "Catira", desc: "Shredded chicken & cheese", price: ec("28") },
      { name: "Dominó", desc: "Black beans & cheese", price: ec("24") },
      { name: "Ensalada de Gallina", desc: "Chicken salad arepa", price: ec("20") },
      { name: "Mechada", desc: "Shredded beef", price: ec("28") },
      { name: "Pabellón", desc: "Shredded chicken, beef or pork, black beans, plantains, white cheese", price: ec("29") },
      { name: "Peluda", desc: "Shredded beef & cheddar cheese", price: ec("32") },
      { name: "Pernil", desc: "Shredded low-roasted pork", price: ec("26") },
      { name: "Pollo", desc: "Shredded chicken", price: ec("23") },
      { name: "Reina Pepiada", desc: "Shredded chicken, avocado, mayo & mustard", price: ec("29") },
      { name: "Solo Queso", desc: "Shredded cheddar cheese only", price: ec("25") },
    ],
  },
  {
    id: "burritos",
    label: "Burritos & Fusion",
    groups: [
      {
        title: "Bowls & Burritos",
        items: [
          { name: "Beef or Pork Burrito or Bowl", desc: "Grilled or shredded Beef or Pork, Rice, Beans, Lettuce, Pico de Gallo & Jalapeno", price: ec("42") },
          { name: "Chicken Burrito or Bowl", desc: "Grilled or shredded Chicken, Rice, Beans, Lettuce, Pico de Gallo & Jalapeno", price: ec("39") },
          { name: "Mix Burrito or Bowl", desc: "Mixed meat with Beef, Chicken or Pork, Rice, Beans, Lettuce, Pico de Gallo & Jalapeno", price: ec("42") },
          { name: "Vegan Burrito or Bowl", desc: "Rice, Beans, Lettuce, Pico de Gallo & Jalapeno", price: ec("32") },
        ],
      },
      {
        title: "Quesadillas & Nachos",
        items: [
          { name: "Beef or Pork Quesadilla", desc: "Beef or Pork, Beans, Pico de Gallo & Cheese", price: ec("47") },
          { name: "Chicken Quesadilla", desc: "Chicken, Beans, Pico de Gallo & Cheese", price: ec("44") },
          { name: "Mix Quesadilla", desc: "Mixed meat with Beef, Chicken or Pork, Beans, Pico de Gallo & Cheese", price: ec("47") },
          { name: "Vegetarian Quesadilla", desc: "Beans, Pico de Gallo & Melted Cheese", price: ec("37") },
          { name: "Nachos", desc: "Beans, Pico de Gallo & Melted Cheese", price: ec("24") },
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
          { name: "Classic Plate", desc: "2 Eggs with Bacon, Sausages and Toasted Bread", price: ec("19") },
          { name: "Morning Mix", desc: "2 Eggs with Ham and Toasted Bread", price: ec("19") },
          { name: "Cheesy Omelet", desc: "Omlet with Cheese", price: ec("18") },
          { name: "Cheesy Ham Omelet", desc: "Omlet with Ham and Cheese", price: ec("20") },
          { name: "Venezuelan Breakfast", desc: "2 Eggs with Beans, Shredded Beef, and an Arepa", price: ec("28") },
          { name: "Morning Stack", desc: "2 Pancakes with Eggs and Bacon", price: ec("19") },
        ],
      },
      {
        title: "Breakfast Burritos",
        items: [
          { name: "Bacon Bite", desc: "2 Eggs, Bacon, and Cheddar Cheese", price: ec("18") },
        ],
      },
      {
        title: "Sourdough Paninis",
        items: [
          { name: "Mortadella Melt", desc: "Mortadella, Burrata and Honey", price: ec("27") },
          { name: "Classic Panini", desc: "Prosciutto, Provolone and Tomato", price: ec("27") },
          { name: "Egg & Cheese", desc: "Scrambled Eggs, Havarti, Ham and Tomato", price: ec("14") },
          { name: "Ham & Cheese", desc: "Ham, Provolone and Tomato", price: ec("16") },
          { name: "Pulled Pork", desc: "Pulled pork, Havarti and Tomato", price: ec("23") },
          { name: "Shredded Beef", desc: "Shredded Beef, Havarti and Tomato", price: ec("23") },
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Bienmesabe", desc: "White cake soaked in 3 milks & meringue", price: ec("25") },
      { name: "Paradise Choco Cake", desc: "Dark chocolate cake", price: ec("25") },
      { name: "Chocolate Moment", desc: "Special chocolate cheese cake", price: ec("22") },
      { name: "Quesillo", desc: "Venezuelan Flan", price: ec("20") },
      { name: "Choco-Arequipe Cake", desc: "Chocolate with milk caramel", price: ec("25") },
      { name: "Quesillo de Coco", desc: "Venezuelan Flan with coconut", price: ec("20") },
      { name: "Lemon Pie", desc: "A stiff lemon-flavored custard baked in a pie crust", price: ec("25") },
      { name: "Tarta de Fresa", desc: "Strawberry cheese cake", price: ec("22") },
      { name: "Tiramisu", desc: "Ladyfinger pastries dipped in coffee and flavored with cocoa", price: ec("25") },
      { name: "Tres Leches", desc: "White cake soaked in three types of milk", price: ec("25") },
    ],
  },
  {
    id: "sides",
    label: "Sides & Extras",
    groups: [
      {
        title: "Sides",
        items: [
          { name: "Beans: Black or Pinto", price: ec("9") },
          { name: "Rice: Yelloww, White or Mixed (Veggies)", price: ec("8") },
          { name: "Pico de Gallo or Hot Pico", price: ec("8") },
          { name: "Coleslaw", price: ec("12") },
          { name: "Cassava: Boiled or Fried", price: ec("10") },
          { name: "Steamed Potatoes", price: ec("10") },
          { name: "Lettuce", price: ec("12") },
          { name: "Sauteed Veggies", price: ec("12") },
          { name: "Sweet Plantains", price: ec("10") },
        ],
      },
      {
        title: "Extras",
        items: [
          { name: "Extra Cheese", price: ec("9") },
          { name: "Extra Chicken", price: ec("14") },
          { name: "Extra Beef or Pork", price: ec("15") },
          { name: "Extra Guacamole", price: ec("12") },
          { name: "Extra Sour Cream", price: ec("9") },
          { name: "Extra Plantains", price: ec("12") },
          { name: "Extra Cassava", price: ec("12") },
          { name: "Extra Coleslaw", price: ec("12") },
          { name: "Extra Chicken Salad", price: ec("12") },
          { name: "Extra Pico", price: ec("12") },
          { name: "Extra Rice", price: ec("12") },
          { name: "Extra Sautéed Veggies", price: ec("12") },
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
          { name: "Coke", price: ec("6") },
          { name: "Coke Zero", price: ec("6") },
          { name: "Fanta", price: ec("6") },
          { name: "Spritee", price: ec("6") },
          { name: "Grapefruit Schweppes", price: ec("6") },
          { name: "Ting", price: ec("6") },
          { name: "Chill Angostura", price: ec("8") },
          { name: "Club Soda", price: ec("6") },
          { name: "Ginger Ale", price: ec("6") },
          { name: "Ginger Beer", price: ec("7") },
          { name: "Gingseng Up Apple", price: ec("7") },
          { name: "Monster Energy", price: ec("12") },
          { name: "Star Malt", price: ec("6") },
          { name: "Vita Malt", price: ec("9") },
          { name: "Vita Malt Ginger", price: ec("9") },
        ],
      },
      {
        title: "Water & Juice",
        items: [
          { name: "Dasani Water", price: ec("5") },
          { name: "Tonic Water", price: ec("7") },
          { name: "Sparkling Water", price: ec("10") },
          { name: "Perrier Sparkling Water", price: ec("25") },
          { name: "Bottled Juice", price: ec("6") },
          { name: "Natural Juices", price: ec("12") },
          { name: "Powerade", price: ec("6") },
          { name: "Lemonade Frappé", price: ec("12") },
          { name: "Virgin Pina Colada", price: ec("15") },
          { name: "Virgin Daiquiri", price: ec("16") },
          { name: "Shirley Temple", price: ec("12") },
          
          
        ],
      },
      {
        title: "Coffee & Tea",
        items: [
          { name: "Espresso", price: ec("9/13") },
          { name: "Cappuccino", price: ec("10/13") },
          { name: "Americano", price: ec("10/13") },
          { name: "Mochaccino", price: ec("15/16") },
          { name: "Café con Leché", price: ec("10/13") },
          { name: "Latte", price: ec("10/13") },
          { name: "Chai Latte", price: ec("17") },
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
