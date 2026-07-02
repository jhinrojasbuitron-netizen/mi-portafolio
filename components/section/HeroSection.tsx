'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, MapPin } from 'lucide-react';
import { translations } from '@/data/translations';

interface HeroSectionProps {
  language: 'es' | 'en';
  darkMode: boolean;
}

export default function HeroSection({ language, darkMode }: HeroSectionProps) {
  const t = translations[language].hero;

  const handleEmailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=jhinrojasbuitron@gmail.com", "_blank");
  };

  const typewriterSequences = {
    es: [
      'Especialista en QA & Software Testing', 2000,
      'Desarrollador Java & Python', 2000,
      'Especialista en análisis de sistemas', 2000,
      'Modelador de Procesos con Bizagi', 2000,
      'Apasionado por la tecnología', 2000,
    ],
    en: [
      'QA & Software Testing Specialist', 2000,
      'Java & Python Developer', 2000,
      'Systems Analysis Specialist', 2000,
      'Business Process Modeler with Bizagi', 2000,
      'Tech Enthusiast', 2000,
    ]
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-20 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-50 pointer-events-none ${
        darkMode ? '' : 'opacity-20'
      }`} />
      
      {/* Status Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full mb-8 relative z-10"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-[10px]">{t.available}</span>
      </motion.div>
      
      {/* Main Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className={`text-[55px] md:text-[100px] font-black tracking-[-0.06em] leading-[0.85] mb-8 uppercase max-w-6xl relative z-10 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}
      >
        JHIN CRISTOPHER <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
          ROJAS BUITRON
        </span>
      </motion.h1>
      
      {/* Typewriter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-xl md:text-2xl mb-10 relative z-10"
      >
        <AnimatePresence mode="wait">
            <motion.div
                key={language} // ← Esto es importante
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                <TypeAnimation
                sequence={typewriterSequences[language]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${
                    darkMode ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'
                }`}
                />
            </motion.div>
        </AnimatePresence>
      </motion.div>
      
      {/* Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mb-10 italic relative z-10 backdrop-blur-sm bg-white/5 p-4 rounded-2xl"
      >
        <span className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {t.student}
        </span>{" "}
        <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {t.usil}
        </span>.
      </motion.p>
      
      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="flex gap-12 items-center mb-16 relative z-10"
      >
        <div className="group flex flex-col items-center gap-2">
          <a 
            href="https://linkedin.com/in/jhin-rojas-buitron-91101b288" 
            target="_blank" 
            className="text-slate-500 hover:text-[#0077B5] hover:scale-110 transition-all"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-700">LinkedIn</span>
        </div>
        
        <div className="group flex flex-col items-center gap-2">
          <button 
            onClick={handleEmailClick} 
            className="text-slate-500 hover:text-cyan-500 hover:scale-110 transition-all cursor-pointer"
          >
            <Mail size={28} />
          </button>
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-700">Gmail</span>
        </div>
        
        <div className="group flex flex-col items-center gap-2">
          <a 
            href="https://www.instagram.com/jhinrojasb/" 
            target="_blank" 
            className="text-slate-500 hover:text-pink-500 hover:scale-110 transition-all"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-700">Instagram</span>
        </div>
      </motion.div>
      
      {/* Location */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="flex flex-col items-center gap-2 relative z-10"
      >
        <MapPin size={24} className="text-cyan-500 animate-bounce" />
        <h4 className={`text-lg font-black uppercase tracking-tighter ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Lima - Peru
        </h4>
      </motion.div>
    </motion.section>
  );
}