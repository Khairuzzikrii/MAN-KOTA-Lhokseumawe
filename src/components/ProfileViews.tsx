/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Teacher } from '../types';
import { 
  Award, ShieldCheck, MapPin, Search, Filter, BookOpen, 
  School, Compass, CheckCircle2, FileText, Layout
} from 'lucide-react';

interface ProfileViewsProps {
  subTab: string;
}

export default function ProfileViews({ subTab }: ProfileViewsProps) {
  const { teachers } = useSchool();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Filtered Teacher results
  const filteredTeachers = teachers.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || t.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const keyFacilities = [
    {
      title: 'Masjid Al-Ikhlas',
      desc: 'Pusat pembinaan ruhiyah, ibadah harian berjamaah, kuliah subuh, serta program setoran hafalan Tahfidz Qur’an.',
      img: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Laboratorium Komputer & CBT',
      desc: 'Dilengkapi dengan 40 unit komputer berspesifikasi modern, jaringan serat optik LAN stabil, serta UPS cadangan daya.',
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Perpustakaan Digital Terakreditasi',
      desc: 'Memiliki koleksi ribuan judul literatur, area baca lesehan yang nyaman, AC, serta akses portal OPAC digital.',
      img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Laboratorium IPA Terpadu',
      desc: 'Pusat sains terpadu yang memadukan ruang praktikum Fisika, Kimia, dan Biologi dengan mikroskop digital dan kit rujukan modern.',
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="profile-container">
      {/* 1. SAMBUTAN KEPALA MADRASAH */}
      {subTab === 'sambutan' && (
        <div className="bg-white border rounded-2xl shadow-sm p-6 sm:p-10" id="profile-sambutan">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
            <div className="lg:col-span-1 text-center">
              <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-brand-green shadow-xl max-w-xs mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" 
                  alt="Drs. H. Sofyan, M.Pd"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <p className="font-display font-bold text-sm">Drs. H. Sofyan, M.Pd</p>
                  <p className="text-[10px] text-brand-gold font-mono uppercase tracking-wider">Kepala MAN Kota Lhokseumawe</p>
                </div>
              </div>
              <p className="text-xs font-mono text-slate-500 mt-4 leading-relaxed">NIP. 196901121995031002</p>
            </div>
            
            <div className="lg:col-span-2 space-y-5">
              <span className="bg-brand-green/10 text-brand-green font-mono text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Sambutan Resmi
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-display font-black text-slate-900 leading-tight">
                Membentuk Generasi Madani Unggul & Kompetitif
              </h2>
              <div className="w-12 h-1 bg-brand-gold rounded"></div>
              
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-sans">
                <p className="font-semibold italic text-emerald-800">
                  Assalamu’alaikum Warahmatullahi Wabarakatuh,
                </p>
                <p>
                  Puji syukur senantiasa kita panjatkan ke hadirat Allah Subhanahu Wa Ta’ala atas curahan rahmat, hidayah, dan bimbingan-Nya sehingga website resmi MAN Kota Lhokseumawe ini dapat hadir sebagai jendela informasi bagi masyarakat luas. Shalawat beserta salam semoga senantiasa terlimpah-curahkan kepada junjungan alam Nabi Besar Muhammad Shallallahu ‘Alaihi Wassalam.
                </p>
                <p>
                  Di era transformasi digital yang melaju begitu pesat, madrasah dituntut untuk berdiri di baris terdepan dalam menyelaraskan ilmu pengetahuan teknologi (sains) dengan kecerdasan spiritual berbasis akhlak karimah. Website ini bukan sekadar media publikasi statis, melainkan representasi ekosistem pendidikan kami yang terintegrasi, transparan, dan berdaya guna.
                </p>
                <p>
                  MAN Kota Lhokseumawe terus berkomitmen memberikan layanan pembelajaran bermutu prima, membina iklim penelitian (riset) mandiri remaja, serta mengukuhkan kompetensi keagamaan siswa melalui penguatan materi kitab rujukan (Tafsir, Hadits, Fiqih) dan program akselerasi Tahfidz Qur’an. Kami bersiap mengantarkan putra-putri terbaik bangsa menggapai perguruan tinggi impian sekaligus menjadi pilar peradaban Islam yang moderat dan unggul.
                </p>
                <p className="font-medium pt-4">
                  Wassalamu’alaikum Warahmatullahi Wabarakatuh.
                </p>
              </div>

              {/* Signature Section */}
              <div className="border-t pt-5 mt-6 flex justify-between items-center flex-wrap">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Tertanda,</p>
                  <p className="font-display font-extrabold text-slate-900 mt-1">Drs. H. Sofyan, M.Pd</p>
                  <p className="text-xs text-brand-green font-mono font-bold uppercase tracking-wider">Kepala MAN Kota Lhokseumawe</p>
                </div>
                <div className="w-24 h-12 opacity-40 border-b border-brand-green border-dashed flex items-center justify-center text-[10px] font-mono select-none">
                  [ Tanda Tangan ]
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. VISI & MISI */}
      {subTab === 'visi-misi' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="profile-visi-misi">
          {/* VISI */}
          <div className="bg-brand-green text-white p-8 sm:p-12 rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rounded-full blur-3xl"></div>
            <div className="space-y-4">
              <span className="bg-brand-gold text-brand-green-dark text-xs font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                VISI MADRASAH
              </span>
              <p className="text-2xl sm:text-3xl font-display font-extrabold leading-tight tracking-tight pt-3">
                "Terwujudnya Madrasah yang Unggul dalam Akademik, Kokoh dalam Karakter Islami, Mandiri dalam Riset, serta Tanggap Berwawasan Teknologi Global pada tahun 2028."
              </p>
            </div>
            <div className="border-t border-white/20 pt-6 mt-8 flex justify-between items-center">
              <span className="text-xs font-mono text-brand-gold">Rujukan Mutu Kemenag</span>
              <School className="w-10 h-10 text-brand-gold opacity-55" />
            </div>
          </div>

          {/* MISI */}
          <div className="bg-white border p-6 sm:p-10 rounded-2xl shadow-sm space-y-6">
            <span className="bg-brand-green/10 text-brand-green text-xs font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              MISI MADRASAH
            </span>
            <h3 className="text-xl font-display font-bold text-slate-900 border-l-4 border-brand-gold pl-3">
              Misi Pokok & Strategi Operasional
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              {[
                'Menyelenggarakan proses pembelajaran integratif yang memadukan kurikulum nasional madrasah dengan pemahaman ilmu agama (tafakkur fid-din) yang moderat.',
                'Menumbuhkan keteladanan akhlak mulia dan karakter mulia melalui pembiasaan kedisiplinan ibadah mandiri, tadarus dhuha, serta amalan islami sehari-hari.',
                'Mengembangkan bakat, minat, kreativitas sains, serta budaya gemar menulis (riset empiris) di kalangan dewan guru dan siswa.',
                'Meningkatkan mutu sarana prasarana berbasis teknologi guna menunjang pelayanan edukasi administrasi digital yang efektif dan transparan.',
                'Menjalin kolaborasi produktif dengan instansi akademis, pondok pesantren, industri, serta komite orang tua demi kemajuan mutu madrasah.'
              ].map((misi, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-gold-light flex items-center justify-center text-brand-gold-dark shrink-0 font-bold text-xs">
                    {i + 1}
                  </div>
                  <p className="leading-relaxed pt-0.5">{misi}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. SEJARAH SEKOLAH */}
      {subTab === 'sejarah' && (
        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 max-w-4xl mx-auto" id="profile-sejarah">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">LINIMASA PERJALANAN</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Sejarah MAN Kota Lhokseumawe</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
          </div>

          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-sans pt-4">
            <p>
              Madrasah Aliyah Negeri (MAN) Kota Lhokseumawe pada mulanya didirikan sebagai rintisan persiapan pendidikan guru dan dai terstruktur di daerah pesisir utara Aceh pada akhir dekade 1980-an. Seiring dengan peningkatan mutu kelulusan yang berkelanjutan dan restrukturisasi kelembagaan di bawah naungan Kementerian Agama Republik Indonesia, statusnya secara definitif dinegerikan berdasarkan Keputusan Menteri Agama (KMA) Republik Indonesia.
            </p>
            <p className="border-l-4 border-brand-gold bg-[#f8f9fa] p-4 rounded-r-lg italic pl-4 text-slate-800 font-medium">
              "Dari sebuah rintisan pemukiman sarana belajar sederhana di pusat kota, MAN Kota Lhokseumawe kini bertumbuh pesat menjadi icon madrasah modern kebanggaan masyarakat Kota Lhokseumawe, Aceh Utara, dan wilayah sekitarnya."
            </p>
            <p>
              Seiring dinamika pemerintahan otonom pembentukan kota administratif Kota Lhokseumawe secara mandiri pada tahun 2001, MAN Kota Lhokseumawe terus menata kemandirian manajemen sekolah, memperluas pembangunan laboratorium komputer, ruang riset, dan memperbanyak kuota kelas unggulan serta asrama siswa tahfidz.
            </p>
            <p>
              Kini, di era Revolusi Industri 4.0, madrasah telah bermetamorfosis sempurna dengan mengintegrasikan sistem pembelajaran asinkronus (E-learning), komputerisasi Computer-Based Test (CBT), pendirian studio podcast sains, serta berhasil meraih akreditasi "A" Unggul berkali-kali secara konsisten dari Badan Akreditasi Nasional Sekolah/Madrasah.
            </p>
          </div>
        </div>
      )}

      {/* 4. STRUKTUR ORGANISASI */}
      {subTab === 'struktur' && (
        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm space-y-8" id="profile-struktur">
          <div className="text-center space-y-2">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">BAGAN INTEGRATIV</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Struktur Organisasi Kepemimpinan</h2>
            <div className="w-12 h-1 bg-brand-gold mx-auto rounded"></div>
          </div>

          {/* Simple Structured responsive Tree Diagram */}
          <div className="space-y-6 pt-6 overflow-x-auto min-w-[700px] lg:min-w-0 pb-4">
            {/* Level 1: Kepala */}
            <div className="flex justify-center">
              <div className="bg-brand-green text-white p-4 rounded-xl border border-brand-gold text-center w-64 shadow-md">
                <p className="text-[10px] font-mono text-brand-gold uppercase tracking-wider font-bold">Kepala Madrasah</p>
                <p className="font-display font-bold text-sm mt-1">Drs. H. Sofyan, M.Pd</p>
                <p className="text-[9px] text-slate-300 font-sans mt-0.5">Penanggung Jawab Utama & Manajer</p>
              </div>
            </div>

            {/* Link line */}
            <div className="h-6 w-0.5 bg-slate-300 mx-auto"></div>

            {/* Level 2: Komite & Tata Usaha */}
            <div className="flex justify-center space-x-12 relative">
              <div className="absolute top-1/2 inset-x-1/4 h-0.5 bg-slate-300 -translate-y-1/2 z-0"></div>
              
              <div className="bg-brand-gold-light border border-brand-gold text-slate-800 p-3.5 rounded-xl text-center w-52 shadow-sm relative z-10">
                <p className="text-[9px] font-mono text-brand-gold-dark uppercase tracking-wider font-bold">Ketua Komite Hubungan Orangtua</p>
                <p className="font-display font-bold text-xs mt-1">H. Muzakir Hasan, Lc</p>
                <p className="text-[9px] text-slate-500 font-sans mt-0.5">Penasihat Strategis Sekolah</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 text-slate-800 p-3.5 rounded-xl text-center w-52 shadow-sm relative z-10">
                <p className="text-[9px] font-mono text-slate-500 uppercase tracking-wider font-bold">Kepala Urusan Tata Usaha</p>
                <p className="font-display font-bold text-xs mt-1">M. Yusuf, S.E</p>
                <p className="text-[9px] text-slate-500 font-sans mt-0.5">Urusan Administrasi, Keuangan & Sarpras</p>
              </div>
            </div>

            {/* Link line */}
            <div className="h-6 w-0.5 bg-slate-300 mx-auto"></div>

            {/* Level 3: Wakil Kepala (Waka) */}
            <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto pt-2 relative">
              <div className="absolute top-0 inset-x-[12.5%] h-0.5 bg-slate-300 z-0"></div>
              
              <div className="bg-white border-2 border-brand-green/35 text-slate-800 p-3 rounded-lg text-center shadow-sm relative z-10">
                <p className="text-[8px] font-mono text-brand-green font-bold uppercase tracking-wider">Waka Kurikulum</p>
                <p className="font-display font-bold text-xs mt-1">Safrizal, S.Pd.I</p>
              </div>

              <div className="bg-white border-2 border-brand-green/35 text-slate-800 p-3 rounded-lg text-center shadow-sm relative z-10">
                <p className="text-[8px] font-mono text-brand-green font-bold uppercase tracking-wider">Waka Kesiswaan</p>
                <p className="font-display font-bold text-xs mt-1">Dra. Hj. Cut Nyak Fatimah</p>
              </div>

              <div className="bg-white border-2 border-brand-green/35 text-slate-800 p-3 rounded-lg text-center shadow-sm relative z-10">
                <p className="text-[8px] font-mono text-brand-green font-bold uppercase tracking-wider">Waka Sarana Prasarana</p>
                <p className="font-display font-bold text-xs mt-1">Irwan Dani, S.T</p>
              </div>

              <div className="bg-white border-2 border-brand-green/35 text-slate-800 p-3 rounded-lg text-center shadow-sm relative z-10">
                <p className="text-[8px] font-mono text-brand-green font-bold uppercase tracking-wider">Waka Humas Hubungan Publik</p>
                <p className="font-display font-bold text-xs mt-1">Syamsiah, S.Ag</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. DATA GURU & STAF */}
      {subTab === 'guru' && (
        <div className="space-y-6" id="profile-guru">
          <div className="text-center space-y-2">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">SISTEM GURU DIRETKORI</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Direktori Guru & Staf Pengajar</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">Daftar tenaga pendidik profesional yang berdedikasi tinggi serta ahli dalam pengampu bidang masing-masing.</p>
          </div>

          {/* Search and Filters */}
          <div className="p-4 bg-slate-50 border rounded-xl flex flex-col md:flex-row gap-3.5 items-center justify-between" id="teacher-filter-bar">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari guru berdasarkan nama, mapel, atau status..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs border border-slate-205 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-brand-green"
              />
            </div>

            {/* Dropdown status Filter */}
            <div className="flex items-center space-x-2 shrink-0 w-full md:w-auto">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-medium text-slate-700">Status Kepegawaian:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="text-xs border border-slate-205 bg-white text-slate-800 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-brand-green"
              >
                <option value="ALL">Semua Guru ({teachers.length})</option>
                <option value="PNS">Pegawai Negeri Sipil (PNS)</option>
                <option value="PPPK">PPPK Kementerian Agama</option>
                <option value="Honororer">Guru Honorer / Praktisi</option>
              </select>
            </div>
          </div>

          {/* Teacher Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredTeachers.map((teacher) => (
              <div 
                key={teacher.id}
                className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-5 flex items-start space-x-4">
                  {/* Photo Profile */}
                  <img 
                    src={teacher.imageUrl} 
                    alt={teacher.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-150"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1">
                    <span className="bg-brand-gold/15 text-brand-gold-dark text-[8px] font-mono font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                      {teacher.status}
                    </span>
                    <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                      {teacher.name}
                    </h3>
                    <p className="text-xs text-brand-green font-medium">
                      {teacher.role}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-slate-50 border-t flex flex-col text-xs text-slate-600 gap-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">NIP:</span>
                    <span className="font-mono text-slate-700 font-semibold">{teacher.nip === 'PNS' ? '-' : teacher.nip}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Mata Pelajaran:</span>
                    <span className="font-medium text-slate-800">{teacher.subject}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Gender:</span>
                    <span>{teacher.gender === 'L' ? 'Laki-laki (Ikhwan)' : 'Perempuan (Akhwat)'}</span>
                  </div>
                </div>
              </div>
            ))}

            {filteredTeachers.length === 0 && (
              <div className="col-span-full text-center py-12 p-4 bg-slate-50 border border-dashed rounded-xl">
                <p className="text-stone-550 font-medium">Guru atau Staf pengajar yang Anda cari tidak ditemukan.</p>
                <p className="text-xs text-slate-400 mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. FASILITAS MADRASAH */}
      {subTab === 'fasilitas' && (
        <div className="space-y-8" id="profile-fasilitas">
          <div className="text-center space-y-2">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">SARANA PRASARANA</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Fasilitas Penunjang Pendidikan</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {keyFacilities.map((fac, idx) => (
              <div 
                key={idx}
                className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row"
              >
                <div className="md:w-1/2 h-52 md:h-full relative overflow-hidden bg-slate-100">
                  <img 
                    src={fac.img} 
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-2.5">
                  <h3 className="font-display font-extrabold text-base text-brand-green">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {fac.desc}
                  </p>
                  <div className="flex items-center space-x-1 text-[10px] text-brand-gold-dark font-sans font-bold">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>Tersedia & Siap Digunakan</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. AKREDITASI & PRESTASI */}
      {subTab === 'akreditasi' && (
        <div className="space-y-8" id="profile-akreditasi">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Akreditasi certificate Card */}
            <div className="lg:col-span-1 bg-gradient-to-br from-brand-green to-brand-green-dark text-white p-8 rounded-2xl border border-brand-gold shadow-md text-center space-y-4">
              <Award className="w-16 h-16 text-brand-gold mx-auto animate-float" />
              <div className="space-y-1">
                <h3 className="text-xs font-mono font-bold text-brand-gold-light uppercase tracking-widest">Akreditasi Madrasah</h3>
                <div className="text-4xl font-display font-black tracking-tight text-white py-2">
                  A (UNGGUL)
                </div>
                <p className="text-xs text-slate-200">Berdasarkan Keputusan Badan Akreditasi Nasional Pendidikan Dasar dan Menengah (BAN-PDM) Republik Indonesia.</p>
              </div>
              <div className="border-t border-white/20 pt-4 text-xs font-mono text-brand-gold-light space-y-1 text-center">
                <p>No Sertifikat: BAN/MA-431/2025</p>
                <p>Berlaku s.d: Desember 2030</p>
              </div>
              <span className="inline-block bg-white/10 text-white border border-white/20 font-bold px-3 py-1 text-[10px] rounded uppercase">
                Valid & Terverifikasi
              </span>
            </div>

            {/* Right Prestasi list */}
            <div className="lg:col-span-2 bg-white border p-6 sm:p-10 rounded-2xl shadow-sm space-y-6">
              <span className="bg-brand-green/10 text-brand-green text-xs font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Prestasi Madrasah 3 Tahun Terakhir
              </span>
              <h3 className="text-xl font-display font-black text-slate-900 border-l-4 border-brand-gold pl-3">
                Lintas Penghargaan Akademik & Madrasah
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    year: '2026',
                    award: 'Medali Emas Bidang Astronomi Kejuaraan OSN Nasional',
                    desc: 'Diberikan oleh Balai Pengembangan Talenta Indonesia (BPTI) Kemendikbudristek.'
                  },
                  {
                    year: '2025',
                    award: 'Juara I Madrasah Sehat Tingkat Kemenag Provinsi Aceh',
                    desc: 'Evaluasi integrasi kebersihan kantin, lingkungan belajar, dan pemupukan sisa limbah organik.'
                  },
                  {
                    year: '2025',
                    award: 'Peringkat Terbaik II Lomba Riset Remaja Indonesia (Karya Ilmiah)',
                    desc: 'Riset pemanfaatan air asin tambak Lhokseumawe sebagai energi listrik sel volta sederhana.'
                  },
                  {
                    year: '2024',
                    award: 'Juara Umum Pekan Seni & Olahraga Madrasah (Aksioma) Regional',
                    desc: 'Meraih medali emas terbanyak cabang Pidato Bahasa Arab, Kaligrafi, Tenis Meja, dan Tahfidz.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 border rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-brand-gold-light flex items-center justify-center text-brand-gold-dark font-display font-extrabold text-sm shrink-0 border border-brand-gold/20">
                      {item.year}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-extrabold text-sm text-slate-900 leading-tight">{item.award}</h4>
                      <p className="text-xs text-slate-500 font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. ZONA INTEGRITAS (ZI) */}
      {subTab === 'zi' && (
        <div className="space-y-8" id="profile-zi">
          <div className="text-center space-y-2 mb-8">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest font-bold">ZONA INTEGRITAS (ZI)</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Pembangunan Wilayah Bebas dari Korupsi (WBK)</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">Komitmen MAN Kota Lhokseumawe menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih Melayani (WBBM) Kementerian Agama RI.</p>
          </div>

          <div className="bg-slate-50 border rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#E6F4EA] flex items-center justify-center shrink-0 border border-[#CEECD3]">
              <ShieldCheck className="w-9 h-9 text-brand-green" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h3 className="font-display font-extrabold text-[#1E293B] text-base leading-tight">Maklumat Pelayanan & Anti-Gratifikasi</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                "Kami seluruh ASN dan Staf MAN Kota Lhokseumawe bertekad menyelenggarakan pelayanan publik dengan bersih, ramah, tertib, dan transparan. Kami berkomitmen menolak segala bentuk suap, pungutan liar, gratifikasi barang/jasa, serta nepotisme demi keadilan pendidikan umat."
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <button 
                onClick={() => alert('Mengunduh dokumen "Pakta Integritas Madrasah.pdf". Berkas tersimpan di folder download Anda.')}
                className="w-full px-4 py-2.5 bg-brand-green hover:bg-brand-green-light border border-brand-gold shadow text-white font-sans font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Unduh Pakta Integritas</span>
              </button>
            </div>
          </div>

          {/* Grid of the 6 Areas */}
          <div>
            <h3 className="text-xs font-mono font-bold text-brand-gold uppercase tracking-widest mb-4">6 Area Kerja Pilar ZI</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  area: 'Area I',
                  title: 'Manajemen Perubahan',
                  desc: 'Penyusunan tim pembangunan ZI, sosialisasi kesadaran budaya anti-korupsi berkala, serta evaluasi rencana agen perubahan madrasah.',
                  doc: 'Bukti Rencana Kerja Area I.pdf',
                  size: '420 KB'
                },
                {
                  area: 'Area II',
                  title: 'Penataan Tatalaksana',
                  desc: 'Peningkatan implementasi Standard Operating Procedure (SOP) tata pamong, integrasi portal e-Kinerja, dan digitalisasi pelayanan publik.',
                  doc: 'Peta Alur SOP Pelayanan TU.pdf',
                  size: '1.2 MB'
                },
                {
                  area: 'Area III',
                  title: 'Penataan Sistem Manajemen SDM',
                  desc: 'Penerapan rotasi internal berdasarkan kompetensi, penegakan disiplin ASN Kemenag, dan pemberian piagam Reward & Punishment.',
                  doc: 'SK Mutasi & Prestasi SDM.pdf',
                  size: '890 KB'
                },
                {
                  area: 'Area IV',
                  title: 'Penguatan Akuntabilitas',
                  desc: 'Keterlibatan pimpinan dalam penyusunan RKAS/DIPA Kemenag, pemantauan dashboard kinerja madrasah, dan laporan capaian target.',
                  doc: 'Laporan Capaian Kinerja DIPA.pdf',
                  size: '2.1 MB'
                },
                {
                  area: 'Area V',
                  title: 'Penguatan Pengawasan',
                  desc: 'Penyediaan sistem pengaduan internal (Whistle Blowing System), saluran pelaporan gratifikasi, dan sosialisasi pencegahan KKN.',
                  doc: 'Laporan WhistleBlowingSystem.pdf',
                  size: '610 KB'
                },
                {
                  area: 'Area VI',
                  title: 'Peningkatan Kualitas Pelayanan Publik',
                  desc: 'Pengadaan standar pelayanan ramah difabel, kotak saran kepuasan publik, serta ruang tunggu PTSP (Pelayanan Terpadu Satu Pintu) ber-AC.',
                  doc: 'Hasil Survei Kepuasan Tamu (IKM).pdf',
                  size: '1.5 MB'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border rounded-xl p-5 hover:border-brand-green/35 shadow-sm transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="bg-brand-gold/10 text-brand-green font-mono text-[9px] font-black px-2 py-0.5 rounded border border-brand-gold/20 uppercase">
                      {item.area}
                    </span>
                    <h4 className="font-display font-extrabold text-sm text-[#1E293B]">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-mono italic truncate max-w-[150px]" title={item.doc}>
                      {item.doc}
                    </span>
                    <button 
                      onClick={() => alert(`Mengunduh berkas bukti "${item.doc}" (${item.size}) untuk Area Pengawasan Zona Integritas secara sukses.`)}
                      className="text-brand-green font-bold flex items-center gap-1 hover:underline cursor-pointer font-sans"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Unduh Bukti ({item.size})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
