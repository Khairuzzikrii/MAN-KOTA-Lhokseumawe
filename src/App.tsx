/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';
import StatsSection from './components/StatsSection';
import ProfileViews from './components/ProfileViews';
import AcademicViews from './components/AcademicViews';
import PpdbViews from './components/PpdbViews';
import PortalViews from './components/PortalViews';
import LibraryViews from './components/LibraryViews';
import PublicationViews from './components/PublicationViews';
import ContactViews from './components/ContactViews';
import AdminDashboard from './components/AdminDashboard';
import { initialCalendarEvents } from './data/defaultData';
import { Calendar, BookOpen, Clock, FileText, ChevronRight, Award, GraduationCap, HelpCircle } from 'lucide-react';

function AppContent() {
  const { news, agendas, theme } = useSchool();
  const [currentTab, setCurrentTab] = useState('home');
  const [subTab, setSubTab] = useState<string | null>(null);

  // Helper callback passed down to child components to route tabs
  const setTab = (tab: string, sub?: string) => {
    setCurrentTab(tab);
    setSubTab(sub || null);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Render content according to the selected tab
  const renderTabContent = () => {
    switch (currentTab) {
      case 'home':
        return <HomepageLayout setTab={setTab} news={news} agendas={agendas} />;
      case 'profil':
        return <ProfileViews subTab={subTab || 'sambutan'} />;
      case 'akademik':
        return <AcademicViews subTab={subTab || 'kurikulum'} />;
      case 'ppdb':
        return <PpdbViews subTab={subTab || 'ppdb-alur'} />;
      case 'perpus':
        return <LibraryViews />;
      case 'portal':
        return <PortalViews />;
      case 'publikasi':
        return <PublicationViews subTab={subTab || 'berita'} />;
      case 'kontak':
        return <ContactViews subTab={subTab || 'hubungi'} />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomepageLayout setTab={setTab} news={news} agendas={agendas} />;
    }
  };

  return (
    <div className={`flex flex-col min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`} id="school-app">
      <Navbar currentTab={currentTab} setTab={setTab} subTab={subTab} />
      
      {/* Dynamic Main Body Content */}
      <main className="flex-grow">
        {renderTabContent()}
      </main>

      <Footer setTab={setTab} />
    </div>
  );
}

// -------------------------------------------------------------
// HOMEPAGE MAIN SCREEN LAYOUT
// -------------------------------------------------------------
interface HomepageProps {
  setTab: (tab: string, sub?: string) => void;
  news: any[];
  agendas: any[];
}

function HomepageLayout({ setTab, news, agendas }: HomepageProps) {
  const { theme } = useSchool();
  // Take top 4 headlines for news
  const recentNews = news.slice(0, 4);

  return (
    <div className={`space-y-16 pb-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-800'} animate-fade-in`} id="homepage-root">
      {/* 1. Hero Auto Carousel Slider */}
      <HeroSlider setTab={setTab} />

      {/* 2. Welcome speech and brief introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-fade-in" id="welcome-message-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photos headmaster */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3.5">
            <div className={`w-56 h-56 rounded-full overflow-hidden border-4 border-brand-gold shadow-lg transform hover:rotate-3 transition-all duration-300 ${theme === 'dark' ? 'bg-slate-850' : 'bg-white'}`}>
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80" 
                alt="Kepala Madrasah MAN Kota Lhokseumawe"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className={`font-display font-extrabold text-sm uppercase mt-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>H. Sulaidi, M.A.</h4>
              <p className="text-[10px] font-mono font-bold text-brand-gold-dark uppercase tracking-widest mt-0.5">Kepala Madrasah Aliyah</p>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="lg:col-span-8 space-y-4">
            <span className={`font-sans font-bold text-[10px] tracking-widest px-3 py-1.5 rounded uppercase ${theme === 'dark' ? 'bg-brand-green text-brand-gold' : 'bg-brand-gold-light text-brand-gold-dark'}`}>
              SAMBUTAN KEPALA MADRASAH
            </span>
            <h3 className={`text-2xl sm:text-3xl font-display font-black leading-tight uppercase tracking-tight ${theme === 'dark' ? 'text-brand-gold' : 'text-brand-green'}`}>
              Assalamu’alaikum Warahmatullahi Wabarakatuh
            </h3>
            <div className="w-16 h-1 bg-brand-gold"></div>
            
            <p className={`text-xs sm:text-sm leading-relaxed font-sans font-light ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              Selamat datang di portal resmi MAN Kota Lhokseumawe. Merupakan kehormatan besar merawat tunas-tunas intelektual islami di ujung gerbang samudera pasai ini. Kami berterima kasih atas berkah limpahan amanah wali siswa sekalian dalam menyambut dinamika masyarakat modern yang tak luput dari perkembangan sains teknologi. 
            </p>
            <p className={`text-xs sm:text-sm leading-relaxed font-sans font-light ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              Madrasah Aliyah Negeri Kota Lhokseumawe tiada henti menyelaraskan kurikulum akhlak kemanusiaan dengan ketangkasan digital modern. Kami merancang ekosistem pembelajaran yang aman, andal, kaya riset sains murni, bahasa internasional, serta hafalan Al-Qur'an terstruktur agar para siswa siap mendunia dengan landasan keimanan yang kokoh.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setTab('profil', 'sambutan')}
                className={`font-sans font-bold text-xs uppercase px-6 py-3 rounded tracking-wider border transition duration-205 cursor-pointer ${theme === 'dark' ? 'text-brand-gold border-brand-gold bg-slate-850 hover:bg-brand-gold hover:text-slate-950' : 'text-slate-950 border-brand-gold bg-brand-gold hover:bg-slate-950 hover:text-white hover:border-slate-950'}`}
              >
                Selengkapnya Mengenai Kami
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Numbers statistics section */}
      <StatsSection />

      {/* 4. News & Announcements feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2" id="latest-news-updates">
        <div className={`flex justify-between items-end border-b pb-3 mb-8 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`}>
          <div className="space-y-1">
            <span className="text-brand-gold font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest">KORAN MADRASAH OFFICIAL</span>
            <h3 className={`text-xl sm:text-2.5xl font-display font-black uppercase tracking-tight mt-0.5 ${theme === 'dark' ? 'text-brand-gold' : 'text-brand-green'}`}>Warta Berita & Pengumuman</h3>
          </div>
          <button
            onClick={() => setTab('publikasi', 'berita')}
            className={`font-sans font-bold text-xs inline-flex items-center gap-1 hover:underline cursor-pointer ${theme === 'dark' ? 'text-amber-400 hover:text-amber-300' : 'text-brand-green hover:text-brand-gold'}`}
          >
            Saring Semua Berita
            <ChevronRight size={14} className="text-brand-gold" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentNews.map((item) => (
            <div 
              key={item.id}
              onClick={() => setTab('publikasi', 'berita')}
              className={`border rounded-lg overflow-hidden shadow-xs hover:shadow-md hover:border-brand-gold/45 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-150 text-slate-800'}`}
            >
              <div className="h-40 bg-slate-100 relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
                <span className="absolute top-2.5 left-2.5 bg-brand-gold text-slate-950 font-sans text-[8px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between space-y-2.5">
                <h4 className={`font-display font-bold text-xs sm:text-sm line-clamp-3 leading-snug uppercase tracking-tight group-hover:text-brand-gold transition-colors ${theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}>
                  {item.title}
                </h4>
                <div className={`flex justify-between text-[10px] font-sans border-t pt-2 mt-auto ${theme === 'dark' ? 'text-slate-400 border-slate-700' : 'text-slate-400 border-slate-50'}`}>
                  <span>{item.date}</span>
                  <span className={`${theme === 'dark' ? 'text-brand-gold font-bold' : 'text-brand-green font-semibold'}`}>Oleh: Humas</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Quick Links & Academic Timelines */}
      <section className={`border-y py-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#f8f9fa] border-slate-150/60'}`} id="school-directories-highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left links columns */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className={`font-display font-extrabold uppercase text-xs sm:text-sm tracking-wider border-b pb-2.5 ${theme === 'dark' ? 'text-brand-gold border-slate-800' : 'text-brand-green border-slate-200'}`}>
              Layanan Siswa Terpadu
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => setTab('ppdb', 'ppdb-daftar')}
                className={`p-5 rounded-lg border hover:shadow hover:border-brand-gold transition-all cursor-pointer flex items-start gap-3.5 group ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-150 text-slate-850'}`}
              >
                <div className={`w-10 h-10 shrink-0 border rounded-lg flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-brand-gold group-hover:bg-brand-gold group-hover:text-slate-950' : 'bg-slate-50 border-slate-100 text-brand-green group-hover:bg-brand-gold group-hover:text-slate-950'}`}>
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-display font-black text-xs sm:text-xs uppercase tracking-wider group-hover:text-brand-gold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>PPDB Online TA 2026/2027</h4>
                  <p className={`text-[10px] font-sans mt-0.5 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Penerimaan peserta didik baru madrasah unggulan reguler jalur rapor murni.</p>
                </div>
              </div>

              <div 
                onClick={() => setTab('portal')}
                className={`p-5 rounded-lg border hover:shadow hover:border-brand-gold transition-all cursor-pointer flex items-start gap-3.5 group ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-150 text-slate-850'}`}
              >
                <div className={`w-10 h-10 shrink-0 border rounded-lg flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-brand-gold group-hover:bg-brand-gold group-hover:text-slate-950' : 'bg-slate-50 border-slate-100 text-brand-green group-hover:bg-brand-gold group-hover:text-slate-950'}`}>
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-display font-black text-xs sm:text-xs uppercase tracking-wider group-hover:text-brand-gold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>E-Learning & Portal Siswa</h4>
                  <p className={`text-[10px] font-sans mt-0.5 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Unggah tugas kelas harian, cek simulasi CBT, dan unduh rekaman silabus ajar.</p>
                </div>
              </div>

              <div 
                onClick={() => setTab('perpus')}
                className={`p-5 rounded-lg border hover:shadow hover:border-brand-gold transition-all cursor-pointer flex items-start gap-3.5 group ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-150 text-slate-850'}`}
              >
                <div className={`w-10 h-10 shrink-0 border rounded-lg flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-brand-gold group-hover:bg-brand-gold group-hover:text-slate-950' : 'bg-slate-50 border-slate-100 text-brand-green group-hover:bg-brand-gold group-hover:text-slate-950'}`}>
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-display font-black text-xs sm:text-xs uppercase tracking-wider group-hover:text-brand-gold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Maktabah Perpustakaan</h4>
                  <p className={`text-[10px] font-sans mt-0.5 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Cari daftar ketersediaan buku paket sains Kemenag serta referensi kitab kuning.</p>
                </div>
              </div>

              <div 
                onClick={() => setTab('kontak', 'faq')}
                className={`p-5 rounded-lg border hover:shadow hover:border-brand-gold transition-all cursor-pointer flex items-start gap-3.5 group ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-150 text-slate-850'}`}
              >
                <div className={`w-10 h-10 shrink-0 border rounded-lg flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-brand-gold group-hover:bg-brand-gold group-hover:text-slate-950' : 'bg-slate-50 border-slate-100 text-brand-green group-hover:bg-brand-gold group-hover:text-slate-950'}`}>
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-display font-black text-xs sm:text-xs uppercase tracking-wider group-hover:text-brand-gold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Kolom FAQ & PPID</h4>
                  <p className={`text-[10px] font-sans mt-0.5 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Petunjuk tata tertib, jam kepembelajaran madrasah serta ketentuan lainnya.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right upcoming events */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className={`font-display font-extrabold uppercase text-xs sm:text-sm tracking-wider border-b pb-3 ${theme === 'dark' ? 'text-brand-gold border-slate-800' : 'text-brand-green border-slate-200'}`}>
              Agenda Kegiatan Terkini
            </h3>

            <div className="space-y-3.5">
              {agendas.slice(0, 3).map((ag) => (
                <div key={ag.id} className={`p-3.5 border rounded-lg flex items-start gap-3 hover:border-brand-gold transition-all group ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-150'}`}>
                  <div className={`p-2.5 rounded-lg text-center font-sans shrink-0 w-16 border transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-800 border-slate-750 text-slate-100 group-hover:bg-brand-gold group-hover:text-slate-900' : 'bg-slate-50 border-slate-100 text-slate-700 group-hover:bg-brand-gold group-hover:text-slate-950'}`}>
                    <Calendar className="w-4 h-4 text-brand-gold-dark group-hover:text-slate-950 mx-auto mb-0.5 transition-colors" />
                    <span className="text-[9px] font-bold text-slate-400 group-hover:text-slate-900 tracking-wider block transition-colors">{ag.date.split(' ')[0]} {ag.date.split(' ')[1] || 'Jun'}</span>
                  </div>
                  <div className="space-y-1 py-0.5">
                    <h4 className={`font-display font-bold text-xs sm:text-xs line-clamp-1 uppercase tracking-tight group-hover:text-brand-gold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{ag.title}</h4>
                    <p className={`text-[10px] font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{ag.time} • {ag.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <SchoolProvider>
      <AppContent />
    </SchoolProvider>
  );
}
