'use client';

import { motion } from 'framer-motion';
import { Globe, MapPin, Compass, Search as SearchIcon, Award, GraduationCap } from 'lucide-react';
import { translations } from '@/data/translations';

interface EducationSectionProps {
  language: 'es' | 'en';
  darkMode: boolean;
}

export default function EducationSection({ language, darkMode }: EducationSectionProps) {
  const t = translations[language];

  const fadeIn = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="educacion" className={`relative z-20 max-w-[1500px] mx-auto px-6 py-32 border-t ${
      darkMode ? 'border-white/10' : 'border-gray-200'
    }`}>
      <motion.h2 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="text-1xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 uppercase tracking-[0.5em] mb-24 text-center"
      >
        04. {t.sections.education}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Education Card */}
        <motion.div 
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0 }}
          className={`p-10 backdrop-blur-xl border rounded-[40px] transition-all duration-300 hover:scale-[1.03] flex flex-col h-full relative overflow-hidden ${
            darkMode 
              ? 'bg-white/5 border-white/10 hover:border-cyan-500/30' 
              : 'bg-white/50 border-gray-200 shadow-lg hover:border-cyan-500/30 hover:shadow-xl'
          }`}
        >
          <div className={`absolute top-0 right-0 p-8 opacity-5 ${darkMode ? '' : 'text-gray-800'}`}>
            <GraduationCap size={150} />
          </div>
          <div className="mb-auto relative z-10">
            <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 w-fit mb-8">
              <GraduationCap size={28} className="text-cyan-500" />
            </div>
            <h3 className={`text-4xl font-black mb-3 uppercase tracking-tighter ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {t.education.university}
            </h3>
            <p className="text-cyan-400 font-bold uppercase tracking-[0.15em] text-[10px] leading-relaxed whitespace-pre-line">
              {t.education.career}
            </p>
          </div>
          <div className={`mt-10 flex items-center gap-4 text-sm font-bold tracking-widest uppercase p-4 rounded-2xl border relative z-10 w-max ${
            darkMode 
              ? 'text-slate-300 bg-white/5 border-white/10' 
              : 'text-gray-700 bg-gray-100 border-gray-200'
          }`}>
            <Award size={20} className="text-cyan-500" /> {t.education.topThird}
          </div>
        </motion.div>

        {/* Languages Card */}
        <motion.div 
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className={`p-10 backdrop-blur-xl border rounded-[40px] transition-all duration-300 hover:scale-[1.03] flex flex-col h-full relative overflow-hidden ${
            darkMode 
              ? 'bg-white/5 border-white/10 hover:border-blue-500/30' 
              : 'bg-white/50 border-gray-200 shadow-lg hover:border-blue-500/30 hover:shadow-xl'
          }`}
        >
          <div className={`absolute top-0 right-0 p-8 opacity-5 ${darkMode ? '' : 'text-gray-800'}`}>
            <Globe size={150} />
          </div>
          <div className="mb-auto relative z-10">
            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 w-fit mb-8">
              <Globe size={28} className="text-blue-500" />
            </div>
            <h3 className={`text-4xl font-black mb-10 uppercase tracking-tighter ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {t.languages.title}
            </h3>
          </div>
          <div className="space-y-8 relative z-10 w-full">
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className={`text-base font-black tracking-widest uppercase ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {t.languages.english}
                </span>
                <span className="text-xs text-cyan-500 font-bold uppercase tracking-widest">
                  {t.languages.intermediate}
                </span>
              </div>
              <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "65%" }} 
                  transition={{ duration: 1.5 }} 
                  className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className={`text-base font-black tracking-widest uppercase ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {t.languages.spanish}
                </span>
                <span className="text-xs text-cyan-500 font-bold uppercase tracking-widest">
                  {t.languages.native}
                </span>
              </div>
              <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "100%" }} 
                  transition={{ duration: 1.5 }} 
                  className="h-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div 
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className={`p-10 backdrop-blur-xl border rounded-[40px] transition-all duration-300 hover:scale-[1.03] flex flex-col h-full justify-between overflow-hidden relative group ${
            darkMode 
              ? 'bg-white/5 border-white/10 hover:border-cyan-500/40' 
              : 'bg-white/50 border-gray-200 shadow-lg hover:border-cyan-500/40 hover:shadow-xl'
          }`}
        >
          <div className={`absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            <MapPin size={200} strokeWidth={1.5} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                <MapPin size={28} className="text-cyan-500" />
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
            </div>
            <h3 className={`text-4xl font-black leading-[0.9] uppercase tracking-tighter mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              LIMA <br /><span className="text-cyan-500">PERU</span>
            </h3>
            <div className="flex items-center gap-3 text-slate-400 mb-6">
              <Compass size={16} className="text-cyan-500/70" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                La Molina / Separadora Ind.
              </span>
            </div>
          </div>
          <a 
            href="https://maps.app.goo.gl/TgdzSUYQH7c1ripP8" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`group flex items-center justify-between p-4 rounded-2xl border transition-all mt-auto relative z-10 w-full cursor-pointer ${
              darkMode 
                ? 'bg-white/5 border-white/10 hover:bg-cyan-500/10' 
                : 'bg-gray-100 border-gray-200 hover:bg-cyan-500/10'
            }`}
          >
            <span className={`text-xs font-black uppercase tracking-widest ${
              darkMode ? 'text-slate-300' : 'text-gray-700'
            }`}>
              {t.buttons.explore}
            </span>
            <div className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'bg-black group-hover:bg-cyan-500' : 'bg-gray-200 group-hover:bg-cyan-500'
            }`}>
              <SearchIcon size={16} className={`transition-colors ${
                darkMode ? 'text-cyan-500 group-hover:text-black' : 'text-cyan-600 group-hover:text-white'
              }`} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}