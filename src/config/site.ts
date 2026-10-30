/**
 * Sumber tunggal data situs. Nilai `null` berarti belum diverifikasi dan
 * TIDAK boleh diganti tebakan. Lihat docs/06-CONTENT-INVENTORY.md.
 */

export type UnitKey = 'tk' | 'kuttab' | 'madrasah';
export type EnrollmentStatus = 'belum-diumumkan' | 'dibuka' | 'ditutup';

export interface UnitContact {
  /** Label tombol, mis. "Info SPMB Kuttab". */
  label: string;
  /** Nomor yang ditampilkan sebagai teks. */
  phone: string;
  /** Tautan wa.me dengan kode negara 62, tanpa angka 0 di depan. */
  url: string;
}

export interface Unit {
  key: UnitKey;
  officialName: string;
  shortName: string;
  descriptor: string;
  url: string;
  summary: string;
  /** Data unit sudah disetujui pemilik unit untuk dipublikasikan. */
  verified: boolean;
  enrollment: EnrollmentStatus;
  /** Kontak WhatsApp resmi unit. */
  contact: UnitContact | null;
}

export const site = {
  name: 'Sekolah Tarbiyah Sunnah Selacau',
  shortName: 'Sekolah Tarbiyah Sunnah',
  locality: 'Selacau · Batujajar',
  region: 'Selacau, Batujajar, Kabupaten Bandung Barat',
  description:
    'Website informasi TK Tarbiyah Sunnah, Kuttab Tarbiyah Sunnah (setingkat SD) dan Madrasah Tarbiyah Sunnah (TPQ–TQA) di Selacau, Batujajar, Kabupaten Bandung Barat.',
  /** Selama true: banner pratinjau tampil dan halaman tidak diindeks. */
  prerelease: true,
  /** Domain final belum diputuskan; diisi lewat PUBLIC_SITE_URL. */
  domain: null as string | null,
  contact: {
    phone: null as string | null,
    whatsappUrl: null as string | null,
    email: null as string | null,
    mapsUrl: null as string | null,
  },
  schoolYear: null as string | null,
} as const;

export const units: Record<UnitKey, Unit> = {
  tk: {
    key: 'tk',
    officialName: 'TK Tarbiyah Sunnah',
    shortName: 'TK',
    descriptor: 'Pendidikan anak usia dini',
    url: '/tk/',
    // Sumber: "Program Pembelajaran TK Tarbiyah Sunnah" dari pengguna, 30 Oktober 2026.
    summary:
      'Pendidikan anak usia dini untuk usia 4–6 tahun (TK A dan TK B), dengan pembiasaan adab, nilai Islam dan kemandirian melalui bermain dan kegiatan nyata.',
    verified: true,
    enrollment: 'belum-diumumkan',
    // Sumber: pengguna, 30 Oktober 2026.
    contact: { label: 'Info SPMB TK', phone: '0877-1103-1938', url: 'https://wa.me/6287711031938' },
  },
  kuttab: {
    key: 'kuttab',
    officialName: 'Kuttab Tarbiyah Sunnah',
    shortName: 'Kuttab',
    descriptor: 'Program setingkat SD',
    url: '/kuttab/',
    summary:
      'Program setingkat SD yang memadukan Al-Qur’an, ilmu diniyah, pelajaran umum, serta pembiasaan adab dan kemandirian.',
    verified: true,
    enrollment: 'belum-diumumkan',
    // Sumber: pengguna, 30 Oktober 2026.
    contact: { label: 'Info SPMB Kuttab', phone: '0856-4070-9149', url: 'https://wa.me/6285640709149' },
  },
  madrasah: {
    key: 'madrasah',
    officialName: 'Madrasah Tarbiyah Sunnah',
    shortName: 'Madrasah',
    descriptor: 'TPQ dan TQA',
    url: '/madrasah/',
    // Sumber: profil Madrasah Tarbiyah Sunnah dari pengguna, 30 Oktober 2026.
    summary:
      'Belajar ilmu Diniyyah dan Al-Qur’an untuk anak usia SD, Senin–Jumat sore, dalam kelas Diniyyah dan kelas Marhalah (Halaqah Qur’an).',
    verified: true,
    enrollment: 'belum-diumumkan',
    contact: null,
  },
};

export const unitList: Unit[] = [units.tk, units.kuttab, units.madrasah];

export const enrollmentLabel: Record<EnrollmentStatus, string> = {
  'belum-diumumkan': 'Belum diumumkan',
  dibuka: 'Pendaftaran dibuka',
  ditutup: 'Pendaftaran ditutup',
};

export const mainNav = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Sekolah', href: '/tentang/' },
  { label: 'Unit Pendidikan', href: null },
  { label: 'Kehidupan Sekolah', href: '/kehidupan-sekolah/' },
  { label: 'Kontak', href: '/kontak/' },
] as const;

/** Alamat dari sampul KOSP Kuttab 2026/2027; format alamat unit lain belum diverifikasi. */
export const kuttabAddress =
  'Jl. Selacau RT 001/RW 005, Desa Selacau, Kecamatan Batujajar, Kabupaten Bandung Barat';
