/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { initialCalendarEvents } from '../data/defaultData';
import { 
  Calendar, BookOpen, Clock, MapPin, Award, 
  ChevronRight, Compass, ShieldCheck, HeartPulse, GraduationCap
} from 'lucide-react';

interface AcademicViewsProps {
  subTab: string;
}

export default function AcademicViews({ subTab }: AcademicViewsProps) {
  const { agendas } = useSchool();
  const [activeEkskul, setActiveEkskul] = useState('osim');

  const ekskulList = [
    {
      id: 'osim',
      name: 'OSIM (Organisasi Siswa Intra Madrasah)',
      desc: 'Wadah kepemimpinan primer siswa untuk menyalurkan kreativitas, mengelola event, menggalang aksi sosial, dan melatih kapasitas berorganisasi siswa.',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
      schedule: 'Sabtu, 14:00 - 16:30 WIB',
       pembimbing: 'Dra. Hj. Cut Nyak Fatimah'
    },
    {
      id: 'tahfidz',
      name: 'Tahfidzul Qur’an Intensif',
      desc: 'Program bimbingan halaqah hafalan Al-Qur\'an didesain secara adaptif dengan target kompetensi kelulusan minimal hafal 5 Juz (Juz 30, 1 s.d. 4) bersertifikat Resmi.',
      img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80',
      schedule: 'Setiap Subuh & sore bada Ashar',
      pembimbing: 'Ustadz Muzakir, Lc'
    },
    {
      id: 'pramuka',
      name: 'Pramuka Gudep 04-05',
      desc: 'Gerakan kepanduan guna membentuk pribadi siswa mandiri, tangguh, peduli sosial, serta berjiwa patriotik yang menjunjung tinggi Pancasila.',
      img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80',
      schedule: 'Jumat Sore, 14:30 - 17:00 WIB',
      pembimbing: 'Harun Al-Rasyid, S.Pd'
    },
    {
      id: 'paskibra',
      name: 'Paskibraka Madrasah',
      desc: 'Pelatihan fisik dan mental dalam penempaan formasi baris-berbaris tertib. Berperan aktif sebagai regu upacara utama hari kesaktian nasional.',
      img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80',
      schedule: 'Sabtu Pagi, 08:00 - 11:30 WIB',
      pembimbing: 'Irwan Dani, S.T'
    },
    {
      id: 'kaligrafi',
      name: 'Seni Kaligrafi Islam',
      desc: 'Pengembangan seni khath dan lukis islami (Tsulust, Naskhi, Diwani). Pembinaan bibit-bibit berbakat guna delegasi MTQ tingkat Kabupaten/Kota.',
      img: 'https://images.unsplash.com/photo-1503945439643-a6590c8e00d5?auto=format&fit=crop&w=600&q=80',
      schedule: 'Kamis Sore, 16:00 - 17:30 WIB',
      pembimbing: 'Mariani, S.Ag'
    }
  ];

  const classSchedules = [
    { class: 'Kelas X (Fase E)', subjects: ['Al-Qur\'an Hadits', 'Fisika', 'Informatika', 'Bahasa Arab', 'Fiqih', 'Matematika'] },
    { class: 'Kelas XI (Fase F - MIPA)', subjects: ['Tafsir', 'Kimia', 'Biologi', 'Fisika Astronomi', 'Bahasa Inggris', 'Sejarah'] },
    { class: 'Kelas XII (Jurusan Ilmu Agama)', subjects: ['Ushul Fiqih', 'Ilmu Tafsir', 'Bahasa Arab', 'Hadits', 'Sejarah Kebudayaan Islam'] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="academic-container">
      {/* 1. INFORMASI KURIKULUM */}
      {subTab === 'kurikulum' && (
        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm space-y-8" id="academic-kurikulum">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="bg-brand-green/10 text-brand-green text-xs font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                KURIKULUM MERDEKA & KHAS MADRASAH
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 leading-tight">
                Fleksibel, Berpusat Pada Siswa & Adaptif Digital
              </h2>
              <div className="w-12 h-1 bg-brand-gold rounded"></div>
              
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 font-sans">
                <p>
                  Sesuai rujukan nasional Kementerian Keagamaan RI, MAN Kota Lhokseumawe menerapkan sepenuhnya <strong>Kurikulum Merdeka</strong> semenjak Tahun Pelajaran 2024/2025 dengan mengedepankan pembelajaran berdiferensiasi serta pembentukan akhlak sosial berbasis kepemimpinan.
                </p>
                <p>
                  Unsur khas madrasah yang menjadi muatan instrumen evaluasi utama kami adalah pengayaan muatan keilmuan keagamaan yang terintegrasi (Integrasi Sains - Islam). Pembiasaan membaca Jurnal Ilmiah, pembuatan karya tulis riset sederhana bagi kelas sains, serta penulisan resensi makalah agama pada tiap jenjang semester.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-brand-gold-light rounded-xl border border-brand-gold/20 flex gap-3">
                  <ShieldCheck className="w-6 h-6 text-brand-green shrink-0" />
                  <div>
                    <h4 className="font-bold text-xs p-0 text-brand-green-dark">Projek Penguatan Rahmatan lil Alamin</h4>
                    <p className="text-[10px] text-slate-600 mt-1">Mengasah kecintaan tanah air dan pelestarian bumi melalui aksi sosial terstruktur.</p>
                  </div>
                </div>
                <div className="p-4 bg-brand-gold-light rounded-xl border border-brand-gold/20 flex gap-3">
                  <GraduationCap className="w-6 h-6 text-brand-gold-dark shrink-0" />
                  <div>
                    <h4 className="font-bold text-xs p-0 text-brand-gold-dark">Sistem Kredit SKS Akseleratif</h4>
                    <p className="text-[10px] text-slate-600 mt-1">Memberikan kesempatan lulus 2 tahun bagi siswa dengan tingkat serapan materi sangat tinggi.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 bg-slate-50 border p-6 rounded-2xl space-y-4">
              <h3 className="font-display font-extrabold text-sm text-slate-850 uppercase tracking-wide">
                Alur Fase Pembelajaran
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-white rounded-lg shadow-xs border-l-4 border-brand-green">
                  <p className="font-mono font-bold text-brand-green">Fase E (Kelas X)</p>
                  <p className="text-[11px] text-slate-500 font-sans">Eksplorasi mata pelajaran umum secara merata tanpa peminatan tertata.</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-xs border-l-4 border-brand-gold">
                  <p className="font-mono font-bold text-brand-gold-dark">Fase F (Kelas XI & XII)</p>
                  <p className="text-[11px] text-slate-500 font-sans">Pemilihan kelompok mata pelajaran pilihan (Sains-Riset, Sosial-Wirausaha, Keagamaan-Kitab).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. ROSTER PELAJARAN */}
      {subTab === 'roster' && (
        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm space-y-6" id="academic-roster">
          <div className="text-center space-y-2">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest font-bold">PEMBAGIAN MATERI</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Jadwal Roster Pembelajaran Utama</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
            <p className="text-xs text-slate-500 max-w-xl mx-auto">Informasi ringkasan penyaluran jam mengajar mingguan per-tingkatan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {classSchedules.map((sched, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-205 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-display font-black text-xs uppercase tracking-wide text-brand-green border-b pb-3 mb-4">
                  {sched.class}
                </h3>
                <ul className="space-y-2 text-xs">
                  {sched.subjects.map((sub, i) => (
                    <li key={i} className="flex justify-between items-center bg-white p-2.5 rounded border border-slate-100 font-sans font-medium text-slate-700">
                      <span>{sub}</span>
                      <span className="text-[10px] text-brand-gold font-mono font-bold uppercase">Wajib</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. KALENDER AKADEMIK */}
      {subTab === 'kalender' && (
        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm space-y-6" id="academic-kalender">
          <div className="text-center space-y-2 mb-8">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">AGENDA DIARY</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Kalender Kegiatan Akademik Resmi</h2>
            <div className="w-12 h-1 bg-brand-gold mx-auto rounded"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {initialCalendarEvents.map((ev) => {
              const colorMap = {
                'Akademik': 'bg-brand-gold-light text-brand-green border-brand-gold/20',
                'Libur': 'bg-red-50 text-red-700 border-red-250',
                'Ujian': 'bg-blue-55 text-blue-700 border-blue-200',
                'Kegiatan Islami': 'bg-brand-gold-light text-brand-gold-dark border-brand-gold/25'
              };
              
              return (
                <div key={ev.id} className="flex gap-4 p-4 border rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-3 bg-slate-100 rounded-lg flex flex-col justify-center items-center shrink-0 w-24 border border-slate-200">
                    <Calendar className="w-5 h-5 text-slate-500 mb-1" />
                    <span className="text-[10px] font-mono text-slate-700 mt-0.5">{ev.startDate === ev.endDate ? ev.startDate : `${ev.startDate}`}</span>
                  </div>
                  <div className="flex flex-col justify-center space-y-1">
                    <span className={`inline-block self-start text-[8px] font-mono font-bold px-2 py-0.5 rounded-full border ${colorMap[ev.category] || 'bg-slate-100'}`}>
                      {ev.category}
                    </span>
                    <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                      {ev.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. JADWAL UJIAN */}
      {subTab === 'ujian' && (
        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm space-y-6" id="academic-ujian">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 bg-gradient-to-br from-brand-green to-slate-900 text-white rounded-2xl space-y-3 border border-brand-gold">
              <span className="bg-brand-gold text-brand-green-dark text-[9px] font-mono font-bold px-2 py-1 rounded-full uppercase">Pemberitahuan Resmi</span>
              <h3 className="text-lg sm:text-xl font-display font-bold">Pelaksanaan Ujian Madrasah Berbasis Digital</h3>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                Seluruh rangkaian ujian Penilaian Akhir Semester (PAS/PAT) di MAN Kota Lhokseumawe diselenggarakan seutuhnya secara digital menggunakan Server Cloud CBT terenkripsi. Siswa mengakses soal ujian via Browser aman di perangkat handphone atau laptop masing-masing di madrasah tanpa kuota internet bayar.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-black text-sm text-slate-900 uppercase tracking-widest border-b pb-2">
                Tata Tertib & Ketentuan Ujian
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex gap-2 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0"></div>
                  <span>Siswa wajib hadir di ruang ujian 15 menit sebelum waktu pengerjaan dimulai dengan seragam identitas madrasah yang rapi.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0"></div>
                  <span>Dilarang keras menyalin materi soal, melakukan tangkapan layar, berpindah tab browser, atau berinteraksi dengan siswa lainnya semasa token aktif.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0"></div>
                  <span>Kendala perangkat mati mendadak wajib dilaporkan sesegera mungkin kepada Teknisi Laboratorium atau Pengawas Ruangan ujian yang bertugas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 5. DATA EKSTRAKURIKULER */}
      {subTab === 'ekstra' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="academic-ekskul">
          {/* Left Ekskul menu */}
          <div className="lg:col-span-1 bg-white border p-4 sm:p-6 rounded-2xl shadow-sm space-y-3.5">
            <h3 className="font-display font-black text-slate-900 text-xs uppercase tracking-wider mb-2 border-b pb-2">
              Pilihan Ekstrakurikuler
            </h3>
            <div className="flex flex-col gap-2">
              {ekskulList.map((ek) => (
                <button
                  key={ek.id}
                  onClick={() => setActiveEkskul(ek.id)}
                  className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm font-sans font-semibold border transition-all cursor-pointer flex justify-between items-center ${
                    activeEkskul === ek.id 
                      ? 'bg-brand-green/10 text-brand-green border-brand-green shadow-sm' 
                      : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span>{ek.name}</span>
                  <ChevronRight size={14} className={activeEkskul === ek.id ? 'translate-x-1 duration-200' : ''} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Ekskul representation panel */}
          <div className="lg:col-span-2 bg-white border rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between" id="ekskul-details-panel">
            {ekskulList.filter(ek => ek.id === activeEkskul).map((ek) => (
              <div key={ek.id} className="flex flex-col h-full justify-between">
                <div className="h-44 sm:h-56 relative bg-slate-100">
                  <img src={ek.img} alt={ek.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20 text-white">
                    <p className="text-[10px] text-brand-gold font-mono uppercase tracking-widest font-bold">EKSTRAKURIKULER UNGGULAN</p>
                    <h3 className="font-display font-extrabold text-lg sm:text-2xl mt-0.5">{ek.name}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                    {ek.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 border-t pt-4 text-xs">
                    <div className="bg-slate-50 p-3 rounded-lg border">
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Jadwal Latihan</p>
                      <p className="font-semibold text-slate-800 mt-0.5">{ek.schedule}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border">
                      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Guru Pembimbing</p>
                      <p className="font-semibold text-slate-800 mt-0.5">{ek.pembimbing}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. AGENDA KEGIATAN MADRASAH */}
      {subTab === 'agenda' && (
        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm space-y-6" id="academic-agenda">
          <div className="text-center space-y-2 mb-8">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest font-bold">AGENDA KEDEPAN</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Agenda Kegiatan Terdekat</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agendas.map((ag) => (
              <div 
                key={ag.id}
                className="bg-white border hover:border-brand-green/30 rounded-xl p-5 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="inline-block bg-emerald-50 text-brand-green font-mono text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-100">
                    Agenda Sekolah
                  </div>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                    {ag.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                    {ag.description}
                  </p>
                </div>

                <div className="border-t pt-4 mt-5 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span className="font-medium">{ag.date} | {ag.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span className="truncate font-medium">{ag.location}</span>
                  </div>
                </div>
              </div>
            ))}

            {agendas.length === 0 && (
              <div className="col-span-full text-center py-10 text-slate-400">
                Belum ada agenda kegiatan terdekat saat ini.
              </div>
            )}
          </div>
        </div>
      )}

      {/* 7. KELULUSAN SISWA */}
      {subTab === 'kelulusan' && <GraduationChecker />}
    </div>
  );
}

function GraduationChecker() {
  const { students } = useSchool();
  const [query, setQuery] = useState('');
  const [foundStudent, setFoundStudent] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const student = students.find(
      s => s.nisn === query.trim() || s.nism === query.trim()
    );

    setFoundStudent(student || null);
    setHasSearched(true);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8" id="graduation-checker-root">
      <div className="text-center space-y-2 mb-4">
        <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest font-bold">INFO AKADEMIK</span>
        <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Sistem Pengumuman Kelulusan</h2>
        <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
        <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
          Masukkan NISN (Nomor Induk Siswa Nasional) atau NISM (Nomor Induk Siswa Madrasah) siswa kelas XII untuk mengunduh Surat Keterangan Lulus (SKL) digital resmi.
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-center">
        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0 text-brand-green">
          <GraduationCap className="w-6 h-6" />
        </div>
        <form onSubmit={handleSearch} className="flex-1 flex flex-col sm:flex-row gap-3 w-full">
          <input
            type="text"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik NISN (contoh: 1005234231 atau 1005678121) atau NISM anda..."
            className="flex-1 px-4 py-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green bg-white"
          />
          <button
            type="submit"
            className="px-6 py-2.5 bg-brand-green hover:bg-brand-green-light border border-brand-gold text-white text-xs font-sans font-bold rounded-lg transition-colors cursor-pointer shrink-0"
          >
            Cek Kelulusan
          </button>
        </form>
      </div>

      {hasSearched && (
        foundStudent && foundStudent.graduationStatus === 'Lulus' ? (
          /* SHOW DETAILED COMPLIANT GORGEOUS SKL CERTIFICATE */
          <div className="bg-white border-4 border-slate-900 p-6 sm:p-12 rounded-2xl shadow-lg relative overflow-hidden space-y-6 print:border-0 print:shadow-none print:p-0" id="skl-certificate-print">
            
            {/* Watermark/Emblem Overlays */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none scale-150">
              <GraduationCap className="w-96 h-96 text-brand-green" />
            </div>

            {/* Certificate Header border lines */}
            <div className="text-center space-y-2 border-b-4 border-double border-slate-900 pb-5">
              <h3 className="font-display font-black text-xs uppercase tracking-widest text-slate-600">KEMENTERIAN AGAMA REPUBLIK INDONESIA</h3>
              <h2 className="font-display font-black text-sm sm:text-base text-slate-900 leading-tight">
                MADRASAH ALIYAH NEGERI (MAN) KOTA LHOKSEUMAWE
              </h2>
              <p className="text-[10px] text-slate-500 font-mono">
                Jl. Mon Geudong, Banda Sakti, Kota Lhokseumawe, Aceh | NPSN: 10103021
              </p>
            </div>

            {/* Title / SKL */}
            <div className="text-center space-y-1 py-2">
              <h1 className="font-display font-black text-md sm:text-lg text-slate-900 underline uppercase tracking-wider">
                SURAT KETERANGAN LULUS (SKL) DIGITAL
              </h1>
              <p className="text-[10px] text-slate-400 font-mono">Nomor: B-431/Ma.01.21/PP.00.6/05/2026</p>
            </div>

            {/* Student metadata */}
            <div className="text-xs text-slate-800 space-y-4 max-w-xl mx-auto font-sans leading-relaxed">
              <p>Kepala Madrasah Aliyah Negeri Kota Lhokseumawe dengan ini menerangkan bahwa:</p>
              
              <div className="grid grid-cols-3 gap-y-2.5 font-sans border bg-slate-50 p-4 rounded-xl">
                <span className="font-semibold text-slate-500">Nama Lengkap</span>
                <span className="col-span-2 font-extrabold text-slate-900">{foundStudent.name}</span>
                
                <span className="font-semibold text-slate-500">NISN</span>
                <span className="col-span-2 font-mono font-bold text-slate-800">{foundStudent.nisn}</span>

                <span className="font-semibold text-slate-500">NISM</span>
                <span className="col-span-2 font-mono font-bold text-slate-800">{foundStudent.nism}</span>

                <span className="font-semibold text-slate-500">Program / Kelas</span>
                <span className="col-span-2 font-semibold text-slate-700">{foundStudent.class}</span>

                <span className="font-semibold text-slate-500">Rataan Nilai Rapor</span>
                <span className="col-span-2 font-mono font-bold text-emerald-800 bg-emerald-50 w-max px-2 py-0.5 rounded border border-emerald-100">
                  {foundStudent.raporScore} (Predikat A)
                </span>
              </div>

              <p>
                Berdasarkan hasil Rapat Pleno Dewan Pendidik, siswa di atas dinyatakan:
              </p>

              <div className="text-center py-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                <span className="text-emerald-850 font-mono text-xs font-black uppercase tracking-widest block">STATUS KELULUSAN</span>
                <span className="text-2xl sm:text-3xl font-display font-black text-brand-green uppercase tracking-wider block">
                  LULUS
                </span>
                <span className="text-[10px] text-emerald-650 font-sans block">Memenuhi seluruh syarat kriteria kelulusan akademik madrasah.</span>
              </div>

              <p className="text-[11px] text-slate-500 italic">
                *Surat Keterangan Lulus ini sah diterbitkan secara elektronik sebagai acuan pendaftaran Perguruan Tinggi sementara sebelum Ijazah fisik dicetak oleh Kementerian Agama.
              </p>
            </div>

            {/* Signature block details */}
            <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-700 gap-6">
              <div className="text-center md:text-left space-y-1 font-sans">
                <p className="font-bold underline text-brand-green">Verifikasi Keaslian Dokumen</p>
                <p className="text-[10px] text-slate-400">Kode Verifikasi: VZI-2026-{foundStudent.nisn.slice(0, 4)}</p>
              </div>
              
              <div className="text-center space-y-1 w-52 font-sans">
                <p className="text-slate-500 font-mono">Lhokseumawe, 31 Mei 2026</p>
                <p className="font-semibold text-slate-800">Kepala Madrasah,</p>
                <div className="h-16 flex items-center justify-center relative">
                  <span className="text-xs font-mono text-slate-400 italic z-10 font-bold tracking-widest border border-slate-200 bg-white p-1 rounded">
                    TTD DIGITAL
                  </span>
                </div>
                <p className="font-bold underline text-slate-900">Drs. H. Sofyan, M.Pd</p>
                <p className="text-[10px] text-slate-500 font-mono">NIP. 196901121995031002</p>
              </div>
            </div>

            {/* Print controller bar */}
            <div className="pt-4 border-t flex flex-col sm:flex-row gap-4 items-center justify-between text-xs print:hidden">
              <span className="text-slate-400 font-sans">Gunakan printer untuk mengarsip bukti fisik SKL ini secara resmi.</span>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold rounded-lg shadow inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                Cetak SKL Digital
              </button>
            </div>

          </div>
        ) : (
          /* SHOW NEGATIVE NOT REGISTERED FEEDBACK VIEW */
          <div className="bg-slate-50 border rounded-xl p-8 text-center space-y-3.5 shadow-sm max-w-md mx-auto" id="graduation-failed-card">
            <span className="bg-red-50 text-red-700 font-mono text-[9px] font-black px-2 py-0.5 rounded border border-red-200 uppercase inline-block font-bold">
              DATA TIDAK DITEMUKAN
            </span>
            <h3 className="font-display font-black text-slate-900 text-base leading-snug">Siswa Belum Terdaftar</h3>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              Keluaran status tidak ditemukan. Pastikan NISN/NISM yang Anda masukkan sudah terdaftar di tata usaha kelas XII (contoh terdaftar: 1005234231 atau 1005678121), atau silakan hubungi kesiswaan.
            </p>
            <button
              onClick={() => setHasSearched(false)}
              className="px-4 py-1.5 bg-slate-100 hover:bg-slate-205 text-slate-600 font-sans text-xs rounded-lg cursor-pointer border border-slate-200"
            >
              Coba Lagi
            </button>
          </div>
        )
      )}
    </div>
  );
}
