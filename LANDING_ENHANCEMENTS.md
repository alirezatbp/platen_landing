# Platen Landing — Full Document & Enhancement Roadmap

> **App:** `Landing/` (Astro marketing site for getplaten.com)  
> **Brand:** Platen · Quiet Host (teal / stone, Outfit + Source Sans 3)  
> **Last updated:** 2026-08-21  
> **Related:** [`docs/APP_DOCUMENTATION.md`](../docs/APP_DOCUMENTATION.md) · [`docs/FREE_PLAN_COMPLETION_ROADMAP.md`](../docs/FREE_PLAN_COMPLETION_ROADMAP.md)

---

## 1. Purpose

Single source of truth for the **current landing site**, what is **in scope later**, and a checklist of enhancements to make the page feel like a finished professional product site.

This file is for product + agents working inside `Landing/`. Broader SaaS phasing still lives in `docs/`.

---

## 2. Current homepage (shipped)

**Route:** `/`  
**File:** `src/pages/index.astro`

| Order | Section | Component | Job |
|------:|---------|-----------|-----|
| 1 | Hero | `src/components/home/Hero.astro` | Brand + promise + CTAs |
| 2 | How it works | `src/components/home/HowItWorks.astro` | 3-step funnel + Pro whisper |
| 3 | Guest experience | `src/components/home/GuestPreview.astro` | Glass Pills phone + paid upgrade copy |
| 4 | Plans | `src/components/home/Plans.astro` | Free / Pro / Max + monthly·yearly |
| 5 | Final CTA | `src/components/home/FinalCta.astro` | Close with Start free |

**Chrome:** `Header.astro` (nav + scroll progress) · `Footer.astro` · `BaseLayout.astro`

### Other routes

| Route | Status | Notes |
|-------|--------|-------|
| `/pricing` | Exists | **Out of sync** with homepage Plans (prices, toggle, copy) — see todo below |
| `/signup` | Wired | Posts to `POST /api/auth/signup`; stub shows `devVerifyUrl` |
| `/verify-email` | Wired | Confirms token → Continue to panel login |
| `/login` | Redirect / panel link | Uses `PUBLIC_PANEL_URL` |
| `/terms`, `/privacy` | Stub | Need legal readiness before public signup push |
| `/brand` | Internal | Logo / hero picker |

### Plans messaging (locked for homepage)

| Plan | Price (homepage) | Status |
|------|------------------|--------|
| Free | $0 forever | Live CTA → `/signup` |
| Pro | $10/mo · $8/mo yearly ($96/yr) | Coming soon |
| Max | $30/mo · $24/mo yearly ($288/yr) | Coming soon |

Limits shown on cards should stay aligned with `Backend/src/config/planLimits.js`.

### Explicitly skipped (for now)

- **Social proof / restaurant logos / testimonials** — no active customer venues to feature yet. Revisit when beta venues exist.

---

## 3. Design constraints (do not regress)

- Quiet Host tokens — no purple-glow / cream-terracotta AI cliché defaults.
- Hero stays one composition (no stats strips or feature grids in first viewport).
- Cards only when they hold interaction (plans, forms).
- Honest Free messaging — no fake unlimited.
- Motion: intentional, respect `prefers-reduced-motion`.
- EN only until i18n todo ships.

---

## 4. Enhancement backlog (todos)

Priority is a suggested order, not a hard commit. Check items off in this file when done.

### P0 — Trust & consistency

- [ ] **Live demo**  
  Add a “View sample menu” CTA (hero secondary and/or Guest section) that opens a real public Glass Pills URL.  
  **Blocked on:** a dedicated demo restaurant / slug provisioned for marketing (or a static hosted mock route).  
  **Avoid:** fake “live” that 404s.

- [ ] **Align `/pricing` with homepage Plans**  
  Mirror Free / Pro ($10) / Max ($30), monthly·yearly toggle (+20% yearly), feature lines, and coming-soon CTAs.  
  Either reuse `Plans.astro` (or extract shared plan data module) so homepage and `/pricing` cannot drift.

- [ ] **Tighten SEO meta**  
  Sync `BaseLayout` / page `description` and titles with current hero copy (remove stale lines like “No app for your guests” where dropped).  
  Unique titles per route; Open Graph `og:title` / `og:description` match visible messaging.  
  Confirm sitemap + `robots.txt` still correct for getplaten.com.

