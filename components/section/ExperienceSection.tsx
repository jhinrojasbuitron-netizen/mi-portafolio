'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { translations } from '@/data/translations';

interface ExperienceSectionProps {
  language: 'es' | 'en';
  darkMode: boolean;
  onOpenCertificate: (type: 'salesland' | 'geaset') => void;
}

export default function ExperienceSection({ 
  language, 
  darkMode, 
  onOpenCertificate 
}: ExperienceSectionProps) {
  const t = translations[language];

  const fadeIn = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
  };

  const experiences = [
    { 
      name: "GEA SET", 
      period: { en: "Aug 2025 - Mar 2026", es: "Ago 2025 - Mar 2026" }, 
      role: { 
        en: "Retention Executive & Back Office", 
        es: "Ejecutivo de Retenciones y Back Office" 
      }, 
      duties: { 
        en: [
          "Loyalty and objection resolution for the Chilean market.", 
          "Administrative support and identification of operational incidents."
        ], 
        es: [
          "Fidelización y resolución de objeciones para el mercado chileno.", 
          "Soporte administrativo e identificación de incidencias operativas."
        ] 
      }, 
      certAction: () => onOpenCertificate('geaset') 
    },
    { 
      name: "SALESLAND", 
      period: { en: "Feb 2025 - Jun 2025", es: "Feb 2025 - Jun 2025" }, 
      role: { 
        en: "Commercial Advisor & Supervision Support", 
        es: "Asesor Comercial y Apoyo en Supervisión" 
      }, 
      duties: { 
        en: [
          "Commercial management and sales closing in Movistar campaign.", 
          "Direct support in resolving technical incidents of the team."
        ], 
        es: [
          "Gestión comercial y cierre de ventas en campaña Movistar.", 
          "Apoyo directo en resolución de incidencias técnicas del equipo."
        ] 
      }, 
      certAction: () => onOpenCertificate('salesland') 
    }
  ];

  return (
    <section id="experiencia" className={`relative z-20 max-w-[1500px] mx-auto px-6 py-32 border-t ${
      darkMode ? 'border-white/10' : 'border-gray-200'
    }`}>
      <motion.h2 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="text-1xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 uppercase tracking-[0.5em] mb-24 text-center"
      >
        02. {t.sections.experience}
      </motion.h2>
      
      <div className="space-y-12">
        <AnimatePresence mode="wait">
          {experiences.map((job, index) => (
            <motion.div 
              key={`${language}-${job.name}`}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`p-12 backdrop-blur-xl border rounded-[50px] transition-all duration-300 hover:scale-[1.01] ${
                darkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white/50 border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <h3 className={`text-5xl font-black uppercase tracking-tighter ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {job.name}
                </h3>
                <span className="text-cyan-500 font-mono text-sm border border-cyan-500/20 px-4 py-1 rounded-full h-fit">
                  {job.period[language]}
                </span>
              </div>
              
              <p className="text-cyan-400 font-bold mb-6 uppercase tracking-widest text-xs">
                {job.role[language]}
              </p>
              
              <ul className={`space-y-4 text-xl italic max-w-5xl ${
                darkMode ? 'text-slate-500' : 'text-gray-600'
              }`}>
                {job.duties[language].map((duty: string, i: number) => (
                  <li key={i}>• {duty}</li>
                ))}
              </ul>
              
              <button
                onClick={job.certAction}
                className="mt-8 flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors group text-sm font-bold uppercase tracking-widest"
              >
                <Award size={18} />
                <span>{t.buttons.viewCertificates}</span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}