'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Calendar, ChevronLeft, ChevronRight, Maximize2, Minimize2, Code, Folder, CheckCircle, Sparkles, ExternalLink, Award, Zap, Layers } from 'lucide-react';
import { translations } from '@/data/translations';
import type { Project } from '@/types';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  language: 'es' | 'en';
  darkMode?: boolean;
}

// Ícono de GitHub premium
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

export default function ProjectModal({ 
  isOpen, 
  onClose, 
  project, 
  language
}: ProjectModalProps) {
  const t = translations[language];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsImageExpanded(false);
  }, [project]);

  if (!project) return null;

  const allImages = [
    project.imageUrl || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop`,
    ...(project.gallery || [])
  ];

  const technologies = project.stack.split(',').map(t => t.trim());

  const getProjectFeatures = () => {
    if (project.iconType === 'search') {
      return language === 'es' 
        ? ['Control de acceso por roles', 'Persistencia híbrida MySQL/CSV', 'Reportes exportables', 'Interfaz intuitiva']
        : ['Role-based access', 'Hybrid persistence', 'Exportable reports', 'Intuitive interface'];
    }
    if (project.iconType === 'settings') {
      return language === 'es'
        ? ['Optimización matemática', 'Análisis de sensibilidad', 'Modelos de transporte', 'Resultados validados']
        : ['Mathematical optimization', 'Sensitivity analysis', 'Transportation models', 'Validated results'];
    }
    return language === 'es'
      ? ['Estándar IEEE 829', 'Pruebas automatizadas', 'Métricas de calidad', 'Cobertura completa']
      : ['IEEE 829 standard', 'Automated testing', 'Quality metrics', 'Full coverage'];
  };

  const getProjectYear = () => {
    if (project.id === 1) return '2023';
    if (project.id === 2) return '2024';
    return '2024';
  };

  const getAccentColor = () => {
    if (project.iconType === 'search') return 'cyan';
    if (project.iconType === 'settings') return 'purple';
    return 'blue';
  };

  const features = getProjectFeatures();
  const projectYear = getProjectYear();
  const accentColor = getAccentColor();

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/80 backdrop-blur-md" 
          />
          
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-3xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                accentColor === 'cyan' 
                  ? 'from-cyan-950/95 via-gray-950/95 to-black' 
                  : accentColor === 'purple'
                  ? 'from-purple-950/95 via-gray-950/95 to-black'
                  : 'from-blue-950/95 via-gray-950/95 to-black'
              } backdrop-blur-xl border ${
                accentColor === 'cyan' ? 'border-cyan-500/30' : 
                accentColor === 'purple' ? 'border-purple-500/30' : 'border-blue-500/30'
              }`} />
              
              <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
                accentColor === 'cyan' ? 'bg-cyan-500' : 
                accentColor === 'purple' ? 'bg-purple-500' : 'bg-blue-500'
              }`} />
              <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-10 ${
                accentColor === 'cyan' ? 'bg-cyan-500' : 
                accentColor === 'purple' ? 'bg-purple-500' : 'bg-blue-500'
              }`} />
              
              <div className="relative z-10 flex flex-col max-h-[92vh]">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-2xl bg-gradient-to-br ${
                        accentColor === 'cyan' 
                          ? 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30' 
                          : accentColor === 'purple'
                          ? 'from-purple-500/20 to-purple-500/5 border-purple-500/30'
                          : 'from-blue-500/20 to-blue-500/5 border-blue-500/30'
                      } border`}
                    >
                      {project.iconType === 'search' ? <Folder size={24} className="text-white" /> : 
                       project.iconType === 'settings' ? <Code size={24} className="text-white" /> : <CheckCircle size={24} className="text-white" />}
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-black text-white tracking-tight">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-gray-400" />
                          <span className="text-xs font-mono text-cyan-400">{projectYear}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                        <div className="flex items-center gap-1.5">
                          <Layers size={12} className="text-gray-400" />
                          <span className="text-xs text-gray-400">{technologies.length} tecnologías</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <GithubIcon />
                        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">GitHub</span>
                        <ExternalLink size={12} />
                      </motion.a>
                    )}
                    <motion.button 
                      onClick={onClose}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="overflow-y-auto p-6">
                  {/* Galería */}
                  <div className={`mb-6 ${isImageExpanded ? 'fixed inset-4 z-50 bg-black/98 rounded-2xl p-4' : ''}`}>
                    <div className={`relative rounded-2xl overflow-hidden border border-white/10 ${
                      isImageExpanded ? 'h-full' : ''
                    }`}>
                      <div className={`relative ${isImageExpanded ? 'h-full' : 'h-72'} bg-black/40`}>
                        <AnimatePresence mode="wait">
                          <motion.img 
                            key={currentImageIndex}
                            src={allImages[currentImageIndex]}
                            alt={project.title}
                            className="w-full h-full object-contain"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                          />
                        </AnimatePresence>
                        
                        {allImages.length > 1 && (
                          <>
                            <motion.button 
                              onClick={prevImage}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 border border-white/10 transition-all"
                            >
                              <ChevronLeft size={20} />
                            </motion.button>
                            <motion.button 
                              onClick={nextImage}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 border border-white/10 transition-all"
                            >
                              <ChevronRight size={20} />
                            </motion.button>
                          </>
                        )}
                        
                        <motion.button
                          onClick={() => setIsImageExpanded(!isImageExpanded)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="absolute bottom-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md text-white hover:bg-black/80 border border-white/10 transition-all"
                        >
                          {isImageExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                        </motion.button>
                        
                        {allImages.length > 1 && (
                          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-mono border border-white/10">
                            {currentImageIndex + 1} / {allImages.length}
                          </div>
                        )}
                        
                        {isImageExpanded && (
                          <motion.button
                            onClick={() => setIsImageExpanded(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute top-4 left-4 p-3 rounded-xl bg-black/60 backdrop-blur-md text-white hover:bg-black/80 border border-white/10 transition-all"
                          >
                            <X size={18} />
                          </motion.button>
                        )}
                      </div>
                    </div>
                    
                    {/* Thumbnails */}
                    {allImages.length > 1 && !isImageExpanded && (
                      <div className="flex gap-2 mt-3 justify-center">
                        {allImages.map((img, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            whileHover={{ scale: 1.08, y: -2 }}
                            className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                              currentImageIndex === idx
                                ? accentColor === 'cyan' ? 'border-cyan-500 shadow-lg shadow-cyan-500/30' : 
                                  accentColor === 'purple' ? 'border-purple-500 shadow-lg shadow-purple-500/30' : 'border-blue-500 shadow-lg shadow-blue-500/30'
                                : 'border-white/20 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                            {currentImageIndex === idx && (
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Contenido en grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* Descripción y Tecnologías */}
                    <div className="lg:col-span-2 space-y-4">
                      {/* Descripción */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-5 rounded-2xl bg-white/5 border border-white/10"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Zap size={16} className={accentColor === 'cyan' ? 'text-cyan-400' : accentColor === 'purple' ? 'text-purple-400' : 'text-blue-400'} />
                          <h3 className="text-sm font-black uppercase tracking-wider text-gray-300">
                            {language === 'es' ? 'Descripción' : 'Description'}
                          </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {project.longDesc}
                        </p>
                      </motion.div>
                      
                      {/* Tecnologías - CON BLOQUE Y BORDE */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="p-5 rounded-2xl bg-white/5 border border-white/10"
                      >
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 + i * 0.02 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-default ${
                                accentColor === 'cyan' 
                                  ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20' 
                                  : accentColor === 'purple'
                                  ? 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20'
                                  : 'bg-blue-500/10 text-blue-300 border-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20'
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Panel lateral */}
                    <div className="space-y-4">
                      {/* Año */}
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Award size={18} className="text-yellow-400" />
                            <span className="text-xs font-black uppercase tracking-wider text-gray-300">
                              {language === 'es' ? 'Año' : 'Year'}
                            </span>
                          </div>
                          <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            {projectYear}
                          </span>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-3" />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Sparkles size={14} className="text-cyan-400" />
                            <span className="text-xs text-gray-400">Versión</span>
                          </div>
                          <span className="text-xs font-mono text-cyan-400">v{projectYear}.0</span>
                        </div>
                      </motion.div>
                      
                      {/* Características */}
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        className="p-5 rounded-2xl bg-white/5 border border-white/10"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle size={16} className={accentColor === 'cyan' ? 'text-cyan-400' : accentColor === 'purple' ? 'text-purple-400' : 'text-blue-400'} />
                          <h3 className="text-sm font-black uppercase tracking-wider text-gray-300">
                            {language === 'es' ? 'Características' : 'Features'}
                          </h3>
                        </div>
                        <div className="space-y-2">
                          {features.map((feature, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.03 }}
                              whileHover={{ x: 3 }}
                              className="flex items-start gap-2.5 group cursor-default"
                            >
                              <div className={`mt-1 w-1.5 h-1.5 rounded-full ${
                                accentColor === 'cyan' ? 'bg-cyan-400' : accentColor === 'purple' ? 'bg-purple-400' : 'bg-blue-400'
                              } group-hover:scale-150 transition-transform`} />
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}