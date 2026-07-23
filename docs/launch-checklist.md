# LebPar Launch Checklist & Phase 3+ Roadmap

## Pre-launch (must complete)

### Business data (`src/content/site.ts`)

- [ ] Replace phone / WhatsApp E.164 and display numbers
- [ ] Confirm email `hello@lebpar.com` (or update)
- [ ] Exact street address + geo coordinates
- [ ] Final USD prices for tandem, premium, sunset, add-ons, tours, vouchers
- [ ] Real pilot names, bios, certifications, photos
- [ ] Verified license + insurance wording (never invent claims)
- [ ] Replace sample reviews with Google/TripAdvisor quotes + live counts

### Media (`public/media/`)

- [ ] Replace hero SVG with real edge-to-edge flight photo (WebP/AVIF)
- [ ] Replace gallery SVGs with dated originals; keep descriptive filenames + ALTs
- [ ] Pilot portraits
- [ ] Favicon / app icons

### Technical SEO

- [ ] Point domain LebPar.com → Vercel
- [ ] Verify `metadataBase` / `siteConfig.url`
- [ ] Google Search Console + submit `sitemap.xml`
- [ ] Rich Results Test on home, flights, FAQ, pilots
- [ ] Lighthouse mobile: LCP / CLS / INP targets green
- [ ] Spot-check hreflang + canonicals per locale
- [ ] ALT audit: zero empty/generic ALTs

### Conversion

- [ ] Test booking form → WhatsApp deep link on mobile + desktop
- [ ] Optional: set `BOOKING_WEBHOOK_URL` for CRM/email
- [ ] Sticky WhatsApp number correct
- [ ] Google Business Profile NAP matches site

### Legal / ops

- [ ] Weather cancellation / refund copy approved
- [ ] Weight/age policy confirmed with pilots
- [ ] Privacy note if collecting emails via webhook

---

## Phase 3+ (post-MVP)

1. Full AR / FR / DE page translations (not stubs)
2. MDX blog: seasonal guides, safety updates, itineraries
3. Equipment + weather deep pages
4. Detailed 1-week / 2-week tour itineraries
5. Optional calendar + payment (Stripe)
6. Review pipeline (auto-ask after flight)
7. Link building: travel blogs, OTAs with owned landing pages
8. Quarterly content refresh + Core Web Vitals re-check

## QA commands

```bash
npm run build
npm run lint
npm run start
# Then visit /en, /en/flights/sunset, /en/gift-cards, /en/safety, /sitemap.xml
```
