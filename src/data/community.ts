export type MapLocationType = "article" | "event" | "product" | "neighborhood" | "partner";

export type MapLocation = {
  id: string;
  slug: string;
  title: string;
  neighborhood: string;
  type: MapLocationType;
  summary: string;
  coordinates: {
    x: number;
    y: number;
  };
  relatedProductIds?: string[];
  relatedArticleIds?: string[];
  relatedEventIds?: string[];
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  dek: string;
  category: "family-story" | "heritage-icon" | "neighborhood" | "gift-guide" | "event-recap";
  mapLocationId?: string;
  relatedProductIds: string[];
  publishedAt: string;
  featured?: boolean;
};

export type Event = {
  id: string;
  slug: string;
  title: string;
  dek: string;
  dateLabel: string;
  locationLabel: string;
  mapLocationId?: string;
  featured?: boolean;
};

export type Campaign = {
  id: string;
  slug: string;
  title: string;
  dek: string;
  productIds: string[];
  articleIds: string[];
};

export const mapLocations: MapLocation[] = [
  {
    id: "brooklyn-bridge",
    slug: "brooklyn-bridge",
    title: "Brooklyn Bridge",
    neighborhood: "Dumbo / Brooklyn Heights",
    type: "product",
    summary: "The crossing that turns arrival, work, and home into one Brooklyn symbol.",
    coordinates: { x: 63, y: 32 },
    relatedProductIds: ["bridge-tee"],
    relatedArticleIds: ["bridge-as-home"]
  },
  {
    id: "greenpoint-polish-roots",
    slug: "greenpoint-polish-roots",
    title: "Polish Brooklyn Roots",
    neighborhood: "Greenpoint",
    type: "article",
    summary: "A starting point for the family story and the early 90s immigrant lens.",
    coordinates: { x: 54, y: 18 },
    relatedArticleIds: ["early-90s-arrival"]
  },
  {
    id: "ebbets-memory",
    slug: "brooklyn-baseball-memory",
    title: "Brooklyn Baseball Memory",
    neighborhood: "Crown Heights / Flatbush",
    type: "product",
    summary: "Baseball heritage, local pride, and cap culture without relying on protected marks.",
    coordinates: { x: 48, y: 58 },
    relatedProductIds: ["stoop-kids-cap"],
    relatedArticleIds: ["baseball-without-the-logo"]
  },
  {
    id: "taxi-avenues",
    slug: "taxi-avenues",
    title: "Yellow Taxi Avenues",
    neighborhood: "Downtown Brooklyn",
    type: "product",
    summary: "The moving color of New York, used as a spark rather than a costume.",
    coordinates: { x: 58, y: 42 },
    relatedProductIds: ["taxi-cab-tee"]
  },
  {
    id: "brownstone-block",
    slug: "brownstone-block",
    title: "Brownstone Block",
    neighborhood: "Park Slope",
    type: "neighborhood",
    summary: "Steps, windows, stoops, and the texture that makes a block feel remembered.",
    coordinates: { x: 42, y: 52 },
    relatedProductIds: ["brownstone-art-print"]
  }
];

export const articles: Article[] = [
  {
    id: "early-90s-arrival",
    slug: "polish-arrival-early-90s-new-york",
    title: "Arriving In A City That Was Still Becoming",
    dek: "The Brooklynite story begins with Polish immigrants landing in New York in the early 90s and watching the borough transform block by block.",
    category: "family-story",
    mapLocationId: "greenpoint-polish-roots",
    relatedProductIds: [],
    publishedAt: "2026-06-01",
    featured: true
  },
  {
    id: "bridge-as-home",
    slug: "brooklyn-bridge-as-home",
    title: "The Bridge As A Way Home",
    dek: "Why the Brooklyn Bridge remains the clearest symbol for arrival, work, distance, and belonging.",
    category: "heritage-icon",
    mapLocationId: "brooklyn-bridge",
    relatedProductIds: ["bridge-tee"],
    publishedAt: "2026-06-08",
    featured: true
  },
  {
    id: "baseball-without-the-logo",
    slug: "brooklyn-baseball-heritage-without-the-logo",
    title: "Brooklyn Baseball Heritage, Rebuilt Carefully",
    dek: "A legal-safe, original-design approach to honoring Brooklyn baseball memory without copying protected team marks.",
    category: "heritage-icon",
    mapLocationId: "ebbets-memory",
    relatedProductIds: ["stoop-kids-cap"],
    publishedAt: "2026-06-12"
  }
];

export const events: Event[] = [
  {
    id: "bring-brooklyn-back-drop",
    slug: "bring-brooklyn-back-drop",
    title: "Bring Brooklyn Back Drop",
    dek: "A first capsule release around bridge, taxi, baseball heritage, and family gifting.",
    dateLabel: "Fall 2026",
    locationLabel: "Brooklyn pop-up location TBA",
    mapLocationId: "brooklyn-bridge",
    featured: true
  }
];

export const campaigns: Campaign[] = [
  {
    id: "bring-brooklyn-back",
    slug: "bring-brooklyn-back",
    title: "Bring Brooklyn Back",
    dek: "Brooklyn changed. The feeling does not have to disappear.",
    productIds: ["bridge-tee", "stoop-kids-cap", "taxi-cab-tee", "borough-gift-bundle"],
    articleIds: ["early-90s-arrival", "bridge-as-home", "baseball-without-the-logo"]
  }
];

export const findMapLocation = (id?: string) => mapLocations.find((location) => location.id === id);
export const findArticle = (id?: string) => articles.find((article) => article.id === id);
