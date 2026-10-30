import yayasan from '../assets/brand/logo-yayasan-tarbiyah-sunnah.png';
import tk from '../assets/brand/logo-tk-tarbiyah-sunnah.png';
import kuttab from '../assets/brand/logo-kuttab-tarbiyah-sunnah.png';
import madrasah from '../assets/brand/logo-madrasah-tarbiyah-sunnah.png';

/**
 * Logo resmi (salinan persis dari assets/). Jangan crop, recolor atau gabungkan.
 * Header/footer memakai `site`; kartu dan halaman unit memakai key masing-masing.
 */
export const brandAssets = {
  site: { src: yayasan, alt: 'Logo Yayasan Tarbiyah Sunnah' },
  tk: { src: tk, alt: 'Logo TK Tarbiyah Sunnah' },
  kuttab: { src: kuttab, alt: 'Logo Kuttab Tarbiyah Sunnah' },
  madrasah: { src: madrasah, alt: 'Logo Madrasah Tarbiyah Sunnah' },
} as const;
