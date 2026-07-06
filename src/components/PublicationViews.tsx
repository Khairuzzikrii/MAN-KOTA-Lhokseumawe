/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { NewsItem, GalleryItem, DownloadFile } from '../types';
import { 
  Calendar, Search, FileText, Download, Youtube, 
  Eye, ArrowLeft, Camera, Image, Newspaper, DownloadCloud
} from 'lucide-react';

interface PublicationViewsProps {
  subTab: string;
}

export default function PublicationViews({ subTab }: PublicationViewsProps) {
  const { news, gallery, downloads, incrementDownload } = useSchool();
  
  // News/Announcement list helpers
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [newsCategoryFilter, setNewsCategoryFilter] = useState('ALL');

  // Downloads section helpers
  const [downloadSearch, setDownloadSearch] = useState('');
  const [downloadCat, setDownloadCat] = useState('ALL');

  const filteredNews = news.filter((n) => {
    // If on "pengumuman" subTab, strictly show category === 'Pengumuman'
    if (subTab === 'pengumuman') {
      return n.category === 'Pengumuman';
    }
    // Else on "berita" subTab, filter based on dropdown
    const matchesCat = newsCategoryFilter === 'ALL' || n.category === newsCategoryFilter;
    return matchesCat;
  });

  const filteredDownloads = downloads.filter((dl) => {
    const matchesSearch = dl.title.toLowerCase().includes(downloadSearch.toLowerCase());
    const matchesCat = downloadCat === 'ALL' || dl.category === downloadCat;
    return matchesSearch && matchesCat;
  });

  const handleDownloadTrigger = (file: DownloadFile) => {
    incrementDownload(file.id);
    alert(`Mengunduh dokumen "${file.title}" (Format: ${file.format}, Ukuran: ${file.size}). Simpan berkas ini ke komputer Anda.`);
  };

  const articleCategories = ['ALL', 'Berita', 'Pengumuman', 'Prestasi', 'Kegiatan'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="publications-container">
      
      {/* 1. NEWS AND BLOG VIEWER */}
      {(subTab === 'berita' || subTab === 'pengumuman') && (
        selectedNews ? (
          /* DETAILED SINGLE NEWS ARTICLE VIEW */
          <div className="bg-white border rounded-2xl overflow-hidden shadow-sm p-5 sm:p-10 max-w-4xl mx-auto space-y-6" id="news-details-modal">
            <button 
              onClick={() => setSelectedNews(null)}
              className="flex items-center gap-1.5 text-xs text-brand-green font-bold hover:underline mb-4 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali Ke Daftar Berita</span>
            </button>

            <div className="space-y-3">
              <span className="bg-brand-gold text-brand-green-dark font-mono text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedNews.category}
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-display font-black text-slate-900 leading-tight">
                {selectedNews.title}
              </h2>
              <div className="flex items-center space-x-4 text-xs text-slate-400 font-sans">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedNews.date}
                </span>
                <span>•</span>
                <span>Penulis: {selectedNews.author}</span>
                <span>•</span>
                <span>Views: {selectedNews.views + 128}</span>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
              <img 
                src={selectedNews.imageUrl} 
                alt={selectedNews.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 white-space-pre-line font-sans pt-3">
              {selectedNews.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ) : (
          /* LIST OF ALL NEWS AND ANNOUNCEMENTS WITH FILTERS */
          <div className="space-y-8" id="news-list-view">
            <div className="text-center space-y-2 mb-4">
              <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest font-bold">INFO TERBARU</span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                {subTab === 'pengumuman' ? 'Pengumuman Resmi Madrasah' : 'Warta berita & Berita Sekolah'}
              </h2>
              <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
            </div>

            {/* Sub-Filters for Berita/Kategori */}
            {subTab === 'berita' && (
              <div className="flex flex-wrap gap-2 justify-center py-2" id="news-categories-tabs">
                {articleCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setNewsCategoryFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-bold border cursor-pointer ${
                      newsCategoryFilter === cat 
                        ? 'bg-brand-green text-white border-brand-green shadow' 
                        : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-150'
                    }`}
                  >
                    {cat === 'ALL' ? 'Semua Berita' : cat}
                  </button>
                ))}
              </div>
            )}

            {/* News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {filteredNews.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => {
                    setSelectedNews(item);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className="bg-white border hover:border-brand-green/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all divide-y divide-slate-100 flex flex-col justify-between cursor-pointer"
                >
                  <div className="h-44 bg-slate-100 overflow-hidden relative">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute top-3 left-3 bg-brand-green text-white font-mono text-[8px] font-bold px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3.5">
                    <h3 className="font-display font-black text-xs sm:text-sm text-slate-900 line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1 shadow-none">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}

              {filteredNews.length === 0 && (
                <div className="col-span-full text-center py-10 bg-slate-50 border border-dashed rounded-xl font-medium text-slate-400">
                  Tidak ada artikel berita atau pengumuman dalam kategori ini.
                </div>
              )}
            </div>
          </div>
        )
      )}

      {/* 2. PHOTO GALLERY (GALERI-FOTO) */}
      {subTab === 'galeri-foto' && (
        <div className="space-y-6" id="publications-photo-gallery">
          <div className="text-center space-y-2 mb-4">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">MEMORI MADRASAH</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Galeri Foto Kegiatan & Milestones</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {gallery.filter(g => g.type === 'photo').map((item) => (
              <div key={item.id} className="bg-white border rounded-xl overflow-hidden shadow-sm group">
                <div className="h-56 bg-slate-100 relative overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 z-10" />
                </div>
                <div className="p-4 space-y-1">
                  <span className="bg-slate-100 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded uppercase tracking-wider text-slate-500">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-slate-850 truncate leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[9px] text-slate-400 font-mono">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. VIDEO GALLERY (GALERI-VIDEO) */}
      {subTab === 'galeri-video' && (
        <div className="space-y-6" id="publications-video-gallery">
          <div className="text-center space-y-2 mb-4">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">DOKUMENTASI DIGITAL</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Galeri Video Dokumentasi Sosialisasi</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {gallery.filter(g => g.type === 'video').map((item) => (
              <div key={item.id} className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col">
                <div className="aspect-video w-full bg-slate-900">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={item.url} 
                    title={item.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 space-y-1">
                  <span className="bg-emerald-50 text-brand-green font-mono text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-100 flex items-center self-start gap-1 w-max">
                    <Youtube size={12} />
                    <span>Video Resmi</span>
                  </span>
                  <h3 className="font-display font-bold text-sm text-slate-900 leading-tight pt-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">{item.date} • Humas Media</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. DOWNLOAD AREA (DOWNLOAD-AREA) */}
      {subTab === 'download-area' && (
        <div className="space-y-6" id="publications-download-area">
          <div className="text-center space-y-2 mb-6">
            <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">DOKUMEN PUBLIK</span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Pusat Download Berkas & Silabus</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
            <p className="text-xs text-slate-500 max-w-xl mx-auto">Unduh berkas Juknis pendaftaran PPDB, formulir kuisioner angket, silabus Kemenag, serta berkas kalender kepembelajaran madrasah.</p>
          </div>

          {/* Filter options and search bar downloads */}
          <div className="p-4 bg-slate-50 border rounded-xl flex flex-col md:flex-row gap-4 justify-between items-center" id="download-filter-area">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari berkas berdasarkan judul berkas..."
                value={downloadSearch}
                onChange={(e) => setDownloadSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border text-xs text-slate-800 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-brand-green"
              />
            </div>

            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              {['ALL', 'Formulir', 'Silabus', 'Akademik', 'Pengumuman'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setDownloadCat(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold border whitespace-nowrap cursor-pointer ${
                    downloadCat === cat 
                      ? 'bg-brand-green text-white border-brand-green' 
                      : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-150'
                  }`}
                >
                  {cat === 'ALL' ? 'Semua Berkas' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Downloads table list */}
          <div className="bg-white border rounded-xl overflow-hidden shadow-sm" id="download-files-table">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-bold font-mono">
                    <th className="p-4">Judul Dokumen</th>
                    <th className="p-4">Kategori Berkas</th>
                    <th className="p-4 text-center">Format & Size</th>
                    <th className="p-4 text-center">Jumlah Unduhan</th>
                    <th className="p-4 text-center">Tindakan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-sans font-medium">
                  {filteredDownloads.map((file) => (
                    <tr key={file.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <FileText className="w-5 h-5 text-brand-green shrink-0 bg-emerald-50 p-1 rounded" />
                        <span className="font-semibold text-slate-900 leading-snug">{file.title}</span>
                      </td>
                      <td className="p-4">
                        <span className="bg-slate-100 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                          {file.category}
                        </span>
                      </td>
                      <td className="p-4 text-center font-mono text-slate-550">
                        {file.format} ({file.size})
                      </td>
                      <td className="p-4 text-center font-mono text-slate-500">
                        {file.downloadsCount + 54} Kali
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => handleDownloadTrigger(file)}
                          className="px-3.5 py-1.5 bg-brand-green hover:bg-brand-green-light text-white font-sans font-bold text-[10px] rounded-lg shadow-sm border border-brand-gold inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Download size={11} />
                          <span>Download</span>
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filteredDownloads.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-12 text-center text-slate-400 font-sans">
                        Tidak ada berkas rujukan publik yang tercantum dalam kata kunci ini.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
