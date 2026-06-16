export type ProductType = "tshirt" | "bodysuit" | "hat" | "knit" | "bib" | "art" | "accessory";
export type Recipient = "baby" | "kids" | "women" | "men" | "everyone";
export type InventoryPolicy = "deny" | "continue" | "made_to_order";
export type HeritageIcon = "brooklyn-bridge" | "brooklyn-baseball" | "yellow-taxi" | "brownstone" | "family-gifting" | "neighborhood";

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
  originStory: string;
  heritageIcon: HeritageIcon;
  giftMoments: string[];
  mapLocationId?: string;
  relatedArticleIds: string[];
  capsule?: string;
  isLimitedDrop?: boolean;
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
    care: "Machine wash cold, tumble dry low.",
    originStory: "The bridge is the brand's clearest symbol: arrival, work, distance, and the view that tells you where home is. This shirt is designed for people who carry Brooklyn with them after they cross away from it.",
    heritageIcon: "brooklyn-bridge",
    giftMoments: ["Former Brooklynites", "Local pride", "Father's Day", "Everyday wear"],
    mapLocationId: "brooklyn-bridge",
    relatedArticleIds: ["bridge-as-home"],
    capsule: "bring-brooklyn-back",
    isLimitedDrop: true
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
    care: "Wash inside out with like colors.",
    originStory: "A first borough uniform for families passing down where they come from. It turns Brooklyn pride into a soft, practical baby gift.",
    heritageIcon: "family-gifting",
    giftMoments: ["Baby shower", "New parents", "Grandparent gift"],
    relatedArticleIds: ["early-90s-arrival"],
    capsule: "family-roots"
  },
  {
    id: "stoop-kids-cap",
    slug: "stoop-kids-cap",
    title: "Brooklyn Baseball Heritage Cap",
    subtitle: "Original cap inspired by old borough baseball memory",
    descriptionShort: "A low-profile cotton cap built around Brooklyn baseball nostalgia without copying protected team marks.",
    descriptionLong: "This adjustable cap honors local baseball memory with original Brooklynite design language. It is made for park days, stoop sitting, and anyone who remembers that Brooklyn pride was here before the trend cycle.",
    status: "active",
    productType: "hat",
    recipient: ["kids", "everyone"],
    themes: ["Brooklyn baseball heritage", "Neighborhoods", "Outdoor days"],
    tags: ["hat", "kids", "under 30", "heritage icon"],
    image: "/images/products/cap.svg",
    color: "#bbd3d0",
    variants: [
      { id: "kids", sku: "BD-STOOP-CAP-K", title: "Kids", size: "Kids", color: "Harbor", priceCents: 2800, inventoryPolicy: "deny", active: true },
      { id: "adult", sku: "BD-STOOP-CAP-A", title: "Adult", size: "Adult", color: "Harbor", priceCents: 3000, inventoryPolicy: "deny", active: true }
    ],
    materials: ["Cotton twill", "Adjustable metal clasp"],
    care: "Spot clean only.",
    originStory: "Brooklyn baseball lives in family stories, old photos, and caps that outlast a season. This piece keeps the feeling while staying original and legal-safe.",
    heritageIcon: "brooklyn-baseball",
    giftMoments: ["Local pride", "Former Brooklynites", "Kids gift"],
    mapLocationId: "ebbets-memory",
    relatedArticleIds: ["baseball-without-the-logo"],
    capsule: "bring-brooklyn-back",
    isLimitedDrop: true
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
    care: "Hand wash cold and lay flat to dry.",
    originStory: "The handmade baby pieces keep the family side of Brooklynite visible: practical warmth, small batches, and gifts meant to be remembered.",
    heritageIcon: "family-gifting",
    giftMoments: ["Baby shower", "Winter baby gift", "Grandparent gift"],
    relatedArticleIds: ["early-90s-arrival"],
    capsule: "family-roots"
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
    care: "Ships flat in a protective sleeve.",
    originStory: "Brownstone blocks are part architecture, part memory. This print turns windows, stoops, and brick into a quiet piece of Brooklyn home.",
    heritageIcon: "brownstone",
    giftMoments: ["Housewarming", "Nursery", "Former Brooklynites"],
    mapLocationId: "brownstone-block",
    relatedArticleIds: ["early-90s-arrival"]
  },
  {
    id: "taxi-cab-tee",
    slug: "yellow-taxi-cab-tee",
    title: "Yellow Taxi Cab Tee",
    subtitle: "A New York icon used as a spark",
    descriptionShort: "A cotton tee inspired by the flash of taxi yellow moving through Brooklyn avenues.",
    descriptionLong: "Taxi yellow is used sparingly in the Brooklynite world: a flash of motion, city sound, and early New York memory.",
    status: "active",
    productType: "tshirt",
    recipient: ["women", "men", "everyone"],
    themes: ["Yellow taxi", "NYC icons"],
    tags: ["apparel", "heritage icon", "limited drop"],
    image: "/images/products/taxi-tee.svg",
    color: "#f2b84b",
    newArrival: true,
    variants: [
      { id: "s", sku: "BD-TAXI-TEE-S", title: "Small", size: "S", color: "Asphalt", priceCents: 3400, inventoryPolicy: "deny", active: true },
      { id: "m", sku: "BD-TAXI-TEE-M", title: "Medium", size: "M", color: "Asphalt", priceCents: 3400, inventoryPolicy: "deny", active: true },
      { id: "l", sku: "BD-TAXI-TEE-L", title: "Large", size: "L", color: "Asphalt", priceCents: 3400, inventoryPolicy: "deny", active: true }
    ],
    materials: ["100% cotton jersey", "Water-based ink"],
    care: "Machine wash cold, tumble dry low.",
    originStory: "For families arriving in New York in the early 90s, taxi yellow was part of the city's first language: movement, noise, arrival, and possibility.",
    heritageIcon: "yellow-taxi",
    giftMoments: ["NYC gift", "Former New Yorkers", "Limited drop"],
    mapLocationId: "taxi-avenues",
    relatedArticleIds: ["early-90s-arrival"],
    capsule: "bring-brooklyn-back",
    isLimitedDrop: true
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
    care: "Care details included with each item.",
    originStory: "The bundle is built for families sending Brooklyn forward: a practical baby gift with enough story to feel personal.",
    heritageIcon: "family-gifting",
    giftMoments: ["Baby shower", "New baby", "Out-of-town family"],
    relatedArticleIds: ["early-90s-arrival"],
    capsule: "family-roots"
  }
];

export const collections = [
  {
    slug: "heritage-icons",
    title: "Heritage Icons",
    description: "Bridge shirts, Brooklyn baseball heritage caps, taxi graphics, and brownstone pieces that bring borough tradition forward.",
    predicate: (product: Product) => ["brooklyn-bridge", "brooklyn-baseball", "yellow-taxi", "brownstone"].includes(product.heritageIcon)
  },
  {
    slug: "baby-gifts",
    title: "Baby Gifts",
    description: "Brooklyn family gifts for showers, new arrivals, grandparents, and the first borough uniform.",
    predicate: (product: Product) => product.recipient.includes("baby")
  },
  {
    slug: "apparel",
    title: "Apparel",
    description: "Tees, hats, and wearable Brooklyn heritage staples built around icons and memory.",
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
  },
  {
    slug: "limited-drops",
    title: "Limited Drops",
    description: "Small-batch capsule pieces tied to Brooklynite campaigns, events, and neighborhood stories.",
    predicate: (product: Product) => Boolean(product.isLimitedDrop)
  }
];

export const formatPrice = (cents: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);

export const productPrice = (product: Product) => Math.min(...product.variants.map((variant) => variant.priceCents));

export const findProduct = (slug: string) => products.find((product) => product.slug === slug);
