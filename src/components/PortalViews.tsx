/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { 
  Lock, User, GraduationCap, FileText, CheckCircle, 
  Clock, Download, Layers, BookOpen, ExternalLink, Sparkles
} from 'lucide-react';

export default function PortalViews() {
  const { studentAuth, loginStudent, logoutStudent } = useSchool();
  const [name, setName] = useState('');
  const [nisn, setNisn] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !nisn.trim()) return;
    
    const success = loginStudent(name, nisn);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
      setName('');
      setNisn('');
    }
  };

  const studentTasks = [
    {
      id: 'task-1',
      subject: 'Fiqih Keagamaan',
      title: 'Tugas Bab Jinayah dan Macam Denda Pembunuhan',
      deadline: '2026-06-05',
      status: 'Belum Selesai',
      type: 'Tugas Esai'
    },
    {
      id: 'task-2',
      subject: 'Informatika',
      title: 'Praktikum Array Dimensi Dua di Javascript',
      deadline: '2026-06-02',
      status: 'Selesai (Nilai: 95)',
      type: 'Unggah Kode'
    },
    {
      id: 'task-3',
      subject: 'Fisika Astronomi',
      title: 'Materi PDF: Pergerakan Orbit Bintang Helioseismologi',
      deadline: '-',
      status: 'Unduh Materi',
      type: 'Bahan Ajar'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="portal-container">
      {!studentAuth ? (
        /* LOGIN SPLASH SCREEN FOR PUPILS */
        <div className="max-w-md mx-auto bg-white border rounded-2xl shadow-xl overflow-hidden" id="portal-login-card">
          <div className="bg-brand-green p-6 text-white border-b-2 border-brand-gold text-center space-y-2">
            <GraduationCap className="w-12 h-12 text-brand-gold mx-auto animate-float" />
            <h2 className="text-xl font-display font-black uppercase tracking-wider">E-Learning Siswa MAN</h2>
            <p className="text-[11px] text-emerald-100 font-sans">Masukkan nama panggilan serta NISN terdaftar untuk mulai belajar.</p>
          </div>

          <form onSubmit={handleStudentLogin} className="p-6 sm:p-8 space-y-4">
            {loginError && (
              <p className="text-xs text-red-650 font-bold bg-red-50 p-2.5 rounded border border-red-150 text-center font-sans">
                Gagal masuk. Mohon isi kolom nama & nomor NISN (minimal 5 karakter).
              </p>
            )}

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block select-none">Nama Depan / Panggilan Anda</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Muhammad / Sarah..."
                  className="w-full pl-10 pr-4 py-2 text-xs border border-slate-205 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green text-slate-850"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block select-none">NISN Sekolah (Atau Password Sandi)</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="password" 
                  required
                  value={nisn}
                  onChange={(e) => setNisn(e.target.value)}
                  placeholder="Ketik NISN minimal 5 digit..."
                  className="w-full pl-10 pr-4 py-2 text-xs border border-slate-205 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green text-slate-850"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-brand-green-light hover:text-white text-white font-sans font-bold text-xs py-2.5 rounded-lg shadow border border-brand-gold cursor-pointer"
              >
                Log In Portal Siswa
              </button>
            </div>

            <div className="text-center pt-3 border-t text-[10px] text-slate-405 leading-relaxed font-sans">
              <p>Mengalami masalah sandi/akun? Hubungi Wali Kelas untuk menyetel ulang token PIN login Anda.</p>
            </div>
          </form>
        </div>
      ) : (
        /* SECURE AUTHENTICATED STUDENT PORTAL DASHBOARD */
        <div className="space-y-8" id="portal-logged-dashboard">
          
          {/* Main profile layout banner */}
          <div className="bg-gradient-to-r from-brand-green to-slate-900 border-b-4 border-brand-gold text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full blur-2xl"></div>
            <div className="space-y-2">
              <div className="inline-block bg-brand-gold text-brand-green-dark text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                Akademi E-learning Siswa
              </div>
              <h2 className="text-2xl font-display font-black text-white">
                Assalamu’alaikum, {studentAuth.name}!
              </h2>
              <p className="text-xs text-slate-300 font-sans">
                NISN Terdaftar: <span className="font-mono text-brand-gold-light">{studentAuth.nisn}</span> • Fase Pembelajaran Merdeka Fase F
              </p>
            </div>
            
            <button
              onClick={logoutStudent}
              className="bg-red-600 hover:bg-red-700 text-white font-sans font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Keluar Sesi Siswa
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Portal content list: active courses */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="font-display font-black text-sm text-slate-850 uppercase tracking-widest border-b pb-2">
                  Daftar Tugas & Bahan Ajar Aktif
                </h3>

                <div className="space-y-3">
                  {studentTasks.map((t) => (
                    <div 
                      key={t.id}
                      className="p-4 border rounded-xl bg-slate-50 hover:bg-white transition-colors flex justify-between items-center flex-wrap gap-4"
                    >
                      <div className="space-y-1 max-w-md">
                        <span className="bg-brand-green/10 text-brand-green font-mono text-[9px] font-bold px-2 py-0.5 rounded">
                          {t.subject}
                        </span>
                        <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                          {t.title}
                        </h4>
                        <p className="text-[10px] text-slate-400">Tipe: {t.type} • Batas: {t.deadline}</p>
                      </div>

                      <div className="shrink-0">
                        {t.status.includes('Selesai') ? (
                          <span className="bg-emerald-50 text-brand-green font-bold text-[9px] px-2.5 py-1 rounded border border-emerald-150">
                            {t.status}
                          </span>
                        ) : t.status.includes('Unduh') ? (
                          <button 
                            onClick={() => alert('Mengunduh materi ajar astronomi (Format: PDF, 1.2MB)')}
                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-[9px] px-2.5 py-1 rounded border border-blue-150 flex items-center gap-1 cursor-pointer"
                          >
                            <Download size={10} />
                            <span>Unduh Materi</span>
                          </button>
                        ) : (
                          <button 
                            onClick={() => alert(`Sistem siap menerima unggahan tanggapan tugas esai untuk Mapel ${t.subject}`)}
                            className="bg-brand-gold/15 text-brand-gold-dark font-bold text-[9px] px-2.5 py-1 rounded border border-brand-gold/30 flex items-center gap-1 cursor-pointer"
                          >
                            <Clock size={10} />
                            <span>Kumpul Tugas</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* INTEGRATION CLOUD LINKS */}
              <div className="bg-white border p-6 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-display font-black text-slate-900 text-xs uppercase tracking-widest border-b pb-2">
                  Integrasi Portal Kelas Online Partner
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://classroom.google.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    referrerPolicy="no-referrer"
                    className="p-4 bg-slate-50 hover:bg-emerald-50/40 border hover:border-emerald-300 rounded-xl flex items-center justify-between transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-xs font-mono">G</div>
                      <div>
                        <h4 className="font-bold text-xs text-slate-800">Google Classroom</h4>
                        <p className="text-[9px] text-slate-400 mt-0.5">Pantau kode ruang kelas guru</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-brand-green transition-transform" />
                  </a>

                  <a 
                    href="https://moodle.org" 
                    target="_blank" 
                    rel="noreferrer" 
                    referrerPolicy="no-referrer"
                    className="p-4 bg-slate-50 hover:bg-brand-gold-light/40 border hover:border-brand-gold/30 rounded-xl flex items-center justify-between transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-xs font-mono">M</div>
                      <div>
                        <h4 className="font-bold text-xs text-slate-800">Portal Moodle MAN</h4>
                        <p className="text-[9px] text-slate-400 mt-0.5">Sistem ujian terpusat madrasah</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-brand-gold transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Information sidebar widgets */}
            <div className="space-y-6">
              <div className="bg-white border rounded-2xl p-5 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 border-b pb-2">
                  <Sparkles className="w-5 h-5 text-brand-gold shrink-0" />
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-900">
                    Pengumuman Guru Hari Ini
                  </h4>
                </div>
                <div className="space-y-4 text-xs text-slate-600 leading-relaxed font-sans">
                  <div className="p-3 bg-slate-50 rounded-lg border">
                    <p className="font-bold text-slate-800">Pembayaran SKS Akhir Semester</p>
                    <p className="text-[9px] text-slate-400 mt-0.5">Oleh: Humas Madrasah • 2 jam lalu</p>
                    <p className="mt-1.5 font-medium">Buku panduan kelulusan semester 2 dapat diambil gratis mulai besok pagi di meja tata usaha.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border">
                    <p className="font-bold text-slate-800">Perbaikan Server CBT Selesai</p>
                    <p className="text-[9px] text-slate-400 mt-0.5">Oleh: Lab Komputer • Kemarin</p>
                    <p className="mt-1.5 font-medium">Server simulasi UAS telah dipulihkan. Siswa sudah bisa mencoba login ke akun simulasi masing-masing.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
