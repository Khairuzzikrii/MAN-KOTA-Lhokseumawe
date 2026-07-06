/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NewsItem, Teacher, GalleryItem, PPDBRegistration, AcademicAgenda, AcademicCalendarEvent, DownloadFile, Book, MessageFeedback, Student, Alumni, ActivityLog } from '../types';

export const initialNews: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Siswa MAN Kota Lhokseumawe Raih Medali Emas Olimpiade Sains Nasional (OSN) 2026',
    slug: 'siswa-man-lhokseumawe-emas-osn-2026',
    content: `PRESTASI GEMILANG! Ananda Muhammad Al-Fatih, siswa kelas XI MIPA 1 MAN Kota Lhokseumawe berhasil mengharumkan nama Aceh di kancah nasional dengan meraih Medali Emas bidang Astronomi pada Olimpiade Sains Nasional (OSN) tahun 2026. 

Kepala Madrasah, Drs. H. Sofyan, M.Pd, menyampaikan rasa syukur yang mendalam atas pencapaian ini. "Ini adalah bukti nyata bahwa madrasah kami mampu bersaing secara akademik di tingkat nasional. Pendidikan sains yang dipadukan dengan nilai-nilai karakter islami menjadikan siswa handal di bidang ilmu pengetahuan sekaligus kokoh dalam imtaq."

Bapak Safrizal, S.Pd, selaku guru pembimbing astronomi, menyatakan bahwa persiapan intensif telah dilakukan selama 6 bulan penuh. "Ananda Fatih memiliki ketekunan luar biasa. Dia tidak hanya cerdas, tetapi juga selalu memulai belajarnya dengan doa dan tadarus singkat," pungkasnya. Madrasah berharap pencapaian ini dapat menjadi pemantik semangat bagi siswa-siswi lainnya.`,
    category: 'Prestasi',
    date: '2026-05-28',
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
    author: 'Humas MAN Lhokseumawe',
    views: 312
  },
  {
    id: 'news-2',
    title: 'Penerimaan Peserta Didik Baru (PPDB) Gelombang I Tahun Ajaran 2026/2027 Resmi Dibuka',
    slug: 'ppdb-online-gel-1-2026-2027',
    content: `MAN Kota Lhokseumawe secara resmi mengumumkan pembukaan Penerimaan Peserta Didik Baru (PPDB) Jalur Reguler dan Prestasi Gelombang I untuk Tahun Ajaran 2026/2027. Proses pendaftaran dilaksanakan sepenuhnya secara online melalui website resmi ini mulai tanggal 1 Juni s.d. 25 Juni 2026.

Sebagai salah satu Madrasah Aliyah Negeri rujukan di pesisir utara Aceh, MAN Kota Lhokseumawe menawarkan tiga program peminatan unggulan:
1. MIPA Unggulan & Sains (Riset)
2. IPS Terpadu & Kewirausahaan
3. Keagamaan & Tahfidzul Qur'an (Target 5 - 10 Juz)

Adapun syarat administrasi awal cukup dengan mengunggah scan rapor SMP/MTs semester 1-5, Kartu Rencana Keluarga (KK), serta Akta Kelahiran. Para calon peserta didik diharapkan memantau petunjuk teknis pendaftaran pendaftaran di area Download website Madrasah ini.`,
    category: 'Pengumuman',
    date: '2026-05-30',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    author: 'Panitia PPDB',
    views: 524
  },
  {
    id: 'news-3',
    title: 'MAN Lhokseumawe Selenggarakan Wisuda Tahfidz Qur’an Angkatan Ke-VIII',
    slug: 'wisuda-tahfidz-angkatan-viii-man-lhokseumawe',
    content: `MAN Kota Lhokseumawe sukses menyelenggarakan Wisuda Tahfidzul Qur'an ke-VIII bertempat di Aula Serbaguna Madrasah pada hari Kamis lalu. Sebanyak 45 orang wisudawan dan wisudawati yang telah menyelesaikan hafalan mulai dari juz 30, hingga maksimal 10 juz dikukuhkan langsung oleh Kepala Kantor Kementerian Agama Kota Lhokseumawe.

Suasana haru menyelimuti seisi ruangan saat prosesi sungkeman dan pemasangan mahkota dari para penziarah Qur'an kepada orang tua masing-masing sebagai simbol bakti mereka. Kepala Madrasah menegaskan, program Tahfidz di MAN Lhokseumawe merupakan bagian dari kurikulum muatan lokal wajib bagi kelas keagamaan dan ekstrakurikuler pilihan bagi kelas sains dan sosial.

"Kemenag Lhokseumawe sangat mengapresiasi inovasi kurikulum yang diterapkan MAN Kota Lhokseumawe. Lulusan madrasah ini tidak hanya siap lanjut ke perguruan tinggi umum, melainkan juga memiliki bekal spiritual yang kuat," ujar perwakilan Kemenag dalam sambutannya.`,
    category: 'Kegiatan',
    date: '2026-05-25',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    author: 'Koordinator Keagamaan',
    views: 189
  },
  {
    id: 'news-4',
    title: 'Sosialisasi Bahaya Narkoba & Kenakalan Remaja bersama Kepolisian Sektor Lhokseumawe',
    slug: 'sosialisasi-bahaya-narkoba-polsek-lhokseumawe',
    content: `Dalam upaya melindungi generasi muda dari pengaruh buruk narkoba dan pergaulan bebas, OSIM MAN Kota Lhokseumawe bekerjasama dengan Kepolisian Sektor (Polsek) Lhokseumawe menyelenggarakan kegiatan sosialisasi hukum dan kesehatan. Acara ini dihadiri oleh seluruh siswa kelas X dan XI secara hybrid.

Kapolsek Lhokseumawe bertindak sebagai pemateri utama, mengupas tuntas pasal-pasal penyalahgunaan zat adiktif, modus operandi peredaran di kalangan remaja, serta cara membangun tameng pertemanan yang sehat. Sesi interaktif berlangsung seru dengan tanya jawab berhadiah dari pihak kepolisian.

"Melalui kegiatan ini, kami ingin siswa MAN Kota Lhokseumawe memegang prinsip 'Say No to Drugs, Say Yes to Achievements'. Benteng pertama adalah keimanan tebal yang ditanamkan madrasah, benteng kedua adalah pemahaman hukum yang baik," kata Pembina OSIM dalam laporannya.`,
    category: 'Berita',
    date: '2026-05-20',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    author: 'Pembina OSIM',
    views: 245
  }
];

