/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: 'Berita' | 'Pengumuman' | 'Prestasi' | 'Kegiatan';
  date: string;
  imageUrl: string;
  author: string;
  views: number;
}

export interface Teacher {
  id: string;
  name: string;
  nip: string;
  role: string;
  subject: string;
  imageUrl: string;
  gender: 'L' | 'P';
  status: 'PNS' | 'Honororer' | 'PPPK';
}

export interface GalleryItem {
  id: string;
  title: string;
  type: 'photo' | 'video';
  url: string;
  category: string;
  date: string;
}

export interface PPDBRegistration {
  id: string;
  regNumber: string;
  fullName: string;
  nisn: string;
  email: string;
  phone: string;
  schoolOrigin: string;
  birthDate: string;
  birthPlace: string;
  gender: 'L' | 'P';
  religion: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
  raporScore: number;
  status: 'Pending' | 'Verified' | 'Rejected';
  createdAt: string;
  submittedFiles: {
    rapor: boolean;
    kk: boolean;
    ijazah: boolean;
  };
}

export interface AcademicAgenda {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface AcademicCalendarEvent {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  category: 'Akademik' | 'Libur' | 'Ujian' | 'Kegiatan Islami';
}

export interface DownloadFile {
  id: string;
  title: string;
  category: 'Formulir' | 'Silabus' | 'Akademik' | 'Pengumuman';
  format: 'PDF' | 'DOCX' | 'XLSX';
  size: string;
  url: string;
  downloadsCount: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  isbn: string;
  available: boolean;
  coverUrl: string;
}

export interface Student {
  id: string;
  name: string;
  nisn: string;
  nism: string;
  class: string;
  gender: 'L' | 'P';
  phone: string;
  graduationStatus?: 'Lulus' | 'Belum Lulus';
  raporScore?: number;
}

export interface Alumni {
  id: string;
  name: string;
  nisn: string;
  graduationYear: string;
  status: string; // e.g., "Kuliah di UIN Ar-Raniry", "Bekerja", "Wiraswasta"
  gender: 'L' | 'P';
}

export interface ActivityLog {
  id: string;
  operatorName: string;
  operatorRole: 'Admin Utama' | 'Staf Humas' | 'OSIM';
  action: string;
  timestamp: string;
  details: string;
}

export interface MessageFeedback {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}
