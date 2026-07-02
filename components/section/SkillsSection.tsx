'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronDown, Layers } from 'lucide-react';
import { translations } from '@/data/translations';
import { skills as allSkills, getSkillsByCategory } from '@/data/skills';
import type { Category, Project } from '@/types';

interface SkillsSectionProps {
  language: 'es' | 'en';
  darkMode: boolean;
  categories: Category[];
  selectedId: number | null;
  onSelectProject: (id: number | null) => void;
  projects?: Project[];
}

export default function SkillsSection({ 
  language, 
  darkMode, 
  categories,
  selectedId,
  onSelectProject,
  projects = []  // ← Con valor por defecto
}: SkillsSectionProps) {
  const t = translations[language];
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [filter, setFilter] = useState('all');

  const fadeIn = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100, rotate: 5 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.6 } }
  };

  const filteredSkills = getSkillsByCategory(filter);
  const infiniteSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];
  const selectedProject = selectedId ? projects?.find(p => p.id === selectedId) : null;

  const getCategoryColors = (categoryId: string) => {
    switch(categoryId) {
      case 'frontend':
        return { bg: 'from-pink-500 to-rose-500', border: 'border-pink-500', hover: 'hover:border-pink-500/50 hover:text-pink-400' };
      case 'backend':
        return { bg: 'from-cyan-500 to-blue-500', border: 'border-cyan-500', hover: 'hover:border-cyan-500/50 hover:text-cyan-400' };
      case 'database':
        return { bg: 'from-emerald-500 to-green-500', border: 'border-emerald-500', hover: 'hover:border-emerald-500/50 hover:text-emerald-400' };
      case 'tools':
        return { bg: 'from-orange-500 to-amber-500', border: 'border-orange-500', hover: 'hover:border-orange-500/50 hover:text-orange-400' };
      default:
        return { bg: 'from-cyan-500 to-purple-500', border: 'border-cyan-500', hover: 'hover:border-cyan-500/50 hover:text-white' };
    }
  };

  return (
    <>
      <section id="skills" className={`relative z-20 max-w-full py-32 border-t overflow-hidden ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} className="text-1xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 uppercase tracking-[0.5em] mb-24 text-center">
          03. {t.sections.skills}
        </motion.h2>

        <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} className="relative flex items-center h-[350px] mb-20">
          <motion.div className="flex gap-16 whitespace-nowrap px-10" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}>
            {infiniteSkills.map((item, index) => (
              <motion.div key={`inf-${index}`} whileHover={{ scale: 1.15 }} className={`group flex flex-col items-center justify-center min-w-[240px] p-12 backdrop-blur-xl border rounded-[45px] cursor-pointer relative transition-all duration-300 ${darkMode ? 'bg-white/5 border-white/10 hover:border-cyan-400 hover:bg-white/10' : 'bg-white/50 border-gray-200 shadow-md hover:border-cyan-400 hover:shadow-xl'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[45px]" />
                <div className="mb-6 w-20 h-20 transform group-hover:scale-110 transition-all duration-300 relative z-10">
                  <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest transition-all duration-300 relative z-10 ${darkMode ? 'text-slate-600 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'}`}>{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-center mb-16 relative z-30">
          <button onClick={() => setShowAllSkills(!showAllSkills)} className={`group flex items-center gap-4 backdrop-blur-xl border px-8 py-4 rounded-full text-[11px] font-black tracking-[0.2em] transition-all ${darkMode ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white' : 'bg-white/50 border-gray-200 text-gray-600 hover:text-gray-900 shadow-md'}`}>
            {showAllSkills ? t.buttons.hideSkills : t.buttons.showSkills}
            <motion.div animate={{ rotate: showAllSkills ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={18} className="text-cyan-500" />
            </motion.div>
          </button>
        </div>

        <LayoutGroup id="skills-filter-group">
          <AnimatePresence mode="wait">
            {showAllSkills && (
              <motion.div key="skills-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="max-w-[1300px] mx-auto px-6 relative z-10">
                <div className="flex flex-wrap justify-center gap-3 mb-16 pb-4 border-b border-white/5">
                  {categories.map((cat) => {
                    const colors = getCategoryColors(cat.id);
                    return (
                      <button key={cat.id} onClick={() => setFilter(cat.id)} className={`px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest transition-all duration-300 border active:scale-95 ${filter === cat.id ? `bg-gradient-to-r ${colors.bg} ${colors.border} text-black shadow-lg scale-105` : `${darkMode ? `bg-white/5 border-white/10 text-slate-500 ${colors.hover}` : `bg-white/50 border-gray-200 text-gray-600 ${colors.hover}`}`}`}>
                        {cat.label}
                      </button>
                    );
                  })}
                </div>

                <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6" transition={{ layout: { duration: 0.4 } }}>
                  <AnimatePresence mode="popLayout">
                    {filteredSkills.map((item, idx) => (
                      <motion.div key={item.name} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: idx * 0.03, duration: 0.3 }} whileHover={{ scale: 1.1, translateY: -10 }} className={`group flex flex-col items-center justify-center p-6 backdrop-blur-xl border rounded-[35px] relative transition-all duration-300 cursor-pointer ${darkMode ? 'bg-white/5 border-white/10 hover:border-cyan-400' : 'bg-white/50 border-gray-200 shadow-md hover:border-cyan-400 hover:shadow-xl'}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[35px]" />
                        <div className="mb-4 w-14 h-14 transform group-hover:scale-110 transition-all duration-300 relative z-10">
                          <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <span className={`text-[9px] font-black uppercase tracking-widest transition-all duration-300 relative z-10 ${darkMode ? 'text-slate-400 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'}`}>{item.name}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </section>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => onSelectProject(null)} className={`absolute inset-0 backdrop-blur-xl ${darkMode ? 'bg-black/95' : 'bg-white/95'}`} />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className={`backdrop-blur-xl border w-full max-w-5xl rounded-[40px] overflow-hidden relative z-10 ${darkMode ? 'bg-black/80 border-white/10' : 'bg-white/80 border-gray-200 shadow-2xl'}`}>
              <button onClick={() => onSelectProject(null)} className={`absolute top-8 right-8 p-3 rounded-full transition-all z-20 ${darkMode ? 'bg-white/5 text-white/70 hover:bg-cyan-500/10 hover:text-cyan-400' : 'bg-gray-100 text-gray-600 hover:bg-cyan-100 hover:text-cyan-600'}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="p-12">
                <h2 className={`text-5xl font-black mb-14 uppercase tracking-tighter ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedProject.title}</h2>
                <div className={`p-10 rounded-[35px] border backdrop-blur-sm ${darkMode ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
                  <h4 className="text-cyan-500 font-black uppercase text-[11px] tracking-widest mb-8 border-b border-cyan-500/20 pb-4">{language === 'es' ? 'ANÁLISIS' : 'ANALYSIS'}</h4>
                  <p className={`text-sm mb-10 leading-relaxed font-medium italic ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>{selectedProject.longDesc}</p>
                  {selectedProject.steps.map((step, i) => (
                    <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border transition-colors mb-3 ${darkMode ? 'bg-black/30 border-white/5 hover:border-cyan-500/30' : 'bg-white border-gray-200 hover:border-cyan-500/30'}`}>
                      <span className={`text-xs font-black ${darkMode ? 'text-cyan-500/40' : 'text-cyan-400'}`}>0{i+1}</span>
                      <span className={`text-[11px] font-bold ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{step}</span>
                      <Layers size={14} className={`ml-auto ${darkMode ? 'text-slate-800' : 'text-gray-300'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}