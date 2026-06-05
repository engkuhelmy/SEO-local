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
- `/blog` — Blog index page (lists the demo blog post versions: V1, V2, V3)

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
- `/blog` index page created successfully under `app/blog/page.tsx`.
- The page lists the three versions of the "Top 10 Wedding Venues in Toronto" blog posts (V1, V2, and V3) with appropriate styling and descriptions.
- Links to `/blog/top-10-wedding-venues-in-toronto`, `/blog/top-10-wedding-venues-in-toronto-v2`, and `/blog/top-10-wedding-venues-in-toronto-v3` are functional.
- The page includes the `SiteHeader` and `SiteFooter`.
- `npm run build` passes.
