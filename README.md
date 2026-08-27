# Platen Landing

Astro marketing site for **getplaten.com** (signup + discovery). Admin CMS stays on `dashboard.getplaten.com`.

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

## Production deploy (aaPanel)

GitHub Actions (`.github/workflows/deploy.yml`) builds on `main` (or **Run workflow**) and rsyncs `dist/` to `/www/wwwroot/getplaten.com`.

Set these secrets on the Landing repo:

| Secret | Value |
|--------|--------|
| `PUBLIC_SITE_URL` | `https://getplaten.com` |
| `PUBLIC_PANEL_URL` | `https://dashboard.getplaten.com` |
| `PUBLIC_API_BASE_URL` | `https://api.getplaten.com/api` |
| `DEPLOY_KEY` | Deployer’s private SSH key |
| `SERVER_IP` | aaPanel server IP |
