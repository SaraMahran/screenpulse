# Screenpulse

A portfolio project for film and TV audience insights. This foundation provides two server rendered placeholder routes: `/` and `/app`. The public landing page, signed in explorer, Postgres and CMS will come later.

## Stack

TanStack Start, React 19, strict TypeScript, Vite, Tailwind CSS, shadcn/ui (Button, Card and Input), and Motion. ESLint, Prettier, Vitest and Testing Library provide the development checks.

## Run locally

Use Node.js 26 LTS and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

## Checks

```sh
npm run check
npm run build
```

`check` runs `typecheck`, `lint` (including Prettier) and `test` in order. Each script can also run independently. Vite generates route types during development and builds; keep the generated route tree in version control so checks work on a fresh checkout. CI runs `npm ci` and `npm run check` on pull requests and pushes to main.

Theme tokens live in `src/styles.css`, with automatic light and dark colors based on `prefers-color-scheme`. Agent conventions and folder guidance are in `CLAUDE.md`.