- [ ] **Real OG / social image + favicon set**  
  Ship a proper `og` image (1200×630) from brand/hero art.  
  Favicon set: SVG + PNG sizes + apple-touch-icon.  
  Wire in `Seo.astro` / `BaseLayout`.

### P1 — Clarity & conversion

- [ ] **Subtle trust strip**  
  One quiet line (not a stats dashboard), e.g. under hero or above Plans: Free forever · No card · Live in minutes.  
  Keep hero budget clean — strip is optional below first viewport or as hero meta only.

- [ ] **FAQ**  
  New homepage section (or `/pricing` accordion) — ~5–7 questions:  
  Free forever? Card required? App for guests? When Pro/Max? What are scans? Multi-branch?  
  Honest answers; link to Plans / signup.

- [ ] **Admin / product glimpse**  
  Short “What owners use” strip: menu editor / QR card atmosphere (screenshot or stylized mock).  
  One job: show the CMS exists, not a feature grid dump.

- [ ] **Footer depth**  
  Expand Product + Legal: How it works, Plans, Pricing, Signup, Login, Terms, Privacy, Contact/waitlist when ready.  
  Match Platen wordmark + tone already in `Footer.astro`.

### P2 — Polish & growth

- [ ] **Motion polish**  
  Section-aware nav highlight while scrolling; refine plan card hover; ensure scroll-progress + reveals honor `prefers-reduced-motion`.  
  Keep to 2–3 intentional moments — no motion noise.

- [ ] **Contact / waitlist for Pro**  
  Simple email capture or mailto for “Notify me when Pro ships.”  
  Can live on Plans Pro/Max cards and/or `/pricing`. Needs spam basics if form posts to API.

- [ ] **Legal readiness**  
  Replace Terms/Privacy stubs with real dated copy; link from signup + footer.  
  **Required before** public self-serve signup push.

- [ ] **Performance pass**  
  Hero image sizing / `srcset`, lazy below-fold media, Lighthouse pass on `/`, font loading check.  
  No layout shift on header / phone mock.

### P3 — Later / optional

- [ ] **Blog or changelog**  
  Optional Astro content collection for product updates. Helps SEO and “alive product” signal. Not required for v1 conversion.

- [ ] **i18n (AR)**  
  Arabic locale for MENA. Plan RTL layout, Outfit/Source Sans fallthrough or Arabic-capable faces, and copy ownership. Defer until EN funnel is stable.

---

## 5. Suggested execution order

1. SEO meta sync (quick win)  
2. Align `/pricing` with Plans  
3. OG image + favicon set  
4. Trust strip  
5. FAQ  
6. Live demo (when demo venue exists)  
7. Admin glimpse  
8. Footer depth  
9. Motion polish  
10. Pro waitlist  
11. Legal readiness (before public signup)  
12. Performance pass  
13. Blog / changelog · i18n (as needed)

---

## 6. Key files map

| Area | Path |
|------|------|
| Homepage | `src/pages/index.astro` |
| Pricing | `src/pages/pricing.astro` |
| Plans UI | `src/components/home/Plans.astro` |
| Hero | `src/components/home/Hero.astro` |
| Guest phone | `src/components/GlassPillsPreview.astro` |
| SEO | `src/components/Seo.astro` |
| Layout | `src/layouts/BaseLayout.astro` |
| Tokens | `src/styles/global.css` |
| Env | `.env.example` (`PUBLIC_SITE_URL`, `PUBLIC_PANEL_URL`, `PUBLIC_API_BASE_URL`) |

---

## 7. Definition of “professional enough” (checkpoint)

Landing feels finished when:

- [ ] Homepage and `/pricing` tell the **same** plan story  
- [ ] Share previews look branded (OG + favicons)  
- [ ] Meta matches on-page copy  
- [ ] FAQ answers Free/Pro doubts without sales fluff  
- [ ] Demo or honest “preview” path exists for guests  
- [ ] Legal pages are real before open signup  
- [ ] No active-restaurant social proof required until venues exist  

---

## 8. Changelog (landing doc)

| Date | Note |
|------|------|
| 2026-08-21 | Docs catch-up: local ports 2080–2083; product docs now point here instead of removed `LANDING_PAGE_PLAN.md` / `LANDING_DESIGN.md` |
| 2026-07-23 | Initial full landing doc + enhancement backlog created in `Landing/` |
