# CodeAI

CodeAI is an authenticated AI code-explainer built with Next.js, React, Prisma, PostgreSQL, Better Auth, and the OpenAI Responses API. A signed-in user pastes a code snippet into the editor, the backend generates a structured explanation with an LLM, and the result is normalized into relational tables so it can be queried later from a per-user history view.

This repository is more than a simple prompt-to-text demo. It combines:

- authenticated multi-user access
- Google and GitHub OAuth sign-in through Better Auth
- server-side session checks in the App Router
- application-layer row ownership enforcement
- structured model outputs validated with Zod
- normalized persistence of explanation steps
- idempotent deduplication using a normalized code hash
- theming and syntax-highlighted result rendering

## What The Project Does

At a high level, CodeAI turns raw source code into a stored, queryable explanation artifact.

The generated artifact contains:

- a generated title
- detected programming language
- a complexity classification
- a short summary
- a long-form summary
- an optimization tip
- a performance impact statement
- a step-by-step explanation broken down by line range
- model metadata and token usage

The application persists both the high-level explanation and its individual explanation steps. This is important because it means the AI output is not treated as an opaque blob; it is decomposed into fields that can be rendered, indexed, reused, and extended later.

## Core User Flow

1. A user authenticates with Better Auth.
2. The user navigates to `/explainer`.
3. The user pastes source code into the client textarea.
4. The client sends `POST /api/explanations` with the raw code.
5. The server resolves the current session with `auth.api.getSession`.
6. The code is normalized and hashed with SHA-256.
7. The backend checks whether the same user has already submitted equivalent code.
8. If a match exists, the existing explanation ID is returned immediately.
9. If no match exists, the backend calls the OpenAI Responses API using structured parsing.
10. The parsed output is validated against a Zod schema.
11. Prisma writes the explanation row and child `ExplanationStep` rows to PostgreSQL.
12. The client redirects to `/explanations/[id]`.
13. The user can later revisit the result from `/history`.

## Technology Stack

### Application Framework

- Next.js `16.1.6`
- React `19.2.3`
- TypeScript `5`
- App Router with server components and client components

### Styling And UI

- Tailwind CSS `4`
- `next-themes` for light, dark, and system theme handling
- `react-icons` for iconography
- `react-syntax-highlighter` for source-code presentation
- `react-toastify` for client feedback

### Data And Persistence

- PostgreSQL
- Prisma `7.5.0`
- `@prisma/adapter-pg` with `pg`
- generated Prisma client output under `utils/generated/prisma`

### Authentication

- Better Auth `1.5.5`
- Prisma adapter for Better Auth persistence
- Google social sign-in
- GitHub social sign-in
- session-backed route protection

### AI And Validation

- OpenAI Node SDK `6.32.0`
- OpenAI Responses API
- `responses.parse(...)`
- `zodTextFormat(...)`
- Zod `4.3.6`

## High-Level Architecture

```text
Browser UI
  -> Next.js App Router pages
  -> Client component submits code to /api/explanations

Route Handler Layer
  -> Better Auth session lookup
  -> Authorization check
  -> SHA-256 code normalization + hash
  -> Duplicate detection
  -> OpenAI structured response generation
  -> Zod validation
  -> Prisma persistence

Persistence Layer
  -> PostgreSQL user/session/account/verification tables
  -> PostgreSQL profile table
  -> PostgreSQL explanation table
  -> PostgreSQL explanation_step table

Read Path
  -> /history loads current user's explanation list
  -> /explanations/[id] loads one explanation plus child steps
```

## Routes

### User-Facing Pages

- `/` - marketing landing page and session-aware navigation
- `/login` - login UI with social sign-in buttons
- `/register` - registration UI with social sign-in buttons
- `/forgot-password` - password reset request UI scaffold
- `/reset-password` - password reset UI scaffold
- `/explainer` - authenticated code input workflow
- `/history` - authenticated explanation history
- `/explanations/[id]` - authenticated explanation detail page
- `/settings` - authenticated user/settings page

### API Routes

- `/api/auth/[...all]` - Better Auth Next.js handler
- `/api/explanations` - create explanation or list user explanations
- `/api/explanations/[id]` - fetch one explanation scoped to current user

## Detailed Architecture

### App Router And Session Gating

Protected pages use a server-side session check before rendering. The `getServerSession()` helper wraps Better Auth's `auth.api.getSession(...)` and reads incoming request headers with `next/headers`.

This gives the project two useful properties:

- protected routes can redirect before rendering sensitive content
- authorization checks happen on the server, not only in the browser

Examples of protected routes include:

- `/explainer`
- `/history`
- `/explanations/[id]`
- `/settings`

### Client And Server Component Split

The project uses both client and server components deliberately:

- server components handle authentication gates and data-fetching boundaries
- client components handle local input state, toasts, navigation transitions, and session-aware navbar interactions

