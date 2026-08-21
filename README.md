# Platen Landing

Astro marketing site for **getplaten.com** (signup + discovery). Admin CMS stays on `panel.*`.

**Brand:** Platen · **Domain:** getplaten.com  
**Plans:** [`Landing/LANDING_ENHANCEMENTS.md`](./LANDING_ENHANCEMENTS.md) · product: [`docs/APP_DOCUMENTATION.md`](../docs/APP_DOCUMENTATION.md)

## Stack

- Astro (SSG) + React islands + Tailwind CSS v4
- Direction: Quiet Host (teal / stone, Outfit + Source Sans 3)

## Setup

```bash
cd Landing
cp .env.example .env
npm install
npm run dev            # http://localhost:2083
```

### Brand picker (internal)

Open http://localhost:2083/brand to compare logo + hero options.

### Env

| Variable | Purpose |
|----------|---------|
| `PUBLIC_SITE_URL` | Canonical site (`https://getplaten.com`) |
| `PUBLIC_PANEL_URL` | AdminPanel origin |
| `PUBLIC_API_BASE_URL` | Backend API |

## Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Local dev server |
| `npm run build` | Production SSG → `dist/` |
| `npm run preview` | Preview build |
