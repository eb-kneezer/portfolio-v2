# Ebenezer Ogungbe's portfolio

A portfolio built with Astro, TypeScript, and Tailwind CSS. Astro renders the home page on the
server and bundles the scripts for the theme switch, avatar flip, and sticky booking link.

## Development

With Node.js 22.23.4 or newer, install dependencies with `pnpm install`, then run `pnpm dev`.

Use `pnpm check` for Astro and TypeScript diagnostics and `pnpm lint` for ESLint.

Run `pnpm build` to build the site and `pnpm start` to serve it. The server entry point is
`dist/server/entry.mjs`, and its assets are in `dist/client/`. Set `HOST` and `PORT` as needed.
Astro uses `https://ebenezer.work` for canonical and social sharing URLs.

The home page is in `src/pages/index.astro`. Experience, projects, and contact links are maintained
in `src/data/*.ts`.