export const initialTeachers: Teacher[] = [
  {
    id: 't-1',
    name: 'Drs. H. Sofyan, M.Pd',
    nip: '196901121995031002',
    role: 'Kepala Madrasah Aliyah Negeri',
    subject: 'Manajemen Pendidikan',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    gender: 'L',
    status: 'PNS'
  },
  {
    id: 't-2',
    name: 'Safrizal, S.Pd.I',
    nip: '197904052006041005',
    role: 'Wakil Kepala Bagian Kurikulum',
    subject: 'Fiqih / Ushul Fiqih',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    gender: 'L',
    status: 'PNS'
  },
  {
    id: 't-3',
    name: 'Dra. Hj. Cut Nyak Fatimah, M.A',
    nip: '197109151998032001',
    role: 'Wakil Kepala Bagian Kesiswaan',
    subject: 'Bahasa Arab',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    gender: 'P',
    status: 'PNS'
  },
  {
    id: 't-4',
    name: 'Nurul Hidayah, S.Pd',
    nip: '198502282009042004',
    role: 'Guru MIPA',
    subject: 'Fisika & Astronomi',
    imageUrl: 'https://images.unsplash.com/photo-1580894732444-8fecef2271ff?auto=format&fit=crop&w=300&q=80',
    gender: 'P',
    status: 'PPPK'
  },
  {
    id: 't-5',
    name: 'Rahmatul Qadri, S.Kom',
    nip: '199211102022211001',
    role: 'Kepala Laboratorium Komputer',
    subject: 'Informatika',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    gender: 'L',
    status: 'PPPK'
  },
  {
    id: 't-6',
    name: 'Mariani, S.Ag',
    nip: '197508082015032002',
    role: 'Guru Keagamaan',
    subject: 'Al-Qur\'an Hadits',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    gender: 'P',
    status: 'PNS'
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Upacara Hari Santri Nasional di Lapangan Madrasah',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    category: 'Kegiatan Siswa',
    date: '2025-10-22'
  },
  {
    id: 'g-2',
    title: 'Lab IPA Terpadu Terbaru Kelas Praktikum Kimia',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    category: 'Fasilitas',
    date: '2026-03-12'
  },
  {
    id: 'g-3',
    title: 'Peluncuran Gerakan Literasi Berbasis Digital MAN Lhokseumawe',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    category: 'Akademik',
    date: '2026-04-05'
  },
  {
    id: 'g-4',
    title: 'Profil Singkat Madrasah Madrasah Unggulan Aceh',
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder embed link
    category: 'Profil',
    date: '2026-01-01'
  },
  {
    id: 'g-5',
    title: 'Prestasi Juara I Kaligrafi Islami Se-Provinsi Aceh',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1503945439643-a6590c8e00d5?auto=format&fit=crop&w=800&q=80',
    category: 'Prestasi',
    date: '2026-05-10'
  },
  {
    id: 'g-6',
    title: 'Latihan Rutin Pramuka Penegak Gugus Depan 04-05',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80',
    category: 'Ekstrakurikuler',
    date: '2025-11-18'
  }
];

