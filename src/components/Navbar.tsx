/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { 
  Menu, X, ChevronDown, BookOpen, GraduationCap, FileText, 
  HelpCircle, UserCheck, ShieldAlert, LogOut, Phone, Sun, Moon
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string, sub?: string) => void;
  subTab: string | null;
}

export default function Navbar({ currentTab, setTab, subTab }: NavbarProps) {
  const { isAdminLoggedIn, logoutAdmin, studentAuth, logoutStudent, theme, toggleTheme } = useSchool();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const menuItems = [
    {
      id: 'home',
      label: 'Beranda',
      hasSub: false
    },
    {
      id: 'profil',
      label: 'Profil Sekolah',
      hasSub: true,
      subItems: [
        { id: 'sambutan', label: 'Sambutan Kepala Madrasah' },
        { id: 'visi-misi', label: 'Visi & Misi' },
        { id: 'sejarah', label: 'Sejarah Sekolah' },
        { id: 'struktur', label: 'Struktur Organisasi' },
        { id: 'guru', label: 'Data Guru & Staf' },
        { id: 'fasilitas', label: 'Fasilitas Madrasah' },
        { id: 'akreditasi', label: 'Akreditasi & Prestasi' },
        { id: 'zi', label: 'Zona Integritas (ZI)' }
      ]
    },
    {
      id: 'akademik',
      label: 'Akademik & Kesiswaan',
      hasSub: true,
      subItems: [
        { id: 'kurikulum', label: 'Informasi Kurikulum' },
        { id: 'roster', label: 'Jadwal Roster Pelajaran' },
        { id: 'kalender', label: 'Kalender Akademik' },
        { id: 'ujian', label: 'Jadwal Ujian (CBT)' },
        { id: 'ekstra', label: 'Data Ekstrakurikuler' },
        { id: 'agenda', label: 'Agenda Kegiatan Madrasah' },
        { id: 'kelulusan', label: 'Pengumuman Kelulusan (NISN)' }
      ]
    },
    {
      id: 'ppdb',
      label: 'PPDB & Layanan',
      hasSub: true,
      subItems: [
        { id: 'ppdb-alur', label: 'Alur & Jadwal Seleksi' },
        { id: 'ppdb-daftar', label: 'Formulir PPDB Online' },
        { id: 'ppdb-status', label: 'Cek Status Verifikasi' }
      ]
    },
    {
      id: 'perpus',
      label: 'Perpustakaan Digital',
      hasSub: false
    },
    {
      id: 'portal',
      label: 'Portal Siswa',
      hasSub: false
    },
    {
      id: 'publikasi',
      label: 'Informasi & Publikasi',
      hasSub: true,
      subItems: [
        { id: 'berita', label: 'Berita & Artikel' },
        { id: 'pengumuman', label: 'Pengumuman Resmi' },
        { id: 'galeri-foto', label: 'Galeri Foto' },
        { id: 'galeri-video', label: 'Galeri Video' },
        { id: 'download-area', label: 'Download Area' }
      ]
    },
    {
      id: 'kontak',
      label: 'Kontak & PPID',
      hasSub: true,
      subItems: [
        { id: 'hubungi', label: 'Hubungi Kami' },
        { id: 'ppid', label: 'Layanan PPID' },
        { id: 'faq', label: 'FAQ (Tanya Jawab)' }
      ]
    }
  ];

  const handleNavClick = (tabId: string, subId?: string) => {
    setTab(tabId, subId);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`sticky top-0 z-50 w-full shadow-sm border-b transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white shadow-xl' : 'bg-white border-slate-100 text-slate-800'}`}>
      {/* Top Banner Accent */}
      <div className={`py-2 px-4 text-xs sm:text-sm font-sans flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100 border-b border-slate-800' : 'bg-brand-green-dark text-white'}`}>
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            MAN Kota Lhokseumawe • Madrasah Unggulan Nasional
          </span>
        </div>
        <div className="flex items-center space-x-4 text-slate-100">
          <span className="hover:underline flex items-center gap-1 cursor-pointer">
            <Phone size={12} className="text-brand-gold" /> +62 (0645) 43212
          </span>
          <span className="opacity-40">|</span>
          <span className="font-display font-semibold italic text-brand-gold">Unggul, Islami & Saintifik</span>
        </div>
      </div>

      {/* Main Navbar Elements */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center" id="nav-container">
        {/* LOGO AND BRANDING */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 cursor-pointer group"
          id="nav-logo-group"
        >
          <div className="w-11 h-11 rounded-full bg-brand-gold flex items-center justify-center text-brand-green shadow-md transform group-hover:scale-105 transition-all">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className={`text-lg font-display font-black leading-none tracking-tight ${theme === 'dark' ? 'text-brand-gold' : 'text-brand-green'}`}>
              MAN KOTA LHOKSEUMAWE
            </h1>
            <p className={`text-[10px] uppercase tracking-widest font-semibold mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-[#666666]'}`}>
              Madrasah Aliyah Negeri • Unggul & Islami
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-1" id="desktop-menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="relative group/menu">
              {item.hasSub ? (
                <div>
                  <button 
                    onClick={() => toggleDropdown(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      currentTab === item.id 
                        ? theme === 'dark'
                          ? 'bg-brand-gold/25 text-brand-gold font-bold'
                          : 'bg-brand-gold/15 text-brand-green font-bold'
                        : theme === 'dark'
                          ? 'text-slate-300 hover:text-brand-gold'
                          : 'text-slate-700 hover:text-brand-gold'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover/menu:text-brand-gold transition-transform group-hover/menu:rotate-180" />
                  </button>
                  {/* Dropdown menu markup */}
                  <div className={`absolute left-0 mt-2 w-64 border rounded-lg shadow-xl py-2 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 transform translate-y-2 group-hover/menu:translate-y-0 z-50 ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white shadow-xl' : 'bg-white border-slate-100 text-slate-600'}`}>
                    <div className="h-1 bg-brand-gold w-full absolute top-0 left-0 rounded-t-lg"></div>
                    {item.subItems?.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick(item.id, sub.id)}
                        className={`w-full text-left px-4 py-2.5 text-xs font-sans font-medium transition-colors flex items-center space-x-2 ${
                          theme === 'dark' ? 'hover:bg-slate-700 hover:text-brand-gold' : 'hover:bg-slate-50 hover:text-brand-gold'
                        } ${
                          subTab === sub.id 
                            ? theme === 'dark' && subTab === sub.id
                              ? 'bg-slate-900 text-brand-gold font-bold border-l-4 border-brand-gold' 
                              : 'bg-brand-gold-light text-brand-gold-dark font-semibold border-l-4 border-brand-gold'
                            : theme === 'dark' ? 'text-slate-305' : 'text-slate-600'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                        <span>{sub.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    currentTab === item.id 
                      ? theme === 'dark'
                        ? 'bg-brand-gold text-slate-950 font-bold shadow-sm'
                        : 'bg-brand-gold text-brand-green font-bold shadow-sm' 
                      : theme === 'dark'
                        ? 'text-slate-300 hover:text-brand-gold'
                        : 'text-slate-700 hover:text-brand-gold'
                  }`}
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* ADMIN & STUDENT QUICK CHANGER */}
        <div className="hidden lg:flex items-center space-x-3" id="nav-meta-auth-actions">
          {/* Desktop Theme Switcher */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center p-2 rounded-full border transition-all duration-200 cursor-pointer ${
              theme === 'dark' 
                ? 'border-slate-700 bg-slate-800 text-amber-400 hover:bg-slate-705 hover:text-amber-300' 
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-150'
            }`}
            title={theme === 'dark' ? 'Aktifkan Mode Terang' : 'Aktifkan Mode Gelap'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {isAdminLoggedIn ? (
            <button
              onClick={() => handleNavClick('admin')}
              className="flex items-center space-x-1.5 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-bold shadow-sm transition-all cursor-pointer"
            >
              <ShieldAlert size={14} />
              <span>CMS Admin</span>
            </button>
          ) : studentAuth ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleNavClick('portal')}
                className={`border px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1 cursor-pointer ${
                  theme === 'dark' 
                    ? 'bg-slate-800 text-brand-gold border-slate-700' 
                    : 'bg-brand-gold-light text-brand-green border-brand-gold/30'
                }`}
              >
                <UserCheck size={13} className="text-brand-gold-dark" />
                <span className="truncate max-w-[80px]">{studentAuth.name}</span>
              </button>
              <button 
                onClick={logoutStudent}
                title="Log Out Siswa"
                className="p-1.5 hover:bg-rose-50 text-rose-500 rounded-full transition-colors cursor-pointer"
              >
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleNavClick('admin')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-350 cursor-pointer shadow-sm border ${
                theme === 'dark'
                  ? 'bg-brand-green-light border-brand-green text-white hover:bg-brand-green'
                  : 'bg-brand-green text-white hover:bg-brand-green-light hover:text-white border-brand-green'
              }`}
            >
              Login Operator
            </button>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden flex items-center space-x-2" id="nav-mobile-trigger-group">
          {/* Mobile Theme Switcher */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center p-2 rounded-full border transition-all duration-200 cursor-pointer ${
              theme === 'dark' 
                ? 'border-slate-750 bg-slate-800 text-amber-400 hover:bg-slate-700' 
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
            }`}
            title={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {isAdminLoggedIn && (
            <button
              onClick={() => handleNavClick('admin')}
              className="p-1.5 bg-rose-600 text-white rounded-full shadow"
            >
              <ShieldAlert size={16} />
            </button>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-md transition-colors cursor-pointer ${
              theme === 'dark' 
                ? 'text-slate-300 hover:text-brand-gold hover:bg-slate-800' 
                : 'text-slate-600 hover:text-brand-gold hover:bg-slate-100'
            }`}
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV SCREEN DRAWER */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-t max-h-[80vh] overflow-y-auto duration-200 transition-colors ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white shadow-2xl' : 'bg-white border-slate-100 text-slate-800'}`} id="mobile-menu-drawer">
          <div className="px-4 py-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.id} className={`border-b last:border-b-0 py-1 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-50'}`}>
                {item.hasSub ? (
                   <div>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className={`w-full flex justify-between items-center py-2 font-bold text-sm ${theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transform transition-transform ${activeDropdown === item.id ? 'rotate-180 text-brand-gold' : ''}`} />
                    </button>
                    {activeDropdown === item.id && (
                      <div className={`pl-3 py-1 space-y-1 rounded-md ${theme === 'dark' ? 'bg-slate-800/55' : 'bg-slate-50'}`}>
                        {item.subItems?.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick(item.id, sub.id)}
                            className={`w-full text-left py-1.5 text-xs block font-medium transition-colors ${
                              subTab === sub.id 
                                ? theme === 'dark' ? 'text-brand-gold font-bold' : 'text-brand-gold-dark font-bold' 
                                : theme === 'dark' ? 'text-slate-300 hover:text-brand-gold' : 'text-slate-600 hover:text-brand-gold'
                            }`}
                          >
                            • {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                   </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left py-2 font-bold text-sm transition-colors ${
                      currentTab === item.id 
                        ? theme === 'dark' ? 'text-brand-gold font-black' : 'text-brand-gold-dark font-black'
                        : theme === 'dark' ? 'text-slate-300' : 'text-slate-850'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            {/* Mobile Auth Access Line */}
            <div className="pt-4 pb-2 space-y-2">
              {isAdminLoggedIn ? (
                <button
                  onClick={() => handleNavClick('admin')}
                  className="w-full text-center bg-rose-600 hover:bg-rose-700 text-white py-2.5 rounded-full text-xs font-bold block"
                >
                  Dashboard Administrator
                </button>
              ) : studentAuth ? (
                <div className={`p-3 rounded-md flex justify-between items-center ${theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-brand-gold-light'}`}>
                  <span className={`text-xs font-bold ${theme === 'dark' ? 'text-brand-gold' : 'text-brand-green'}`}>Siswa: {studentAuth.name}</span>
                  <button onClick={logoutStudent} className="text-xs text-rose-600 font-bold underline">Logout</button>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick('admin')}
                  className={`w-full text-center font-bold py-2.5 rounded-full text-xs block transition-all ${
                    theme === 'dark'
                      ? 'bg-brand-green-light hover:bg-brand-green text-white shadow-sm'
                      : 'bg-brand-green text-white hover:bg-brand-green-light'
                  }`}
                >
                  Area Operator (Login)
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
