# Full Stack Project: Student CRM + Chat + Deal Pipeline

## Test of Competence

Please complete the project in this repo before continuing with the hiring process.

- Position: Full stack developer
- Repo: `sinc-dev/developer-test-of-competence`
- Deadline: 1st June, 2026
- Submit your completed work here: [Google Form](https://forms.gle/DngbHjuZyfX4b3kr9)
- When you are done, book a meeting here: [Calendar booking](https://calendar.app.google/gaVmDsdiUvNngbcK8)

## How To Work

- Do not request write access to this repo.
- Fork this repo or create your own public GitHub repo for your solution.
- Build the project in your own repo.
- Keep your commits readable so we can review your work.
- Deploy the frontend and backend to Cloudflare.
- Include the deployed app URL and Worker/API URL in your submitted README.
- Be ready to explain your code during the meeting.

## AI Tools

You may use AI tools to help you build this project.

Recommended:

- Codex
- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- v0

AI usage is allowed, but you must understand the code you submit. During review, you may be asked to explain your architecture, database schema, API routes, auth flow, realtime implementation, ownership rules, pipeline logic, and important code decisions.

## One-Week Scope

This is intended to be completed in about one week with AI assistance. Focus on a working MVP first:

- Auth works.
- Client can start a chat.
- Sales user can assign and reply.
- Sales user can create a client deal.
- Deal has an owner and pipeline stage.
- Manager can reassign conversations and deals.
- Pipeline board shows real deal data.
- UI is clean and usable.
- Frontend and backend are deployed to Cloudflare.

Keep the implementation practical. Drag and drop, complex reporting, email, file upload, payments, and advanced notifications are optional or out of scope.

The form asks for:

- Position
- Full name
- Email address
- Short video demo, max 100 MB

Build a small CRM for an education sales team. Clients can log in and chat. Sales users can manage chat conversations, create deals for clients, assign deal owners, and move deals through a pipeline.

## Target

- Level: Full stack developer
- Duration: 1 week
- Goal: Prove they can design and deliver a small production-style app with auth, realtime chat, relational data, role permissions, and a pipeline UI

## Stack

- Vite
- React
- TypeScript
- React Router
- TanStack Query
- shadcn/ui
- Tailwind CSS
- Cloudflare Workers
- Hono
- Supabase Auth
- Supabase Postgres
- Supabase Realtime

## Core Demo Flow

1. Client signs up or logs in.
2. Client starts a chat.
3. Sales rep assigns the conversation.
4. Sales rep creates a deal for the client.
5. Deal appears on a pipeline board.
6. Sales rep moves the deal through stages.
7. Manager reassigns the deal to another sales rep.
8. Client page shows profile, conversations, deals, and activity.

## Files

- [requirements.md](./requirements.md)
- [architecture.md](./architecture.md)
- [database.md](./database.md)
- [api.md](./api.md)
- [ui-wireframes.md](./ui-wireframes.md)
- [evaluation.md](./evaluation.md)
