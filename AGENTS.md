# KarperLab - Agent Instructions

## Projectdoel

**Primair doel**: Pilot-aanvragen (leads) genereren en vertrouwen opbouwen bij drukbezette vissers in Noord-Holland.

**Conversieflow**: Mailto-link naar `info@karperlab.nl` met vooraf ingevulde body. Geen formulier, geen backend.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Plain CSS (custom design system, geen Tailwind)
- Deployment: Netlify (auto-deploy via GitHub)
- Google Analytics 4 (geanonimiseerd, ID: G-ZFBF432BDJ)

## Agent Regels

### Commits & Pushes
- Werk in kleine, omkeerbare stappen.
- **Commit vaak** (logische deelstappen) voor een duidelijk overzicht van de voortgang.
- **Push spaarzaam**: Netlify start een nieuwe build (en verbruikt 'build minutes') bij elke `git push`. Verzamel commits en push pas als een logisch blok aan werk volledig lokaal is getest en klaar is voor deployment.
- Commit format:
  ```
  [STAP] Korte beschrijving
  ...
  ```

### Conversieflow
- **NOOIT** de mailto CTA's breken
- **NOOIT** de contactinfo wijzigen zonder expliciete toestemming
- CTA's moeten altijd werken: "Pilot aanvragen" → mailto met vooraf ingevulde body

### Dependencies
- Alleen toevoegen als echt nodig
- Geen secrets/tokens in code

### Testing
- Na elke significante wijziging: `npm run build` testen
- Voor deployment: lokaal testen met `npm run dev`
- Rapporteer eerlijk of iets getest is of niet

## Belangrijke Bestanden

- `/app/page.tsx`: Homepage met alle secties
- `/app/layout.tsx`: Root layout met metadata, GA, navbar, footer
- `/app/globals.css`: Complete design system (KarperLab palette + utilities)
- `/app/components/`: Alle herbruikbare componenten
- `/public/assets/img/`: Logo's en foto's

## SEO

- Metadata in `layout.tsx` (title, description, OG tags, Twitter Cards)
- Structured data (LocalBusiness + Service schema.org)
- Sitemap: `/app/sitemap.ts` (dynamisch)
- Robots.txt: `/public/robots.txt`
- Canonical URL: https://www.karperlab.nl

## Deployment

Netlify detecteert Next.js automatisch. Bij push naar main:
1. Netlify build draait `npm run build`
2. Output: `.next/` directory
3. CNAME blijft behouden (`karperlab.nl`)

Geen `netlify.toml` nodig tenzij auto-detect faalt.