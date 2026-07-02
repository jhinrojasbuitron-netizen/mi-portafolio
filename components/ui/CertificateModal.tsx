'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Briefcase, Star, CheckCircle, Eye, ExternalLink } from 'lucide-react';
import { translations } from '@/data/translations';
import type { Certificate } from '@/types';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: Certificate | null;
  language: 'es' | 'en';
  darkMode: boolean;
}

export default function CertificateModal({ 
  isOpen, 
  onClose, 
  certificate, 
  language, 
  darkMode 
}: CertificateModalProps) {
  const t = translations[language];

  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose} 
            className={`absolute inset-0 backdrop-blur-xl ${
              darkMode ? 'bg-black/95' : 'bg-white/95'
            }`} 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`backdrop-blur-xl border w-full max-w-4xl rounded-[40px] overflow-hidden relative z-10 max-h-[90vh] overflow-y-auto ${
              darkMode 
                ? 'bg-black/80 border-white/10' 
                : 'bg-white/80 border-gray-200 shadow-2xl'
            }`}
          >
            <button 
              onClick={onClose} 
              className={`absolute top-6 right-6 p-2 rounded-full transition-all z-20 ${
                darkMode 
                  ? 'bg-white/5 text-white/70 hover:bg-amber-500/20 hover:text-amber-400' 
                  : 'bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-600'
              }`}
            >
              <X size={20} />
            </button>
            
            <div className="p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl">
                  <Award size={40} className="text-amber-500" />
                </div>
                <div>
                  <h2 className={`text-4xl font-black uppercase tracking-tighter ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {certificate.name}
                  </h2>
                  <p className="text-amber-500 font-bold text-sm">{certificate.period}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={`p-6 rounded-2xl border backdrop-blur-sm ${
                  darkMode ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center gap-2 mb-6">
                    <Briefcase size={18} className="text-amber-500" />
                    <h3 className="text-sm font-black uppercase tracking-widest text-amber-500">
                      {t.certificates.positionInfo}
                    </h3>
                  </div>
                  <p className={`text-lg font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {certificate.role}
                  </p>
                  <p className={`text-sm leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {certificate.description}
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border backdrop-blur-sm ${
                  darkMode ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center gap-2 mb-6">
                    <Star size={18} className="text-amber-500" />
                    <h3 className="text-sm font-black uppercase tracking-widest text-amber-500">
                      {t.certificates.achievements}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {certificate.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-gray-700'}>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`p-6 rounded-2xl border backdrop-blur-sm ${
                  darkMode ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'
                } md:col-span-2`}>
                  <div className="flex items-center gap-2 mb-6">
                    <Award size={18} className="text-amber-500" />
                    <h3 className="text-sm font-black uppercase tracking-widest text-amber-500">
                      {t.certificates.skillsAcquired}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                          darkMode 
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                            : 'bg-amber-100 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => window.open(certificate.certificateUrl, "_blank")}
                  className="flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg"
                >
                  <Eye size={16} />
                  {t.certificates.view}
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}