/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { 
  Lock, Settings, Users, FileText, PlusCircle, Trash, 
  CheckCheck, XCircle, Mail, Calendar, Download, LogOut, 
  HelpCircle, ShieldCheck, Sparkles, BookOpen, Upload,
  Edit2
} from 'lucide-react';

export default function AdminDashboard() {
  const { 
    isAdminLoggedIn, loginAdmin, logoutAdmin,
    news, ppdbList, teachers, downloads, agendas, feedbacks,
    students, alumni, activityLogs, books, adminRole,
    addNews, deleteNews, updateNews, addTeacher, deleteTeacher, updateTeacher,
    updatePpdbStatus, deletePpdb, addDownloadFile, deleteDownloadFile, updateDownloadFile,
    addAgenda, deleteAgenda, updateAgenda, markFeedbackRead, deleteFeedback,
    addBook, deleteBook, updateBook, addStudent, deleteStudent, updateStudent, addAlumni, deleteAlumni, updateAlumni
  } = useSchool();

  const [passwordInput, setPasswordInput] = useState('');
  const [loginRoleOption, setLoginRoleOption] = useState<'Admin Utama' | 'Staf Humas' | 'OSIM'>('Admin Utama');
  const [loginError, setLoginError] = useState(false);
  const [activeAdminSec, setActiveAdminSec] = useState('dashboard');

  // Add Book Form State
  const [bTitle, setBTitle] = useState('');
  const [bAuthor, setBAuthor] = useState('');
  const [bCategory, setBCategory] = useState('Buku Keagamaan');
  const [bIsbn, setBIsbn] = useState('');
  const [bYear, setBYear] = useState('2025');

  // Add Student Form State
  const [sName, setSName] = useState('');
  const [sNisn, setSNisn] = useState('');
  const [sNism, setSNism] = useState('');
  const [sClass, setSClass] = useState('XII MIPA 1');
  const [sGradStatus, setSGradStatus] = useState<'Lulus' | 'Aktif'>('Lulus');
  const [sRaporScore, setSRaporScore] = useState('88.5');

  // Add Alumni Form State
  const [alName, setAlName] = useState('');
  const [alNisn, setAlNisn] = useState('');
  const [alGradYear, setAlGradYear] = useState('2525');
  const [alStatus, setAlStatus] = useState('Kuliah di Universitas Syiah Kuala');
  const [alTestimony, setAlTestimony] = useState('');

  // Add News Form State
  const [newsTitle, setNewsTitle] = useState('');
  const [newsCat, setNewsCat] = useState<'Berita' | 'Pengumuman' | 'Prestasi' | 'Kegiatan'>('Berita');
  const [newsContent, setNewsContent] = useState('');
  const [newsImg, setNewsImg] = useState('');

  // Add Teacher Form State
  const [tName, setTName] = useState('');
  const [tNip, setTNip] = useState('');
  const [tRole, setTRole] = useState('');
  const [tSubject, setTSubject] = useState('');
  const [tGender, setTGender] = useState<'L' | 'P'>('L');
  const [tStatus, setTStatus] = useState<'PNS' | 'Honororer' | 'PPPK'>('PNS');
  const [tImg, setTImg] = useState('');

  // Add Download File State
  const [fTitle, setFTitle] = useState('');
  const [fCat, setFCat] = useState<'Formulir' | 'Silabus' | 'Akademik' | 'Pengumuman'>('Formulir');
  const [fFormat, setFFormat] = useState<'PDF' | 'DOCX' | 'XLSX'>('PDF');
  const [fSize, setFSize] = useState('');
  const [fUrl, setFUrl] = useState('');

  // Universal device file uploader helper
  const handleLocalFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setResult: (base64: string) => void,
    onFileLoaded?: (file: File) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 800 * 1024) { // Limit to 800KB to fit easily within Firebase's 1MB document limit
      alert('Ukuran berkas terlalu besar! Mohon unggah berkas di bawah 800 KB agar tersimpan dengan aman.');
      e.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setResult(base64String);
      if (onFileLoaded) {
        onFileLoaded(file);
      }
    };
    reader.readAsDataURL(file);
  };

  // Add Agenda State
  const [agTitle, setAgTitle] = useState('');
  const [agDate, setAgDate] = useState('');
  const [agTime, setAgTime] = useState('');
  const [agLoc, setAgLoc] = useState('');
  const [agDesc, setAgDesc] = useState('');

  const [editingId, setEditingId] = useState<string | null>(null);

  const startEditNews = (n: any) => {
    setEditingId(n.id);
    setNewsTitle(n.title);
    setNewsCat(n.category);
    setNewsContent(n.content);
    setNewsImg(n.imageUrl);
  };

  const startEditTeacher = (t: any) => {
    setEditingId(t.id);
    setTName(t.name);
    setTNip(t.nip);
    setTRole(t.role);
    setTSubject(t.subject);
    setTGender(t.gender);
    setTStatus(t.status);
    setTImg(t.imageUrl);
  };

  const startEditFile = (f: any) => {
    setEditingId(f.id);
    setFTitle(f.title);
    setFCat(f.category);
    setFFormat(f.format);
    setFSize(f.size);
    setFUrl(f.url);
  };

  const startEditAgenda = (a: any) => {
    setEditingId(a.id);
    setAgTitle(a.title);
    setAgDate(a.date);
    setAgTime(a.time);
    setAgLoc(a.location);
    setAgDesc(a.description);
  };

  const startEditBook = (b: any) => {
    setEditingId(b.id);
    setBTitle(b.title);
    setBAuthor(b.author);
    setBCategory(b.category);
    setBIsbn(b.isbn);
    setBYear(b.publishedYear);
  };

  const startEditStudent = (st: any) => {
    setEditingId(st.id);
    setSName(st.name);
    setSNisn(st.nisn);
    setSNism(st.nism || '');
    setSClass(st.class);
    setSGradStatus(st.graduationStatus);
    setSRaporScore(String(st.raporScore));
  };

  const startEditAlumni = (al: any) => {
    setEditingId(al.id);
    setAlName(al.name);
    setAlGradYear(al.graduationYear);
    setAlStatus(al.currentStatus);
    setAlTestimony(al.testimony || '');
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(passwordInput, loginRoleOption);
    if (success) {
      setLoginError(false);
      setPasswordInput('');
    } else {
      setLoginError(true);
    }
  };

  const handleCreateNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle.trim() || !newsContent.trim()) return;
    if (editingId) {
      updateNews(editingId, {
        title: newsTitle,
        slug: newsTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        content: newsContent,
        category: newsCat,
        imageUrl: newsImg.trim() || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
      });
      alert('Berita berhasil diperbarui!');
      setEditingId(null);
    } else {
      addNews({
        title: newsTitle,
        slug: newsTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        content: newsContent,
        category: newsCat,
        date: new Date().toISOString().split('T')[0],
        imageUrl: newsImg.trim() || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
        author: 'Operator Madrasah'
      });
      alert('Berita berhasil ditambahkan!');
    }
    setNewsTitle('');
    setNewsContent('');
    setNewsImg('');
  };

  const handleCreateTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tName.trim() || !tRole.trim()) return;
    if (editingId) {
      updateTeacher(editingId, {
        name: tName,
        nip: tNip.trim() || 'PNS',
        role: tRole,
        subject: tSubject || 'Umum',
        imageUrl: tImg.trim() || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
        gender: tGender,
        status: tStatus
      });
      alert('Data guru berhasil diperbarui!');
      setEditingId(null);
    } else {
      addTeacher({
        name: tName,
        nip: tNip.trim() || 'PNS',
        role: tRole,
        subject: tSubject || 'Umum',
        imageUrl: tImg.trim() || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
        gender: tGender,
        status: tStatus
      });
      alert('Guru baru berhasil ditambahkan!');
    }
    setTName('');
    setTNip('');
    setTRole('');
    setTSubject('');
    setTImg('');
  };

  const handleCreateFile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fTitle.trim() || !fSize.trim()) return;
    if (editingId) {
      updateDownloadFile(editingId, {
        title: fTitle,
        category: fCat,
        format: fFormat,
        size: fSize,
        url: fUrl.trim() || '#'
      });
      alert('Dokumen unduhan berhasil diperbarui!');
      setEditingId(null);
    } else {
      addDownloadFile({
        title: fTitle,
        category: fCat,
        format: fFormat,
        size: fSize,
        url: fUrl.trim() || '#'
      });
      alert('Dokumen unduhan baru berhasil didaftarkan!');
    }
    setFTitle('');
    setFSize('');
    setFUrl('');
  };

  const handleCreateAgenda = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agTitle.trim() || !agDate.trim()) return;
    if (editingId) {
      updateAgenda(editingId, {
        title: agTitle,
        date: agDate,
        time: agTime || 'Pari-pari selesai',
        location: agLoc || 'Ruang Serbaguna',
        description: agDesc
      });
      alert('Agenda kegiatan berhasil diperbarui!');
      setEditingId(null);
    } else {
      addAgenda({
        title: agTitle,
        date: agDate,
        time: agTime || 'Pari-pari selesai',
        location: agLoc || 'Ruang Serbaguna',
        description: agDesc
      });
      alert('Agenda kegiatan ditambahkan!');
    }
    setAgTitle('');
    setAgDate('');
    setAgTime('');
    setAgLoc('');
    setAgDesc('');
  };

  const handleCreateBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bTitle.trim() || !bAuthor.trim()) return;
    if (editingId) {
      updateBook(editingId, {
        title: bTitle,
        author: bAuthor,
        category: bCategory,
        isbn: bIsbn.trim() || 'N/A',
        publishedYear: bYear
      });
      alert('Buku berhasil diperbarui!');
      setEditingId(null);
    } else {
      addBook({
        title: bTitle,
        author: bAuthor,
        category: bCategory,
        isbn: bIsbn.trim() || 'N/A',
        publishedYear: bYear,
        available: true
      });
      alert('Buku berhasil ditambahkan ke E-Pustaka!');
    }
    setBTitle('');
    setBAuthor('');
    setBIsbn('');
  };

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sName.trim() || !sNisn.trim()) return;
    if (editingId) {
      updateStudent(editingId, {
        name: sName,
        nisn: sNisn,
        nism: sNism || `100${Math.floor(100000 + Math.random() * 900000)}`,
        class: sClass,
        graduationStatus: sGradStatus,
        raporScore: Number(sRaporScore) || 85.0
      });
      alert('Data siswa berhasil diperbarui!');
      setEditingId(null);
    } else {
      addStudent({
        name: sName,
        nisn: sNisn,
        nism: sNism || `100${Math.floor(100000 + Math.random() * 900000)}`,
        class: sClass,
        graduationStatus: sGradStatus,
        raporScore: Number(sRaporScore) || 85.0
      });
      alert('Data siswa berhasil dimasukkan!');
    }
    setSName('');
    setSNisn('');
    setSNism('');
  };

  const handleCreateAlumni = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alName.trim() || !alGradYear.trim()) return;
    if (editingId) {
      updateAlumni(editingId, {
        name: alName,
        graduationYear: alGradYear,
        currentStatus: alStatus,
        testimony: alTestimony.trim() || 'Madrasah unggul yang membina ilmu duniawi dan ukhrawi secara berimbang.'
      });
      alert('Data alumni berhasil diperbarui!');
      setEditingId(null);
    } else {
      addAlumni({
        name: alName,
        graduationYear: alGradYear,
        currentStatus: alStatus,
        testimony: alTestimony.trim() || 'Madrasah unggul yang membina ilmu duniawi dan ukhrawi secara berimbang.'
      });
      alert('Data alumni berhasil ditambahkan!');
    }
    setAlName('');
    setAlGradYear('');
    setAlTestimony('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="cms-dashboard-container">
      {!isAdminLoggedIn ? (
        /* LOGIN ACCESS CONTROL FOR OPERATORS */
        <div className="max-w-md mx-auto bg-white border rounded-2xl shadow-xl overflow-hidden" id="admin-login-card">
          <div className="bg-brand-green p-6 text-white border-b-2 border-brand-gold text-center space-y-2">
            <Lock className="w-12 h-12 text-brand-gold mx-auto animate-float" />
            <h2 className="text-xl font-display font-black uppercase tracking-wider">CMS Operator Login</h2>
            <p className="text-[10px] text-emerald-100 font-sans tracking-wide uppercase">Pilih Peran & Masukkan Sandi Akses</p>
          </div>

          <form onSubmit={handleAdminLogin} className="p-6 sm:p-8 space-y-4">
            {loginError && (
              <p className="text-xs text-red-650 font-bold bg-red-50 p-2.5 rounded border border-red-150 text-center font-sans">
                Kata sandi salah untuk peran tersebut. Silakan coba kembali.
              </p>
            )}

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block select-none">Pilih Peran Anggota *</label>
              <select
                value={loginRoleOption}
                onChange={(e) => setLoginRoleOption(e.target.value as any)}
                className="w-full px-3 py-2 border text-xs text-slate-805 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green bg-white"
              >
                <option value="Admin Utama">Admin Utama (Akses Penuh)</option>
                <option value="Staf Humas">Staf Humas (Berita & File)</option>
                <option value="OSIM">OSIM (Berita & Agenda)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block select-none">Masukkan Sandi Operator *</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="password" 
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Password sandi..."
                  className="w-full pl-10 pr-4 py-2 border text-xs text-slate-850 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200/50 rounded-xl space-y-1 text-[10px] text-slate-500 font-sans">
              <p className="font-bold text-brand-green">🔑 Petunjuk Sandi Peran:</p>
              <ul className="list-disc pl-3 space-y-0.5">
                <li><strong className="text-slate-700 font-mono">Admin Utama</strong>: sandi <code className="bg-slate-200 px-1 rounded">admin123</code></li>
                <li><strong className="text-slate-700 font-mono">Staf Humas</strong>: sandi <code className="bg-slate-200 px-1 rounded">adminman</code></li>
                <li><strong className="text-slate-700 font-mono">OSIM</strong>: sandi <code className="bg-slate-200 px-1 rounded">osim123</code></li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-brand-green-light hover:text-white text-white font-sans font-bold text-xs py-2.5 rounded-lg border border-brand-gold shadow cursor-pointer"
              >
                Log In Operator
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* REGISTERED SECURE CMS PANEL CONTENT */
        <div className="bg-white border rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row min-h-[500px]" id="cms-authenticated-dashboard">
          
          {/* Left Vertical Sub-menu Panel */}
          <div className="md:w-64 bg-slate-900 text-slate-300 p-5 space-y-5 border-r border-slate-950">
            <div className="flex items-center space-x-2 border-b border-white/10 pb-4">
              <Settings className="w-6 h-6 text-brand-gold font-bold" />
              <div>
                <span className="font-display font-black text-xs text-white tracking-widest uppercase block">CMS OPERATOR</span>
                <span className="font-mono text-[9px] text-brand-gold animate-pulse tracking-wider block font-bold uppercase">{adminRole || 'Administrator'}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 text-xs font-medium">
              {(() => {
                const allTabs = [
                  { id: 'dashboard', label: 'Ringkasan Portal' },
                  { id: 'ppdb', label: 'Verifikasi PPDB', badge: ppdbList.filter(p => p.status === 'Pending').length },
                  { id: 'news', label: 'Kelola Berita Warta' },
                  { id: 'e-pustaka', label: 'Kelola E-Pustaka' },
                  { id: 'manajemen-data', label: 'Manajemen Data' },
                  { id: 'teachers', label: 'Kelola Guru & Staf' },
                  { id: 'downloads', label: 'Kelola File Unduhan' },
                  { id: 'agenda', label: 'Kelola Agenda Sekolah' },
                  { id: 'feedback', label: 'Kotak Masuk Aduan', badge: feedbacks.filter(f => !f.read).length },
                  { id: 'activity-logs', label: 'Log Aktivitas' }
                ];

                let visibleTabs = allTabs;
                if (adminRole === 'Staf Humas') {
                  visibleTabs = allTabs.filter(t => ['dashboard', 'news', 'downloads', 'feedback'].includes(t.id));
                } else if (adminRole === 'OSIM') {
                  visibleTabs = allTabs.filter(t => ['dashboard', 'news', 'agenda'].includes(t.id));
                }

                return visibleTabs.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveAdminSec(item.id);
                      setEditingId(null);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg transition-all text-[11px] font-bold tracking-wide uppercase flex justify-between items-center cursor-pointer ${
                      activeAdminSec === item.id 
                        ? 'bg-brand-green text-white font-black border-l-4 border-brand-gold' 
                        : 'hover:bg-slate-800 text-slate-400'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className="bg-brand-gold text-brand-green-dark text-[10px] rounded-full px-2 py-0.5 font-bold">{item.badge}</span>
                    )}
                  </button>
                ));
              })()}

              <button
                onClick={logoutAdmin}
                className="w-full text-left p-2.5 hover:bg-red-950 hover:text-white rounded-lg text-slate-400 mt-6 flex items-center gap-1.5 cursor-pointer text-[11px] font-bold"
              >
                <LogOut size={13} />
                <span>LOG OUT</span>
              </button>
            </div>
          </div>

          {/* Right Main dynamic view panel context */}
          <div className="flex-1 p-6 sm:p-8 bg-slate-50/50 max-h-[85vh] overflow-y-auto">
            
            {/* 1. MAIN SUMMARY DASHBOARD Ringkasan */}
            {activeAdminSec === 'dashboard' && (
              <div className="space-y-6" id="cms-dash-summary">
                <div className="flex justify-between items-center flex-wrap gap-4 border-b pb-4 mb-2">
                  <div>
                    <h3 className="text-xl font-display font-black text-slate-900">Selamat Bekerja, Operator</h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-mono">Status Server: Online • Sesi Terverifikasi Mandiri</p>
                  </div>
                  <span className="bg-emerald-100 text-brand-green font-mono text-[9px] font-extrabold px-3 py-1 rounded-full border border-emerald-300">
                    Administrator Aktif
                  </span>
                </div>

                {/* Counter metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white border p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pelamar PPDB</p>
                      <p className="text-2xl font-display font-black text-slate-800 pt-1">{ppdbList.length}</p>
                    </div>
                    <Users className="w-8 h-8 text-slate-300" />
                  </div>
                  <div className="bg-white border p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Artikel Berita</p>
                      <p className="text-2xl font-display font-black text-slate-800 pt-1">{news.length}</p>
                    </div>
                    <FileText className="w-8 h-8 text-slate-300" />
                  </div>
                  <div className="bg-white border p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Guru & Pendidik</p>
                      <p className="text-2xl font-display font-black text-slate-800 pt-1">{teachers.length}</p>
                    </div>
                    <ShieldCheck className="w-8 h-8 text-slate-300" />
                  </div>
                  <div className="bg-white border p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pesan Masuk</p>
                      <p className="text-2xl font-display font-black text-slate-800 pt-1">{feedbacks.length}</p>
                    </div>
                    <Mail className="w-8 h-8 text-slate-300" />
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-150 text-xs text-slate-700 leading-relaxed font-sans mt-4">
                  <p className="font-bold">💡 Petunjuk Penggunaan CMS:</p>
                  <p className="mt-1">Pilih sub-menu vertikal sebelah kiri untuk menyunting dan memperbarui data website resmi secara instan. Menambahkan warta berita akan segera terpajang langsung di halaman Beranda bagi pengunjung sekolah.</p>
                </div>
              </div>
            )}

            {/* 2. PPDB REGISTRATIONS VERIFY TABLE */}
            {activeAdminSec === 'ppdb' && (
              <div className="space-y-6" id="cms-ppdb-verf">
                <h3 className="text-lg font-display font-black text-slate-850 border-b pb-3 uppercase tracking-wide">
                  Daftar Pendaftaran Calon Siswa Baru (PPDB)
                </h3>

                <div className="bg-white border rounded-xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50 border-b text-slate-500 font-bold font-mono">
                          <th className="p-3">Ref sequence</th>
                          <th className="p-3">Calon Siswa</th>
                          <th className="p-3">Asal Sekolah & NISN</th>
                          <th className="p-3 text-center">Rata Rapor</th>
                          <th className="p-3 text-center">Berkas Status</th>
                          <th className="p-3 text-center">Tindakan Persetujuan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-705">
                        {ppdbList.map((p) => (
                          <tr key={p.id} className="hover:bg-slate-50/50">
                            <td className="p-3 font-mono font-bold text-slate-900">{p.regNumber}</td>
                            <td className="p-3">
                              <p className="font-semibold text-slate-900 leading-snug">{p.fullName}</p>
                              <p className="text-[10px] text-slate-400">{p.phone}</p>
                            </td>
                            <td className="p-3">
                              <p className="font-bold text-slate-800">{p.schoolOrigin}</p>
                              <p className="text-[10px] font-mono text-slate-400">NISN: {p.nisn}</p>
                            </td>
                            <td className="p-3 text-center font-mono font-bold">{p.raporScore}</td>
                            <td className="p-3 text-center">
                              {p.status === 'Verified' && <span className="bg-emerald-100 text-brand-green font-bold text-[8px] px-2 py-0.5 rounded-full uppercase border">Verified</span>}
                              {p.status === 'Pending' && <span className="bg-brand-gold-light text-brand-gold-dark font-bold text-[8px] px-2 py-0.5 rounded-full uppercase border border-brand-gold/25">Pending</span>}
                              {p.status === 'Rejected' && <span className="bg-red-50 text-red-650 font-bold text-[8px] px-2 py-0.5 rounded-full uppercase border">Rejected</span>}
                            </td>
                            <td className="p-3 text-center space-x-2 shrink-0">
                              <button 
                                onClick={() => updatePpdbStatus(p.id, 'Verified')}
                                title="Verifikasi Lolos"
                                className="p-1 px-2.5 bg-emerald-605 text-white rounded font-mono font-bold text-[9px] hover:bg-emerald-700 uppercase cursor-pointer"
                              >
                                Setuju
                              </button>
                              <button 
                                onClick={() => updatePpdbStatus(p.id, 'Rejected')}
                                title="Reject Berkas"
                                className="p-1 px-2.5 bg-red-650 text-white rounded font-mono font-bold text-[9px] hover:bg-red-700 uppercase cursor-pointer"
                              >
                                Tolak
                              </button>
                              <button 
                                onClick={() => deletePpdb(p.id)}
                                title="Hapus Permanen"
                                className="p-1 hover:bg-red-100 text-red-500 rounded cursor-pointer inline-flex"
                              >
                                <Trash size={13} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 3. MANAGE NEWS SECTION */}
            {activeAdminSec === 'news' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="cms-news-panel">
                {/* News input form */}
                <div className="lg:col-span-1 bg-white border p-5 rounded-xl shadow-xs space-y-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-900 border-b pb-2">
                    {editingId ? 'Edit Berita Terbuka' : 'Tulis Berita Baru'}
                  </h4>
                  <form onSubmit={handleCreateNews} className="space-y-3.5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Judul Berita *</label>
                      <input 
                        type="text" 
                        required
                        value={newsTitle}
                        onChange={(e) => setNewsTitle(e.target.value)}
                        placeholder="Ketik judul artikel..."
                        className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Kategori *</label>
                      <select
                        value={newsCat}
                        onChange={(e) => setNewsCat(e.target.value as any)}
                        className="w-full border text-xs p-2 text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green bg-white"
                      >
                        <option value="Berita">Warta Berita</option>
                        <option value="Pengumuman">Pengumuman Resmi</option>
                        <option value="Prestasi">Prestasi Madrasah</option>
                        <option value="Kegiatan">Momen Kegiatan</option>
                      </select>
                    </div>
                    <div className="space-y-2 border p-3 rounded-lg bg-slate-50">
                      <label className="text-[10px] font-bold text-slate-700 block select-none uppercase tracking-wide">Foto Sampul Berita</label>
                      
                      {/* File Upload Selector */}
                      <div className="space-y-1">
                        <span className="text-[9px] text-slate-500 block">Opsi A: Unggah dari Perangkat (Hingga 800KB)</span>
                        <div className="flex items-center gap-2">
                          <label className="flex items-center gap-1.5 cursor-pointer bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded px-2.5 py-1.5 text-[11px] text-slate-700 select-none transition-all font-semibold">
                            <Upload size={12} className="text-slate-600" />
                            <span>Pilih Berkas</span>
                            <input 
                              type="file" 
                              accept="image/*"
                              onChange={(e) => handleLocalFileUpload(e, setNewsImg)}
                              className="hidden" 
                            />
                          </label>
                          {newsImg && newsImg.startsWith('data:') && (
                            <span className="text-[10px] text-brand-green font-semibold">✓ Foto Perangkat Terpilih</span>
                          )}
                        </div>
                      </div>

                      {/* Fallback image URL */}
                      <div className="space-y-1">
                        <span className="text-[9px] text-slate-500 block">Opsi B: Atau Tempel Link Gambar (URL)</span>
                        <input 
                          type="text" 
                          value={newsImg.startsWith('data:') ? '' : newsImg}
                          onChange={(e) => setNewsImg(e.target.value)}
                          placeholder="https://images.unsplash.com/..."
                          className="w-full p-2 border text-[11px] text-slate-850 rounded font-mono focus:outline-none focus:ring-1 focus:ring-brand-green bg-white"
                        />
                      </div>
                      
                      {newsImg && (
                        <div className="mt-2 text-center rounded border bg-white overflow-hidden p-1 max-h-24 flex items-center justify-center">
                          <img src={newsImg} className="max-h-20 max-w-full object-contain" alt="Pratinjau Foto" referrerPolicy="no-referrer" />
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Isi Konten Berita *</label>
                      <textarea 
                        required
                        rows={5}
                        value={newsContent}
                        onChange={(e) => setNewsContent(e.target.value)}
                        placeholder="Ketik paragraf warta madrasah lengkap..."
                        className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-brand-green border border-brand-gold text-white font-sans font-bold text-xs py-2 rounded-lg cursor-pointer transition-all"
                    >
                      {editingId ? 'Simpan Perubahan Berita' : 'Terbitkan Berita'}
                    </button>
                    {editingId && (
                      <button 
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setNewsTitle('');
                          setNewsContent('');
                          setNewsImg('');
                        }}
                        className="w-full mt-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-sans font-bold text-xs py-2 rounded-lg cursor-pointer transition-all"
                      >
                        Batal Edit
                      </button>
                    )}
                  </form>
                </div>

                {/* Published news tabular lists */}
                <div className="lg:col-span-2 bg-white border p-5 rounded-xl shadow-xs">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-900 border-b pb-2 mb-4">
                    Tabel Berita Terbit
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b text-slate-500 font-bold font-mono">
                          <th className="p-3">Judul Berita</th>
                          <th className="p-3">Kategori</th>
                          <th className="p-3">Tanggal Terbit</th>
                          <th className="p-3 text-center">Tindakan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-705">
                        {news.map((n) => (
                          <tr key={n.id} className="hover:bg-slate-50/50">
                            <td className="p-3 font-semibold text-slate-900 max-w-[200px] truncate">{n.title}</td>
                            <td className="p-3">
                              <span className="bg-slate-100 font-bold text-[9px] px-2 py-0.5 rounded">
                                {n.category}
                              </span>
                            </td>
                            <td className="p-3 font-mono">{n.date}</td>
                            <td className="p-3 text-center flex items-center justify-center gap-1.5">
                              <button 
                                onClick={() => startEditNews(n)}
                                className="p-1 hover:bg-slate-100 text-brand-green rounded cursor-pointer transition-colors"
                                title="Edit Berita"
                              >
                                <Edit2 size={13} />
                              </button>
                              <button 
                                onClick={() => deleteNews(n.id)}
                                className="p-1 hover:bg-red-50 text-red-500 rounded cursor-pointer transition-colors"
                                title="Hapus Berita"
                              >
                                <Trash size={13} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 4. MANAGE TEACHERS SECTION */}
            {activeAdminSec === 'teachers' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="cms-teachers-panel">
                {/* Teacher input form */}
                <div className="lg:col-span-1 bg-white border p-5 rounded-xl shadow-xs space-y-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-900 border-b pb-2">
                    {editingId ? 'Edit Data Guru' : 'Daftarkan Guru Baru'}
                  </h4>
                  <form onSubmit={handleCreateTeacher} className="space-y-3.5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Nama Lengkap Guru beserta Gelar *</label>
                      <input 
                        type="text" 
                        required
                        value={tName}
                        onChange={(e) => setTName(e.target.value)}
                        placeholder="Contoh: Safrizal, S.Pd.I..."
                        className="w-full p-2.5 border text-xs text-slate-850 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">NIP / Sandi Dinas</label>
                      <input 
                        type="text" 
                        value={tNip}
                        onChange={(e) => setTNip(e.target.value)}
                        placeholder="19690112199xxxxx..."
                        className="w-full p-2.5 border text-xs text-slate-850 rounded-lg font-mono focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Jabatan Sekolah *</label>
                      <input 
                        type="text" 
                        required
                        value={tRole}
                        onChange={(e) => setTRole(e.target.value)}
                        placeholder="Contoh: Guru MIPA / Waka Humas..."
                        className="w-full p-2.5 border text-xs text-slate-850 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Bidang Studi (Mata Pelajaran)</label>
                      <input 
                        type="text" 
                        value={tSubject}
                        onChange={(e) => setTSubject(e.target.value)}
                        placeholder="Fisika Astronomi..."
                        className="w-full p-2.5 border text-xs text-slate-850 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-655 check select-none">Gender *</label>
                        <select 
                          value={tGender} 
                          onChange={(e) => setTGender(e.target.value as any)}
                          className="w-full border text-xs p-2 text-slate-850 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-brand-green"
                        >
                          <option value="L">Ikhwan</option>
                          <option value="P">Akhwat</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-655 check select-none">Status Kepegawaian *</label>
                        <select 
                          value={tStatus} 
                          onChange={(e) => setTStatus(e.target.value as any)}
                          className="w-full border text-xs p-2 text-slate-850 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-brand-green"
                        >
                          <option value="PNS">PNS Dinas</option>
                          <option value="PPPK">Kemenag PPPK</option>
                          <option value="Honororer">Honorer Praktisi</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2 border p-3 rounded-lg bg-slate-50">
                      <label className="text-[10px] font-bold text-slate-700 block select-none uppercase tracking-wide">Foto Profil Guru</label>
                      
                      {/* File Upload Selector */}
                      <div className="space-y-1">
                        <span className="text-[9px] text-slate-500 block">Opsi A: Unggah dari Perangkat (Hingga 800KB)</span>
                        <div className="flex items-center gap-2">
                          <label className="flex items-center gap-1.5 cursor-pointer bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded px-2.5 py-1.5 text-[11px] text-slate-700 select-none transition-all font-semibold">
                            <Upload size={12} className="text-slate-600" />
                            <span>Pilih Berkas</span>
                            <input 
                              type="file" 
                              accept="image/*"
                              onChange={(e) => handleLocalFileUpload(e, setTImg)}
                              className="hidden" 
                            />
                          </label>
                          {tImg && tImg.startsWith('data:') && (
                            <span className="text-[10px] text-brand-green font-semibold">✓ Foto Profil Terpilih</span>
                          )}
                        </div>
                      </div>

                      {/* Fallback image URL */}
                      <div className="space-y-1">
                        <span className="text-[9px] text-slate-500 block">Opsi B: Atau Tempel Link Foto (URL)</span>
                        <input 
                          type="text" 
                          value={tImg.startsWith('data:') ? '' : tImg}
                          onChange={(e) => setTImg(e.target.value)}
                          placeholder="https://images.unsplash.com/..."
                          className="w-full p-2 border text-[11px] text-slate-850 rounded font-mono focus:outline-none focus:ring-1 focus:ring-brand-green bg-white"
                        />
                      </div>
                      
                      {tImg && (
                        <div className="mt-2 text-center rounded border bg-white overflow-hidden p-1 max-h-24 flex items-center justify-center">
                          <img src={tImg} className="max-h-20 max-w-full object-contain" alt="Pratinjau Profil" referrerPolicy="no-referrer" />
                        </div>
                      )}
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-brand-green border border-brand-gold text-white font-sans font-bold text-xs py-2 rounded-lg cursor-pointer"
                    >
                      {editingId ? 'Simpan Perubahan' : 'Daftarkan Guru'}
                    </button>
                    {editingId && (
                      <button 
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setTName('');
                          setTNip('');
                          setTRole('');
                          setTSubject('');
                          setTImg('');
                        }}
                        className="w-full mt-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-sans font-bold text-xs py-2 rounded-lg cursor-pointer transition-all"
                      >
                        Batal Edit
                      </button>
                    )}
                  </form>
                </div>

                {/* Teachers deletion list */}
                <div className="lg:col-span-2 bg-white border p-5 rounded-xl shadow-xs">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-900 border-b pb-2 mb-4">
                    Direktori Tenaga Pendidik Terdaftar
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b text-slate-500 font-bold font-mono">
                          <th className="p-3">Nama Guru</th>
                          <th className="p-3">NIP</th>
                          <th className="p-3">Studi / Status</th>
                          <th className="p-3 text-center">Tindakan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-705">
                        {teachers.map((t) => (
                          <tr key={t.id} className="hover:bg-slate-50/50">
                            <td className="p-3 font-semibold text-slate-900 leading-snug">{t.name}</td>
                            <td className="p-3 font-mono">{t.nip}</td>
                            <td className="p-3">
                              <p className="font-bold">{t.subject}</p>
                              <p className="text-[9px] text-brand-gold-dark font-bold">{t.status} • {t.gender === 'L' ? 'Ikhwan' : 'Akhwat'}</p>
                            </td>
                            <td className="p-3 text-center flex items-center justify-center gap-1.5">
                              <button 
                                onClick={() => startEditTeacher(t)}
                                className="p-1 hover:bg-slate-100 text-brand-green rounded cursor-pointer transition-colors"
                                title="Edit Data Guru"
                              >
                                <Edit2 size={13} />
                              </button>
                              <button 
                                onClick={() => deleteTeacher(t.id)}
                                className="p-1 hover:bg-red-50 text-red-500 rounded cursor-pointer transition-colors"
                                title="Hapus Data Guru"
                              >
                                <Trash size={13} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 5. DOWNLOADABLE FILES CMS */}
            {activeAdminSec === 'downloads' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="cms-downloads-panel">
                <div className="lg:col-span-1 bg-white border p-5 rounded-xl shadow-xs space-y-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-900 border-b pb-2">
                    {editingId ? 'Edit Dokumen' : 'Daftar Dokumen Baru'}
                  </h4>
                  <form onSubmit={handleCreateFile} className="space-y-3.5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Nama Judul Berkas *</label>
                      <input 
                        type="text" 
                        required
                        value={fTitle}
                        onChange={(e) => setFTitle(e.target.value)}
                        placeholder="Contoh: Silabus Akidah Akhlak XII..."
                        className="w-full p-2.5 border text-xs text-slate-855 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-655 select-none">Kategori *</label>
                        <select 
                          value={fCat} 
                          onChange={(e) => setFCat(e.target.value as any)}
                          className="w-full border text-xs p-2 text-slate-855 rounded-lg bg-white"
                        >
                          <option value="Formulir">Formulir</option>
                          <option value="Silabus">Syllabus</option>
                          <option value="Akademik">Akademik</option>
                          <option value="Pengumuman">Pengumuman</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-655 select-none">Format Berkas *</label>
                        <select 
                          value={fFormat} 
                          onChange={(e) => setFFormat(e.target.value as any)}
                          className="w-full border text-xs p-2 text-slate-855 rounded-lg bg-white"
                        >
                          <option value="PDF">PDF</option>
                          <option value="DOCX">DOCX</option>
                          <option value="XLSX">XLSX</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2 border p-3 rounded-lg bg-slate-50">
                      <label className="text-[10px] font-bold text-slate-700 block select-none uppercase tracking-wide">Unggah atau Tautkan Dokumen</label>
                      
                      {/* Direct file upload from device */}
                      <div className="space-y-1">
                        <span className="text-[9px] text-slate-500 block">Opsi A: Unggah dari Perangkat (Hingga 800KB)</span>
                        <div className="flex items-center gap-2">
                          <label className="flex items-center gap-1.5 cursor-pointer bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded px-2.5 py-1.5 text-[11px] text-slate-700 select-none transition-all font-semibold">
                            <Upload size={12} className="text-slate-600" />
                            <span>Pilih Berkas</span>
                            <input 
                              type="file" 
                              accept=".pdf,.docx,.xlsx"
                              onChange={(e) => {
                                handleLocalFileUpload(e, setFUrl, (file) => {
                                  // Auto set fSize and fFormat
                                  const sizeInMB = file.size / (1024 * 1024);
                                  const displaySize = sizeInMB >= 1 
                                    ? `${sizeInMB.toFixed(1)} MB` 
                                    : `${(file.size / 1024).toFixed(0)} KB`;
                                  setFSize(displaySize);
                                  
                                  const ext = file.name.split('.').pop()?.toUpperCase();
                                  if (ext === 'PDF' || ext === 'DOCX' || ext === 'XLSX') {
                                    setFFormat(ext as any);
                                  }
                                });
                              }}
                              className="hidden" 
                            />
                          </label>
                          {fUrl && fUrl.startsWith('data:') && (
                            <span className="text-[10px] text-brand-green font-semibold">✓ Dokumen Siap Unggah</span>
                          )}
                        </div>
                      </div>

                      {/* Drop-in external link option */}
                      <div className="space-y-1">
                        <span className="text-[9px] text-slate-500 block">Opsi B: Atau Tempel URL Dokumen Eksternal</span>
                        <input 
                          type="text" 
                          value={fUrl.startsWith('data:') ? '' : fUrl}
                          onChange={(e) => setFUrl(e.target.value)}
                          placeholder="https://drive.google.com/..."
                          className="w-full p-2 border text-[11px] text-slate-850 rounded font-mono focus:outline-none focus:ring-1 focus:ring-brand-green bg-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Ukuran File Berkas *</label>
                      <input 
                        type="text" 
                        required
                        value={fSize}
                        onChange={(e) => setFSize(e.target.value)}
                        placeholder="Contoh: 1.4 MB / 450 KB..."
                        className="w-full p-2.5 border text-xs text-slate-855 rounded-lg font-mono focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-brand-green border border-brand-gold text-white font-sans font-bold text-xs py-2 rounded-lg cursor-pointer"
                    >
                      {editingId ? 'Simpan Perubahan' : 'Daftarkan Berkas'}
                    </button>
                    {editingId && (
                      <button 
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setFTitle('');
                          setFSize('');
                          setFUrl('');
                        }}
                        className="w-full mt-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-sans font-bold text-xs py-2 rounded-lg cursor-pointer transition-all"
                      >
                        Batal Edit
                      </button>
                    )}
                  </form>
                </div>

                <div className="lg:col-span-2 bg-white border p-5 rounded-xl shadow-xs">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-900 border-b pb-2 mb-4">
                    Daftar File Publik Download Area
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b text-slate-500 font-bold font-mono">
                          <th className="p-3">Nama Berkas</th>
                          <th className="p-3">Kategori</th>
                          <th className="p-3">Sifat & Size</th>
                          <th className="p-3 text-center">Tindakan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-705">
                        {downloads.map((f) => (
                          <tr key={f.id} className="hover:bg-slate-50/50">
                            <td className="p-3 font-semibold text-slate-900 leading-snug">{f.title}</td>
                            <td className="p-3">
                              <span className="bg-slate-100 font-bold text-[9px] px-2 py-0.5 rounded">
                                {f.category}
                              </span>
                            </td>
                            <td className="p-3 font-mono">{f.format} ({f.size})</td>
                            <td className="p-3 text-center flex items-center justify-center gap-1.5">
                              <button 
                                onClick={() => startEditFile(f)}
                                className="p-1 hover:bg-slate-100 text-brand-green rounded cursor-pointer transition-colors"
                                title="Edit Dokumen"
                              >
                                <Edit2 size={13} />
                              </button>
                              <button 
                                onClick={() => deleteDownloadFile(f.id)}
                                className="p-1 hover:bg-red-50 text-red-500 rounded cursor-pointer transition-colors"
                                title="Hapus Dokumen"
                              >
                                <Trash size={13} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 6. MANAGE AD-AGENDA ACADEMIC */}
            {activeAdminSec === 'agenda' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="cms-agendas-panel">
                <div className="lg:col-span-1 bg-white border p-5 rounded-xl shadow-xs space-y-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-900 border-b pb-2">
                    {editingId ? 'Edit Agenda Acara' : 'Tulis Agenda Baru'}
                  </h4>
                  <form onSubmit={handleCreateAgenda} className="space-y-3.5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Nama Judul Kegiatan *</label>
                      <input 
                        type="text" 
                        required
                        value={agTitle}
                        onChange={(e) => setAgTitle(e.target.value)}
                        placeholder="Milad Madrasah, dsb..."
                        className="w-full p-2.5 border text-xs rounded-lg text-slate-850"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Tanggal Pelaksanaan *</label>
                      <input 
                        type="text" 
                        required
                        value={agDate}
                        onChange={(e) => setAgDate(e.target.value)}
                        placeholder="Contoh: 12 Juni 2026..."
                        className="w-full p-2.5 border text-xs rounded-lg text-slate-850"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Alokasi Waktu</label>
                      <input 
                        type="text" 
                        value={agTime}
                        onChange={(e) => setAgTime(e.target.value)}
                        placeholder="Contoh: 08:30 - Selesai WIB..."
                        className="w-full p-2.5 border text-xs rounded-lg text-slate-850"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Lokasi Ruangan</label>
                      <input 
                        type="text" 
                        value={agLoc}
                        onChange={(e) => setAgLoc(e.target.value)}
                        placeholder="Aula Kaca Utama, dsb..."
                        className="w-full p-2.5 border text-xs rounded-lg text-slate-850"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-650 block select-none">Ringkasan Deskripsi</label>
                      <textarea 
                        rows={3}
                        value={agDesc}
                        onChange={(e) => setAgDesc(e.target.value)}
                        placeholder="Ketik detail acara..."
                        className="w-full p-2.5 border text-xs rounded-lg text-slate-850"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-brand-green border border-brand-gold text-white font-sans font-bold text-xs py-2 rounded-lg cursor-pointer"
                    >
                      {editingId ? 'Simpan Perubahan' : 'Terbitkan Agenda'}
                    </button>
                    {editingId && (
                      <button 
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setAgTitle('');
                          setAgDate('');
                          setAgTime('');
                          setAgLoc('');
                          setAgDesc('');
                        }}
                        className="w-full mt-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-sans font-bold text-xs py-2 rounded-lg cursor-pointer transition-all"
                      >
                        Batal Edit
                      </button>
                    )}
                  </form>
                </div>

                <div className="lg:col-span-2 bg-white border p-5 rounded-xl shadow-xs">
                  <h4 className="font-display font-black text-xs uppercase tracking-wider text-slate-900 border-b pb-2 mb-4">
                    Agenda Akademik Aktif
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b text-slate-500 font-bold font-mono">
                          <th className="p-3">Nama Kegiatan</th>
                          <th className="p-3">Tanggal & Waktu</th>
                          <th className="p-3">Lokasi</th>
                          <th className="p-3 text-center">Tindakan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-705">
                        {agendas.map((a) => (
                          <tr key={a.id} className="hover:bg-slate-50/50">
                            <td className="p-3 font-semibold text-slate-900 leading-snug">{a.title}</td>
                            <td className="p-3 font-mono">{a.date} ({a.time})</td>
                            <td className="p-3 font-medium">{a.location}</td>
                            <td className="p-3 text-center flex items-center justify-center gap-1.5">
                              <button 
                                onClick={() => startEditAgenda(a)}
                                className="p-1 hover:bg-slate-100 text-brand-green rounded cursor-pointer transition-colors"
                                title="Edit Agenda"
                              >
                                <Edit2 size={13} />
                              </button>
                              <button 
                                onClick={() => deleteAgenda(a.id)}
                                className="p-1 hover:bg-red-50 text-red-500 rounded cursor-pointer transition-colors"
                                title="Hapus Agenda"
                              >
                                <Trash size={13} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 7. FEEDBACK/INBOX LIST SEC */}
            {activeAdminSec === 'feedback' && (
              <div className="space-y-6" id="cms-messages-box">
                <h3 className="text-lg font-display font-black text-slate-850 border-b pb-3 uppercase tracking-wide">
                  Kotak Masuk Aduan & Pertanyaan Publik
                </h3>

                <div className="space-y-4">
                  {feedbacks.map((f) => (
                    <div 
                      key={f.id} 
                      className={`p-4 border rounded-xl shadow-xs transition-shadow flex justify-between items-start flex-wrap gap-4 ${
                        f.read ? 'bg-white text-slate-650' : 'bg-brand-green/5 border-emerald-200 text-slate-800'
                      }`}
                    >
                      <div className="space-y-1.5 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-black text-xs text-slate-900">{f.name}</span>
                          <span className="text-[10px] text-slate-400 font-sans">{f.email}</span>
                          {!f.read && (
                            <span className="bg-emerald-600 text-white font-mono text-[8px] px-1.5 py-0.5 rounded font-black max-w-max uppercase">BARU</span>
                          )}
                        </div>
                        <p className="font-display font-extrabold text-xs text-brand-green leading-snug">{f.subject}</p>
                        <p className="text-xs text-slate-600 leading-relaxed font-sans">{f.message}</p>
                      </div>

                      <div className="flex gap-2">
                        {!f.read && (
                          <button 
                            onClick={() => markFeedbackRead(f.id)}
                            className="bg-brand-green text-white font-mono text-[9px] font-bold px-2 py-1 rounded shadow cursor-pointer uppercase border border-brand-gold"
                          >
                            Tandai Baca
                          </button>
                        )}
                        <button 
                          onClick={() => deleteFeedback(f.id)}
                          className="bg-red-50 hover:bg-red-100 text-red-600 font-mono text-[9px] font-bold px-2 py-1 rounded cursor-pointer uppercase border"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  ))}

                  {feedbacks.length === 0 && (
                    <div className="text-center py-10 bg-slate-50 border border-dashed rounded-xl font-medium text-slate-400">
                      Kotak masuk aduan/pertanyaan kosong saat ini.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 8. KELOLA E-PUSTAKA SEC */}
            {activeAdminSec === 'e-pustaka' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="cms-books-panel">
                {/* Book entry form */}
                <div className="lg:col-span-1 bg-white border p-5 rounded-xl shadow-xs space-y-4">
                  <h4 className="font-display font-black text-sm text-slate-800 border-b pb-2 uppercase tracking-wide">
                    {editingId ? 'Edit Buku Digital' : 'Daftar Buku Digital Baru'}
                  </h4>
                  <form onSubmit={handleCreateBook} className="space-y-4 text-xs font-sans">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 block">Judul Buku *</label>
                      <input 
                        type="text" 
                        required 
                        value={bTitle}
                        onChange={(e) => setBTitle(e.target.value)}
                        placeholder="Contoh: Tafsir Jalalain Juz II" 
                        className="w-full px-3 py-2 border rounded bg-white text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 block">Nama Penulis / Mushannif *</label>
                      <input 
                        type="text" 
                        required 
                        value={bAuthor}
                        onChange={(e) => setBAuthor(e.target.value)}
                        placeholder="Contoh: Jalaluddin as-Suyuthi" 
                        className="w-full px-3 py-2 border rounded bg-white text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 block">Kategori Buku *</label>
                      <select 
                        value={bCategory} 
                        onChange={(e) => setBCategory(e.target.value)}
                        className="w-full px-3 py-2 border rounded bg-white text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-green"
                      >
                        <option value="Buku Keagamaan">Buku Keagamaan / Kitab</option>
                        <option value="Sains & Sains Terapan">Sains & Matematika</option>
                        <option value="Sastra & Bahasa">Sastra & Bahasa Jepang/Arab</option>
                        <option value="LKS & Lembar Diskusi">LKS Madrasah Mandiri</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 block">ISBN/Registry</label>
                        <input 
                          type="text" 
                          value={bIsbn}
                          onChange={(e) => setBIsbn(e.target.value)}
                          placeholder="978-602-..." 
                          className="w-full px-3 py-2 border rounded bg-white text-xs text-slate-800 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 block">Tahun Terbit</label>
                        <input 
                          type="number" 
                          value={bYear}
                          onChange={(e) => setBYear(e.target.value)}
                          placeholder="2025" 
                          className="w-full px-3 py-2 border rounded bg-white text-xs text-slate-800 focus:outline-none"
                        />
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-2.5 bg-brand-green hover:bg-brand-green-light border border-brand-gold text-white font-sans font-bold rounded-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                      <PlusCircle size={14} className="text-brand-gold" />
                      <span>{editingId ? 'Simpan Perubahan' : 'Daftarkan E-Book'}</span>
                    </button>
                    {editingId && (
                      <button 
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setBTitle('');
                          setBAuthor('');
                          setBIsbn('');
                        }}
                        className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-sans font-bold text-xs py-2 rounded-lg cursor-pointer transition-all"
                      >
                        Batal Edit
                      </button>
                    )}
                  </form>
                </div>

                {/* Ebooks List Area */}
                <div className="lg:col-span-2 bg-white border p-5 rounded-xl shadow-xs space-y-4">
                  <h4 className="font-display font-black text-sm text-slate-855 border-b pb-2 uppercase tracking-wide">
                    Koleksi Perpustakaan Buku Digital ({books.length})
                  </h4>
                  <div className="overflow-x-auto text-xs">
                    <table className="w-full text-left font-sans border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b text-slate-400 font-bold font-mono">
                          <th className="p-3">Judul Koleksi</th>
                          <th className="p-3">Kategori</th>
                          <th className="p-3">ISBN</th>
                          <th className="p-3 text-center">Tindakan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-705">
                        {books.map((b) => (
                          <tr key={b.id} className="hover:bg-slate-50/40">
                            <td className="p-3">
                              <p className="font-extrabold text-slate-900">{b.title}</p>
                              <p className="text-[10px] text-slate-400">Pengarang: {b.author}</p>
                            </td>
                            <td className="p-3 font-medium text-brand-green">{b.category}</td>
                            <td className="p-3 font-mono font-bold text-slate-550">{b.isbn}</td>
                            <td className="p-3 text-center flex items-center justify-center gap-1.5">
                              <button 
                                onClick={() => startEditBook(b)}
                                className="p-1 hover:bg-slate-100 text-brand-green rounded cursor-pointer transition-colors"
                                title="Edit Buku"
                              >
                                <Edit2 size={13} />
                              </button>
                              <button 
                                onClick={() => {
                                  if (confirm('Yakin ingin menghapus buku ini?')) deleteBook(b.id);
                                }}
                                className="p-1 hover:bg-red-50 text-red-500 rounded cursor-pointer transition-colors"
                                title="Hapus Buku"
                              >
                                <Trash size={13} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            {/* 9. MANAJEMEN DATA SISWA & ALUMNI SEC */}
            {activeAdminSec === 'manajemen-data' && (
              <div className="space-y-6" id="cms-data-panel">
                <div className="flex justify-between items-center border-b pb-3 flex-wrap gap-4">
                  <h3 className="text-lg font-display font-black text-slate-855 uppercase tracking-wide">
                    Manajemen Data Akademik Siswa & Alumni
                  </h3>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  {/* Left Column Forms wrapper */}
                  <div className="xl:col-span-1 space-y-6">
                    {/* Add student form */}
                    <div className="bg-white border p-5 rounded-xl shadow-xs space-y-4">
                      <h4 className="font-display font-black text-sm text-slate-800 border-b pb-2 uppercase tracking-wide">
                        {editingId ? 'Edit Data Terbuka' : 'Tambah Data Alumni / Siswa Baru'}
                      </h4>
                      
                      {/* Form tabs */}
                      <div className="space-y-4 text-xs font-sans">
                        <div className="p-3 bg-slate-50 border rounded-xl text-[11px] font-medium leading-relaxed">
                          Silahkan gunakan form isian di bawah untuk mendaftarkan database profil baru. Pelamar yang dimasukkan di sini berhak menggunakan program <strong>Sistem Kelulusan</strong> di halaman publik akademik.
                        </div>

                        {/* Input Fields */}
                        <div className="space-y-3">
                          <h5 className="font-display font-bold text-xxs text-brand-gold uppercase tracking-wider">A. Isian Database Siswa</h5>
                          <form onSubmit={handleCreateStudent} className="space-y-3">
                            <div className="space-y-1">
                              <label className="text-[10px] text-slate-500 block">Nama Lengkap Siswa *</label>
                              <input 
                                type="text" required value={sName} onChange={(e) => setSName(e.target.value)}
                                placeholder="Contoh: Muhammad Al-Fatih"
                                className="w-full px-3 py-2 border rounded bg-white text-xs focus:outline-none"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="space-y-1">
                                <label className="text-[10px] text-slate-500 block">NISN Nasional *</label>
                                <input 
                                  type="text" required value={sNisn} onChange={(e) => setSNisn(e.target.value)}
                                  placeholder="Contoh: 1005234231"
                                  className="w-full px-3 py-2 border rounded bg-white text-xs focus:outline-none"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] text-slate-500 block">NISM Instansi</label>
                                <input 
                                  type="text" value={sNism} onChange={(e) => setSNism(e.target.value)}
                                  placeholder="Contoh: 121..."
                                  className="w-full px-3 py-2 border rounded bg-white text-xs focus:outline-none"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="space-y-1">
                                <label className="text-[10px] text-slate-500 block">Rata Nilai Rapor</label>
                                <input 
                                  type="text" value={sRaporScore} onChange={(e) => setSRaporScore(e.target.value)}
                                  placeholder="88.5"
                                  className="w-full px-3 py-2 border rounded bg-white text-xs focus:outline-none"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] text-slate-500 block">Jenjang Roster Kelompok</label>
                                <input 
                                  type="text" value={sClass} onChange={(e) => setSClass(e.target.value)}
                                  placeholder="XII IPA 1"
                                  className="w-full px-3 py-2 border rounded bg-white text-xs focus:outline-none"
                                />
                              </div>
                            </div>
                            <button type="submit" className="w-full py-2 bg-slate-900 border text-white font-bold rounded cursor-pointer">
                              {editingId ? 'Simpan Perubahan Siswa' : '+ Tambah Ke Siswa'}
                            </button>
                            {editingId && (
                              <button 
                                type="button"
                                onClick={() => {
                                  setEditingId(null);
                                  setSName('');
                                  setSNisn('');
                                  setSNism('');
                                }}
                                className="w-full mt-1.5 py-1.5 bg-slate-200 text-slate-800 font-bold rounded cursor-pointer transition-all text-xs"
                              >
                                Batal Edit
                              </button>
                            )}
                          </form>
                        </div>

                        <div className="space-y-3 pt-3 border-t">
                          <h5 className="font-display font-bold text-xxs text-brand-gold uppercase tracking-wider">B. Isian Database Alumni</h5>
                          <form onSubmit={handleCreateAlumni} className="space-y-3">
                            <div className="space-y-1">
                              <label className="text-[10px] text-slate-500 block">Nama Lengkap Alumni *</label>
                              <input 
                                type="text" required value={alName} onChange={(e) => setAlName(e.target.value)}
                                placeholder="Contoh: Ahmad Fauzan"
                                className="w-full px-3 py-2 border rounded bg-white text-xs focus:outline-none"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="space-y-1">
                                <label className="text-[10px] text-slate-500 block">Tahun Angkatan *</label>
                                <input 
                                  type="text" required value={alGradYear} onChange={(e) => setAlGradYear(e.target.value)}
                                  placeholder="2025"
                                  className="w-full px-3 py-2 border rounded bg-white text-xs focus:outline-none"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] text-slate-500 block">Status Sekarang</label>
                                <input 
                                  type="text" value={alStatus} onChange={(e) => setAlStatus(e.target.value)}
                                  placeholder="Kuliah di Universitas Syiah Kuala"
                                  className="w-full px-3 py-2 border rounded bg-white text-xs focus:outline-none"
                                />
                              </div>
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] text-slate-500 block">Testimoni Motivasi</label>
                              <textarea 
                                value={alTestimony} onChange={(e) => setAlTestimony(e.target.value)}
                                placeholder="Ketik sepatah kata motivasi..."
                                className="w-full px-3 py-2 border rounded bg-white text-xs focus:outline-none h-16 resize-none"
                              />
                            </div>
                            <button type="submit" className="w-full py-2 bg-slate-900 border text-white font-bold rounded cursor-pointer">
                              {editingId ? 'Simpan Perubahan Alumni' : '+ Tambah Ke Alumni'}
                            </button>
                            {editingId && (
                              <button 
                                type="button"
                                onClick={() => {
                                  setEditingId(null);
                                  setAlName('');
                                  setAlGradYear('');
                                  setAlStatus('');
                                  setAlTestimony('');
                                }}
                                className="w-full mt-1.5 py-1.5 bg-slate-200 text-slate-800 font-bold rounded cursor-pointer transition-all text-xs"
                              >
                                Batal Edit
                              </button>
                            )}
                          </form>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Right Column lists wrapper */}
                  <div className="xl:col-span-2 space-y-6">
                    {/* Students list */}
                    <div className="bg-white border p-5 rounded-xl shadow-xs space-y-3">
                      <h4 className="font-display font-black text-xs text-slate-800 border-b pb-2 uppercase tracking-wider">
                        Siswa Yang Terdaftar Saat Ini ({students.length})
                      </h4>
                      <div className="overflow-x-auto text-xxs">
                        <table className="w-full text-left font-sans">
                          <thead>
                            <tr className="bg-slate-50 border-b text-slate-400 font-bold font-mono">
                              <th className="p-2">Nama</th>
                              <th className="p-2">NISN</th>
                              <th className="p-2">NISM</th>
                              <th className="p-2">Rata Nilai</th>
                              <th className="p-2 text-center">Tindakan</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50 text-slate-700">
                            {students.map((st) => (
                              <tr key={st.id} className="hover:bg-slate-50/50">
                                <td className="p-2 font-bold text-slate-855">{st.name}</td>
                                <td className="p-2 font-mono">{st.nisn}</td>
                                <td className="p-2 font-mono">{st.nism}</td>
                                <td className="p-2 font-mono text-emerald-700 font-extrabold">{st.raporScore}</td>
                                <td className="p-2 text-center flex items-center justify-center gap-1.5">
                                  <button onClick={() => startEditStudent(st)} className="p-1 hover:bg-slate-100 text-brand-green rounded cursor-pointer transition-colors" title="Edit Siswa">
                                    <Edit2 size={12} />
                                  </button>
                                  <button onClick={() => deleteStudent(st.id)} className="p-1 hover:bg-red-50 text-red-500 rounded cursor-pointer transition-colors" title="Hapus Siswa">
                                    <Trash size={12} />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Alumni list */}
                    <div className="bg-white border p-5 rounded-xl shadow-xs space-y-3">
                      <h4 className="font-display font-black text-xs text-slate-805 border-b pb-2 uppercase tracking-wider">
                        List Data Alumni Terpajang ({alumni.length})
                      </h4>
                      <div className="overflow-x-auto text-xxs">
                        <table className="w-full text-left font-sans">
                          <thead>
                            <tr className="bg-slate-50 border-b text-slate-400 font-bold font-mono">
                              <th className="p-2">Alumni</th>
                              <th className="p-2">Angkatan</th>
                              <th className="p-2">Aktivitas Sekarang</th>
                              <th className="p-2 text-center">Tindakan</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50 text-slate-600">
                            {alumni.map((al) => (
                              <tr key={al.id} className="hover:bg-slate-50/50">
                                <td className="p-2 font-bold text-slate-855">{al.name}</td>
                                <td className="p-2 font-mono">{al.graduationYear}</td>
                                <td className="p-2">{al.currentStatus}</td>
                                <td className="p-2 text-center flex items-center justify-center gap-1.5">
                                  <button onClick={() => startEditAlumni(al)} className="p-1 hover:bg-slate-100 text-brand-green rounded cursor-pointer transition-colors" title="Edit Alumni">
                                    <Edit2 size={12} />
                                  </button>
                                  <button onClick={() => deleteAlumni(al.id)} className="p-1 hover:bg-red-50 text-red-500 rounded cursor-pointer transition-colors" title="Hapus Alumni">
                                    <Trash size={12} />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 10. SYSTEM ACTIVITY LOG LIST */}
            {activeAdminSec === 'activity-logs' && (
              <div className="space-y-6" id="cms-activity-log">
                <div className="border-b pb-3 flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-display font-black text-slate-850 uppercase tracking-wide">
                      Catatan Log Aktivitas Sistem
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">Semua audit pengawasan database tersimpan di cloud dengan aman (real-time)</p>
                  </div>
                </div>

                <div className="bg-white border rounded-xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50 border-b text-slate-400 font-bold font-mono">
                          <th className="p-3">Waktu Transaksi</th>
                          <th className="p-3">Nama Anggota</th>
                          <th className="p-3">Peran (Role)</th>
                          <th className="p-3">Perubahan Tindakan</th>
                          <th className="p-3">Details Identitas</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {activityLogs.map((log) => (
                          <tr key={log.id} className="hover:bg-slate-50/50 text-slate-650">
                            <td className="p-3 font-mono text-[10px] text-slate-500">
                              {new Date(log.timestamp).toLocaleString('id-ID')}
                            </td>
                            <td className="p-3 font-bold text-slate-900">{log.operatorName}</td>
                            <td className="p-3">
                              {log.operatorRole === 'Admin Utama' && (
                                <span className="bg-purple-100 text-purple-800 border font-bold text-[8px] px-2 py-0.5 rounded-full uppercase">Admin Utama</span>
                              )}
                              {log.operatorRole === 'Staf Humas' && (
                                <span className="bg-blue-105 text-blue-700 border font-bold text-[8px] px-2 py-0.5 rounded-full uppercase">Staf Humas</span>
                              )}
                              {log.operatorRole === 'OSIM' && (
                                <span className="bg-brand-gold/10 text-brand-gold-dark border font-bold text-[8px] px-2 py-0.5 rounded-full uppercase">OSIM</span>
                              )}
                            </td>
                            <td className="p-3">
                              <span className="font-bold text-emerald-800 font-sans">{log.action}</span>
                            </td>
                            <td className="p-3 text-slate-500 italic max-w-xs truncate" title={log.details}>
                              {log.details}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
