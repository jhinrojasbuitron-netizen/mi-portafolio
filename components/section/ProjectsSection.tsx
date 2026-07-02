'use client';

import { motion } from 'framer-motion';
import { JSX, useState } from 'react';
import { ArrowRight, Eye, ExternalLink, Calendar, Folder, Code, CheckCircle } from 'lucide-react';
import { translations } from '@/data/translations';
import type { Project } from '@/types';

interface ProjectsSectionProps {
  language: 'es' | 'en';
  darkMode: boolean;
  projects: Project[];
  onSelectProject: (id: number) => void;
}

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const iconMap: Record<string, JSX.Element> = {
  search: <Folder size={24} />,
  settings: <Code size={24} />,
  shield: <CheckCircle size={24} />
};

export default function ProjectsSection({ 
  language, 
  darkMode, 
  projects, 
  onSelectProject 
}: ProjectsSectionProps) {
  const t = translations[language];
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getProjectImage = (project: Project) => {
    if (project.imageUrl) return project.imageUrl;
    const placeholders = {
      search: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      settings: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      shield: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b8?w=800&h=600&fit=crop'
    };
    return placeholders[project.iconType];
  };

  const getProjectYear = (id: number) => {
    if (id === 1) return '2023';
    if (id === 2) return '2024';
    return '2024';
  };

  const mainProject = projects[0];
  const bottomProjects = projects.slice(1, 3);

  return (
    <section id="proyectos" className={`relative z-20 max-w-7xl mx-auto px-6 py-32 border-t ${
      darkMode ? 'border-white/10' : 'border-gray-200'
    }`}>
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-purple-500 uppercase tracking-[0.3em] mt-4">
          {t.sections.projects}
        </h2>
      </motion.div>
      
      {/* Layout: 1 proyecto arriba, 2 abajo */}
      <div className="space-y-5">
        {/* Proyecto Principal */}
        {mainProject && (
          <ProjectCard 
            project={mainProject}
            index={0}
            language={language}
            darkMode={darkMode}
            isHovered={hoveredId === mainProject.id}
            onHover={setHoveredId}
            onSelect={onSelectProject}
            getProjectImage={getProjectImage}
            getProjectYear={getProjectYear}
            isMain={true}
            t={t}
          />
        )}
        
        {/* Proyectos inferiores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bottomProjects.map((project, idx) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={idx + 1}
              language={language}
              darkMode={darkMode}
              isHovered={hoveredId === project.id}
              onHover={setHoveredId}
              onSelect={onSelectProject}
              getProjectImage={getProjectImage}
              getProjectYear={getProjectYear}
              isMain={false}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente de Tarjeta de Proyecto
interface ProjectCardProps {
  project: Project;
  index: number;
  language: 'es' | 'en';
  darkMode: boolean;
  isHovered: boolean;
  onHover: (id: number | null) => void;
  onSelect: (id: number) => void;
  getProjectImage: (project: Project) => string;
  getProjectYear: (id: number) => string;
  isMain: boolean;
  t: any;
}

function ProjectCard({ 
  project, 
  index, 
  language, 
  darkMode, 
  isHovered, 
  onHover, 
  onSelect,
  getProjectImage,
  getProjectYear,
  isMain,
  t
}: ProjectCardProps) {
  const technologies = project.stack.split(',').map((t: string) => t.trim());
  const projectYear = getProjectYear(project.id);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      className="group relative"
    >
      <div className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
        darkMode 
          ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
          : 'bg-white/50 border border-gray-200 shadow-lg hover:shadow-xl'
      } ${isHovered ? 'scale-[1.02] -translate-y-2' : ''}`}>
        
        {/* Imagen */}
        <div className={`relative overflow-hidden ${isMain ? 'h-80' : 'h-56'}`}>
          <motion.img
            src={getProjectImage(project)}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
          
          {/* Overlay con botones */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-4"
            >
              <button
                onClick={() => onSelect(project.id)}
                className="p-3.5 bg-cyan-500 rounded-full text-white hover:bg-cyan-400 hover:scale-110 transition-all"
              >
                <Eye size={22} />
              </button>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3.5 bg-gray-800 rounded-full text-white hover:bg-gray-700 hover:scale-110 transition-all"
                >
                  <GithubIcon />
                </a>
              )}
            </motion.div>
          )}
          
          {/* Ícono del proyecto */}
          <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/50 backdrop-blur-md text-cyan-400 border border-white/10">
            {iconMap[project.iconType as keyof typeof iconMap] || <Folder size={24} />}
          </div>
          
          {/* Badges */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-white/80 text-xs">
                <Calendar size={12} />
                <span>{projectYear}</span>
              </div>
              <div className="flex gap-1.5">
                {technologies.slice(0, isMain ? 3 : 2).map((tech: string, i: number) => (
                  <span key={i} className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase bg-black/50 backdrop-blur-md text-white border border-white/20">
                    {tech}
                  </span>
                ))}
                {technologies.length > (isMain ? 3 : 2) && (
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-cyan-500/80 text-white">
                    +{technologies.length - (isMain ? 3 : 2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenido */}
        <div className={`${isMain ? 'p-7' : 'p-5'}`}>
          <div className="flex items-start justify-between mb-2">
            <h3 className={`font-black uppercase tracking-tight transition-colors ${
              isMain ? 'text-2xl' : 'text-xl'
            } ${
              darkMode ? 'text-white group-hover:text-cyan-400' : 'text-gray-800 group-hover:text-cyan-600'
            }`}>
              {project.title}
            </h3>
            {project.githubUrl && (
              <ExternalLink size={14} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
          
          <p className={`text-sm leading-relaxed ${isMain ? 'line-clamp-3' : 'line-clamp-2'} ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {isMain ? project.longDesc?.slice(0, 180) + '...' : project.desc}
          </p>
          
          <div className="flex items-center justify-between mt-5">
            <motion.button
              onClick={() => onSelect(project.id)}
              className="flex items-center gap-2 text-cyan-500 text-xs font-black uppercase tracking-widest"
              whileHover={{ gap: 8 }}
            >
              <span>{t.buttons.viewDetails}</span>
              <ArrowRight size={14} />
            </motion.button>
            
            <span className="text-xs font-mono text-gray-500">0{project.id}</span>
          </div>
        </div>
        
        {/* Borde neón */}
        <div className={`absolute inset-0 rounded-3xl border-2 border-cyan-500/0 group-hover:border-cyan-500/30 transition-all duration-500 pointer-events-none ${
          isHovered ? 'shadow-[0_0_30px_rgba(34,211,238,0.15)]' : ''
        }`} />
      </div>
    </motion.div>
  );
}