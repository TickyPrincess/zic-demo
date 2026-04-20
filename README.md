# ZIC

ZIC is a personal agent for repetitive work.

## What this is
A frontend product shell for ZIC where users can:
- teach a recurring task once
- save it as a reusable workflow/playbook
- re-run workflows with step-by-step execution
- review runs, logs, outputs, suggestions, and templates

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn-style UI primitives
- Framer Motion
- Zustand (in-memory app state)

## Routes
- `/` Landing page
- `/app` Dashboard
- `/app/teach` Teach task / create workflow
- `/app/workflows/[id]` Workflow details
- `/app/workflows/[id]/run` Run execution
- `/app/templates` Templates
- `/app/suggestions` Suggested automations
- `/app/settings` Settings

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Notes
- Data model types: `src/types/index.ts`
- Mock data: `src/data/mock-data.ts`
- Run behavior logic: `src/app/app/workflows/[id]/run/page.tsx`
