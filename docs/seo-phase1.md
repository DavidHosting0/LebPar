# LebPar Phase 1 — Competitive SEO Analysis & Overbid Strategy

**Date:** 2026-07-23  
**Domain:** LebPar.com (Jounieh, Lebanon)  
**Goal:** Outrank WP/Divi tandem operators on commercial + trust queries for 2026.

## Competitor snapshot

| Factor | paraglidinglb.com | paragliding961.com | U-Fly / others | LebPar target |
|--------|-------------------|--------------------|----------------|---------------|
| Stack | WordPress + Divi/Elementor | WP / builder | Mixed / OTA-heavy | Next.js 16 RSC + Turbopack |
| IA depth | Thin (home, prices, contact, ~2 posts) | Thin + empty blog | Variable | Money + trust + location guides |
| ALT text | Often generic | Weak | Variable | Keyword-descriptive, mandatory |
| Schema | Place/Org only | Partial FAQ | Variable | LocalBusiness + Offer + FAQ + Review + Person |
| i18n | EN only | EN only | Mostly EN | EN live; AR/FR/DE hreflang-ready |
| Sitemap | Reported errors (500) | Unknown | — | App Router `sitemap.ts` |
| Trust | APPI claims, thin pilot roster | Named pilot | Named pilots | Full bios + legal tandem / acro-ban clarity |
| Gaps | No dedicated sunset/gift URLs | Empty blog | Club Thermique domain issues | Own `/flights/sunset`, `/gift-cards` |

**Market context:** Acrobatic paragliding banned nationally after fatal incidents. Licensed tandem + transparent safety = ranking *and* conversion differentiator.

**Price band:** ~$107–$150 USD for standard tandem; $120 common inclusion with video.

## Keyword map (MVP)

| Intent | Primary keywords | Landing URL |
|--------|------------------|-------------|
| Commercial | paragliding Lebanon, tandem paragliding Jounieh | `/en`, `/en/flights/tandem` |
| Brand | LebPar, LebPar Jounieh, LebPar paragliding | Home, About, NAP |
| Money | paragliding prices Lebanon, sunset paragliding Jounieh, gift voucher paragliding Lebanon | `/flights`, `/flights/sunset`, `/gift-cards` |
| Trust | is paragliding safe Lebanon, certified tandem pilots Jounieh | `/safety`, `/pilots` |
| Local | paragliding Harissa, Ghosta takeoff, Jounieh Bay flight | `/locations/*` |
| Conversion | book paragliding Lebanon WhatsApp | `/booking`, `/contact` |

## Content gap → overbid

1. **Performance** — Drop Divi bloat; optimize images; CWV-first layout.
2. **Schema completeness** — Offers, FAQPage, AggregateRating, Person for pilots.
3. **Money URLs** — Dedicated sunset + gift voucher pages (largely unowned).
4. **E-E-A-T** — Named pilots, dated gallery, safety protocol, no fake certs.
5. **i18n** — hreflang for AR/FR/DE before competitors localize.
6. **Internal linking** — Flights ↔ locations ↔ safety ↔ booking on every money page.
7. **Stable sitemap/robots** — Avoid competitor sitemap failures.

## E-E-A-T checklist

- **Experience:** Pilot bios, dated flight photos (replace SVG placeholders).
- **Expertise:** Safety abort rules, legal tandem-only stance.
- **Authority:** Consistent NAP, LocalBusiness JSON-LD, GBP (post-launch).
- **Trust:** Real reviews only; TODO license/insurance until verified.

## Implementation note

This analysis drives the MVP in this repo: EN content, WhatsApp booking, money/trust IA, and locale scaffolding.