export const initialPpdb: PPDBRegistration[] = [
  {
    id: 'ppdb-1',
    regNumber: 'PPDB-2026-0001',
    fullName: 'Ahmad Faiz Al-Fursan',
    nisn: '1005234231',
    email: 'ahmadfaiz@gmail.com',
    phone: '081269334412',
    schoolOrigin: 'MTsN 1 Kota Lhokseumawe',
    birthDate: '2011-04-12',
    birthPlace: 'Lhokseumawe',
    gender: 'L',
    religion: 'Islam',
    address: 'Jl. Merdeka No. 45, Kuta Blang, Lhokseumawe',
    guardianName: 'Rahmat Hidayat',
    guardianPhone: '08116782344',
    raporScore: 89.5,
    status: 'Verified',
    createdAt: '2026-05-30T08:30:00Z',
    submittedFiles: {
      rapor: true,
      kk: true,
      ijazah: true
    }
  },
  {
    id: 'ppdb-2',
    regNumber: 'PPDB-2026-0002',
    fullName: 'Siti Sarah Hanifah',
    nisn: '1005678121',
    email: 'sitisarah@gmail.com',
    phone: '085277881900',
    schoolOrigin: 'SMP Negeri 1 Lhokseumawe',
    birthDate: '2011-08-25',
    birthPlace: 'Banda Aceh',
    gender: 'P',
    religion: 'Islam',
    address: 'Komplek PU Punteut, Blang Mangat, Lhokseumawe',
    guardianName: 'Zulkifli Solihin',
    guardianPhone: '08535261718',
    raporScore: 92.0,
    status: 'Pending',
    createdAt: '2026-05-30T09:12:00Z',
    submittedFiles: {
      rapor: true,
      kk: true,
      ijazah: false
    }
  }
];

