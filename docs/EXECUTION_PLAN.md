# Brooklynite Designs Site Execution Plan

**Purpose:** Track technical development of the new Brooklynite site against the brand direction in `docs/BRAND_GUIDELINES.md`.

**North star:** Build a premium Brooklyn heritage ecommerce and community platform that tells the Polish immigrant family story, sells Brooklyn icon products, and gives customers reasons to return through articles, events, and an interactive Brooklyn map.

## 1. Product Vision

The site should become three connected experiences:

1. **Premium ecommerce store**
   - Heritage icon products
   - Gift-focused shopping
   - Strong product storytelling
   - Stripe Checkout

2. **Brand story platform**
   - Polish immigrant roots
   - Brooklyn evolution from the early 1990s to today
   - Established 2016 positioning
   - Editorial storytelling and campaign pages

3. **Brooklyn community layer**
   - Map of Brooklyn
   - Events
   - Articles
   - Neighborhood stories
   - Product inspiration locations

## 2. Execution Phases

### Phase 0: Foundation Audit

**Goal:** Gather the real brand and catalog inputs before redesigning the UX.

**Tasks**

- Collect brick wall logo files.
- Identify exact existing brand font and licensing status.
- Export current Squarespace product catalog.
- Collect product photography and current product descriptions.
- Gather packaging, labels, tags, old art, and family artifacts.
- Confirm brand facts:
  - Year established: 2016
  - Family story details
  - Polish immigrant arrival period
  - Which production claims are accurate
- Identify protected marks to avoid, especially Brooklyn Dodgers references.

**Deliverables**

- `/public/brand/` asset folder
- Product export source file
- Finalized brand facts checklist
- Legal-safe language rules for baseball heritage products

**Acceptance Criteria**

- Real logo and font are available in the repo or documented as missing.
- Product data source is identified.
- Claims used in UX copy are fact-checked.

---

### Phase 1: Brand System Implementation

**Goal:** Translate the brand guidelines into reusable frontend primitives.

**Tasks**

- Replace placeholder typography with the approved brand font system.
- Add brand color tokens:
  - Brick red
  - Cream
  - Ink/navy
  - Taxi yellow
  - Steel blue
  - Asphalt
- Add global design tokens to Tailwind.
- Create logo component using the brick wall mark.
- Create reusable components:
  - `BrandHeader`
  - `BrandFooter`
  - `StoryBlock`
  - `HeritageBadge`
  - `CampaignBand`
  - `EditorialCard`
  - `ProductStoryPanel`
- Add image treatment rules:
  - Editorial product imagery
  - Archival/family image frames
  - Map/event preview cards

**Files Likely Touched**