For example:

- `components/ui/ExplainerClient.tsx` manages textarea state and submission
- `app/history/page.tsx` and `app/explanations/[id]/page.tsx` fetch data server-side and forward the session cookie to internal API routes

### Why Internal Fetches Are Used In Server Components

The history and detail pages fetch from the application's own API routes instead of directly calling Prisma inside the page component. That pattern centralizes row-scoped authorization logic inside the route handlers.

The server component forwards the current cookie header so the API route can still resolve the Better Auth session:

- the page reads cookies with `next/headers`
- the page forwards `cookie: cookieHeader`
- the route handler resolves the user and applies row ownership filters

This is not the only valid architecture, but it keeps the read path consistent with the write path.

## AI Pipeline

### Structured Model Outputs

One of the most important design choices in this project is that the model output is structured and validated instead of treated as free-form prose.

The explanation endpoint defines a Zod schema for:

- `title`
- `language`
- `complexity`
- `summary`
- `longSummary`
- `optimization_tip`
- `performance_impact`
- `model`
- `steps[]`

Each `steps[]` item contains:

- `step_number`
- `line_start`
- `line_end`
- `explanation`

The backend then calls:

```ts
openai.responses.parse({
  model: "gpt-4o-2024-11-20",
  text: {
    format: zodTextFormat(explanationSchema, "explanation"),
  },
})
```

This matters because structured outputs provide:

- deterministic field extraction
- runtime schema validation
- easier persistence into relational tables
- safer rendering in multiple UI contexts
- fewer brittle regex or string-parsing steps after generation

### Why Structured Outputs Fit This Product Well

This project is not just displaying AI-generated text once and discarding it. It stores the response as a first-class domain object. That means the output benefits from being shaped like application data instead of plain chat text.

Examples:

- `complexity` maps into a Prisma enum
- `steps[]` becomes `ExplanationStep[]`
- token usage is stored separately from human-readable fields
- the original parsed payload is also saved as JSON for later auditing or reprocessing

### Prompting Strategy

The route sends a developer instruction that constrains the model to:

- detect the likely language
- generate a concise title
- classify complexity as `low`, `medium`, or `high`
- produce both short and long summaries
- provide optimization guidance if relevant
- summarize performance implications
- break the explanation into step items by line or line range
- avoid inventing missing context

That prompt is intentionally product-shaped. It is not a generic "explain this code" prompt; it reflects the exact fields the UI and database expect.

### Persistence Of Model Metadata

The explanation row stores:

- `model`
- `raw_response_json`
- `prompt_tokens`
- `completion_tokens`
- `total_tokens`
- `status`
- `error_message`

This gives the application the foundation for:

- usage accounting
- debugging model behavior
- comparing quality across models later
- measuring cost and latency tradeoffs over time

The route also appends the raw OpenAI response payload to `output.ndjson` for local inspection.

## Idempotency And Duplicate Prevention

The project implements a strong deduplication mechanism for repeated submissions.

Before calling OpenAI, the backend:

1. normalizes the code
2. computes a SHA-256 hash
3. looks for an existing explanation owned by the same user with the same hash

Normalization currently:

- converts Windows line endings to `\n`
- trims trailing whitespace per line
- trims leading/trailing empty space for the whole snippet

The result is a per-user idempotency key. If the same user pastes semantically equivalent code with only trailing-space or newline differences, the system reuses the previous explanation instead of paying for another model call.

This is backed by a database constraint:

- unique index on `Explanation(user_id, code_hash)`

That means deduplication exists at both the application layer and the database layer.

## Database Design

### Auth Tables

Better Auth persists the standard identity tables:

- `user`
- `session`
- `account`
- `verification`

These tables are used to represent:

- base user identity
- active sessions
- external provider links
- verification artifacts

### Domain Tables

The application adds three main domain entities:

- `Profile`
- `Explanation`
- `ExplanationStep`

#### `Profile`

`Profile` is a user-adjacent table that stores:

- `user_id`
- `email`
- `full_name`
- `avatar_url`
- `last_login_at`
- timestamps

The app upserts the profile when an authenticated user reaches `/explainer`. In other words, profile synchronization currently happens lazily on product entry instead of eagerly during auth callback handling.

#### `Explanation`

This is the primary persisted artifact for AI output. It stores:

- the owner via `user_id`
- the original source `code`
- the generated `title`
- the detected `language`
- `summary` and `longSummary`
- `complexity`
- `optimization_tip`
- `performance_impact`
- `model`
- the raw parsed JSON payload
- generation status
- token usage
- `code_hash`
- soft-delete marker `deleted_at`
- timestamps

#### `ExplanationStep`

This table normalizes the step-by-step explanation so the UI can evolve beyond a simple text block. Each row stores:

- `explanation_id`
- `step_number`
- `line_start`
- `line_end`
- `text`
- timestamps

This schema is especially useful if the product later adds:

- per-line highlighting
- collapsible explanation steps
- code-to-step cross-linking
- partial regeneration of one section

### BigInt Handling

The domain tables use `BigInt` IDs. Because JSON does not natively support JavaScript `bigint`, the project includes a serializer helper that converts `bigint` values to strings before returning them in API responses.

Without this, route handlers would fail when serializing explanation IDs or nested row identifiers.

## Authentication And Identity

### Better Auth Integration

Better Auth is configured in `lib/auth.ts` and connected to PostgreSQL through the Prisma adapter.

Key configuration points:

- `baseURL` comes from `BETTER_AUTH_URL`
- email/password auth is enabled
- email verification is enabled
- Google and GitHub are registered as social providers
- persistence uses `prismaAdapter(prisma, { provider: "postgresql" })`

Next.js integration is done with:

```ts
export const { POST, GET } = toNextJsHandler(auth);
```

This exposes the Better Auth route handler at `/api/auth/[...all]`.

### Server-Side Session Access

The server resolves sessions through:

```ts
auth.api.getSession({
  headers: await headers(),
})
```

This is important because it keeps session resolution inside the request lifecycle and avoids trusting client-only auth state for protected operations.

### Client-Side Session Access

The browser uses:

- `createAuthClient(...)`
- `useSession()`
- `signIn`
- `signOut`
- `signUp`

This powers session-aware navigation and social sign-in actions from the login/register UIs.

## Google Social Sign-In

Google OAuth is configured as a Better Auth social provider:

```ts
google: {
  prompt: "select_account",
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
}
```

Important implementation details:

- the provider is server-configured in Better Auth
- the login and register screens trigger `signIn.social({ provider: "google" })`
- the callback target is `/explainer`
- `prompt: "select_account"` forces Google account selection when appropriate

Operationally, the flow is:

1. user clicks the Google button
2. Better Auth redirects to Google's OAuth consent flow
3. Google returns control to the Better Auth callback route
4. Better Auth creates or links the user/account/session records
5. the app redirects the user into the protected application area

## GitHub Social Sign-In

GitHub OAuth is configured similarly:

```ts
github: {
  clientId: process.env.GITHUB_CLIENT_ID!,
  clientSecret: process.env.GITHUB_CLIENT_SECRET!,
}
```

Flow characteristics:

- initiated from the same social login buttons as Google
- callback target is also `/explainer`
- Better Auth persists the linked provider in the `account` table
- if the user already exists, the provider can be associated with the existing identity depending on Better Auth provider/account matching behavior

GitHub and Google are therefore both first-class login methods in the current implementation.

## Email/Password, Verification, And Current Status

The repository has partial email/password infrastructure but not a fully completed email-password product flow.

### What Is Configured

- `emailAndPassword.enabled = true`
- `emailVerification.autoSignInAfterVerification = true`
- login, register, forgot-password, and reset-password pages exist

### What Is Not Fully Wired Yet

- the login form does not currently call `signIn.email(...)`
- the register form does not currently call `signUp.email(...)`
- forgot-password and reset-password pages are currently UI scaffolds
- no mail transport or verification email delivery logic is defined in this repository

This distinction matters for anyone extending the project: social auth is the implemented path today, while email/password is best described as partially configured infrastructure plus unfinished UI workflows.

## Authorization, Row Ownership, And RLS

### Current Security Model

The current project enforces row ownership in the application layer, not with PostgreSQL Row Level Security policies.

Examples:

- `GET /api/explanations` filters by `user_id = session.user.id`
- `GET /api/explanations/[id]` filters by both `id` and `user_id`
- `POST /api/explanations` creates explanations with `user_id` from the server session, not from client input

This is good and necessary, but it is not the same as true database-enforced RLS.

### RLS Status In This Repository

There are currently:

- no `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` statements
- no `CREATE POLICY ...` statements
- no database session-claim propagation for per-user SQL policies

So, to be precise:

- row ownership is implemented
- application-layer authorization is implemented
- database-native RLS is not yet implemented

### Why RLS Still Matters Conceptually

RLS would move tenant isolation from "the application should always remember to filter by user" to "the database itself rejects rows that do not belong to the active principal."

That is valuable because it protects against:

- accidental missing `where` clauses
- future endpoints that forget ownership filters
- ad hoc SQL queries run without proper scoping

### How RLS Would Fit This Project

If you later want to harden this system with native PostgreSQL RLS, the natural candidates are:

- `Profile`
- `Explanation`
- `ExplanationStep`

For `Explanation`, a policy would likely compare `user_id` to a request-scoped database setting. A PostgreSQL-style pattern would look like:

```sql
ALTER TABLE "Explanation" ENABLE ROW LEVEL SECURITY;

CREATE POLICY explanation_owner_select
ON "Explanation"
FOR SELECT
USING (user_id = current_setting('app.user_id', true));
```

For `ExplanationStep`, the policy would usually derive ownership through the parent explanation, for example with an `EXISTS` subquery.

The important nuance is that Prisma does not automatically propagate Better Auth's user identity into PostgreSQL session variables. If native RLS is added, the application must also establish a safe way to set request-scoped DB context per transaction or use an infrastructure pattern that supports claim propagation.

## API Contract

### `POST /api/explanations`

Purpose:

- create a new explanation for the authenticated user
- or reuse an existing one if the code hash already exists for that user

Request body:

```json
{
  "code": "const answer = 42;"
}
```

Success response:

```json
{
  "success": true,
  "id": "123",
  "status": 201
}
```

Failure cases:

- `401` when no authenticated session exists
- `400` when model generation or parsing fails

### `GET /api/explanations`

Purpose:

- list all non-deleted explanations for the current user

Notes:

- results are filtered by `user_id`
- results exclude rows where `deleted_at` is not `null`
- BigInt fields are serialized to strings

### `GET /api/explanations/[id]`

Purpose:

- fetch a single explanation plus child steps for the current user

Notes:

- the handler filters by both the explanation ID and current `user_id`
- step rows are loaded with `include.explanation_steps`
- returns `404` if the row does not belong to the current user or does not exist

## Environment Variables

Create a `.env` file for Prisma and server runtime values. You can also mirror the public URL in `.env.local` if preferred, but `DATABASE_URL` should be available to Prisma because `prisma.config.ts` explicitly loads `.env`.

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/codeai"

BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

OPENAI_API_KEY="sk-..."

GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."
```

### Variable Purpose

- `DATABASE_URL` - PostgreSQL connection string for Prisma and the Prisma PG adapter
- `BETTER_AUTH_URL` - canonical backend/auth base URL used by Better Auth
- `NEXT_PUBLIC_APP_URL` - client-visible app base URL used by the Better Auth client and internal absolute fetches
- `OPENAI_API_KEY` - credential for the OpenAI Responses API
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` - Google OAuth credentials
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` - GitHub OAuth credentials

## Local Development

### Install Dependencies

```bash
pnpm install
```

### Apply Database Migrations

```bash
pnpm prisma migrate dev
```

### Start The App

```bash
pnpm dev
```

### Other Useful Commands

```bash
pnpm build
pnpm start
pnpm lint
pnpm prisma generate
```

## Project Structure

```text
app/
  api/
    auth/[...all]/route.ts          Better Auth HTTP handler
    explanations/route.ts           list + create explanation endpoint
    explanations/[id]/route.ts      detail endpoint
  explanations/[id]/page.tsx        explanation detail UI
  explainer/page.tsx                authenticated code entry page
  history/page.tsx                  authenticated history page
  login/page.tsx                    login route
  register/page.tsx                 register route
  settings/page.tsx                 settings route

components/
  layouts/                          page-level UI sections
  providers/                        theme provider wrapper
  ui/                               navigation, explainer, loading, theme selector

lib/
  auth.ts                           Better Auth + Prisma setup
  auth-client.ts                    Better Auth browser client
  session.ts                        server-side session helper
  types.ts                          shared response/domain types

prisma/
  schema.prisma                     data model
  migrations/                       migration history

utils/
  generated/prisma/                 generated Prisma client
  helpers.tsx                       hashing, serialization, logging helpers
```

## Current Product And Engineering Notes

### Implemented

- social authentication with Google and GitHub
- authenticated explainer workflow
- structured AI explanation generation
- normalized persistence of explanation steps
- per-user history and detail retrieval
- theme support

### Partially Implemented Or Scaffolded

- email/password login and registration UI
- forgot-password flow
- reset-password flow
- email verification delivery
- soft-delete lifecycle beyond the `deleted_at` column

### Important Practical Notes

- the landing page copy mentions capabilities beyond the current textarea-based flow; the implemented product today centers on pasted code snippets
- raw source code is stored in the database and explanation logs, so this app should be used with care around proprietary or sensitive code
- no automated tests are currently defined in `package.json`

## Why This Project Is Architecturally Interesting

CodeAI is a solid example of how to turn LLM output into real application data instead of transient chatbot text.

It demonstrates:

- how structured outputs bridge AI generation and relational persistence
- how auth, authorization, and per-user data ownership shape AI product design
- how idempotency reduces repeated model cost
- how Better Auth can provide a modern auth layer without outsourcing the entire data model
- how a normalized schema keeps future UI and analytics options open

In short, this project is an AI application, but it is also a conventional full-stack system: typed routes, relational storage, identity management, authorization boundaries, and user-specific read/write flows all matter just as much as the model call itself.
