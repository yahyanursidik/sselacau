# UI/UX, Navigasi & Layout — Sekolah Tarbiyah Sunnah Selacau

Versi 2.2 · 30 Oktober 2026

## Posisi produk
Satu website publik untuk tiga unit: TK Tarbiyah Sunnah, Kuttab Tarbiyah Sunnah (setingkat SD), dan Madrasah Tarbiyah Sunnah (TPQ/TQA). Identitas utama di header/footer menggunakan logo **Yayasan Tarbiyah Sunnah**, sedangkan setiap halaman unit memakai logo aslinya. Tidak membuat logo payung baru.

## Navigasi desktop
- Beranda (`/`)
- Tentang Sekolah (`/tentang/`)
- Unit Pendidikan (dropdown): TK (`/tk/`), Kuttab (`/kuttab/`), Madrasah (`/madrasah/`); TPQ/TQA boleh menjadi subbagian Madrasah atau `/madrasah/tpq/` dan `/madrasah/tqa/` bila kontennya cukup
- Kehidupan Sekolah (`/kehidupan-sekolah/`)
- Berita & Artikel (`/berita/`)
- Kontak (`/kontak/`)
- CTA: Informasi Pendaftaran (`/pendaftaran/`)

Mobile: menu hamburger dengan subitem tiga unit, CTA pendaftaran jelas; jangan menutup konten dengan bottom bar besar.

## Beranda: urutan konten
1. Header logo Yayasan + wordmark 'Sekolah Tarbiyah Sunnah' dan 'Selacau · Batujajar' sebagai deskriptor lokasi.
2. Hero: headline 'Bertumbuh dalam Al-Qur’an, adab, ilmu, dan kemandirian.' Dua tombol 'Kenali Unit Pendidikan' & 'Informasi Pendaftaran'; foto asli sekolah (sementara placeholder).
3. Unit selector: 3 kartu dengan logo asli dan ringkasan, masing-masing menuju halaman unit. Ini satu-satunya grup tiga kartu besar yang perlu ditekankan.
4. Nilai: Al-Qur’an, aqidah, adab, ilmu, kemandirian, dalam editorial grid sederhana.
5. Kehidupan sekolah: foto aktivitas asli dan penjelasan pengalaman belajar.
6. Kegiatan terbaru: 3 item berita asli dan filter unit (jika kontennya sudah ada).
7. CTA pendaftaran: tidak menampilkan biaya/jadwal tanpa konfirmasi.
8. Footer: logo Yayasan, tiga tautan unit, alamat, kontak yang terverifikasi.

## Template halaman TK
Hero logo TK + fotografi; identitas program; pendekatan perkembangan anak sesuai dokumen TK; kegiatan pembelajaran, rutinitas, lingkungan; kurikulum; FAQ TK; pendaftaran.

## Template halaman Kuttab
Hero logo Kuttab; pengantar pendidikan setingkat SD; visi/misi; Qur'an dan diniyah; pelajaran umum; adab dan asesmen; pengalaman belajar; jadwal (verifikasi); FAQ; pendaftaran. Kurikulum 2026/27 menyebut Tahfizh Al-Qur'an 14 JP untuk setiap kelompok kelas; verifikasi publikasi angka sebelum rilis.

## Template halaman Madrasah
Hero logo Madrasah; penjelasan TPQ dan TQA secara terpisah; tujuan, kelompok, metode, jenjang, target capaian, jadwal, biaya, lokasi; kegiatan; FAQ; pendaftaran. **Jangan mengarang data TPQ/TQA.**

## Visual system
- Hijau `#466A38`, hijau gelap `#294629`, jingga `#CE7C17`, kuning `#E6B304`, krem `#FBFAF6`, teks `#202820`.
- Warna disesuaikan dari keluarga logo; varian teks/tombol boleh diperkuat demi WCAG AA.
- Foto nyata lingkungan sekolah; anti ilustrasi dekoratif generik, manekin, statistik palsu, simbol Islam klise, glassmorphism, gradients berlebihan, badge repetitif dan pola semua-konten-dalam-card.
- Tipografi sistem, hierarchy nyata; mobile-first, layout 1 kolom pada layar kecil.
- Anti-Slop: https://github.com/miqdadbadjuber/anti-slop/releases. Ikuti instruksi upstream dan delivery gate saat coding.

## UX behavior
- Menu keyboard-accessible dan mobile toggle dengan aria-expanded.
- CTA menuju halaman informasional pendaftaran, jangan menyimulasikan pendaftaran sungguhan.
- Breadcrumb di halaman unit dan artikel.
- Kartu berita menggunakan tanggal/kategori asli, tidak mengarang.
- Logo `object-fit:contain` pada bidang yang memberi ruang kosong cukup, jangan crop/stretch/recolor.
- SEO menggunakan nama unit jelas pada title/heading; jangan mengklaim tiga unit memiliki izin/status hukum yang identik.

## Rute dan tanggung jawab konten
- `/` — pengenalan keseluruhan
- `/tk/` — semua fakta TK
- `/kuttab/` — semua fakta Kuttab
- `/madrasah/` — Madrasah dan pengantar TPQ/TQA
- `/kehidupan-sekolah/`, `/berita/`, `/berita/[slug]/`, `/pendaftaran/`, `/kontak/`, `/tentang/`

## Engineering handoff
Astro 7.4.4, TypeScript strict, SSG + Content Collections, Netlify. Gunakan komponen `SiteHeader`, `UnitDropdown`, `Hero`, `UnitCard`, `ValuesGrid`, `SchoolLife`, `NewsGrid`, `EnrollmentCTA`, `SiteFooter`. Logo dari `public/brand/`. Tidak perlu CRM/SIA/LMS/database murid. Prototipe HTML pada `prototype/index.html` adalah referensi desain, bukan aplikasi produksi.

## Catatan validasi
Saat ini logo dan dokumen Kuttab tersedia. Foto lingkungan sekolah, data TK/TPQ/TQA, biaya, jadwal, kontak WhatsApp, tautan Google Maps, status pendaftaran dan domain akhir harus dikonfirmasi sebelum publikasi.
