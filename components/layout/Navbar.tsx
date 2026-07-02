'use client';

import { Download, Sun, Moon, Users } from 'lucide-react';
import * as FlagModule from 'react-world-flags';
const Flag = (FlagModule as any).default || FlagModule;
import { translations } from '@/data/translations';

interface NavbarProps {
  darkMode: boolean;
  language: 'es' | 'en';
  visitCount: number | null;
  onThemeToggle: () => void;
  onLanguageChange: () => void;
}

export default function Navbar({ 
  darkMode, 
  language, 
  visitCount, 
  onThemeToggle,
  onLanguageChange
}: NavbarProps) {
  const t = translations[language];

  const handleDownloadAndRedirect = () => {
    window.open("https://drive.google.com/file/d/1-NJsoBOrSV0BEOpHqhoPBsrR9IpJwsEy/view?usp=sharing", "_blank");
  };

  const navSections = ['proyectos', 'experiencia', 'skills', 'educacion'];
  const navItems = Object.values(t.nav);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b h-20 flex items-center transition-colors duration-300 ${
      darkMode ? 'bg-black/80 border-white/10' : 'bg-white/80 border-gray-200'
    }`}>
      <div className="max-w-[1500px] mx-auto w-full flex justify-between items-center px-6">
        {/* Logo */}
        <a 
          href="#" 
          className={`font-mono font-black tracking-tighter text-2xl italic transition-transform hover:scale-105 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          JHIN<span className="text-cyan-500">.</span>ROJAS
        </a>
        
        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
          {navItems.map((item, idx) => (
            <a 
              key={idx} 
              href={`#${navSections[idx]}`} 
              className={`transition-colors ${
                darkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-cyan-600'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Contador de visitas minimalista */}
          {visitCount !== null && (
            <div className="flex items-center gap-1.5">
              <Users size={16} className="text-cyan-500" />
              <span className={`text-xs font-mono font-bold ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                {visitCount}
              </span>
            </div>
          )}
          
          {/* Botón de idioma con banderas */}
          <button
            onClick={onLanguageChange}
            className={`relative p-1.5 rounded-full transition-all backdrop-blur-xl ${
              darkMode ? 'bg-white/20 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            title={language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {/* Bandera de Perú */}
              <div className={`absolute transition-all duration-300 ${
                language === 'es' ? 'opacity-100 scale-120' : 'opacity-0 scale-0'
              }`}>
                <Flag 
                  code="PE" 
                  height="20" 
                  width="20" 
                  style={{ 
                    borderRadius: '2px',
                    objectFit: 'cover'
                  }}
                />
              </div>
              {/* Bandera de USA */}
              <div className={`absolute transition-all duration-300 ${
                language === 'en' ? 'opacity-100 scale-120' : 'opacity-0 scale-0'
              }`}>
                <Flag 
                  code="US" 
                  height="20" 
                  width="20"
                  style={{ 
                    borderRadius: '2px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </button>
          
          {/* Botón de tema oscuro/claro */}
          <button
            onClick={onThemeToggle}
            className={`p-2 rounded-full transition-all backdrop-blur-xl ${
              darkMode ? 'bg-white/20 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-700" />
            )}
          </button>
          
          {/* Botón de descarga CV */}
          <a
            href="/CV_JHIN_ROJAS_2026.pdf"
            download="CV_JHIN_ROJAS_2026.pdf"
            onClick={handleDownloadAndRedirect}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg cursor-pointer"
          >
            <Download size={12} />
            <span>{t.buttons.downloadCV}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}