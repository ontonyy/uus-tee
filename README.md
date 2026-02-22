# Uustee Website (React + TypeScript)

A responsive multilingual website built with React, TypeScript, and Vite, ready for GitHub Pages.

## Stack

- React 18
- TypeScript
- Vite
- React Router (`HashRouter`) for GitHub Pages-safe routing

## Features

- Home and Contact pages (`/` and `/contact` in app routing)
- Shared sticky header and footer
- EN / RU / ET language switcher with `localStorage` persistence
- Mobile hamburger menu
- Responsive contact form UI with translated success message
- Responsive Google Maps embed centered on `Loksa, Estonia`
- GitHub Actions validation + auto-deploy to Pages

## Project Structure

- `index.html` - Vite entry template
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `src/main.tsx`
- `src/App.tsx`
- `src/styles.css`
- `src/i18n.tsx`
- `src/constants.ts`
- `src/pages/HomePage.tsx`
- `src/pages/ContactPage.tsx`
- `src/components/ContactLinks.tsx`
- `src/hooks/usePageMeta.ts`
- `public/assets/img.png`
- `public/assets/favicon.svg`
- `.github/workflows/pages.yml`

## Run Locally

1. Install dependencies:
   - `npm install`
2. Start dev server:
   - `npm run dev`
3. Open the local URL shown by Vite.

## Build Locally

- `npm run typecheck`
- `npm run build`
- `npm run preview`

## Deploy to GitHub Pages

1. In GitHub repo settings, go to `Settings` -> `Pages`.
2. Set **Source** to `GitHub Actions`.
3. Push to `main` or `master`.
4. Workflow `.github/workflows/pages.yml` will:
   - install dependencies
   - run TypeScript typecheck
   - build production bundle
   - deploy `dist/` to GitHub Pages

## Update Hero Image

- Replace `public/assets/img.png`.

## Update Address and Map

- Edit `ADDRESS` in `src/constants.ts`.

## Update Translations

- Edit the `translations` object in `src/i18n.tsx`.

## Responsive Checklist

Test these sizes:
- Mobile: `320px`, `375px`, `430px`
- Tablet: `768px`, `834px`
- Desktop: `1024px`, `1280px`, `1440px`

Verify:
- No horizontal scroll.
- Header/nav/language switcher do not overlap content.
- Hamburger opens/closes without layout jump.
- Long RU strings do not break layout.
- Map remains responsive and contained.
- Language switching persists across refresh/navigation.
