# Information Architecture & Content Map

## Navigasi utama (desktop)
- Beranda `/`
- Tentang Sekolah `/tentang/`
- Unit Pendidikan (dropdown): `/tk/`, `/kuttab/`, `/madrasah/`
- Kehidupan Sekolah `/kegiatan/` dan `/galeri/`
- Berita & Pengumuman `/berita/`
- Pendaftaran `/pendaftaran/`
- Kontak `/kontak/`

Footer: alamat, kontak, halaman legal/kebijakan privasi, identitas YTS sebagai penyelenggara jika disetujui, tautan unit lain hanya jika relevan. Hindari menu bersarang terlalu dalam pada mobile.

## Sitemap v1
```
/
/tentang/
/tk/
/tk/kurikulum/
/kuttab/
/kuttab/kurikulum/
/madrasah/
/madrasah/tpq/
/madrasah/tqa/
/kegiatan/
/kegiatan/[slug]/
/galeri/
/berita/
/berita/[slug]/
/pendaftaran/
/faq/
/kontak/
/kebijakan-privasi/
/404
```
Halaman detail unit yang belum punya data valid bisa ditahan dari publikasi hingga lengkap; jangan tampilkan halaman kosong dengan klaim fiktif.

## Homepage
1. **Header global:** logo Yayasan Tarbiyah Sunnah sebagai identitas website, bersama nama Sekolah Tarbiyah Sunnah Selacau.
2. **Hero:** `Sekolah Tarbiyah Sunnah Selacau` dengan descriptor `TK · Kuttab · Madrasah`; CTA `Kenali Unit Pendidikan` dan `Informasi Pendaftaran`.
3. **Tiga pintu program:** TK, Kuttab, Madrasah, masing-masing memakai **logo unit resmi**, teks singkat, dan CTA menuju unit. Foto relevan opsional, bukan pengganti logo.
3. **Arah pendidikan:** aqidah, Al-Qur'an, adab, ilmu dan kemandirian; jangan menyatukan target kurikulum spesifik semua unit.
4. **Belajar & bertumbuh:** 2–3 foto asli suasana dan kalimat faktual.
5. **Kegiatan terbaru:** filter unit / label unit; jangan mengklaim kegiatan seluruh unit jika dokumentasi hanya Kuttab.
6. **Pendaftaran:** opsi menuju masing-masing program; tampilkan status tanpa mengarang kuota/biaya.
7. **Lokasi & kontak:** lokasi Selacau; peta/link setelah titik tepat diverifikasi.

## Halaman TK `/tk/`
Hero, usia sasaran (belum terverifikasi), pendekatan tumbuh kembang, rutinitas, kegiatan, fasilitas aktual, kurikulum, pendaftaran, FAQ unit.
**Penting:** jangan salin KOSP Kuttab sebagai kurikulum TK.

## Halaman Kuttab `/kuttab/`
Berlandaskan KOSP 2026/2027: visi dan misi Kuttab, pembelajaran Tahfizh Al-Qur'an (14 JP per kelompok kelas pada tabel dokumen), diniyah (Aqidah, Fiqh, Adab, Hadits, Sirah, Bahasa Arab), mata pelajaran umum (Bahasa Indonesia, Matematika, IPAS, PJOK, Prakarya), pembiasaan adab melalui matrikulasi, pengembangan ranah spiritual-sosial-emosional-intelektual-fisik, contoh alur hari belajar. Nyatakan tahun dokumen saat menampilkan angka. Hindari penyederhanaan 'SD formal' sebelum dokumen izin diperiksa.

## Halaman Madrasah `/madrasah/`
Profil Madrasah Tarbiyah Sunnah; dua pilihan `TPQ` dan `TQA`; pendekatan belajar/level/jadwal/target hanya setelah data unit diverifikasi; kegiatan; informasi pendaftaran.

## Kegiatan & berita
Setiap entri punya judul, tanggal, unit, ringkasan, cover, isi, galeri opsional, status publikasi. Sediakan filter unit (TK/Kuttab/Madrasah).

## CTA
Gunakan CTA jelas seperti `Kenali TK`, `Kurikulum Kuttab`, `Lihat Program TPQ`, `Informasi Pendaftaran`, `Hubungi Sekolah`. Hindari `Join Our Journey`, `Unlock Potential`, atau ajakan bombastis.

## SEO
Metadata berbeda per unit; nama lokasi Selacau, Batujajar, Bandung Barat secara natural. Jangan membuat halaman duplikasi keyword lokal.

## Penempatan logo
- Header global/footer: logo yayasan.
- Kartu TK/Kuttab/Madrasah: logo unit masing-masing, jangan saling tertukar.
- Halaman `/tk/`, `/kuttab/`, `/madrasah/`: logo unit masing-masing dalam konten/hero; header global tetap logo yayasan.
- Detail: `docs/07-BRAND-ASSETS.md`.

## Penempatan logo
- Header global/footer: logo yayasan.
- Kartu TK/Kuttab/Madrasah: logo unit masing-masing, jangan saling tertukar.
- Halaman `/tk/`, `/kuttab/`, `/madrasah/`: logo unit masing-masing dalam konten/hero; header global tetap logo yayasan.
- Detail: `docs/07-BRAND-ASSETS.md`.
