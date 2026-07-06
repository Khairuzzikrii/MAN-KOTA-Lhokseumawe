/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { 
  Phone, Mail, MapPin, Send, MessageCircle, HelpCircle, 
  ChevronDown, ShieldAlert, Sparkles, CheckCircle
} from 'lucide-react';

interface ContactViewsProps {
  subTab: string;
}

export default function ContactViews({ subTab }: ContactViewsProps) {
  const { submitFeedback } = useSchool();
  
  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  // FAQ Expand state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Mohon lengkapi data anda.');
      return;
    }

    submitFeedback({
      name,
      email,
      subject: subject || 'Masukan Umum / Pertanyaan',
      message
    });

    setIsSent(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const faqs = [
    {
      q: 'Bagaimana cara mendaftar PPDB Online di MAN Kota Lhokseumawe?',
      a: 'Caranya sangat mudah! Anda cukup mengunjungi menu PPDB & Layanan, kemudian pilih sub-tab Formulir PPDB Online. Isi seluruh berkas biodata Anda, simpan nomor registrasi pendaftaran otomatis, dan pantau status kelengkapan berkas Anda secara berkala di situ.'
    },
    {
      q: 'Apakah pendaftaran calon siswa dikenakan biaya administrasi?',
      a: 'Tidak. Seluruh rangkaian proses pendaftaran berkas awal jalur reguler maupun jalur prestasi PPDB MAN Kota Lhokseumawe tidak dipungut biaya apapun (Gratis) sesuai instruksi Kementerian Agama.'
    },
    {
      q: 'Apa saja program peminatan unggulan di madrasah ini?',
      a: 'Kami menawarkan program riset MIPA Unggulan, peminatan IPS Terpadu dengan penguatan Kewirausahaan, serta Jurusan Ilmu Keagamaan dengan target penguasaan hafalan Qur’an 5-10 juz bersertifikat.'
    },
    {
      q: 'Di mana lokasi fisik madrasah dan bagaimana cara berkunjung?',
      a: 'MAN Kota Lhokseumawe berlokasi di Jl. Mon Geudong, Kecamatan Banda Sakti, Kota Lhokseumawe, Aceh. Pelayanan tamu komite dibuka Senin-Kamis mulai pukul 08:00 hingga 15:00 WIB.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="contact-container">
      {/* 1. HUBUNGI KAMI */}
      {subTab === 'hubungi' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" id="contact-hubungi-panel">
          
          {/* Left Form contacts input */}
          <div className="bg-white border rounded-2xl shadow-sm overflow-hidden" id="feedback-form-card">
            <div className="bg-brand-green p-6 text-white border-b-2 border-brand-gold">
              <h3 className="font-display font-extrabold text-base uppercase tracking-wider">Formulir Kontak Publik</h3>
              <p className="text-[11px] text-emerald-100 font-sans mt-0.5">Sampaikan pertanyaan, masukan, maupun aduan demi peningkatan madrasah.</p>
            </div>

            {isSent ? (
              <div className="p-8 text-center space-y-3.5 bg-emerald-55/45">
                <CheckCircle className="w-12 h-12 text-brand-green mx-auto animate-bounce" />
                <h4 className="font-display font-black text-lg text-slate-850">Pesan Anda Berhasil Terkirim!</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">Assalamu’alaikum. Terima kasih atas masukan anda, kami akan membalas pertanyaan Anda sesegera mungkin.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="bg-brand-green text-white font-sans text-xs px-4 py-2 rounded-lg border cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleMessageSubmit} className="p-6 sm:p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 block select-none">Nama Lengkap Pengirim *</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama panggilan/lengkap..."
                      className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 block select-none">Alamat Email Aktif *</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contoh@gmail.com..."
                      className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block select-none">Subjek / Topik Utama</label>
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Pertanyaan seputar PPDB, dsb..."
                    className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block select-none">Isi Pesan / Pertanyaan *</label>
                  <textarea 
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ketik rincian pertanyaan atau masukan Anda di sini..."
                    className="w-full p-2.5 border text-xs text-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-green"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-green hover:bg-brand-green-light hover:text-white border border-brand-gold text-white font-sans font-bold text-xs py-2.5 rounded-lg shadow-md inline-flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Kirim Hubungi Pesan</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right contacts information card info */}
          <div className="space-y-6" id="digital-whatsapp-helper">
            <div className="bg-white border p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-display font-black text-slate-900 text-xs uppercase tracking-widest border-b pb-2">
                Humas WhatsApp Gateway
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Butuh layanan verifikasi cepat atau tanya jawab langsung dengan operator PPDB? Hubungi saluran WhatsApp Humas resmi madrasah dengan menekan link di bawah ini.
              </p>
              
              <a 
                href="https://wa.me/6281269334412?text=Assalamu'alaikum%20Humas%20MAN%20Lhokseumawe,%20Saya%20tertarik%20bertanya%20seputar%20PPDB"
                target="_blank" 
                rel="noreferrer" 
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs px-5 py-3 rounded-xl shadow-md cursor-pointer transition-colors"
              >
                <MessageCircle size={18} />
                <span>Hubungi via WhatsApp (+62 812 6933 4412)</span>
              </a>
            </div>

            {/* Hours summary details */}
            <div className="bg-slate-50 border p-5 rounded-xl text-xs text-slate-550 space-y-3">
              <h4 className="font-display font-extrabold text-brand-green uppercase tracking-wide">Petunjuk Alamat Fisik</h4>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p>Kampus MAN Lhokseumawe, Jl. Mon Geudong, Kecamatan Banda Sakti, Kota Lhokseumawe, Aceh, Kode Pos: 24351.</p>
              </div>
              <div className="pt-2">
                <a 
                  href="https://maps.app.goo.gl/ZyoHVEo4LNZC1rD57" 
                  target="_blank" 
                  rel="noreferrer" 
                  referrerPolicy="no-referrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-brand-gold hover:text-brand-gold-light border border-slate-700 text-xs font-semibold py-2 px-3 rounded-lg cursor-pointer transition-colors font-sans"
                >
                  <MapPin size={14} />
                  <span>Buka Petunjuk Arah di Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* 2. LAYANAN PPID */}
      {subTab === 'ppid' && (
        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 max-w-4xl mx-auto" id="contact-ppid">
          <div className="space-y-2 mb-4 border-b pb-4">
            <span className="bg-brand-green/10 text-brand-green text-[10px] font-mono font-black px-2.5 py-1 rounded-full uppercase">Pemberitaan Keterbukaan</span>
            <h2 className="text-xl sm:text-2.5xl font-display font-black text-slate-900 pt-1">
              Pejabat Pengelola Informasi & Dokumentasi (PPID)
            </h2>
            <p className="text-xs text-slate-400">Pemberian hak akses informasi publik sesuai Undang-Undang Nomor 14 Tahun 2008.</p>
          </div>

          <div className="text-xs sm:text-sm text-slate-650 leading-relaxed space-y-4">
            <p>
              MAN Kota Lhokseumawe menjamin seutuhnya kemudahan akses memperoleh informasi publik madrasah secara transparan, akuntabel, dan rahasia demi akuntabilitas tata laksana kelola negara madani. Hal ini mencakup laporan keuangan komite tahunan, rekapitulasi data kelulusan PPDB, serta sertifikat akreditasi guru.
            </p>
            <p className="font-bold underline text-brand-green">Alur Pengajuan Informasi PPID:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Pemohon mengajukan permohonan tertulis melalui form kontak atau surat resmi rujukan bermeterai ke madrasah.</li>
              <li>Menyertakan identitas asli pemohon (KTP / Paspor scan) untuk pencegahan duplikasi data malware.</li>
              <li>Petugas PPID madrasah akan mereview pengajuan anda dalam kurun waktu 10 s.d 14 hari kerja kerja pemerintah.</li>
              <li>Dokumen file salinan dikirimkan via email terenkripsi atau disetor langsung di meja humas PPID.</li>
            </ol>
          </div>
        </div>
      )}

      {/* 3. FAQ SECTION */}
      {subTab === 'faq' && (
        <div className="max-w-2xl mx-auto space-y-4" id="contact-faq">
          <div className="text-center space-y-2 mb-6">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">KOLOM JAWABAN</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">FAQ (Tanya Jawab Umum)</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border rounded-xl overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left p-4 flex justify-between items-center bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transform transition-transform ${expandedFaq === idx ? 'rotate-180 text-brand-green' : ''}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="p-4 border-t text-xs sm:text-sm text-slate-600 leading-relaxed font-sans bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
