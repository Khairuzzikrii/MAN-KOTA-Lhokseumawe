/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { PPDBRegistration } from '../types';
import { 
  FileText, HelpCircle, CheckCircle, Upload, Award, 
  Search, ShieldAlert, Sparkles, AlertCircle
} from 'lucide-react';

interface PpdbViewsProps {
  subTab: string;
}

export default function PpdbViews({ subTab }: PpdbViewsProps) {
  const { submitPpdb, ppdbList } = useSchool();
  
  // Registration Form State
  const [fullName, setFullName] = useState('');
  const [nisn, setNisn] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [schoolOrigin, setSchoolOrigin] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState<'L' | 'P'>('L');
  const [address, setAddress] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');
  const [raporScore, setRaporScore] = useState<number>(85);
  
  // Mock file states (for demonstration upload)
  const [raporFile, setRaporFile] = useState<File | null>(null);
  const [kkFile, setKkFile] = useState<File | null>(null);
  const [ijazahFile, setIjazahFile] = useState<File | null>(null);

  const [formSubmitted, setFormSubmitted] = useState<string | null>(null);

  // Status Checking State
  const [checkRegNum, setCheckRegNum] = useState('');
  const [matchedRecord, setMatchedRecord] = useState<PPDBRegistration | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !nisn.trim() || !email.trim() || !phone.trim() || !schoolOrigin.trim()) {
      alert('Mohon isi semua data formulir yang bertanda bintang (*)');
      return;
    }

    const regNumber = submitPpdb(
      {
        fullName,
        nisn,
        email,
        phone,
        schoolOrigin,
        birthDate,
        birthPlace,
        gender,
        religion: 'Islam',
        address,
        guardianName,
        guardianPhone,
        raporScore: Number(raporScore)
      },
      {
        rapor: raporFile,
        kk: kkFile,
        ijazah: ijazahFile
      }
    );

    setFormSubmitted(regNumber);
    
    // Clear Form inputs
    setFullName('');
    setNisn('');
    setEmail('');
    setPhone('');
    setSchoolOrigin('');
    setBirthPlace('');
    setBirthDate('');
    setAddress('');
    setGuardianName('');
    setGuardianPhone('');
    setRaporScore(85);
    setRaporFile(null);
    setKkFile(null);
    setIjazahFile(null);
  };

  const handleCheckStatus = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const matched = ppdbList.find(r => r.regNumber.trim().toUpperCase() === checkRegNum.trim().toUpperCase() || r.nisn === checkRegNum.trim());
    setMatchedRecord(matched || null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="ppdb-container">
      {/* 1. ALUR & JADWAL SELEKSI */}
      {subTab === 'ppdb-alur' && (
        <div className="space-y-10" id="ppdb-alur-flows">
          <div className="text-center space-y-2 mb-4">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest font-bold">PANDUAN MASUK</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Alur & Syarat PPDB TA 2026/2027</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Pendaftaran Online', desc: 'Isi biodata lengkap pada formulir online dan unggah berkas rujukan (Rapor, KK).' },
              { step: '02', title: 'Seleksi Berkas', desc: 'Panitia akan memverifikasi keaslian berkas & keselarasan nilai rapor dhuha calon siswa.' },
              { step: '03', title: 'Ujian Computer (CBT)', desc: 'Mengikuti tes tertulis potensi akademik, pemetaan mapel pilihan, dan wawancara.' },
              { step: '04', title: 'Pengumuman Resmi', desc: 'Kelulusan diumumkan via web secara transparan. Berkas asli disetor kala daftar ulang.' }
            ].map((alur, idx) => (
              <div key={idx} className="bg-white border rounded-2xl p-6 relative hover:shadow-md transition-shadow">
                <div className="text-3xl font-display font-black text-brand-green/20 mb-3">{alur.step}</div>
                <h3 className="font-display font-black text-xs uppercase tracking-wide text-brand-green mb-1.5">{alur.title}</h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">{alur.desc}</p>
              </div>
            ))}
          </div>

          {/* Schedule parameters */}
          <div className="bg-slate-50 border p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto space-y-4">
            <h3 className="font-display font-black text-sm text-slate-800 uppercase tracking-widest border-b pb-2">
              Agenda & Timeline Seleksi Gelombang I
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs leading-relaxed text-slate-650">
              <div className="bg-white p-4 rounded-xl border">
                <p className="font-mono text-xs font-extrabold text-brand-green">1 Juni - 25 Juni 2026</p>
                <p className="font-bold text-slate-800 mt-1">Pembukaan Pendaftaran Online</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Formulir diakses gratis 24 jam</p>
              </div>
              <div className="bg-white p-4 rounded-xl border">
                <p className="font-mono text-xs font-extrabold text-brand-green">28 Juni 2026</p>
                <p className="font-bold text-slate-800 mt-1">Ujian Tertulis Seleksi (CBT)</p>
                <p className="text-[10px] text-slate-400 mt-0.5">TPA, Matematika & Wawancara</p>
              </div>
              <div className="bg-white p-4 rounded-xl border">
                <p className="font-mono text-xs font-extrabold text-brand-green">3 Juli 2026</p>
                <p className="font-bold text-slate-800 mt-1">Pengumuman Kelulusan Akhir</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Melalui Login Akun status web</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. FORMULIR PENDAFTARAN ONLINE */}
      {subTab === 'ppdb-daftar' && (
        <div className="max-w-3xl mx-auto" id="ppdb-form-daftaran">
          {formSubmitted ? (
            <div className="bg-emerald-55 border border-emerald-250 p-8 rounded-2xl text-center space-y-4 shadow">
              <Sparkles className="w-12 h-12 text-brand-green mx-auto animate-bounce" />
              <h3 className="font-display font-black text-lg sm:text-2xl text-slate-900">
                Pendaftaran Berhasil Dikirim!
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Terima kasih, berkas pendaftaran calon siswa <strong>ananda Al-Karimah</strong> telah disimpan ke dalam database MAN Kota Lhokseumawe.
              </p>
              <div className="bg-white border rounded-xl p-4 max-w-xs mx-auto text-center space-y-1.5 shadow-sm">
                <p className="text-[10px] font-mono font-medium text-slate-400 uppercase tracking-widest">KUNCI PENDAFTARAN</p>
                <p className="font-display font-black text-lg text-brand-green font-mono">{formSubmitted}</p>
                <p className="text-[10px] text-slate-405 italic">Simpan nomor ini untuk pengecekan status.</p>
              </div>
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  onClick={() => {
                    setCheckRegNum(formSubmitted);
                    setFormSubmitted(null);
                    // Open status tab helper in App component
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className="bg-brand-green text-white font-sans font-bold text-xs px-5 py-2.5 rounded-lg border shadow cursor-pointer"
                >
                  Cek Status Pendaftaran
                </button>
                <button
                  onClick={() => setFormSubmitted(null)}
                  className="bg-white border border-slate-205 text-slate-700 font-sans font-medium text-xs px-5 py-2.5 rounded-lg hover:bg-slate-50 cursor-pointer"
                >
                  Daftar Calon Lain
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white border rounded-2xl shadow-sm overflow-hidden min-h-max" id="ppdb-main-form">
              <div className="bg-brand-green p-6 text-white border-b-2 border-brand-gold flex items-center justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-base uppercase tracking-wider">Formulir Mandiri PPDB Online 2026</h3>
                  <p className="text-[11px] text-emerald-100 font-sans mt-0.5">Lengkapi biodata asli sesuai dengan Kartu Keluarga & Akta.</p>
                </div>
                <div className="px-3 py-1.5 bg-white/10 border border-white/20 text-[10px] font-mono rounded font-bold uppercase tracking-widest text-brand-gold-light">
                  Batch I Reguler
                </div>
              </div>

              <form onSubmit={handleRegisterSubmit} className="p-6 sm:p-8 space-y-6">
                
                {/* Section A: Calon Siswa */}
                <div className="space-y-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-widest text-brand-green border-b pb-2">
                    A. Biodata Calon Peserta Didik
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 block select-none">Nama Lengkap Siswa *</label>
                      <input 
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Sesuai Akta Kelahiran..."
                        className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 block select-none">NISN (10 Digit Angka) *</label>
                      <input 
                        type="text" 
                        required
                        maxLength={10}
                        value={nisn}
                        onChange={(e) => setNisn(e.target.value.replace(/\D/g, ''))}
                        placeholder="Nomor Induk Siswa Nasional..."
                        className="w-full p-2.5 border text-xs text-slate-800 rounded-lg font-mono focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 block select-none">Email Siswa / Wali *</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contoh@gmail.com..."
                        className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 block select-none">Nomor WhatsApp Aktif *</label>
                      <input 
                        type="text" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="Contoh: 0812693xxxxx"
                        className="w-full p-2.5 border text-xs text-slate-800 rounded-lg font-mono focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 block select-none">Sekolah Asal (SMP/MTs) *</label>
                      <input 
                        type="text" 
                        required
                        value={schoolOrigin}
                        onChange={(e) => setSchoolOrigin(e.target.value)}
                        placeholder="Nama sekolah asal..."
                        className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 block select-none">Tempat Lahir *</label>
                      <input 
                        type="text" 
                        required
                        value={birthPlace}
                        onChange={(e) => setBirthPlace(e.target.value)}
                        placeholder="Kota Lahir..."
                        className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 block select-none">Tanggal Lahir *</label>
                      <input 
                        type="date" 
                        required
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="w-full p-2 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 block select-none">Jenis Kelamin Siswa *</label>
                      <div className="flex gap-4 p-2.5 bg-slate-50 border rounded-lg">
                        <label className="flex items-center space-x-2 text-xs font-sans text-slate-700 cursor-pointer">
                          <input 
                            type="radio" 
                            name="gender" 
                            checked={gender === 'L'} 
                            onChange={() => setGender('L')} 
                            className="text-brand-green focus:ring-brand-green"
                          />
                          <span>Laki-laki (Ikhwan)</span>
                        </label>
                        <label className="flex items-center space-x-2 text-xs font-sans text-slate-700 cursor-pointer">
                          <input 
                            type="radio" 
                            name="gender" 
                            checked={gender === 'P'} 
                            onChange={() => setGender('P')} 
                            className="text-brand-green focus:ring-brand-green"
                          />
                          <span>Perempuan (Akhwat)</span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 block select-none">Rata-Rata Nilai Rapor SMP/MTs (Smt 1-5) *</label>
                      <input 
                        type="number" 
                        required
                        min={0}
                        max={100}
                        step={0.1}
                        value={raporScore}
                        onChange={(e) => setRaporScore(Number(e.target.value))}
                        className="w-full p-2 px-3 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 block select-none">Alamat Lengkap Rumah Tinggal *</label>
                    <textarea 
                      required
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Nama jalan, nomor rumah, RT/RW, Dusun, Desa, Kecamatan..."
                      className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                    ></textarea>
                  </div>
                </div>

                {/* Section B: Orang Tua */}
                <div className="space-y-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-widest text-brand-green border-b pb-2">
                    B. Biodata Orang Tua / Wali
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 block select-none">Nama Lengkap Wali *</label>
                      <input 
                        type="text" 
                        required
                        value={guardianName}
                        onChange={(e) => setGuardianName(e.target.value)}
                        placeholder="Nama Ayah/Ibu/Wali..."
                        className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 block select-none">Nomor HP Wali Aktif *</label>
                      <input 
                        type="text" 
                        required
                        value={guardianPhone}
                        onChange={(e) => setGuardianPhone(e.target.value.replace(/\D/g, ''))}
                        className="w-full p-2.5 border text-xs text-slate-800 rounded-lg font-mono focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                  </div>
                </div>

                {/* Section C: Berkas Persyaratan */}
                <div className="space-y-4">
                  <h4 className="font-display font-black text-xs uppercase tracking-widest text-brand-green border-b pb-2">
                    C. Unggah Berkas Persyaratan (Simulasi)
                  </h4>
                  <p className="text-[10px] text-slate-400">Berkas format scan PDF/JPG, ukuran file maks 2MB.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Rapor File */}
                    <div className="border border-dashed p-4 rounded-xl text-center flex flex-col items-center justify-between hover:bg-slate-50 transition-colors">
                      <Upload className="w-6 h-6 text-slate-400 mb-2" />
                      <p className="text-[10px] font-bold text-slate-700">Scan Rapor SMP/MTs (Smt 1-5)</p>
                      <label className="mt-2.5 cursor-pointer bg-slate-100 hover:bg-brand-green hover:text-white border px-3 py-1.5 text-[9px] font-bold rounded duration-200">
                        Pilin File
                        <input 
                          type="file" 
                          className="hidden" 
                          onChange={(e) => setRaporFile(e.target.files ? e.target.files[0] : null)}
                        />
                      </label>
                      {raporFile && <p className="text-[9px] text-emerald-800 font-mono mt-1 font-bold truncate max-w-[120px]">✓ {raporFile.name}</p>}
                    </div>

                    {/* KK File */}
                    <div className="border border-dashed p-4 rounded-xl text-center flex flex-col items-center justify-between hover:bg-slate-50 transition-colors">
                      <Upload className="w-6 h-6 text-slate-400 mb-2" />
                      <p className="text-[10px] font-bold text-slate-700">Scan Kartu Keluarga (KK)</p>
                      <label className="mt-2.5 cursor-pointer bg-slate-100 hover:bg-brand-green hover:text-white border px-3 py-1.5 text-[9px] font-bold rounded duration-200">
                        Pilih File
                        <input 
                          type="file" 
                          className="hidden" 
                          onChange={(e) => setKkFile(e.target.files ? e.target.files[0] : null)}
                        />
                      </label>
                      {kkFile && <p className="text-[9px] text-emerald-800 font-mono mt-1 font-bold truncate max-w-[120px]">✓ {kkFile.name}</p>}
                    </div>

                    {/* Ijazah File */}
                    <div className="border border-dashed p-4 rounded-xl text-center flex flex-col items-center justify-between hover:bg-slate-50 transition-colors">
                      <Upload className="w-6 h-6 text-slate-400 mb-2" />
                      <p className="text-[10px] font-bold text-slate-700">Pernyataan Berkelakuan Baik</p>
                      <label className="mt-2.5 cursor-pointer bg-slate-100 hover:bg-brand-green hover:text-white border px-3 py-1.5 text-[9px] font-bold rounded duration-200">
                        Pilih File
                        <input 
                          type="file" 
                          className="hidden" 
                          onChange={(e) => setIjazahFile(e.target.files ? e.target.files[0] : null)}
                        />
                      </label>
                      {ijazahFile && <p className="text-[9px] text-emerald-800 font-mono mt-1 font-bold truncate max-w-[120px]">✓ {ijazahFile.name}</p>}
                    </div>
                  </div>
                </div>

                {/* Policy Agreement */}
                <div className="p-3 bg-slate-50 rounded-lg flex items-start gap-2.5">
                  <input type="checkbox" required className="mt-1 text-brand-green focus:ring-brand-green" />
                  <p className="text-[10px] text-slate-500 font-sans leading-relaxed">
                    Saya menyatakan bersumpah dengan jujur bahwa seluruh data biodata calon siswa dan file rujukan yang saya cantumkan di atas adalah asli, akurat, dan dapat dipertanggungjawabkan di depan hukum.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-green hover:bg-brand-green-light hover:text-white border border-brand-gold text-white font-sans font-bold text-xs py-3 rounded-lg shadow-md hover:translate-y-[-2px] transition-all cursor-pointer"
                  >
                    Kirim Formulir PPDB Online
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* 3. CEK / VERIFIKASI STATUS PENDAFTARAN (PPDB-STATUS) */}
      {subTab === 'ppdb-status' && (
        <div className="max-w-xl mx-auto space-y-6" id="ppdb-status-checker">
          <div className="bg-white border rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="font-display font-black text-sm text-slate-850 uppercase tracking-widest border-b pb-2">
              Pengecekan Status Kelulusan PPDB
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Ketikkan nomor pendaftaran otomatis Anda (format: <strong>PPDB-2026-XXXX</strong>) atau 10 digit <strong>NISN</strong> calon siswa untuk memeriksa berkas verifikasi dari operator.
            </p>

            <form onSubmit={handleCheckStatus} className="flex gap-2">
              <input 
                type="text" 
                required
                value={checkRegNum}
                onChange={(e) => setCheckRegNum(e.target.value)}
                placeholder="PPDB-2026-XXXX atau NISN..."
                className="w-full p-2.5 border text-xs text-slate-800 rounded-lg font-mono uppercase focus:outline-none focus:ring-1 focus:ring-brand-green"
              />
              <button 
                type="submit"
                className="bg-brand-green border border-brand-gold hover:bg-brand-green-light text-white font-sans font-bold text-xs px-5 rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Periksa</span>
              </button>
            </form>
          </div>

          {/* Results check render panel */}
          {hasSearched && (
            matchedRecord ? (
              <div className="bg-white border rounded-2xl overflow-hidden shadow-md">
                <div className="p-4 bg-slate-50 border-b flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <p className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-widest">NOMOR DAFTAR</p>
                    <p className="font-mono text-sm font-bold text-slate-800">{matchedRecord.regNumber}</p>
                  </div>
                  
                  {/* Status Indicator Pill */}
                  <div>
                    {matchedRecord.status === 'Verified' && (
                      <span className="bg-emerald-100 text-brand-green font-mono text-[9px] font-extrabold px-3 py-1 rounded-full uppercase border border-emerald-300 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Terverifikasi (Lolos Berkas)</span>
                      </span>
                    )}
                    {matchedRecord.status === 'Pending' && (
                      <span className="bg-brand-gold-light text-brand-gold-dark font-mono text-[9px] font-extrabold px-3 py-1 rounded-full uppercase border border-brand-gold/20 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Menunggu Verifikasi</span>
                      </span>
                    )}
                    {matchedRecord.status === 'Rejected' && (
                      <span className="bg-red-50 text-red-700 font-mono text-[9px] font-extrabold px-3 py-1 rounded-full uppercase border border-red-350 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>Tidak Lolos Berkas</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                    <div>
                      <span className="text-slate-400 font-medium block">Nama Calon Siswa:</span>
                      <span className="font-display font-extrabold text-slate-800">{matchedRecord.fullName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium block">NISN:</span>
                      <span className="font-mono text-slate-700">{matchedRecord.nisn}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium block">Sekolah Asal:</span>
                      <span className="font-semibold text-slate-800">{matchedRecord.schoolOrigin}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium block">Nilai Rata-rata Rapor:</span>
                      <span className="font-mono text-slate-700 font-bold">{matchedRecord.raporScore}</span>
                    </div>
                  </div>

                  {/* Dynamic Instructions based on status */}
                  <div className="border-t pt-4 mt-2">
                    {matchedRecord.status === 'Verified' && (
                      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-150 text-xs text-slate-700 space-y-1">
                        <p className="font-bold text-brand-green-dark">💡 Langkah Selanjutnya:</p>
                        <p className="leading-relaxed">Selamat! Berkas administrasi Anda telah dinyatakan <strong>Lengkap & Valid</strong>. Silakan hadir di Laboratorium Komputer Madrasah pada tanggal <strong>28 Juni 2026 pukul 07:30 WIB</strong> untuk melaksanakan ujian Computer Based Test (CBT) mandiri dengan membawa bukti print slip pendaftaran.</p>
                      </div>
                    )}
                    {matchedRecord.status === 'Pending' && (
                      <div className="p-4 bg-brand-gold-light rounded-xl border border-brand-gold/20 text-xs text-slate-705 space-y-1">
                        <p className="font-bold text-brand-gold-dark">⌛ Informasi Verifikasi:</p>
                        <p className="leading-relaxed">Pendaftaran anda sedang diulas oleh Sekre Panitia PPDB MAN Kota Lhokseumawe. Hasil ulasan umumnya rampung dalam waktu 24 s.d 48 jam paska kirim formulir. Mohon periksa kembali laman ini secara berkala.</p>
                      </div>
                    )}
                    {matchedRecord.status === 'Rejected' && (
                      <div className="p-4 bg-red-50 rounded-xl border border-red-150 text-xs text-red-700 space-y-1">
                        <p className="font-bold">❌ Catatan Kegagalan Berkas:</p>
                        <p className="leading-relaxed">Dokumen yang Anda kirimkan dinyatakan <strong>batal/tidak lengkap</strong> karena ada ketidakcocokan antara input nilai rapor dengan scan berkas terunggah. Silakan hubungi operator humas kami di nomor WhatsApp resmi madrasah untuk perbaikan data ulang.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-150 p-6 rounded-2xl text-center text-xs text-red-700 font-medium">
                Sistem tidak dapat mengidentifikasi pendaftaran dengan nomor/NISN "<strong>{checkRegNum}</strong>". Mohon pastikan kode Anda diketik dengan benar.
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