export const initialAgendas: AcademicAgenda[] = [
  {
    id: 'ag-1',
    title: 'Ujian Akhir Semester (UAS) Genap TA 2025/2026',
    date: '2026-06-08 s.d 2026-06-18',
    time: '07:30 - 12:30 WIB',
    location: 'Ruang Kelas MAN Kota Lhokseumawe',
    description: 'Pelaksanaan ujian tertulis pengerjaan soal secara klaster berbasis komputer dan smartphone (CBT-Computer Based Test).'
  },
  {
    id: 'ag-2',
    title: 'Rapat Kerja Akhir Tahun Dewan Guru dan Komite',
    date: '2026-06-22',
    time: '09:00 - 15:00 WIB',
    location: 'Aula Meeting Serbaguna',
    description: 'Evaluasi kinerja akademik tahunan, penyusunan RKAS TA 2026/2027 serta pengesahan mata pelajaran pilihan fase F kurikulum merdeka.'
  },
  {
    id: 'ag-3',
    title: 'Pembagian Buku Laporan Hasil Belajar (Rapor) Kenaikan Kelas',
    date: '2026-06-25',
    time: '08:00 - 11:30 WIB',
    location: 'Kelas masing-masing (didampingi Wali Kelas)',
    description: 'Penyerahan Rapor semester 2 wajib dihadiri oleh orang tua/wali siswa sebagai sarana komunikasi perkembangan anak.'
  }
];

export const initialCalendarEvents: AcademicCalendarEvent[] = [
  {
    id: 'cal-1',
    title: 'Pelaksanaan Ujian CBT Akhir Semester Ganjil',
    startDate: '2026-06-08',
    endDate: '2026-06-18',
    category: 'Ujian'
  },
  {
    id: 'cal-2',
    title: 'Class Meeting Pekan Olahraga & Seni Antar Kelas',
    startDate: '2026-06-19',
    endDate: '2026-06-24',
    category: 'Kegiatan Islami'
  },
  {
    id: 'cal-3',
    title: 'Pembagian Rapor Semester Genap',
    startDate: '2026-06-25',
    endDate: '2026-06-25',
    category: 'Akademik'
  },
  {
    id: 'cal-4',
    title: 'Libur Akhir Semester Genap',
    startDate: '2026-06-26',
    endDate: '2026-07-12',
    category: 'Libur'
  }
];

export const initialDownloads: DownloadFile[] = [
  {
    id: 'f-1',
    title: 'Petunjuk Teknis PPDB MAN Kota Lhokseumawe 2026/2027',
    category: 'Pengumuman',
    format: 'PDF',
    size: '1.4 MB',
    url: '#',
    downloadsCount: 147
  },
  {
    id: 'f-2',
    title: 'Formulir Kuisioner Minat Bakat Jurusan & Ekstrakurikuler',
    category: 'Formulir',
    format: 'DOCX',
    size: '420 KB',
    url: '#',
    downloadsCount: 89
  },
  {
    id: 'f-3',
    title: 'Silabus Agama & Muatan Lokal Madrasah Aliyah - Al-Qur\'an Hadist XII',
    category: 'Silabus',
    format: 'PDF',
    size: '3.1 MB',
    url: '#',
    downloadsCount: 52
  },
  {
    id: 'f-4',
    title: 'Kalender Akademik Pelaksanaan Pembelajaran Resmi 2025/2026',
    category: 'Akademik',
    format: 'PDF',
    size: '890 KB',
    url: '#',
    downloadsCount: 231
  }
];

export const initialBooks: Book[] = [
  {
    id: 'b-1',
    title: 'Fiqih Kehidupan Jilid I: Beribadah Sesuai Sunnah',
    author: 'Drs. H. Mulyadi, M.Ag',
    category: 'Keagamaan',
    isbn: '978-602-1234-11-2',
    available: true,
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'b-2',
    title: 'Fisika Eksperimental untuk Madrasah Unggulan Riset',
    author: 'Prof. Bambang Kartiko',
    category: 'Sains',
    isbn: '978-623-7788-23-4',
    available: true,
    coverUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'b-3',
    title: 'Sejarah Kebudayaan Islam Nusantara (Fase Demak - Aceh)',
    author: 'Zainuddin Muhammad, M.Hum',
    category: 'Keagamaan',
    isbn: '978-602-3342-67-1',
    available: false,
    coverUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'b-4',
    title: 'Mahir Berbahasa Arab Modern untuk Komunikasi Internasional',
    author: 'Dr. Syarifudin Al-Anshari',
    category: 'Bahasa',
    isbn: '978-602-7711-09-5',
    available: true,
    coverUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80'
  }
];

