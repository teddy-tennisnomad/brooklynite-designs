import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { formatPrice, productPrice } from "@/data/products";

type Props = {
  products: Product[];
};

const categories = ["all", "tshirt", "bodysuit", "hat", "knit", "art", "accessory"];
const recipients = ["all", "baby", "kids", "women", "men", "everyone"];

export default function SearchShop({ products }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [recipient, setRecipient] = useState("all");
  const [sort, setSort] = useState("featured");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const searchable = [product.title, product.subtitle, product.descriptionShort, ...product.tags, ...product.themes].join(" ").toLowerCase();
      return (
        (!normalized || searchable.includes(normalized)) &&
        (category === "all" || product.productType === category) &&
        (recipient === "all" || product.recipient.includes(recipient as never))
      );
    });

    return filtered.sort((a, b) => {
      if (sort === "price-low") return productPrice(a) - productPrice(b);
      if (sort === "price-high") return productPrice(b) - productPrice(a);
      if (sort === "new") return Number(Boolean(b.newArrival)) - Number(Boolean(a.newArrival));
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [category, products, query, recipient, sort]);

  return (
    <div className="grid gap-6">
      <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1fr_180px_180px_180px]">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/45" size={19} />
            <input
              className="focus-ring min-h-12 w-full rounded-md border-ink/15 pl-10 text-base"
              placeholder="Search gifts, tees, baby..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <label>
            <span className="sr-only">Category</span>
            <select className="focus-ring min-h-12 w-full rounded-md border-ink/15 text-base capitalize" value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((item) => <option key={item} value={item}>{item === "all" ? "All categories" : item}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Recipient</span>
            <select className="focus-ring min-h-12 w-full rounded-md border-ink/15 text-base capitalize" value={recipient} onChange={(event) => setRecipient(event.target.value)}>
              {recipients.map((item) => <option key={item} value={item}>{item === "all" ? "All recipients" : item}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Sort</span>
            <select className="focus-ring min-h-12 w-full rounded-md border-ink/15 text-base" value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="new">New arrivals</option>
              <option value="price-low">Price low-high</option>
              <option value="price-high">Price high-low</option>
            </select>
          </label>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm font-semibold text-ink/60">
        <SlidersHorizontal size={17} />
        {results.length} product{results.length === 1 ? "" : "s"}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((product) => (
          <a key={product.id} className="focus-ring group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft" href={`/products/${product.slug}`}>
            <div className="aspect-[4/3] overflow-hidden" style={{ background: product.color }}>
              <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={product.image} alt={product.title} />
            </div>
            <div className="p-4">
              <div className="flex justify-between gap-3">
                <div>
                  <h2 className="font-semibold">{product.title}</h2>
                  <p className="mt-1 text-sm text-ink/60">{product.subtitle}</p>
                </div>
                <p className="shrink-0 text-sm font-bold text-harbor">{formatPrice(productPrice(product))}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
