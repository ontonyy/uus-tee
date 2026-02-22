# Uustee Static Website

A pure HTML/CSS/JS website ready for GitHub Pages, with:
- 2 pages: `index.html` and `contact.html`
- Shared sticky header/footer
- Mobile-safe hamburger navigation
- EN/RU/ET language switcher with `localStorage` persistence
- Responsive Google Maps embed
- Frontend-only contact form with translated success message

## Project Structure

- `index.html`
- `contact.html`
- `assets/img.png`
- `assets/favicon.svg`
- `css/styles.css`
- `js/i18n.js`
- `js/main.js`

## Run Locally

No build tools are needed.

1. Clone or download the repository.
2. Open `index.html` directly in your browser.
3. Navigate to `contact.html` from the site menu.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, go to `Settings` -> `Pages`.
3. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
4. Save and wait for deployment.
5. Your site will be available at your GitHub Pages URL.

## Change Hero Image

- The hero currently uses `assets/img.png`.
- Replace `assets/img.png` with your own image (keep the same file name), or update the image path in `index.html`.
- If the image is missing or broken, the hero fallback block appears automatically.

## Change Address and Map

The address is currently set as a placeholder (`Tallinn, Estonia`) because no exact address was provided.

- Edit `ADDRESS` in `js/main.js`.
- The same value updates both visible address text and the Google Maps iframe URL.

## Update Colors and Text

- Theme colors and spacing are defined in `css/styles.css` under `:root` CSS variables.
- Main content text is translated via `js/i18n.js`.

## Translation System (EN / RU / ET)

- All translations are stored in `js/i18n.js` in the `translations` object.
- Language buttons (`EN / RU / ET`) are in the header on both pages.
- Selected language persists using `localStorage` key: `uustee-language`.
- Translation attributes used:
  - `data-i18n` for visible text
  - `data-i18n-placeholder` for input placeholders
  - `data-i18n-aria` for `aria-label`
  - `data-i18n-title` for `title`
  - `data-i18n-alt` for image `alt`

## Responsive Checklist

Tested against these viewports:
- Mobile: `320px`, `375px`, `430px`
- Tablet: `768px`, `834px`
- Desktop: `1024px`, `1280px`, `1440px`

Checked:
- Header/nav/language switcher remain usable and do not overlap base page content.
- No horizontal scrolling (`overflow-x` safeguards + fluid media + safe paddings).
- Hamburger menu opens/closes without layout jump (overlay menu approach).
- RU text remains clean with longer strings (`overflow-wrap` and flexible grids).
- Language switching updates both pages and persists after refresh/navigation.
- Google Maps embed stays responsive (`width: 100%` + `aspect-ratio`).

## Notes

- Contact form is frontend-only and does not submit to a backend.
- Success message translations:
  - EN: `Thanks! We'll get back to you soon.`
  - RU: `Спасибо! Мы скоро свяжемся с вами.`
  - ET: `Aitäh! Võtame sinuga peagi ühendust.`
