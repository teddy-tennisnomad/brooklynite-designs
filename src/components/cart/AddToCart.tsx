import { ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { addToCart } from "./cartStore";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";

type Props = {
  product: Product;
};

export default function AddToCart({ product }: Props) {
  const activeVariants = useMemo(() => product.variants.filter((variant) => variant.active), [product.variants]);
  const [variantId, setVariantId] = useState(activeVariants[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const variant = activeVariants.find((item) => item.id === variantId) ?? activeVariants[0];

  const handleAdd = () => {
    if (!variant) return;
    addToCart(product, variant, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Size / Option
          <select
            className="focus-ring rounded-md border-ink/15 bg-white text-base"
            value={variantId}
            onChange={(event) => setVariantId(event.target.value)}
          >
            {activeVariants.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title} - {formatPrice(item.priceCents)}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Quantity
          <input
            className="focus-ring w-24 rounded-md border-ink/15 text-base"
            min={1}
            max={12}
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
          />
        </label>
        <button
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-harbor px-5 py-3 font-bold text-white transition hover:bg-denim"
          type="button"
          onClick={handleAdd}
        >
          <ShoppingBag aria-hidden="true" size={19} />
          {added ? "Added" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
