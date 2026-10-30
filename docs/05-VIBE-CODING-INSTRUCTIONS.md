# Vibe Coding Instructions — Sekolah Tarbiyah Sunnah Selacau

> Paste the prompt below to your coding agent, along with all Markdown files. Build in small verified iterations.

## MASTER PROMPT

You are a senior Astro engineer, information architect, UX designer, and accessibility-minded frontend developer. Build a public-facing, static-first school website named **Sekolah Tarbiyah Sunnah Selacau**, serving **TK Tarbiyah Sunnah**, **Kuttab Tarbiyah Sunnah (setingkat SD)**, and **Madrasah Tarbiyah Sunnah (TPQ–TQA)** in Selacau, Batujajar, Kabupaten Bandung Barat, Indonesia.

Read README.md, `docs/01-PRD.md`, `docs/02-INFORMATION-ARCHITECTURE.md`, `docs/03-DESIGN-SYSTEM.md`, `docs/04-TECHNICAL-ARCHITECTURE.md`, `docs/06-CONTENT-INVENTORY.md`, `docs/07-BRAND-ASSETS.md` and `AGENTS.md` before touching code. Use the supplied **Yayasan Tarbiyah Sunnah** logo as the global website logo in header/footer. Use the original TK/Kuttab/Madrasah logos on each entry card and unit page. Preserve all original marks without recomposing them. All four files are in `assets/`. The site is **not** the overall YTS portal and should not subsume TS Lab School, TSL Kids, or other YTS units.

### Non-negotiable technology
Astro **7.4.4**, TypeScript strict, Netlify, content collections, static-first. No heavy SPA framework for static elements. Optimize images and metadata. Use responsive semantic HTML.

### Boundaries
NO CRM, SIA, LMS, payment, accounts, registrant database, donor management, jamaah management, dashboards, or live chat bot. Pendaftaran is a public information/CTA page only.

### Truthfulness
Kuttab KOSP 2026/2027 is the source for *Kuttab* facts only. Never port Kuttab curriculum into TK or Madrasah. Never invent TPQ/TQA age ranges, teacher names, methods, schedules, fees, enrollment quotas, legal status or contacts. Use a `NEEDS_VERIFICATION` checklist in source files and keep unverified claims unpublished. Do not invent photos or label stock photos as actual school assets.

### Visual direction
Follow DESIGN.md: restrained green `#446832`, orange `#F48120`, burnt-orange `#CA6323`, yellow `#E8C339`, warm-white `#FCFBF7`, charcoal `#20251D`. Calm editorial school site, photos when approved, typography and spacing, mobile first.

### Anti-Slop mandate
Install/refer to https://github.com/miqdadbadjuber/anti-slop (see releases). Use its relevant skills/rules throughout UI, content, and code. Run its Delivery Gate before declaring a page done. Avoid fake metrics, glowing badges, repetitive card grids, gratuitous effects, AI startup cliches and irrelevant Islamic ornamentation. Anti-Slop **filters**; DESIGN.md supplies creative direction.

### Build order
1. Confirm canonical domain remains pending; set placeholder config and disable canonical until decided.
2. Import all four supplied logos; create Astro structure, tokens, layout, site header/footer with Yayasan logo and mobile navigation.
3. Create homepage with real content/clearly marked placeholders (not publishable).
4. Create unit pages and homepage entries using the respective official TK/Kuttab/Madrasah logos with distinct content and no invented claims.
5. Add curriculum detail for Kuttab (verified KOSP content); TK/TPQ/TQA pages only with verified data.
6. Build activities, news and admission information, FAQ, contact.
7. Add responsive refinements, keyboard access, image optimization, metadata, sitemap.
8. Conduct Anti-Slop Delivery Gate, accessibility check, link check, content verification and Netlify preview review.

### Completion report
Provide routes implemented, data requiring verification, build/test results, known issues and a concise Anti-Slop gate report. Do not claim Lighthouse scores without measurements.

## Useful install command
```bash
npx antislop-ai
```
Choose project scope and the correct agent. For later update consult the upstream README (currently documents `npx antislop-ai --update`).

### Logo acceptance gate
Verify on mobile and desktop: Yayasan logo in the global header and footer; TK logo on TK entry/page, Kuttab logo on Kuttab entry/page, Madrasah logo on Madrasah entry/page. Never crop, stretch, recolor or regenerate logos.
