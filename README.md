# Brooklynite Designs

Internal rebuild of the Brooklynite Designs website.

## Stack

- **Framework:** Astro
- **Hosting:** Firebase (Hosting + Cloud Run)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Interactive UI:** React islands

> Same stack as the MTA landing page — see `adrianvale26/manhattan-tennis-association` for reference.

## Status

🚧 In progress — ecommerce storefront scaffold is now in place.

## Local Development

```bash
npm install
npm run dev
```

## Storefront Scaffold

Implemented routes:

- `/` homepage with featured products and collection entry points
- `/collections` collection index
- `/collections/[slug]` static collection pages
- `/products/[slug]` static product detail pages with JSON-LD
- `/search` client-side search, filtering, and sorting
- `/cart` fallback cart page
- `/checkout/start` Stripe Checkout handoff placeholder
- `/about`, `/shipping-returns`, `/faq`, `/contact`

Core files:

- `src/data/products.ts` typed sample catalog and collection rules
- `src/components/cart/*` local-storage cart drawer and add-to-cart island
- `src/components/store/*` product cards, grids, and search UI
- `public/images/products/*` launch placeholder product visuals

## Next Integration Steps

1. Replace sample products with migrated Squarespace catalog data.
2. Add a Cloud Run checkout API that validates cart lines and creates a Stripe Checkout Session.
3. Add Firestore product, inventory, order, and admin workflows.
4. Add Firebase Hosting config and redirect mapping before launch.
