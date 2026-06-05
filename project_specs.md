# Project Specs

## What the app does
A local SEO marketing site used as a base for a YouTube tutorial. Starts as a clean landing page; features will be added during the tutorial series.

## Who uses it
Visitors interested in local SEO (tutorial audience).

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- SQLite3 (`better-sqlite3`) — not yet, will add when needed
- Hosting: localhost for now, VPS/Vercel (with serverless SQLite) later

## Pages
- `/` — Landing page (hero, value prop, "coming soon" section)

## Data models
### `reviews` Table
- `id` (INTEGER, Primary Key)
- `name` (TEXT, e.g., "Sarah K.")
- `stars` (INTEGER, 1 to 5)
- `note` (TEXT, review body text)
- `created_at` (DATETIME, default CURRENT_TIMESTAMP)

### `kpis` Table
- `id` (INTEGER, Primary Key)
- `key` (TEXT, e.g., "keywords", unique identifier)
- `label` (TEXT, e.g., "Top-3 keywords")
- `value` (TEXT, e.g., "12")
- `delta` (TEXT, e.g., "+3")

## Third-party services
None yet.

## What "done" looks like (this task)
- Database tables `reviews` and `kpis` created in `local.db`.
- Database initialized and seeded with dummy data via a seed script.
- Dashboard on `/services/local-seo` displays reviews and KPI stats dynamically fetched from the SQLite3 database.
- `npm run build` and `npm run dev` pass successfully.
