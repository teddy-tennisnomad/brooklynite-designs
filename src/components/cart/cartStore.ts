import type { Product, ProductVariant } from "@/data/products";

export type CartLine = {
  productId: string;
  slug: string;
  title: string;
  image: string;
  variantId: string;
  variantTitle: string;
  sku: string;
  priceCents: number;
  quantity: number;
};

export const CART_EVENT = "brooklynite-cart-change";
export const CART_KEY = "brooklynite-cart";

export const readCart = (): CartLine[] => {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const writeCart = (lines: CartLine[]) => {
  window.localStorage.setItem(CART_KEY, JSON.stringify(lines));
  window.dispatchEvent(new CustomEvent(CART_EVENT, { detail: lines }));
};

export const addToCart = (product: Product, variant: ProductVariant, quantity = 1) => {
  const lines = readCart();
  const existing = lines.find((line) => line.productId === product.id && line.variantId === variant.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    lines.push({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      image: product.image,
      variantId: variant.id,
      variantTitle: variant.title,
      sku: variant.sku,
      priceCents: variant.priceCents,
      quantity
    });
  }

  writeCart(lines);
};

export const cartTotal = (lines: CartLine[]) => lines.reduce((total, line) => total + line.priceCents * line.quantity, 0);
