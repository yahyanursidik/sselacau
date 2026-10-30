# Design Decisions (Anti-Slop R-31)

Satu baris alasan untuk setiap keputusan visual besar. Ubah file ini setiap kali keputusannya berubah.

## Design Read
Reading this as: situs informasi sekolah untuk orang tua di Selacau, gaya editorial sekolah yang tenang sesuai `docs/03` dan `docs/08`, dial **ENERGY 1 / RHYTHM 2 / MOTION 1**.

- **ENERGY 1:** sekolah, bukan produk; brief meminta "calm, warm, grounded, credible".
- **RHYTHM 2:** section beranda berganti komposisi (hero dua kolom, tiga kartu unit, daftar nilai, foto + teks, panel pendaftaran), bukan satu template berulang.
- **MOTION 1:** hanya transisi hover; tidak ada animasi masuk atau scroll, sesuai larangan "animasi tanpa fungsi".

## Keputusan

| Keputusan | Alasan |
|---|---|
| Hijau `#466a38` / `#294629` sebagai warna utama | Diambil dari keluarga warna logo (docs/03, docs/08); dipakai untuk navigasi dan CTA. |
| Kuning `#e6b304` hanya di tombol panel pendaftaran beranda | Satu aksen yang disengaja di momen kunci; teks gelap di atasnya 7.8:1. |
| Orange `#9a5410` untuk descriptor unit | Versi orange yang lolos kontras teks kecil (5.5:1); orange logo asli hanya 3:1. |
| Motif tiga pita (komponen `Mark`) di atas judul halaman dan section | Mengulang susunan warna kipas logo Yayasan sebagai identitas; tidak mengubah atau menggantikan logo. |
| Font sistem | `docs/08` meminta "tipografi sistem"; nol request font, terbaca di semua perangkat. |
| Hanya mode terang | Logo resmi dirancang untuk latar terang dan tidak boleh diletakkan sembarangan di latar gelap (docs/07 butir 5). |
| Tiga kartu unit berukuran sama | Tiga unit setara dan brief menyebut ini satu-satunya grup tiga kartu (docs/08); logo masing-masing yang membedakan. |
| Bayangan hanya pada dropdown | Penanda elevasi: menu mengambang di atas konten; komponen lain datar. |
| Radius 8px, kartu 10px, panel 12px | Radius kecil dan konsisten; makin besar wadah, makin besar radius. Tidak ada elemen berbentuk pil. |
| Tidak ada panah pada tombol dan tautan | Teks CTA sudah menyebut tujuannya ("Kenali TK", "Semua berita"). |
| Placeholder foto bergaris diagonal | Menandai slot kosong secara jujur supaya tidak dikira foto; wajib diganti foto asli berizin sebelum rilis. |
| Border kontrol `#7a8a70` | Batas tombol sekunder dan tombol Menu ≥ 3:1 terhadap latar terang. |
| Cincin fokus biru `#1f5fbf`, putih di panel hijau tua | Terlihat jelas di latar terang (6.1:1) dan gelap (10.5:1). |
| Section berita beranda disembunyikan saat kosong | Section tanpa isi hanya mengisi template (C-3); halaman `/berita/` tetap punya empty state untuk pengunjung. |

## Syarat rilis yang terkait desain
- Foto hero dan foto kehidupan sekolah diganti foto asli berizin; foto hero dipasang sebagai `<img>` eager dengan `fetchpriority="high"`.
- Tidak boleh ada penanda `Pending` (`data-needs-verification`) di halaman yang diterbitkan.
