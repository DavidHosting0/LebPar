# LebPar

SEO-first tandem paragliding website for **LebPar.com** (Jounieh, Lebanon).

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- next-intl (EN primary; AR/FR/DE routing + stubs)
- Metadata API, dynamic OG image, JSON-LD, sitemap, robots

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en`).

## Replace before launch

Edit `src/content/site.ts` (NAP, prices, pilots) and swap SVGs in `public/media/` for real photos.

See `docs/seo-phase1.md` and `docs/launch-checklist.md`.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
