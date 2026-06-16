import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { CART_EVENT, cartTotal, readCart, writeCart, type CartLine } from "./cartStore";
import { formatPrice } from "@/data/products";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    setLines(readCart());
    const syncCart = () => setLines(readCart());
    window.addEventListener(CART_EVENT, syncCart);
    window.addEventListener("storage", syncCart);
    return () => {
      window.removeEventListener(CART_EVENT, syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  const count = useMemo(() => lines.reduce((total, line) => total + line.quantity, 0), [lines]);
  const subtotal = cartTotal(lines);

  const updateQuantity = (line: CartLine, quantity: number) => {
    const next = lines
      .map((item) => (item.sku === line.sku ? { ...item, quantity } : item))
      .filter((item) => item.quantity > 0);
    setLines(next);
    writeCart(next);
  };

  return (
    <>
      <button
        className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white hover:bg-harbor"
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open cart with ${count} items`}
      >
        <ShoppingBag aria-hidden="true" size={18} />
        <span>{count}</span>
      </button>
      {open && (
        <div className="fixed inset-0 z-50">
          <button className="absolute inset-0 h-full w-full bg-ink/40" type="button" aria-label="Close cart" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper shadow-soft">
            <div className="flex items-center justify-between border-b border-ink/10 p-5">
              <div>
                <h2 className="font-display text-2xl font-semibold">Cart</h2>
                <p className="text-sm text-ink/60">{count} item{count === 1 ? "" : "s"}</p>
              </div>
              <button className="focus-ring rounded-full p-2 hover:bg-ink/5" type="button" onClick={() => setOpen(false)} aria-label="Close cart">
                <X aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-5">
              {lines.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <p className="font-semibold">Your cart is empty.</p>
                    <a className="mt-4 inline-flex rounded-md bg-harbor px-5 py-3 font-bold text-white" href="/collections">Shop collections</a>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4">
                  {lines.map((line) => (
                    <article key={line.sku} className="grid grid-cols-[84px_1fr] gap-4 border-b border-ink/10 pb-4">
                      <img className="h-20 w-20 rounded-md object-cover" src={line.image} alt="" />
                      <div className="grid gap-2">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <a className="font-semibold hover:text-harbor" href={`/products/${line.slug}`}>{line.title}</a>
                            <p className="text-sm text-ink/60">{line.variantTitle}</p>
                          </div>
                          <p className="text-sm font-bold">{formatPrice(line.priceCents)}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex h-9 items-center rounded-full border border-ink/15 bg-white">
                            <button className="focus-ring px-3" type="button" onClick={() => updateQuantity(line, line.quantity - 1)} aria-label="Decrease quantity">
                              <Minus size={15} />
                            </button>
                            <span className="w-8 text-center text-sm font-bold">{line.quantity}</span>
                            <button className="focus-ring px-3" type="button" onClick={() => updateQuantity(line, line.quantity + 1)} aria-label="Increase quantity">
                              <Plus size={15} />
                            </button>
                          </div>
                          <button className="focus-ring rounded-full p-2 text-ink/55 hover:bg-ink/5 hover:text-brick" type="button" onClick={() => updateQuantity(line, 0)} aria-label="Remove item">
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
            <div className="border-t border-ink/10 p-5">
              <div className="flex items-center justify-between font-bold">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-ink/60">Shipping and tax are calculated in Stripe Checkout.</p>
              <a
                className="focus-ring mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-harbor px-5 py-3 font-bold text-white hover:bg-denim"
                href="/checkout/start"
              >
                Checkout
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
