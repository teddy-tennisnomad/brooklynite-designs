export type ProductType = "tshirt" | "bodysuit" | "hat" | "knit" | "bib" | "art" | "accessory";
export type Recipient = "baby" | "kids" | "women" | "men" | "everyone";
export type InventoryPolicy = "deny" | "continue" | "made_to_order";

export type ProductVariant = {
  id: string;
  sku: string;
  title: string;
  size?: string;
  color?: string;
  priceCents: number;
  inventoryPolicy: InventoryPolicy;
  active: boolean;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  descriptionShort: string;
  descriptionLong: string;
  status: "active" | "sold_out" | "draft";
  productType: ProductType;
  recipient: Recipient[];
  themes: string[];
  tags: string[];
  image: string;
  color: string;
  variants: ProductVariant[];
  materials: string[];
  care: string;
  featured?: boolean;
  newArrival?: boolean;
};

export const products: Product[] = [
  {
    id: "bridge-tee",
    slug: "brooklyn-bridge-tee",
    title: "Brooklyn Bridge Tee",
    subtitle: "Soft everyday tee printed in Brooklyn",
    descriptionShort: "A lived-in cotton tee with a quiet Brooklyn Bridge graphic, made for weekend errands and faraway homesick moments.",
    descriptionLong: "Printed locally in small batches, this tee keeps the city close without shouting. It is soft, easy to gift, and designed to wear year-round.",
    status: "active",
    productType: "tshirt",
    recipient: ["women", "men", "everyone"],
    themes: ["Brooklyn Bridge", "Local classics"],
    tags: ["apparel", "gift", "best seller"],
    image: "/images/products/hero-product.png",
    color: "#e8ded0",
    featured: true,
    variants: [
      { id: "s", sku: "BD-BRIDGE-TEE-S", title: "Small", size: "S", color: "Cream", priceCents: 3200, inventoryPolicy: "deny", active: true },
      { id: "m", sku: "BD-BRIDGE-TEE-M", title: "Medium", size: "M", color: "Cream", priceCents: 3200, inventoryPolicy: "deny", active: true },
      { id: "l", sku: "BD-BRIDGE-TEE-L", title: "Large", size: "L", color: "Cream", priceCents: 3200, inventoryPolicy: "deny", active: true }
    ],
    materials: ["100% ring-spun cotton", "Water-based ink"],
    care: "Machine wash cold, tumble dry low."
  },
  {
    id: "future-brooklynite-bodysuit",
    slug: "future-brooklynite-bodysuit",
    title: "Future Brooklynite Bodysuit",
    subtitle: "A first borough uniform",
    descriptionShort: "A soft baby bodysuit for showers, new arrivals, and tiny neighborhood walks.",
    descriptionLong: "Made for the newest Brooklyn fans, this bodysuit is soft enough for everyday wear and simple enough to pair with any gift bundle.",
    status: "active",
    productType: "bodysuit",
    recipient: ["baby"],
    themes: ["Baby gifts", "Neighborhood pride"],
    tags: ["baby", "shower gift", "bundle"],
    image: "/images/products/bodysuit.svg",
    color: "#f4f0e7",
    featured: true,
    newArrival: true,
    variants: [
      { id: "3-6", sku: "BD-FB-BODY-36", title: "3-6 months", size: "3-6M", color: "Natural", priceCents: 2600, inventoryPolicy: "deny", active: true },
      { id: "6-12", sku: "BD-FB-BODY-612", title: "6-12 months", size: "6-12M", color: "Natural", priceCents: 2600, inventoryPolicy: "deny", active: true }
    ],
    materials: ["Organic cotton blend", "Nickel-free snaps"],
    care: "Wash inside out with like colors."
  },
  {
    id: "stoop-kids-cap",
    slug: "stoop-kids-cap",
    title: "Stoop Kids Cap",
    subtitle: "Low-profile cap with borough charm",
    descriptionShort: "A sturdy cotton cap embroidered for park days, playground hangs, and sunny stoop sitting.",
    descriptionLong: "This adjustable cap is an easy add-on gift and a practical favorite for Brooklyn summers.",
    status: "active",
    productType: "hat",
    recipient: ["kids", "everyone"],
    themes: ["Neighborhoods", "Outdoor days"],
    tags: ["hat", "kids", "under 30"],
    image: "/images/products/cap.svg",
    color: "#bbd3d0",
    variants: [
      { id: "kids", sku: "BD-STOOP-CAP-K", title: "Kids", size: "Kids", color: "Harbor", priceCents: 2800, inventoryPolicy: "deny", active: true },
      { id: "adult", sku: "BD-STOOP-CAP-A", title: "Adult", size: "Adult", color: "Harbor", priceCents: 3000, inventoryPolicy: "deny", active: true }
    ],
    materials: ["Cotton twill", "Adjustable metal clasp"],
    care: "Spot clean only."
  },
  {
    id: "hand-knit-baby-hat",
    slug: "hand-knit-baby-hat",
    title: "Hand-Knit Baby Hat",
    subtitle: "Small-batch warmth for new arrivals",
    descriptionShort: "A cozy hand-knit hat that makes a thoughtful standalone gift or bundle topper.",
    descriptionLong: "Each hat is made in small batches and varies slightly, which is part of the charm. Pair it with a bodysuit for a ready-to-mail baby gift.",
    status: "active",
    productType: "knit",
    recipient: ["baby"],
    themes: ["Handmade", "Baby gifts"],
    tags: ["knit", "baby", "gift"],
    image: "/images/products/knit-hat.svg",
    color: "#d7b48f",
    featured: true,
    variants: [
      { id: "newborn", sku: "BD-KNIT-HAT-NB", title: "Newborn", size: "NB", color: "Oat", priceCents: 3400, inventoryPolicy: "made_to_order", active: true },
      { id: "baby", sku: "BD-KNIT-HAT-B", title: "Baby", size: "Baby", color: "Oat", priceCents: 3400, inventoryPolicy: "made_to_order", active: true }
    ],
    materials: ["Soft acrylic wool blend"],
    care: "Hand wash cold and lay flat to dry."
  },
  {
    id: "brownstone-art-print",
    slug: "brownstone-art-print",
    title: "Brownstone Block Art Print",
    subtitle: "Brooklyn wall art for apartments and nurseries",
    descriptionShort: "A warm art print inspired by the rhythm of brownstone blocks and evening windows.",
    descriptionLong: "Printed on heavyweight matte stock, this piece brings a grounded Brooklyn note to a nursery, hallway, or office wall.",
    status: "active",
    productType: "art",
    recipient: ["everyone"],
    themes: ["Brownstones", "Home"],
    tags: ["art", "home", "gift"],
    image: "/images/products/art-print.svg",
    color: "#e4c3aa",
    variants: [
      { id: "8x10", sku: "BD-BROWNSTONE-8X10", title: "8 x 10", size: "8x10", priceCents: 2400, inventoryPolicy: "deny", active: true },
      { id: "11x14", sku: "BD-BROWNSTONE-11X14", title: "11 x 14", size: "11x14", priceCents: 3600, inventoryPolicy: "deny", active: true }
    ],
    materials: ["Archival matte paper"],
    care: "Ships flat in a protective sleeve."
  },
  {
    id: "borough-gift-bundle",
    slug: "borough-baby-gift-bundle",
    title: "Borough Baby Gift Bundle",
    subtitle: "A ready-to-send Brooklyn baby gift",
    descriptionShort: "A curated bundle with a bodysuit, bib, and knit accent for baby showers and welcome-home gifts.",
    descriptionLong: "This bundle is designed for easy gifting: choose a size, add a note, and send something personal without overthinking it.",
    status: "active",
    productType: "accessory",
    recipient: ["baby"],
    themes: ["Baby gifts", "Gift bundles"],
    tags: ["bundle", "baby", "gift"],
    image: "/images/products/bundle.svg",
    color: "#e9d9b9",
    featured: true,
    variants: [
      { id: "small", sku: "BD-BABY-BUNDLE-S", title: "Small bundle", size: "3-6M", priceCents: 5800, inventoryPolicy: "deny", active: true },
      { id: "large", sku: "BD-BABY-BUNDLE-L", title: "Large bundle", size: "6-12M", priceCents: 6800, inventoryPolicy: "deny", active: true }
    ],
    materials: ["Cotton apparel", "Handmade knit accent", "Gift-ready kraft wrap"],
    care: "Care details included with each item."
  }
];

export const collections = [
  {
    slug: "baby-gifts",
    title: "Baby Gifts",
    description: "Brooklyn-inspired bodysuits, knits, bundles, and soft little things for showers and new arrivals.",
    predicate: (product: Product) => product.recipient.includes("baby")
  },
  {
    slug: "apparel",
    title: "Apparel",
    description: "Tees, hats, and wearable Brooklyn staples printed or finished locally.",
    predicate: (product: Product) => ["tshirt", "hat"].includes(product.productType)
  },
  {
    slug: "home-art",
    title: "Home & Art",
    description: "Prints and small gifts that bring Brooklyn texture into apartments, nurseries, and studios.",
    predicate: (product: Product) => ["art", "accessory"].includes(product.productType)
  },
  {
    slug: "under-30",
    title: "Under $30",
    description: "Small gifts, add-ons, and easy wins for thoughtful Brooklyn gifting.",
    predicate: (product: Product) => Math.min(...product.variants.map((variant) => variant.priceCents)) < 3000
  }
];

export const formatPrice = (cents: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);

export const productPrice = (product: Product) => Math.min(...product.variants.map((variant) => variant.priceCents));

export const findProduct = (slug: string) => products.find((product) => product.slug === slug);
