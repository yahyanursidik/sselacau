# Technical Architecture — Astro 7.4.4 + Netlify

## Principle
Static-first, serverless-free where possible. Website informasi publik, **bukan** aplikasi sekolah. Jangan membangun database untuk MVP.

## Stack
- Astro 7.4.4 (versi target yang diminta; pastikan lockfile sesuai)
- TypeScript strict
- Astro Content Collections + Markdown/MDX
- CSS variables + scoped CSS atau Tailwind bila benar-benar membantu
- Astro image pipeline, WebP/AVIF bila cocok
- Netlify deployment, GitHub repository
- Konten editorial: Markdown/MDX; CMS hanya jika dibutuhkan tim editor, jangan overengineering
- Anti-Slop agent skill pada tahap UI/copy/code review

## Suggested repository
```
public/
  favicon.svg
src/
  components/
    layout/ Header.astro Footer.astro
    ui/ Button.astro ProgramCard.astro
    content/ ArticleCard.astro
  content/
    news/
    activities/
    faqs/
  layouts/
    BaseLayout.astro
    ArticleLayout.astro
  pages/
    index.astro
    tentang.astro
    tk/index.astro
    tk/kurikulum.astro
    kuttab/index.astro
    kuttab/kurikulum.astro
    madrasah/index.astro
    madrasah/tpq.astro
    madrasah/tqa.astro
    kegiatan/index.astro
    berita/index.astro
    galeri.astro
    pendaftaran.astro
    faq.astro
    kontak.astro
  styles/global.css
  config/site.ts
astro.config.mjs
netlify.toml
AGENTS.md
```
Routes are conceptual; implement Astro file naming correctly and test builds. Dynamic `[slug]` routes require getStaticPaths for SSG.

## Single-source config
Store domain, contact numbers, socials, verified address, maps URL, current school year, enrollment status per unit as config/data; avoid hardcoding across pages. Domain `kuttabts.sch.id` is a *legacy proposal* not assumed final.

## Content schema
- `news`: title, slug, date, unit (tk/kuttab/madrasah), excerpt, image, published.
- `activities`: title, slug, date, unit, description, cover, gallery, published.
- `faqs`: question, answer, unit/global, order.
- `programs` static config: label, officialName, url, description, verified, enrollmentOpen, contactUrl.

## Deployment
Static output `dist`; Node.js compatible with Astro 7.4.4; set version explicitly in `package.json`/`.nvmrc` after checking official requirements; CI runs `astro check`, build, link checks and asset checks. Netlify deploy with preview builds; do not publish placeholder phone numbers or fake URLs.

## SEO
Title/descriptions unique, canonical only after final domain, OG images, sitemap and robots. Structured data only from verified facts: institution name, address and official channels.

## Security and privacy
No personal data collection in MVP, except external contact endpoints under their own terms. Privacy notice for analytics/forms if enabled. Prevent publishing personal identifiers of children.

## Acceptance
`npm run build` succeeds; no uncaught warnings; mobile navigation accessible; images sized; hero not lazy-loaded; no render-blocking third-party; sitemap and canonical correct; every CTA has a verified destination.

## Asset manifest logo (wajib)
Aset sumber PNG tersedia di folder `assets/` paket brief. Salin ke `public/brand/` atau pipeline `src/assets/brand/` sesuai keputusan optimasi tanpa mengubah proporsi. Gunakan mapping eksplisit:

```ts
export const brandAssets = {
  site: "/brand/logo-yayasan-tarbiyah-sunnah.png",
  tk: "/brand/logo-tk-tarbiyah-sunnah.png",
  kuttab: "/brand/logo-kuttab-tarbiyah-sunnah.png",
  madrasah: "/brand/logo-madrasah-tarbiyah-sunnah.png",
} as const;
```

Jika memakai `public/brand`, jangan lupa menyalin file di atas persis. Header/footer menggunakan `site`; kartu dan halaman unit menggunakan key masing-masing.

## Asset manifest logo (wajib)
Aset sumber PNG tersedia di folder `assets/` paket brief. Salin ke `public/brand/` atau pipeline `src/assets/brand/` sesuai keputusan optimasi tanpa mengubah proporsi. Gunakan mapping eksplisit:

```ts
export const brandAssets = {
  site: "/brand/logo-yayasan-tarbiyah-sunnah.png",
  tk: "/brand/logo-tk-tarbiyah-sunnah.png",
  kuttab: "/brand/logo-kuttab-tarbiyah-sunnah.png",
  madrasah: "/brand/logo-madrasah-tarbiyah-sunnah.png",
} as const;
```

Jika memakai `public/brand`, jangan lupa menyalin file di atas persis. Header/footer menggunakan `site`; kartu dan halaman unit menggunakan key masing-masing.
