# DevIT Web

Marketing site and blog for DevIT, built with Astro and deployed to GitHub Pages.

## Stack

- Astro 5
- Tailwind CSS 4
- GitHub Actions
- GitHub Pages with custom domain `test.dev-it.dev`

## Repository role

This repository is the source repo, CI repo, and hosting repo.

- Pull requests target `main`
- `main` is protected
- The required PR check is `validate`
- GitHub Pages deploy runs from this repository after merges to `main`

## Local setup

Use the Node version from `.nvmrc`.

```bash
nvm use
npm ci
```

## Common commands

```bash
npm run dev
npm run check
npm run build
npm run preview
```

What they do:

- `npm run dev`: local development server
- `npm run check`: Astro content and type validation
- `npm run build`: production static build
- `npm run preview`: preview the production build locally

## Content

Blog posts live in `src/content/blog`.

The blog collection is validated through Astro content schema in `src/content/config.ts`. Current expected frontmatter fields:

- `title`
- `description`
- `date`
- `tags`

## CI and deployment

PR validation is defined in [.github/workflows/ci.yml](./.github/workflows/ci.yml):

- `npm ci`
- `npm run check`
- `npm run build`

Deployment is defined in [.github/workflows/deploy.yml](./.github/workflows/deploy.yml):

- runs on push to `main`
- builds the site
- publishes `dist/` to GitHub Pages

## Working norms

- Do not push directly to `main`
- Open a PR for every change
- Treat work as done when the PR is submitted and CI is passing
- If a feature uncovers a blocking or closely related bug, fix it in the same change
- Track unrelated bugs as GitHub issues

## Current follow-up work

See [PROJECT_STATUS.md](./PROJECT_STATUS.md) for the current project state and the next recommended tasks.
