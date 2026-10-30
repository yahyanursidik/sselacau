# DESIGN.md — Visual Direction & Design System

## Brand direction
**Calm, warm, grounded, credible, school-first.** Situs terasa seperti sekolah yang nyata, bukan aplikasi SaaS atau template Islamic premium. Kuttab, TK dan Madrasah disatukan oleh tata bahasa desain, bukan dipaksa satu visual usia.

## Hierarki logo resmi
**Logo header/footer:** Yayasan Tarbiyah Sunnah (`assets/logo-yayasan-tarbiyah-sunnah.png`). **Logo halaman unit:** file logo resmi unit di `assets/`. Tidak ada logo gabungan atau logo sekolah baru. Lihat `docs/07-BRAND-ASSETS.md` untuk aturan ukuran, crop, alt text dan QA.

## Color tokens (warna pendamping dari keluarga logo yang diberikan)
| Token | HEX | Penggunaan |
|---|---|---|
| Brand Green | `#446832` | identitas/header/CTA |
| Orange | `#F48120` | aksen dan sorotan |
| Burnt Orange | `#CA6323` | aksen sekunder |
| Warm Yellow | `#E8C339` | penanda kecil, bukan body text |
| Warm White | `#FCFBF7` | latar utama |
| Charcoal | `#20251D` | teks utama |
| Paper White | `#FFFFFF` | konten |

**Catatan:** angka HEX adalah estimasi warna dominan dari contoh logo, bukan master brand palette yang telah disahkan. Terapkan aksesibilitas kontras; jangan gunakan orange/kuning terang sebagai teks kecil di latar putih.

## CSS variables
```css
:root {
  --brand: #446832;
  --accent: #F48120;
  --accent-deep: #CA6323;
  --sun: #E8C339;
  --bg: #FCFBF7;
  --surface: #FFFFFF;
  --text: #20251D;
}
```

## Prinsip pemakaian warna
Latar putih/warm white dominan; hijau mengarahkan navigasi dan CTA; orange digunakan hemat sebagai aksen; kuning bukan area latar besar. Hindari gradien, glow, neon, shadow berat dan komposisi terlalu banyak warna.

## Typography
Heading: sans serif dengan karakter ramah, tegas, mudah dibaca; body: sans serif jelas. Gunakan font lokal/dioptimasi sesuai lisensi. Arabic content harus memakai font Arab yang bisa dibaca, bukan kaligrafi dekoratif. Hierarki responsive: H1 clamp(2.3rem, 5vw, 4rem), H2 clamp(1.65rem, 3vw, 2.6rem), body 1–1.125rem.

## Identitas unit
- TK: lebih lapang, foto permainan/alat peraga asli, lembut; jangan terlalu kartun.
- Kuttab: lebih terstruktur, substansi kurikulum, jadwal dan kegiatan.
- Madrasah: fokus pengalaman belajar Al-Qur'an dan diniyah; tidak perlu motif religius dekoratif.
Semua unit tetap konsisten komponen, spacing dan tone.

## Photography policy
Prioritaskan foto aktual lingkungan, ruang belajar, alat kegiatan dan suasana tanpa memperlihatkan identitas siswa jika izin belum ada. Hindari stock photo generik yang menyamar menjadi fasilitas sekolah. Jangan tampilkan manusia teridentifikasi tanpa izin. Foto contoh tidak boleh diklaim sebagai foto sekolah.

## Layout language
Komposisi editorial: hero foto + teks, tiga pilihan unit, gambar dan teks berselang, jadwal sederhana, artikel grid ketika masuk akal. Jangan setiap section menjadi 'heading + 3 cards'. Card hanya untuk objek yang benar-benar sejajar. Whitespace dan tipografi lebih penting daripada ikon.

## Anti-Slop (wajib)
Referensi https://github.com/miqdadbadjuber/anti-slop/releases . Instal skill sesuai agen; ikuti aturan inti, UI/copy, dan lakukan Delivery Gate. Anti-Slop adalah **filter kualitas**, bukan pengganti arah visual yang tertulis dalam DESIGN.md.

Tolak: eyebrow badges tidak berguna, dot dekoratif, fake metrics, stock photo palsu, generic English headline, gradients berlebihan, icon acak, cards beruntun, CTA agresif, animasi tanpa fungsi, ornamental arch/masjid/kitab/tasbih/bintang/bulan.

## Responsive / accessibility
Mobile-first, contrast AA, focus visible, semantic structure, tap target nyaman, navigation keyboard, prefers-reduced-motion, alt meaningful, no layout shift images.

## Praktik desain logo responsif
- Render logo yayasan memakai `object-fit: contain`, tinggi wajar di header, dan header teks ringkas bila nama situs perlu penjelasan. Jangan paksa file potret memenuhi header horizontal atau menghasilkan logo mini tak terbaca. Bila perlu, tata simbol dan label **sebagai dua elemen UI**, tanpa mengedit logo.
- Kartu tiga unit harus memberi ruang logo dengan tinggi visual yang seimbang walaupun rasio berbeda; jangan stretch.
- Semua logo disimpan sebagai asset original; perubahan cropping/komposisi hanya setelah persetujuan pemilik brand.

## Praktik desain logo responsif
- Render logo yayasan memakai `object-fit: contain`, tinggi wajar di header, dan header teks ringkas bila nama situs perlu penjelasan. Jangan paksa file potret memenuhi header horizontal atau menghasilkan logo mini tak terbaca. Bila perlu, tata simbol dan label **sebagai dua elemen UI**, tanpa mengedit logo.
- Kartu tiga unit harus memberi ruang logo dengan tinggi visual yang seimbang walaupun rasio berbeda; jangan stretch.
- Semua logo disimpan sebagai asset original; perubahan cropping/komposisi hanya setelah persetujuan pemilik brand.
