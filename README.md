# ZIC Demo MVP

Frontend-heavy demo for **ZIC** — a personal agent for repetitive work.

## What this is
A clickable startup-style shell that demonstrates:
- teach a recurring task once
- save it as a reusable workflow/playbook
- re-run workflow with step-by-step execution simulation
- review runs, logs, outputs, suggestions, and templates

This is intentionally mock-driven (no real backend automation infra).

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- lightweight shadcn-style UI primitives
- Framer Motion (run simulation transitions)
- Zustand (simple in-memory state for taught workflows)

## Routes
- `/` Landing page
- `/app` Dashboard
- `/app/teach` Teach task / create workflow
- `/app/workflows/[id]` Workflow details
- `/app/workflows/[id]/run` Run execution simulation
- `/app/templates` Templates
- `/app/suggestions` Suggested automations
- `/app/settings` Settings

## Run locally
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Notes
- Data model types: `src/types/index.ts`
- Mock data: `src/data/mock-data.ts`
- Demo run behavior is simulated in `src/app/app/workflows/[id]/run/page.tsx`
