/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Book } from '../types';
import { Search, BookOpen, Layers, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LibraryViews() {
  const { books } = useSchool();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredBooks = books.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.isbn.includes(searchTerm);
    const matchesCat = selectedCategory === 'ALL' || b.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const uniqueCategories = Array.from(new Set(books.map(b => b.category)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="library-container">
      <div className="text-center space-y-2 mb-8">
        <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest font-bold">MAKTABAH DIGITAL</span>
        <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900">Katalog Perpustakaan Digital</h2>
        <div className="w-12 h-1 bg-brand-green mx-auto rounded"></div>
        <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">Cari ketersediaan kitab rujukan agama, buku paket sains, sosiologi, serta literatur muatan lokal khas madrasah.</p>
      </div>

      {/* Filter bar */}
      <div className="p-4 bg-slate-50 border rounded-xl flex flex-col md:flex-row gap-4 items-center justify-between mb-8" id="library-filter-bar">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Cari buku berdasarkan judul, pengarang, atau nomor ISBN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border text-xs text-slate-800 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-brand-green"
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold border whitespace-nowrap cursor-pointer ${
              selectedCategory === 'ALL' 
                ? 'bg-brand-green text-white border-brand-green' 
                : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-150'
            }`}
          >
            Semua Buku
          </button>
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold border whitespace-nowrap cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-brand-green text-white border-brand-green' 
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-150'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid view */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <div 
            key={book.id}
            className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            {/* Book display banner */}
            <div className="h-44 bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center p-6 relative overflow-hidden text-center group">
              <BookOpen className="w-12 h-12 text-slate-400 group-hover:scale-105 duration-200" />
              {/* Cover simulation overlays */}
              <div className="absolute top-0 left-0 w-2.5 h-full bg-brand-green-dark border-r border-white/20"></div>
              <p className="absolute bottom-3 inset-x-4 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">{book.category}</p>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="bg-slate-100 text-slate-550 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded uppercase">
                  ISBN: {book.isbn}
                </span>
                <h3 className="font-display font-extrabold text-sm text-slate-900 leading-tight">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-500 font-sans">
                  Pengarang: {book.author}
                </p>
              </div>

              {/* Status information and buttons */}
              <div className="pt-2.5 border-t border-slate-50 flex items-center justify-between text-xs">
                {book.available ? (
                  <span className="text-emerald-800 font-bold flex items-center gap-1 font-sans">
                    <CheckCircle2 size={14} className="text-brand-green" />
                    <span>Tersedia</span>
                  </span>
                ) : (
                  <span className="text-red-650 font-semibold flex items-center gap-1 font-sans">
                    <AlertCircle size={14} className="text-red-500" />
                    <span>Dipinjam</span>
                  </span>
                )}

                <button
                  onClick={() => alert(`Anda siap meminjam buku "${book.title}"? Slip formulir digital peminjaman dapat diambil di area perpustakaan dengan kode referensi ISBN ${book.isbn}.`)}
                  disabled={!book.available}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider shadow border transition-colors cursor-pointer ${
                    book.available 
                      ? 'bg-brand-green hover:bg-brand-green-light text-white border-brand-gold' 
                      : 'bg-slate-100 text-slate-400 border-none cursor-not-allowed'
                  }`}
                >
                  Pinjam Slip
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredBooks.length === 0 && (
          <div className="col-span-full text-center py-10 bg-slate-50 border border-dashed rounded-xl">
            <p className="font-medium text-slate-500">Buku yang Anda cari belum terdaftar di perpustakaan digital madrasah.</p>
            <p className="text-xs text-slate-400 mt-0.5">Silakan hubungi staf perpustakaan untuk memesan judul rujukan ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}
