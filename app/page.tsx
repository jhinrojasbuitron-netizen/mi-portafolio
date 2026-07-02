'use client';

import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

// Layout Components
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/layout/LoadingScreen';
import ParticlesBackground from '@/components/layout/ParticlesBackground';

// Section Components
import HeroSection from '@/components/section/HeroSection';
import ProjectsSection from '@/components/section/ProjectsSection';
import ExperienceSection from '@/components/section/ExperienceSection';
import SkillsSection from '@/components/section/SkillsSection';
import EducationSection from '@/components/section/EducationSection';

// Common Components
import ScrollProgress from '@/components/common/ScrollProgress';
import MusicToggle from '@/components/common/MusicToggle';

// UI Components
import CertificateModal from '@/components/ui/CertificateModal';
import ProjectModal from '@/components/ui/ProjectModal';

// Hooks
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { useAudio } from '@/hooks/useAudio';
import { useVisitCounter } from '@/hooks/useVisitCounter';

// Data
import { projectsData } from '@/data/projects';
import { categories } from '@/data/skills';
import { certificatesData } from '@/data/certificates';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [initParticles, setInitParticles] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showCertModal, setShowCertModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<'salesland' | 'geaset' | null>(null);

  const { language, handleLanguageChange } = useLanguage();
  const { darkMode, toggleTheme } = useTheme();
  const { isPlaying, toggleMusic } = useAudio('/musica de fondo.mp3');
  const { visitCount } = useVisitCounter();
  const { scrollYProgress } = useScroll();

  const currentProjects = projectsData[language];
  const currentCategories = categories[language];
  const currentCertificates = certificatesData[language];

  useEffect(() => {
    setMounted(true);
    
    const handleSetLoading = (event: CustomEvent) => {
      setLoading(event.detail);
    };

    window.addEventListener('setLoading', handleSetLoading as EventListener);
    
    return () => {
      window.removeEventListener('setLoading', handleSetLoading as EventListener);
    };
  }, []);

  if (!mounted) return null;
  if (loading) return <LoadingScreen />;

  return (
    <main className={`min-h-screen relative overflow-x-hidden transition-colors duration-300 ${
      darkMode ? 'bg-black text-slate-300' : 'bg-white text-slate-700'
    }`}>
      <ScrollProgress progress={scrollYProgress} />
      <ParticlesBackground darkMode={darkMode} initParticles={initParticles} setInitParticles={setInitParticles} />
      <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />
      
      <Navbar 
        darkMode={darkMode}
        language={language}
        visitCount={visitCount}
        onThemeToggle={toggleTheme}
        onLanguageChange={handleLanguageChange}
      />
      
      <HeroSection language={language} darkMode={darkMode} />
      
      <ProjectsSection 
        language={language} 
        darkMode={darkMode}
        projects={currentProjects}
        onSelectProject={setSelectedId}
      />
      
      {/* ExperienceSection - SIN projects */}
      <ExperienceSection 
        language={language} 
        darkMode={darkMode}
        onOpenCertificate={(cert: 'salesland' | 'geaset') => {
          setSelectedCert(cert);
          setShowCertModal(true);
        }}
      />
      
      <SkillsSection 
        language={language} 
        darkMode={darkMode}
        categories={currentCategories}
        selectedId={selectedId}
        onSelectProject={setSelectedId}
        projects={currentProjects}
      />
      
      <EducationSection language={language} darkMode={darkMode} />
      
      <Footer language={language} darkMode={darkMode} />
      
      <CertificateModal
        isOpen={showCertModal}
        onClose={() => setShowCertModal(false)}
        certificate={selectedCert ? currentCertificates[selectedCert] : null}
        language={language}
        darkMode={darkMode}
      />
      
      <ProjectModal
        isOpen={selectedId !== null}
        onClose={() => setSelectedId(null)}
        project={currentProjects.find(p => p.id === selectedId) || null}
        language={language}
        darkMode={darkMode}
      />
    </main>
  );
}