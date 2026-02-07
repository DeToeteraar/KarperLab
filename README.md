# KarperLab

Persoonlijke karpercoaching voor drukbezette vissers in Noord-Holland.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Plain CSS (custom design system)
- **Deployment**: Netlify
- **Analytics**: Google Analytics 4 (geanonimiseerd)

## Lokaal Draaien

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Bouwen voor Productie

```bash
# Build productie-versie
npm run build

# Start productie server lokaal
npm start
```

## Projectstructuur

```
/app
  /components      # React componenten (Navbar, Hero, Footer, etc.)
  globals.css      # Globale styling + KarperLab design system
  layout.tsx       # Root layout met metadata en SEO
  page.tsx         # Homepage
  sitemap.ts       # Dynamische sitemap
/public
  /assets/img      # Logo's en foto's
  robots.txt       # SEO robots file
```

## Deployment

De site wordt automatisch gedeployed via Netlify bij elke push naar de main branch.

## Projectdoel

**Leads genereren** via pilot-aanvragen (mailto CTA) en **vertrouwen opbouwen** bij drukbezette vissers in Noord-Holland.