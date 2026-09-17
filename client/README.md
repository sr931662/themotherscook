# The Mothers Cook — Landing Page (Client)

Frontend-only landing page for The Mothers Cook, a premium home-style vegetarian bulk catering
business in Delhi / Noida / NCR. Built with React 18, Vite, TypeScript and plain CSS Modules —
no backend yet (see `../server`, currently empty).

## Setup

```bash
cd client
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
npm run lint       # ESLint
npm run format     # Prettier — writes changes
npm run format:check
```

## Folder structure

```
src/
  App.tsx              # react-router-dom setup (single "/" route for now)
  main.tsx             # React root, imports global stylesheets
  pages/
    Home.tsx            # composes all sections in order
  sections/             # one component + one CSS module per landing-page section
    Navbar.tsx / .module.css
    Hero.tsx / .module.css
    OccasionStrip.tsx / .module.css
    OccasionBand.tsx / .module.css
    Story.tsx / .module.css
    Pair.tsx / .module.css        # Corporate (dark) + Satvik (light) panels
    CookingStandards.tsx / .module.css
    HowToOrder.tsx / .module.css
    Menus.tsx / .module.css
    Reviews.tsx / .module.css
    CTA.tsx / .module.css
    Footer.tsx / .module.css
  components/           # shared, cross-section UI
    icons/               # inline SVG icon components (stroke 1.4–1.8, currentColor)
    FadeUp.tsx            # IntersectionObserver fade-up-on-scroll wrapper
    PlaceholderPhoto.tsx  # labelled placeholder box standing in for real photos
    VideoModal.tsx        # "Watch Our Story" placeholder modal
    FloatingWhatsApp.tsx  # tablet-only floating WhatsApp button
    MobileActionBar.tsx   # mobile-only sticky Call / Get a quote bar
    Logo.tsx, VegMark.tsx, StarRow.tsx
  data/                 # all copy that repeats or will change — typed, no JSX
    site.ts              # business info, nav links, tel:/wa.me link builders
    occasions.ts, menus.ts, standards.ts, steps.ts, reviews.ts, feats.ts,
    stats.ts, pair.ts
  hooks/
    useActiveSection.ts   # IntersectionObserver-driven active nav link
    useAnchorScroll.ts    # smooth-scroll to #anchors with sticky-header offset
    useBodyScrollLock.ts  # locks scroll while the mobile drawer/modal is open
    useFocusTrap.ts       # focus trap + Esc-to-close for the drawer/modal
  styles/
    tokens.css            # global CSS variables (colors, fonts, radii)
    base.css              # reset + base typography + focus rings + reduced-motion
    utilities.css         # shared design-system primitives (see note below)
```

### Why some classes are global, not CSS Modules

Per-section layout (`.hero`, `.mgrid`, `.steps`, …) lives in each section's own
`*.module.css` file. But a handful of primitives are reused _verbatim_ across
nearly every section — buttons, `.wrap`, `.card`, `.kicker`, `.serif`/`.script`/`.hand`
type helpers, the veg mark, the fade-up reveal classes. Those live once in
`src/styles/utilities.css` as plain global classes so they can't drift between
sections. Everything section-specific is a CSS Module. `tokens.css` holds the
design tokens as CSS custom properties on `:root`.

## Where to edit content

- **All placeholders and contact info**: `src/data/site.ts` — phone, email,
  kitchen address, FSSAI number, rating, plates served, min plates, review
  count. Search the whole `src/data/` folder for bracketed placeholders like
  `[PHONE]`, `[EMAIL]`, `[4.9]`, `[100,000+]`, `[MIN PLATES]` before launch.
- **Menus / pricing**: `src/data/menus.ts`
- **Occasions strip**: `src/data/occasions.ts`
- **Cooking standards (the six numbered rules)**: `src/data/standards.ts`
- **How to order steps**: `src/data/steps.ts`
- **Reviews**: `src/data/reviews.ts` — replace the bracketed placeholder quotes
  with real Google reviews.
- **Corporate / Satvik panel copy**: `src/data/pair.ts`
- **Photos**: real photos live in `src/assets/` (`the mothers cook cover.jpg`,
  `plate.jpg`, `kitchen mom.jpg`, `boxes.jpg`, `no onion.jpg`,
  `daal pouring.jpg`) and are wired into Hero / OccasionBand / Story / Pair /
  CookingStandards via the `PlaceholderPhoto` component's `src` prop. To
  replace one: drop the new file into `src/assets/`, update the `import` in
  the relevant section, and pass the new file's real pixel `width`/`height`
  to `PlaceholderPhoto` (used as the `<img>` attributes for CLS). Convert new
  photos to `.jpg` (quality ~80–85) before adding them — the originals here
  were ~2MB PNGs each and are now ~200–300KB. `PlaceholderPhoto` still
  supports its no-`src` labelled-box mode for any future placeholder.
- **Logo**: `src/components/Logo.tsx` renders `src/assets/logo.png` — a
  240×240 transparent PNG (background removed via a circular alpha mask, see
  git history if you need to redo this for a replacement logo).
- **Favicons**: `public/favicon.ico` (16/32/48), `public/favicon-32.png`,
  `public/favicon-192.png` and `public/apple-touch-icon.png` are all
  generated from `src/assets/logo.png`. If the logo changes, regenerate all
  four and keep the apple-touch icon flattened onto the cream background
  (`#FBF4EA`) — iOS ignores alpha there. They're wired up in `index.html`.

## WhatsApp / call links

`src/data/site.ts` exports `whatsappLink({ occasion, date, guests })` and
`telLink()`. Every "Get a quote", "WhatsApp us", menu CTA, etc. across the
site is built from these two functions, so updating `phoneDigits` in
`site.ts` updates every link at once.

`site.phoneDigits` is a placeholder (`91[PHONE]`) — replace it with the real
digits-only number before launch, otherwise the generated `tel:`/`wa.me`
links will be invalid.

## TODO: backend integration

There is no backend yet. Search for `TODO` comments in `src/data/site.ts` and
`src/components/VideoModal.tsx` for the two spots that will need wiring up
once `../server` exists:

- An enquiry form / API endpoint for structured lead capture (currently every
  CTA just opens `wa.me` or `tel:`).
- A real embedded video for "Watch Our Story" (currently a placeholder modal).

## Responsive behaviour

Layout is mobile-first with **container queries** (not media queries) at
max-width `1100px` (tablet) and `640px` (mobile), scoped to the `.site` root
element (`container-type: inline-size` in `utilities.css`). Verify any layout
change at all three widths — 390 / 834 / 1440 — since that's how the source
design was authored.

## Accessibility & SEO

- Real `<button>`/`<a>` elements throughout, `aria-label`s on icon-only
  buttons, visible focus rings (`base.css`), touch targets ≥44px.
- The mobile nav drawer and video modal both trap focus, lock body scroll,
  and close on Escape (`useFocusTrap`, `useBodyScrollLock`).
- `index.html` has title/meta description/Open Graph tags and a
  `FoodEstablishment` JSON-LD block — update the placeholder values there
  alongside `src/data/site.ts` before launch.
- Respects `prefers-reduced-motion` (scroll-fade and smooth-scroll both
  degrade to instant).