export const initialFeedbacks: MessageFeedback[] = [
  {
    id: 'fb-1',
    name: 'Lukman Hakim',
    email: 'lukman@gmail.com',
    subject: 'Pertanyaan Jadwal Pelunasan PPDB',
    message: 'Assalamu’alaikum Wr. Wb. Saya orang tua dari calon siswa Siti, mau menanyakan apabila lolos tahap berkas, untuk ujian seleksi komputerisasinya tanggal berapa ya? Terima kasih.',
    createdAt: '2026-05-30T05:20:00Z',
    read: false
  }
];

export const initialStudents: Student[] = [
  {
    id: 'stu-1',
    name: 'Ahmad Faiz Al-Fursan',
    nisn: '1005234231',
    nism: '121111030001',
    class: 'XII MIPA 1 (Sains)',
    gender: 'L',
    phone: '081269334412',
    graduationStatus: 'Lulus',
    raporScore: 89.5
  },
  {
    id: 'stu-2',
    name: 'Siti Sarah Hanifah',
    nisn: '1005678121',
    nism: '121111030002',
    class: 'XII Keagamaan',
    gender: 'P',
    phone: '085277881900',
    graduationStatus: 'Lulus',
    raporScore: 92.0
  },
  {
    id: 'stu-3',
    name: 'Muhammad Al-Fatih',
    nisn: '1005110055',
    nism: '121111030003',
    class: 'XII IPS Terpadu',
    gender: 'L',
    phone: '082345678901',
    graduationStatus: 'Lulus',
    raporScore: 91.2
  },
  {
    id: 'stu-4',
    name: 'Cut Nyak Meutia',
    nisn: '1007231298',
    nism: '121111030004',
    class: 'XI MIPA 2',
    gender: 'P',
    phone: '085311223344'
  }
];

export const initialAlumni: Alumni[] = [
  {
    id: 'alum-1',
    name: 'Zulfikar Ahmad',
    nisn: '1004123512',
    graduationYear: '2025',
    status: 'Kuliah di UIN Ar-Raniry (Tafsir Hadits)',
    gender: 'L'
  },
  {
    id: 'alum-2',
    name: 'Farrah Dhita',
    nisn: '1004998811',
    graduationYear: '2025',
    status: 'Kuliah di Universitas Syiah Kuala (Informatika)',
    gender: 'P'
  },
  {
    id: 'alum-3',
    name: 'Teuku Umar',
    nisn: '1004455667',
    graduationYear: '2024',
    status: 'Mengabdi di Pondok Pesantren Banda Aceh',
    gender: 'L'
  }
];

export const initialActivityLogs: ActivityLog[] = [
  {
    id: 'log-1',
    operatorName: 'Drs. H. Sofyan, M.Pd',
    operatorRole: 'Admin Utama',
    action: 'Inisialisasi Sistem',
    timestamp: '2026-05-31T08:00:00Z',
    details: 'Melakukan migrasi awal data guru dan pengaturan silabus utama Kemenag.'
  },
  {
    id: 'log-2',
    operatorName: 'Humas MAN Lhokseumawe',
    operatorRole: 'Staf Humas',
    action: 'Publikasi Berita',
    timestamp: '2026-05-31T08:15:00Z',
    details: 'Menerbitkan warta berita mengenai prestasi siswa meraih Medali Emas OSN.'
  }
];
