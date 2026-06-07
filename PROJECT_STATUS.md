# Project Status

## Summary

This repo contains the DevIT marketing site and blog.

Current architecture:

- Astro static site
- CI in GitHub Actions
- Deployment from this repository to GitHub Pages
- Custom domain: `test.dev-it.dev`

## Current baseline

- `main` is protected
- PRs are required for changes
- Required status check: `validate`
- PR validation runs:
  - `npm ci`
  - `npm run check`
  - `npm run build`
- Deploy runs on push to `main`

## Local workflow

```bash
nvm use
npm ci
npm run check
npm run build
```

Use `npm run dev` for local development.

## Important repo notes

- Blog content lives in `src/content/blog`
- Astro content schema is in `src/content/config.ts`
- There is still duplicate blog content under `content/blog`, which is outside the active Astro content path
- The contact page is still a placeholder flow and does not submit anywhere real

## Recommended next tasks

1. Make the contact page real: issue `#29`
2. Remove duplicate blog content outside `src/content/blog`: issue `#30`
3. Review dependency/security backlog intentionally instead of using `npm audit` as a blocking PR gate: issue `#31`
4. Continue tightening content quality as the blog grows

## Done criteria

For normal repo work, treat the task as done when:

1. the change is on a pull request
2. the PR pipeline is passing
