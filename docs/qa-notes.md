# MVP QA notes (2026-07-23)

## Automated

- `npm run build` — success (73 static locale pages + sitemap/robots)
- `npm run lint` — success

## Manual checks before go-live

1. Open `/en` — hero, flights strip, FAQ schema in view-source
2. Open `/en/flights/sunset` + `/en/gift-cards` — money pages load
3. Submit `/en/booking` — WhatsApp opens with prefilled message (update number first)
4. Switch locale EN→AR — RTL + stub banner
5. `/sitemap.xml` and `/robots.txt` reachable
6. Validate JSON-LD with Google Rich Results Test after real NAP/reviews

## ALT / media

All current images are descriptive SVG placeholders under `public/media/` with keyword ALTs in content. Replace with real photos; keep ALT strings in `gallery.ts` / pilot records.
