# Sekolah Tarbiyah Sunnah Selacau — Website Brief

**Status:** Brief implementasi v2.1 — 30 Oktober 2026  
**Website:** Sekolah Tarbiyah Sunnah Selacau  
**Unit:** TK Tarbiyah Sunnah · Kuttab Tarbiyah Sunnah (setingkat SD) · Madrasah Tarbiyah Sunnah (TPQ–TQA)  
**Lokasi:** Selacau, Batujajar, Kabupaten Bandung Barat  
**Target stack:** Astro 7.4.4 · TypeScript strict · Netlify · static-first

## Dokumen
1. `docs/01-PRD.md` — tujuan produk, sasaran, batasan, requirements, kriteria selesai.
2. `docs/02-INFORMATION-ARCHITECTURE.md` — sitemap, navigasi, struktur tiap unit, konten.
3. `docs/03-DESIGN-SYSTEM.md` — warna logo, tipografi, UI, photography, anti-slop.
4. `docs/04-TECHNICAL-ARCHITECTURE.md` — Astro, routes, konten, deployment, SEO, performa.
5. `docs/05-VIBE-CODING-INSTRUCTIONS.md` — instruksi siap tempel untuk AI coding agent.
6. `docs/06-CONTENT-INVENTORY.md` — data valid, placeholder, data unit yang harus diverifikasi.
7. `docs/07-BRAND-ASSETS.md` — penggunaan logo yayasan dan ketiga unit.
8. `AGENTS.md` — instruksi ringkas yang dibaca coding agent.
9. `docs/09-DESIGN-DECISIONS.md` — Design Read, dial dan alasan keputusan visual (Anti-Slop R-31).

Referensi kurikulum: `Kurikulum Kuttab TS REV..pdf` (2026/2027), diberikan pengguna. Empat **logo resmi yang diberikan pengguna** disertakan di `assets/`; baca `docs/07-BRAND-ASSETS.md` sebelum implementasi.

## Catatan identitas
Website ini **bukan** website seluruh Yayasan Tarbiyah Sunnah (YTS). YTS memiliki unit pendidikan lainnya seperti TS Lab School dan TSL Kids. Jangan mengklaim website ini menaungi semua layanan pendidikan YTS.

## Domain
`kuttabts.sch.id` adalah domain yang dibahas sebelumnya, **belum diputuskan** sebagai domain payung. Pilih domain final sebelum mengunci canonical URL, metadata dan konfigurasi Netlify. Jangan mengarang status ketersediaan domain.

## Sumber desain
https://github.com/miqdadbadjuber/anti-slop/releases
https://github.com/miqdadbadjuber/anti-slop

## Hierarki identitas (keputusan final)
Logo **Yayasan Tarbiyah Sunnah** sebagai logo website di header dan footer. Logo **TK**, **Kuttab** dan **Madrasah** wajib terlihat pada kartu/pintu masuk program dan halaman unit masing-masing. Jangan membuat logo payung baru.

## Hierarki identitas (keputusan final)
Logo **Yayasan Tarbiyah Sunnah** sebagai logo website di header dan footer. Logo **TK**, **Kuttab** dan **Madrasah** wajib terlihat pada kartu/pintu masuk program dan halaman unit masing-masing. Jangan membuat logo payung baru.

## Pengembangan
Butuh Node.js ≥ 22.23.4 (Netlify memakai Node 24, lihat `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build ke dist/
```

- Data situs (kontak, status pendaftaran, unit): `src/config/site.ts`. Nilai `null` = belum terverifikasi.
- Logo resmi: `src/assets/brand/` (salinan persis `assets/`), dioptimasi otomatis ke WebP saat build.
- Berita, kegiatan, FAQ: `src/content/{news,activities,faqs}/`. Hanya entri `published: true` yang tampil.
- Konten belum terverifikasi ditandai komponen `Pending` (`data-needs-verification`). Jangan terbitkan halaman yang masih memuatnya.
- Selama `site.prerelease = true` atau `PUBLIC_SITE_URL` kosong, halaman `noindex` dan canonical/sitemap nonaktif.
