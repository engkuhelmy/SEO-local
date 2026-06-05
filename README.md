# Local SEO

A lightweight Next.js web application designed as a clean, premium starting point for a local SEO marketing tutorial series. This project is built to grow one feature at a time, keeping simplicity and readability at its core.

---

## Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS (Vanilla CSS structure)
- **Database:** SQLite3 (via `better-sqlite3` for local persistence)
- **Deployment:** Vercel or VPS

---

## Features

- **Premium Design:** Clean, modern landing page with a carefully selected, elegant dark/light palette, smooth layout transitions, and high-fidelity styling.
- **SQLite3 Integration:** Connection helpers pre-configured in `lib/db.ts` to manage local SQLite databases securely, handling development hot-reloads gracefully.
- **API Router Templates:** Setup includes feedback handler endpoints with Slack webhook integrations for monitoring user reactions.

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** installed on your system.

### 1. Install Dependencies

Install all the packages required by the application:

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory if it does not already exist:

```bash
touch .env.local
```

Inside `.env.local`, you can configure variables like:

```env
SLACK_WEBHOOK_URL=your_slack_webhook_url_here
```

### 3. Run the Development Server

Launch the development server:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

---

## Project Structure

- `/app` — Contains all the page templates, styles, and API route handlers.
- `/components` — Reusable, high-fidelity UI blocks (navigation headers, footers).
- `/lib` — Shareable utilities, including database initializers (`db.ts`).
- `local.db` — (Auto-created) The local SQLite3 database file. Added to `.gitignore` to prevent committing it to source control.
- `CLAUDE.md` — Project guidelines and development rules.
- `project_specs.md` — Active blueprints defining the goal of the current step.
