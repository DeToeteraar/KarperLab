# Copilot instructions for KarperLab

## Project overview
- KarperLab is a static, single‑page marketing site built as one HTML file with inline CSS and a small amount of inline JS in [KarperLab/index.html](KarperLab/index.html).
- Styling is custom, with Bootstrap 5.3.3 loaded from CDN for layout/components (no local build step) in [KarperLab/index.html](KarperLab/index.html).
- Assets (logos/photos) are referenced directly from assets/img and assets/img/photos; keep filenames and paths stable in [KarperLab/index.html](KarperLab/index.html).

## Structure & patterns
- Theme tokens live as CSS variables prefixed with `--kl-` in the `:root` block; adjust colors, spacing, and shadows there first in [KarperLab/index.html](KarperLab/index.html).
- Section layout uses `.kl-band` variants and card styles (`.kl-card`, `.kl-surface`) defined in the same inline `<style>` block in [KarperLab/index.html](KarperLab/index.html).
- CTA buttons consistently use the `.btn-accent` class; keep CTA styles aligned there in [KarperLab/index.html](KarperLab/index.html).
- In‑page navigation relies on section `id`s plus custom scroll offsets; update anchor ids and the `bindBottomAnchorScroll` list together in [KarperLab/index.html](KarperLab/index.html).
- `#pilot-cta` has a custom scroll‑margin in CSS and a larger bottom‑offset in JS; keep those paired if you rename or move that CTA in [KarperLab/index.html](KarperLab/index.html).
- The floating “back to top” button is rendered in HTML and toggled in JS; ensure the `#btn-scroll-top` id stays in sync with the script in [KarperLab/index.html](KarperLab/index.html).
- The footer year is injected via JS; keep the `#year` span id when editing the footer in [KarperLab/index.html](KarperLab/index.html).

## External integrations
- GA4 is loaded in the `<head>` with `gtag` config; keep the measurement id consistent if editing analytics in [KarperLab/index.html](KarperLab/index.html).
- SEO metadata is inline (canonical, robots, Open Graph, Twitter cards); update these together when changing page title/description in [KarperLab/index.html](KarperLab/index.html).

## Developer workflow
- No build or test tooling; edit [KarperLab/index.html](KarperLab/index.html) directly and open it in a browser for preview.
- Custom domain for static hosting is configured via [KarperLab/CNAME](KarperLab/CNAME) (GitHub Pages style).
