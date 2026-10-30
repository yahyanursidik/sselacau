# PRD — Website Sekolah Tarbiyah Sunnah Selacau

**Versi:** 2.0 · 30 Oktober 2026

## 1. Ringkasan
Website resmi bersama untuk tiga unit pendidikan di Selacau: **TK Tarbiyah Sunnah**, **Kuttab Tarbiyah Sunnah (setingkat SD)**, dan **Madrasah Tarbiyah Sunnah (TPQ–TQA)**. Website menampilkan informasi publik sekolah secara jelas, hangat, mudah diakses, dan tidak mencampurkan karakter masing-masing unit.

Nama payung website adalah **Sekolah Tarbiyah Sunnah Selacau**. Brand dan nama setiap unit tetap ditulis lengkap pada halaman masing-masing. Nama payung ini *bukan* nama hukum baru dan bukan pengganti nama lembaga pada dokumen resmi.

## 2. Audiens
- Orang tua calon peserta TK: perkembangan usia dini, rutinitas, keamanan, pembiasaan, komunikasi sekolah, pendaftaran.
- Orang tua calon murid Kuttab: kurikulum Al-Qur'an, diniyah, umum, kegiatan, legalitas, jadwal, pendaftaran.
- Orang tua calon santri TPQ/TQA: level, metode, jadwal, target kemampuan, pendaftaran.
- Orang tua aktif: pengumuman, berita, kalender dan kontak yang dapat diakses tanpa akun.
- Masyarakat: pengenalan institusi dan informasi lokasi.

## 3. Product goals
1. Pengunjung mengenali ketiga unit dalam beberapa detik.
2. Detail setiap unit terpisah tetapi konsisten.
3. Orang tua mendapatkan informasi pendidikan yang nyata, tanpa klaim berlebihan.
4. Informasi penerimaan dan kontak mudah ditemukan.
5. Staf dapat memperbarui konten kegiatan/pengumuman sederhana.

## 4. In scope
- Homepage bersama dan profil/visi nilai bersama yang **telah disetujui**.
- Landing page TK, Kuttab, Madrasah; subhalaman TPQ dan TQA jika informasi valid tersedia.
- Kurikulum/metode/kehidupan belajar **per unit**, tidak dicampur.
- Galeri dengan foto asli berizin, kegiatan, berita dan pengumuman.
- Halaman informasi penerimaan per unit (bukan sistem pendaftaran internal).
- FAQ, lokasi, Google Maps link, telepon/WhatsApp resmi, SEO dasar.
- CMS ringan/Git-based atau Content Collections untuk konten rutin.

## 5. Explicit out of scope
CRM, SIAKAD, LMS, akun orang tua/guru, pengelolaan jamaah, donasi/wakaf, payroll, dashboard murid, pembayaran, database pendaftar, automasi lead, chatbot, portal YTS seluruh unit.

## 6. Prinsip editorial
- Al-Qur'an dan As-Sunnah sesuai manhaj Salaf sebagai landasan nilai, dengan narasi edukatif dan ramah keluarga.
- Hindari klaim status formal/izin dari nama 'setingkat SD'; sebut **Kuttab (program setingkat SD)** sampai status kelembagaan diverifikasi.
- Materi Kuttab berasal dari KOSP 2026/2027; angka dan jam harus diberi periode.
- Konten TK dan Madrasah yang belum bersumber resmi menjadi placeholder `NEEDS_VERIFICATION`, bukan fakta terbit.
- Tidak memakai fitur atau tagline TS Lab School/MOVE.LEARN.GROW tanpa persetujuan lintas unit.

## 7. Fokus isi homepage
Hero dengan nama sekolah + penjelasan ketiga unit; tiga pilihan unit; pendekatan nilai; potret keseharian asli; berita/kegiatan lintas unit dengan filter; informasi penerimaan per unit; lokasi dan kontak.

## 8. Prioritas
**P0:** homepage, unit pages, pendaftaran, kontak, responsive, aksesibilitas, data terverifikasi.  
**P1:** kegiatan, berita, galeri, FAQ, content editing.  
**P2:** pencarian artikel atau kalender publik jika volume konten memerlukan.

## 9. Persyaratan fungsional
FR-01 Navigasi membedakan tiga unit; FR-02 halaman program menampilkan identitas unit; FR-03 detail informasi kurikulum terpisah; FR-04 link kontak unit dapat dikonfigurasi; FR-05 status penerimaan per unit dapat dinyalakan/dimatikan; FR-06 staf dapat terbitkan berita/pengumuman; FR-07 semua gambar beralt, teroptimasi, legal digunakan; FR-08 footer menunjukkan lokasi dan kaitan YTS secara tepat; FR-09 situs dapat dipakai pada layar mobile; FR-10 halaman 404 disediakan.

## 10. Non-functional requirements
SSG-first, HTML semantik, WCAG AA sebagai target, Core Web Vitals baik, tidak memuat JavaScript berat tanpa alasan, metadata OpenGraph, sitemap, canonical, JSON-LD hanya untuk fakta tervalidasi, image optimization, robots policy, security headers sederhana dan tidak mengumpulkan data pribadi yang tidak perlu.

## 11. Acceptance criteria
- Seluruh halaman berfungsi dan bebas broken links.
- Tiga unit terlihat jelas di homepage dan header.
- Tidak ada data TPQ/TQA/TK yang diarang.
- Semua CTA mengarah ke channel resmi yang benar.
- Tidak ada fitur dashboard/CRM/LMS.
- Audit Anti-Slop lulus: desain tidak generik, copy faktual, dekorasi relevan.
- Konfigurasi build Astro 7.4.4 dan deployment Netlify berjalan.
- Legalitas, biaya, jadwal, identitas guru dan foto hanya diterbitkan setelah verifikasi/persetujuan.

## 12. Key decisions pending
Domain payung, logo/header resmi payung, pengesahan narasi bersama, data TK, data TPQ/TQA, informasi kontak, lokasi titik map, tahun penerimaan, kebijakan foto siswa, penanggung jawab konten.

## Branding final (pembaruan)
Website bernama **Sekolah Tarbiyah Sunnah Selacau** dan memakai **logo Yayasan Tarbiyah Sunnah di header/footer**. Logo resmi TK, Kuttab, Madrasah tampil di kartu program dan halaman masing-masing. Logo yayasan tidak mengubah scope menjadi portal seluruh YTS. Detail dan file di `docs/07-BRAND-ASSETS.md`.

## Branding final (pembaruan)
Website bernama **Sekolah Tarbiyah Sunnah Selacau** dan memakai **logo Yayasan Tarbiyah Sunnah di header/footer**. Logo resmi TK, Kuttab, Madrasah tampil di kartu program dan halaman masing-masing. Logo yayasan tidak mengubah scope menjadi portal seluruh YTS. Detail dan file di `docs/07-BRAND-ASSETS.md`.
