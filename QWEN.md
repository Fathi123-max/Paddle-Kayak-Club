# Paddle Kayak Club - Project Overview

## Project Overview

This is a **pnpm workspace monorepo** for the Paddle Kayak Club application, built with TypeScript. The project follows a modern architecture with separated concerns between API services, shared libraries, and frontend applications.

### Technology Stack

- **Monorepo Tool**: pnpm workspaces
- **Runtime**: Node.js 24
- **Language**: TypeScript 5.9 (with composite project references)
- **API Framework**: Express 5
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod (v3) + drizzle-zod
- **API Codegen**: Orval (from OpenAPI 3.1 spec)
- **Frontend**: React 19 with Vite, Tailwind CSS 4, shadcn/ui components
- **State Management**: TanStack React Query
- **Build Tools**: esbuild (CJS bundles), Vite (frontend)

## Project Structure

```
Paddle-Kayak-Club/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API backend
│   ├── mockup-sandbox/     # UI component sandbox (Vite + React)
│   └── tsf-dxb/            # Main frontend application (Vite + React)
├── lib/                    # Shared libraries
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-spec/           # OpenAPI spec + Orval config
│   ├── api-zod/            # Generated Zod schemas
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
├── docs/                   # Documentation
├── package.json            # Root workspace config
├── pnpm-workspace.yaml     # Workspace definition
├── tsconfig.base.json      # Shared TypeScript config
└── tsconfig.json           # Project references
```

## Building and Running

### Prerequisites

- Node.js 24
- pnpm (required - other package managers are blocked by preinstall script)
- PostgreSQL database (DATABASE_URL environment variable required)

### Installation

```bash
pnpm install
```

### Type Checking

Always run type checking from the root (uses TypeScript project references):

```bash
pnpm run typecheck        # Full typecheck with composite projects
pnpm run typecheck:libs   # Typecheck only lib packages
```

### Building

```bash
pnpm run build            # Typechecks first, then builds all packages
```

### Running Applications

**API Server (Development):**
```bash
pnpm --filter @workspace/api-server run dev
```

**API Server (Production):**
```bash
pnpm --filter @workspace/api-server run build
pnpm --filter @workspace/api-server run start
```

**Frontend Applications:**
```bash
# Mockup Sandbox
pnpm --filter @workspace/mockup-sandbox run dev

# Main Frontend (tsf-dxb)
pnpm --filter @workspace/tsf-dxb run dev
```

### Running Scripts

```bash
pnpm --filter @workspace/scripts run <script-name>
```

### Database Operations

```bash
# Push schema to database (development)
pnpm --filter @workspace/db run push

# Force push (use with caution)
pnpm --filter @workspace/db run push-force
```

### Code Generation

Regenerate React Query hooks and Zod schemas from OpenAPI spec:

```bash
pnpm --filter @workspace/api-spec run codegen
```

## Package Details

### `@workspace/api-server` (artifacts/api-server)

Express 5 API server with:
- CORS enabled
- JSON/urlencoded body parsing
- Pino logging
- Routes at `/api` prefix
- Health endpoint at `/api/healthz`

**Dependencies**: `@workspace/db`, `@workspace/api-zod`, express, cors, pino

### `@workspace/db` (lib/db)

Database layer with Drizzle ORM:
- PostgreSQL connection pool
- Schema definitions with `drizzle-zod` insert schemas
- Exports: `.` (pool, db, schema), `./schema` (schema only)

**Note**: The schema is currently empty. Add models by creating files in `src/schema/`.

### `@workspace/api-spec` (lib/api-spec)

Owns the OpenAPI 3.1 specification:
- `openapi.yaml` - API specification
- `orval.config.ts` - Codegen configuration
- Generates output to `api-client-react` and `api-zod`

### `@workspace/api-zod` (lib/api-zod)

Generated Zod schemas from OpenAPI spec for request/response validation.

### `@workspace/api-client-react` (lib/api-client-react)

Generated React Query hooks and fetch client from OpenAPI spec.

### `@workspace/mockup-sandbox` (artifacts/mockup-sandbox)

UI component sandbox with shadcn/ui components for prototyping.

### `@workspace/tsf-dxb` (artifacts/tsf-dxb)

Main frontend application with:
- React 19
- Vite + Tailwind CSS 4
- shadcn/ui components
- TanStack React Query
- Wouter for routing
- Integration with generated API client

### `@workspace/scripts` (scripts)

Utility TypeScript scripts. Each `.ts` file in `src/` has a corresponding npm script.

## TypeScript Configuration

### Project References

The project uses TypeScript composite projects with `tsc --build`:

- Root `tsconfig.json` lists all lib packages as references
- `pnpm run typecheck` builds the full dependency graph
- Running `tsc` inside individual packages may fail if dependencies aren't built

### Key Configuration (tsconfig.base.json)

- `isolatedModules: true`
- `moduleResolution: "bundler"`
- `target: "es2022"`
- Strict null checks enabled
- No implicit any/this

## Development Conventions

### Code Style

- **Formatting**: Prettier configured
- **TypeScript**: Strict mode with composite projects
- **Imports**: Use workspace protocol (`workspace:*`) for internal packages

### Architecture Patterns

- **API-First**: OpenAPI spec drives code generation for client and validation
- **Type Safety**: Zod schemas for runtime validation, TypeScript for compile-time
- **Separation of Concerns**: 
  - `lib/` for shared, reusable code
  - `artifacts/` for deployable applications
  - `scripts/` for utilities

### Database Schema

When adding database models:
1. Create a new file in `lib/db/src/schema/<modelname>.ts`
2. Define Drizzle table with `pgTable`
3. Create insert schema with `createInsertSchema` from drizzle-zod
4. Export from `schema/index.ts`

Example:
```typescript
import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
});

export const insertPostSchema = createInsertSchema(postsTable).omit({ id: true });
export type InsertPost = z.infer<typeof insertPostSchema>;
export type Post = typeof postsTable.$inferSelect;
```

### Adding API Endpoints

1. Add endpoint to `lib/api-spec/openapi.yaml`
2. Run codegen: `pnpm --filter @workspace/api-spec run codegen`
3. Use generated Zod schemas in route handlers
4. Use generated React hooks in frontend components

## Environment Variables

- `PORT` - Required for API server
- `DATABASE_URL` - Required for database connections (automatically provided in Replit)

## Testing

No test framework is currently configured. Add testing as needed based on requirements.

## Git Workflow

This project uses git worktrees (see `.worktrees/` directory). Standard git workflows apply.