- `tailwind.config.mjs`
- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/components/brand/*`
- `public/brand/*`

**Acceptance Criteria**

- Site visually reflects the premium heritage direction.
- Brick wall logo and existing font are preserved.
- UI no longer feels like a generic ecommerce template.

---

### Phase 2: Content Model Upgrade

**Goal:** Support heritage storytelling, map content, and community experiences in typed data.

**Tasks**

- Expand `Product` model with:
  - `originStory`
  - `heritageIcon`
  - `giftMoments`
  - `mapLocationId`
  - `relatedArticleIds`
  - `capsule`
  - `isLimitedDrop`
- Add content models for:
  - `Article`
  - `Event`
  - `Neighborhood`
  - `MapLocation`
  - `Campaign`
- Decide short-term data source:
  - Static TypeScript data for launch prototype
  - Firestore-backed content for production
- Add seed data for:
  - Brooklyn Bridge
  - Yellow taxi
  - Brooklyn baseball heritage
  - Polish immigrant family story
  - Brownstone / stoop culture

**Files Likely Touched**

- `src/data/products.ts`
- `src/data/articles.ts`
- `src/data/events.ts`
- `src/data/mapLocations.ts`
- `src/data/campaigns.ts`
- `src/types/*`

**Acceptance Criteria**

- Products can connect to stories, articles, and map points.
- Events and articles can appear on the homepage and map.
- Data structure supports future Firestore migration.

---

### Phase 3: Homepage Rebuild

**Goal:** Turn the homepage into a brand portal, not just a shop entrance.

**Target Structure**

1. Hero:
   - Brooklynite Designs
   - Established 2016
   - Premium product or archival-inspired image
   - Core message: Brooklyn tradition carried forward

2. Origin story:
   - Polish immigrant roots
   - Early 90s NYC
   - Watching Brooklyn change

3. Heritage icon shopping:
   - Brooklyn Bridge shirts
   - Brooklyn baseball heritage hats
   - Yellow taxi designs
   - Baby/family gifts

4. Brooklyn map preview:
   - Events
   - Articles
   - Neighborhood stories

5. Featured campaign:
   - “Bring Brooklyn Back”

6. Latest article / upcoming event

7. Email signup:
   - Join the Brooklynite community

**Files Likely Touched**

- `src/pages/index.astro`
- `src/components/home/*`
- `src/components/map/MapPreview.tsx`
- `src/components/forms/EmailSignup.tsx`

**Acceptance Criteria**

- Homepage communicates the evolved brand within the first viewport.
- Shopping, story, and community are all visible.
- The page creates a reason to browse beyond products.

---

### Phase 4: Ecommerce Experience

**Goal:** Make the store premium, giftable, and conversion-ready.

**Tasks**

- Rebuild collection pages around customer intent:
  - Heritage icons
  - Baby gifts
  - Brooklyn classics
  - Under $30
  - Limited drops
  - Former Brooklynites
- Add stronger filtering:
  - Product type
  - Recipient
  - Heritage icon
  - Gift moment
  - Price
  - Availability
- Rebuild product pages with:
  - Product story block
  - Map/article relationship
  - Giftability note
  - Materials and care
  - Fulfillment clarity
  - Related products
  - Related article
- Improve cart:
  - Gift note field
  - Free shipping threshold
  - Recommended add-ons
- Build Stripe Checkout API handoff.

**Files Likely Touched**

- `src/pages/collections/*`
- `src/pages/products/[slug].astro`
- `src/components/store/*`
- `src/components/cart/*`
- `src/pages/checkout/start.astro`
- Future API route or Cloud Run service

**Acceptance Criteria**

- A shopper can understand why each product exists.
- Gift shopping is easy and intentional.
- Cart supports gift-oriented buying.
- Checkout can be connected to Stripe without redesigning the storefront.

---

### Phase 5: Brooklyn Map

**Goal:** Create the community spine of the brand.

**Tasks**

- Build an interactive Brooklyn map component.
- Define map marker types:
  - Event
  - Article
  - Product inspiration
  - Neighborhood
  - Partner business
- Add marker detail cards.
- Add filters by marker type.
- Add routes:
  - `/brooklyn-map`
  - `/brooklyn-map/[slug]` or linked article/event pages
- Connect map markers to article and event data.
- Start with static map data, then prepare for Firestore.

**Implementation Options**

- MVP: SVG or image-based Brooklyn map with positioned markers.
- Production: Mapbox, MapLibre, or Google Maps if richer geospatial behavior is needed.

**Files Likely Touched**

- `src/pages/brooklyn-map.astro`
- `src/components/map/*`
- `src/data/mapLocations.ts`
- `public/map/*`

**Acceptance Criteria**

- Map works on mobile and desktop.
- Visitors can discover events, articles, and product stories by place.
- Map feels editorial and brand-owned, not like a generic locator.

---

### Phase 6: Editorial And Events

**Goal:** Give customers reasons to return.

**Tasks**

- Add article routes:
  - `/articles`
  - `/articles/[slug]`
- Add event routes:
  - `/events`
  - `/events/[slug]`
- Add homepage modules for latest article and upcoming event.
- Add article templates:
  - Product icon story
  - Neighborhood history
  - Family story
  - Local business spotlight
  - Gift guide
- Add event templates:
  - Pop-up
  - Product drop
  - Community walk
  - Collaboration
- Add email signup CTA to articles and events.

**Files Likely Touched**

- `src/pages/articles/*`
- `src/pages/events/*`
- `src/components/editorial/*`
- `src/data/articles.ts`
- `src/data/events.ts`

**Acceptance Criteria**

- Articles and events are browseable.
- Editorial content links back to products and map locations.
- Events can be featured on the map and homepage.

---

### Phase 7: Campaign System

**Goal:** Support premium marketing campaigns and product drops.

**Initial Campaign**

`Bring Brooklyn Back`

**Tasks**

- Add campaign route:
  - `/campaigns/bring-brooklyn-back`
- Build campaign page template:
  - Hero message
  - Brand story
  - Featured products
  - Related articles
  - Related map points
  - Email signup
- Add capsule/drop support to product data.
- Add campaign modules to homepage and product pages.

**Files Likely Touched**

- `src/pages/campaigns/[slug].astro`
- `src/components/campaign/*`
- `src/data/campaigns.ts`

**Acceptance Criteria**

- Campaign page feels more editorial and premium than a collection page.
- Campaign can drive product discovery and email capture.

---

### Phase 8: Backend And Operations

**Goal:** Prepare the site for real commerce operations.

**Tasks**

- Add Firebase project config.
- Add Firestore collections:
  - `products`
  - `inventory`
  - `orders`
  - `articles`
  - `events`
  - `mapLocations`
  - `campaigns`
- Build Stripe Checkout creation endpoint.
- Build Stripe webhook endpoint.
- Store paid orders in Firestore.
- Add inventory reservation/decrement logic.
- Add admin authentication.
- Add basic admin routes:
  - `/admin/products`
  - `/admin/orders`
  - `/admin/articles`
  - `/admin/events`
  - `/admin/map`

**Acceptance Criteria**

- Real checkout flow works in Stripe test mode.
- Paid orders appear in Firestore.
- Admin can eventually manage commerce and community content.

---

### Phase 9: SEO, Redirects, And Launch

**Goal:** Preserve current search value and launch with strong discoverability.

**Tasks**

- Create URL inventory from current Squarespace site.
- Map old URLs to new routes.
- Add 301 redirects.
- Add structured data:
  - Product
  - Breadcrumb
  - Article
  - Event
  - Organization
- Add sitemap.
- Add robots.txt.
- Add Open Graph images.
- Write SEO titles and descriptions.
- Add analytics.
- Add conversion tracking.
- Add performance testing.

**Acceptance Criteria**

- Existing important URLs redirect cleanly.
- Product and editorial pages have metadata.
- Lighthouse checks are healthy.
- Launch checklist is complete.

## 3. Suggested Build Order

1. Brand system implementation
2. Content model upgrade
3. Homepage rebuild
4. Product page storytelling upgrade
5. Collection/filter upgrade
6. Brooklyn map MVP
7. Articles and events
8. Campaign page
9. Stripe checkout
10. Firestore/admin
11. SEO redirects and launch hardening

## 4. Technical Tracking Checklist

### Brand

- [x] Add temporary brick wall logo component
- [ ] Add real brick wall logo asset
- [ ] Add approved brand font
- [x] Update Tailwind brand palette
- [x] Create brand component system
- [ ] Replace placeholder product visuals

### Storefront

- [x] Upgrade product data model
- [x] Rebuild homepage first pass
- [ ] Rebuild collection UX
- [x] Rebuild product page UX first pass
- [ ] Add gift note support
- [ ] Add product recommendations
- [ ] Add Stripe Checkout API

### Community

- [x] Define article model
- [x] Define event model
- [x] Define map location model
- [x] Build map MVP first pass
- [x] Build articles index/detail scaffold
- [x] Build events index/detail scaffold
- [x] Connect articles/events/products/map first pass

### Campaigns

- [x] Define campaign model
- [x] Build campaign route
- [x] Build “Bring Brooklyn Back” page scaffold
- [ ] Connect campaign to email signup

### Backend

- [ ] Add Firebase config
- [ ] Add Firestore schema
- [ ] Add Stripe session endpoint
- [ ] Add Stripe webhook endpoint
- [ ] Add order persistence
- [ ] Add admin auth
- [ ] Add admin content management

### Launch

- [ ] Product data migrated
- [ ] Product photos finalized
- [ ] Shipping and returns copy finalized
- [ ] Sitemap added
- [ ] Redirects mapped
- [ ] Analytics added
- [ ] Performance QA complete
- [ ] Mobile QA complete

## 5. Current Scaffold Status

Already implemented:

- Astro + Tailwind + React project scaffold
- Homepage
- Collections
- Product pages
- Search/filter page
- Local-storage cart drawer
- Checkout placeholder
- About, FAQ, contact, shipping/returns pages
- Sample typed product data
- Placeholder product visuals
- Clean static build

Current limitations:

- Placeholder brand identity
- Placeholder product photography
- Static sample catalog
- No real Stripe integration
- No Firestore
- No map
- No articles/events
- No campaign route
- No admin
- No redirect strategy

## 6. Definition Of “Excellent”

The site should not be considered excellent until:

- The brand story is visible before the user starts shopping.
- Products feel culturally and emotionally specific.
- Shopping by gift intent is easy.
- The map gives people a reason to explore.
- Articles and events create return visits.
- Checkout is fast and trustworthy.
- The visual system feels premium, not generic.
- The family/immigrant story is honest, specific, and respectfully integrated.
