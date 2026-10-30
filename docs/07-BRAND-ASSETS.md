# BRAND ASSETS — Kebijakan Penggunaan Logo

**Keputusan identitas (30 Oktober 2026):** Situs publik **Sekolah Tarbiyah Sunnah Selacau** menggunakan **logo Yayasan Tarbiyah Sunnah** sebagai logo utama website. Tiga unit tetap memakai logo resmi mereka masing-masing.

## Asset resmi (jangan digambar ulang)

| Lokasi file | Pemilik identitas | Penempatan |
|---|---|---|
| `assets/logo-yayasan-tarbiyah-sunnah.png` | Yayasan Tarbiyah Sunnah | Header website, footer, identitas situs, dan metadata/OG jika komposisi sesuai |
| `assets/logo-tk-tarbiyah-sunnah.png` | TK Tarbiyah Sunnah | Kartu unit TK, hero atau bagian profil TK, halaman `/tk/` |
| `assets/logo-kuttab-tarbiyah-sunnah.png` | Kuttab Tarbiyah Sunnah | Kartu unit Kuttab, hero atau profil Kuttab, halaman `/kuttab/` |
| `assets/logo-madrasah-tarbiyah-sunnah.png` | Madrasah Tarbiyah Sunnah | Kartu Madrasah, hero/profil Madrasah, halaman `/madrasah/`, subprogram TPQ/TQA jika relevan |

## Hierarki brand

- **Nama website:** Sekolah Tarbiyah Sunnah Selacau. **Logo utama:** Yayasan Tarbiyah Sunnah (bukan logo baru bernama Sekolah Tarbiyah Sunnah).
- **Identitas tiga unit** tetap terpisah. Jangan ganti semua dengan logo yayasan di tiap kartu; jangan jadikan logo Madrasah sebagai logo website.
- Header desktop dan mobile: logo yayasan + nama teks website jika perlu untuk menjelaskan cakupan; jangan mengecilkan wordmark logo hingga tidak terbaca. Footer: logo yayasan, informasi situs, tautan ke tiga unit.
- Homepage section "Unit Pendidikan": tampilkan ketiga logo resmi dengan ruang proporsional. Gunakan `object-fit: contain`, bukan `cover` dan tanpa memotong teks/logo.
- Halaman unit: logo unit ditampilkan lebih menonjol, logo yayasan tetap berada di global header.
- Favicon: gunakan simbol dari aset **resmi** hanya bila tersedia sebagai file resmi atau diizinkan untuk diturunkan; jangan otomatis meng-crop wordmark menjadi logo baru. Sementara gunakan favicon sederhana yang disetujui.

## Integritas visual

1. **Jangan** mengubah bentuk, proporsi, tipografi, simbol, atau susunan warna logo.
2. **Jangan** menyatukan empat logo menjadi satu logo gabungan; **jangan** memproduksi ulang logo melalui AI/generative image.
3. Jaga area aman dan keterbacaan. Gambar PNG asli disediakan; ekspor WebP/AVIF untuk rendering jika kualitas dan transparansi terjaga, tetapi simpan original tanpa perubahan.
4. Beri `alt` sesuai nama institusi. Bila teks nama persis sama berada berdampingan dan logo hanya dekoratif, `alt=""` dapat digunakan untuk menghindari duplikasi pembacaan.
5. Background logo harus menghasilkan kontras yang baik. Logo gelap di atas warm white/putih; jangan menempatkan logo sembarang di background hijau gelap.
6. Warna desain (`#446832`, `#F48120`, dll.) adalah **token pendamping**, bukan pengganti warna asli gambar logo; harmonisasikan setelah inspeksi asset nyata.
7. Identitas resmi logo utama **tidak berarti** situs mencakup seluruh program YTS: konten situs hanya TK, Kuttab, Madrasah Selacau.

## QA brand wajib

- Header terlihat baik di desktop 1440px dan mobile 360px.
- Keempat logo tidak pecah dan tidak terpotong.
- Ketiga kartu unit menampilkan logo unit yang benar.
- Halaman detail menunjukkan logo unit yang benar.
- Footer menggunakan logo yayasan.
- Tidak ada file logo placeholder, logo generatif, atau logo gabungan.
