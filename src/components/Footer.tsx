/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  setTab: (tab: string, sub?: string) => void;
}

export default function Footer({ setTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-slate-350 border-t-4 border-brand-gold relative" id="main-footer">
      {/* Subtle Accent Line */}
      <div className="h-[3px] bg-brand-gold w-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-11 text-slate-300">
        
        {/* COLUMN 1: BRIEF INFO */}
        <div className="space-y-4" id="footer-col-1">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-slate-950 shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-base sm:text-lg font-display font-extrabold text-white tracking-wider uppercase">
              MAN LHOKSEUMAWE
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">
            Madrasah Aliyah Negeri Kota Lhokseumawe merupakan institusi pendidikan menengah berciri khas Islami unggulan di Aceh, mencetak lulusan yang cakap sains, tegap berakhlak, dan andal berwawasan digital.
          </p>
          <div className="flex space-x-3 pt-2">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              referrerPolicy="no-referrer"
              className="p-2 bg-slate-900 hover:bg-brand-gold hover:text-slate-950 rounded-full transition-all duration-200 cursor-pointer text-slate-400"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              referrerPolicy="no-referrer"
              className="p-2 bg-slate-900 hover:bg-brand-gold hover:text-slate-950 rounded-full transition-all duration-200 cursor-pointer text-slate-400"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              referrerPolicy="no-referrer"
              className="p-2 bg-slate-900 hover:bg-brand-gold hover:text-slate-950 rounded-full transition-all duration-200 cursor-pointer text-slate-400"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div id="footer-col-2">
          <h3 className="text-xs font-display font-extrabold text-white tracking-wider uppercase border-l-4 border-brand-gold pl-3 mb-5">
            Tautan Cepat
          </h3>
          <ul className="space-y-3.5 text-xs text-slate-400">
            <li>
              <button onClick={() => setTab('profil', 'sejarah')} className="hover:text-brand-gold transition-colors text-left cursor-pointer">
                Sejarah Madrasah
              </button>
            </li>
            <li>
              <button onClick={() => setTab('profil', 'guru')} className="hover:text-brand-gold transition-colors text-left cursor-pointer">
                Direktori Guru & Staf
              </button>
            </li>
            <li>
              <button onClick={() => setTab('akademik', 'kalender')} className="hover:text-brand-gold transition-colors text-left cursor-pointer">
                Kalender Akademik Resmi
              </button>
            </li>
            <li>
              <button onClick={() => setTab('ppdb', 'ppdb-daftar')} className="hover:text-brand-gold transition-colors text-left cursor-pointer font-bold text-brand-gold">
                Pendaftaran PPDB Online
              </button>
            </li>
            <li>
              <button onClick={() => setTab('perpus')} className="hover:text-brand-gold transition-colors text-left cursor-pointer">
                Katalog Perpustakaan
              </button>
            </li>
            <li>
              <button onClick={() => setTab('publikasi', 'download-area')} className="hover:text-brand-gold transition-colors text-left cursor-pointer">
                Download Berkas/Syllabus
              </button>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: CONTACT & HOURS */}
        <div className="space-y-3" id="footer-col-3">
          <h3 className="text-xs font-display font-extrabold text-white tracking-wider uppercase border-l-4 border-brand-gold pl-3 mb-5">
            Alamat & Kontak
          </h3>
          <div className="space-y-3.5 text-xs text-slate-400">
            <div className="flex items-start space-x-2.5">
              <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <span>Jl. Mon Geudong, Kecamatan Banda Sakti, Kota Lhokseumawe, Aceh, 24351</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-brand-gold shrink-0" />
              <span>+62 (0645) 43212</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-brand-gold shrink-0" />
              <span>info@manlhokseumawe.sch.id</span>
            </div>
            <div className="flex items-start space-x-2.5 pt-2">
              <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-200">Jam Operasional:</p>
                <p className="mt-1">Senin - Kamis: 07:30 - 16:00 WIB</p>
                <p>Jumat: 07:30 - 11:30 WIB</p>
                <p>Sabtu: 07:30 - 13:00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 4: GOOGLE MAPS EMBED */}
        <div id="footer-col-4">
          <h3 className="text-xs font-display font-extrabold text-white tracking-wider uppercase border-l-4 border-brand-gold pl-3 mb-5">
            Lokasi Google Maps
          </h3>
          <div className="rounded overflow-hidden border border-slate-800 h-40 bg-[#222222] relative">
            {/* Real embedded GMaps for Lhokseumawe mon geudong sector */}
            <iframe 
              src="https://maps.google.com/maps?q=MAN%20Lhokseumawe&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer"
              title="Peta Lokasi MAN Kota Lhokseumawe"
            ></iframe>
          </div>
          <div className="mt-3">
            <a 
              href="https://maps.app.goo.gl/ZyoHVEo4LNZC1rD57" 
              target="_blank" 
              rel="noreferrer" 
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:text-brand-gold-light hover:underline font-bold font-sans cursor-pointer transition-colors"
            >
              <MapPin size={14} className="shrink-0 animate-pulse text-brand-gold" />
              <span>Buka Petunjuk Google Maps</span>
            </a>
          </div>
        </div>

      </div>

      {/* FOOTER BAR OUTRO */}
      <div className="bg-[#0c0c0c] py-5 text-center text-xs text-slate-500 font-sans border-t border-slate-850">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p>© {currentYear} MAN Kota Lhokseumawe. Selembar Hak Cipta Terpelihara.</p>
          <div className="flex space-x-4">
            <span className="hover:text-slate-300 cursor-help">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-help">Ketentuan Layanan</span>
            <span>•</span>
            <span onClick={() => setTab('admin')} className="text-brand-gold hover:text-brand-gold-dark hover:underline cursor-pointer">Login Admin</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
