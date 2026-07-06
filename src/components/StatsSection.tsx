/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, UserIcon, Award, Compass, School } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export default function StatsSection() {
  const { theme } = useSchool();
  const stats = [
    {
      id: 'stat-students',
      label: 'Siswa Terdaftar',
      value: '685+',
      description: 'Siswa Aktif TA 2026/2027',
      icon: Users,
    },
    {
      id: 'stat-teachers',
      label: 'Guru & Staf',
      value: '42',
      description: 'Pendidik Profesional Berlisensi',
      icon: UserIcon,
    },
    {
      id: 'stat-accreditation',
      label: 'Akreditasi',
      value: 'A (Unggul)',
      description: 'Penilaian BAN-PDM Resmi',
      icon: School,
    },
    {
      id: 'stat-awards',
      label: 'Prestasi Nasional',
      value: '58+',
      description: 'Medali 3 Tahun Terakhir',
      icon: Award,
    },
    {
      id: 'stat-ekskul',
      label: 'Ekstrakurikuler',
      value: '14',
      description: 'Minat, Bakat, Seni, & Olahraga',
      icon: Compass,
    }
  ];

  return (
    <section className={`py-16 border-y relative transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-[#f8f9fa] border-slate-100'}`} id="school-stats-section">
      <div className="absolute inset-0 islamic-pattern pointer-events-none opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-sans font-bold text-brand-gold tracking-widest uppercase">
            INDONESIA MADRASAH EXCELLENCE LEVEL
          </span>
          <h2 className={`text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight mt-1.5 ${theme === 'dark' ? 'text-brand-gold' : 'text-brand-green'}`}>
            MAN Kota Lhokseumawe Dalam Angka
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id}
                className={`p-6 rounded-lg text-center shadow-xs hover:shadow-md hover:border-brand-gold transition-all duration-300 group cursor-pointer border ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-150/70 text-slate-800'}`}
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 border transition-all duration-300 shadow-xs ${theme === 'dark' ? 'border-slate-800 bg-slate-850 text-brand-gold group-hover:bg-brand-gold group-hover:text-slate-950' : 'border-slate-100 bg-slate-50 text-brand-green group-hover:bg-brand-gold group-hover:text-slate-950'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`text-2xl sm:text-3xl font-display font-black tracking-tight group-hover:text-brand-gold duration-300 ${theme === 'dark' ? 'text-brand-gold' : 'text-brand-green'}`}>
                  {stat.value}
                </div>
                <div className={`text-xs font-bold uppercase tracking-widest mt-2 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                  {stat.label}
                </div>
                <p className={`text-[10px] mt-1 font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-slate-405'}`}>
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
