'use client';

import { translations } from '@/data/translations';

interface FooterProps {
  language: 'es' | 'en';
  darkMode: boolean;
}

export default function Footer({ language, darkMode }: FooterProps) {
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=jhinrojasbuitron@gmail.com", "_blank");
  };

  return (
    <footer className={`w-full py-12 px-10 border-t backdrop-blur-xl relative z-50 ${
      darkMode ? 'border-white/10 bg-black/50' : 'border-gray-200 bg-white/50'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
            JHIN_ROJAS
          </h2>
          <p className={`text-xs font-medium ${darkMode ? 'text-slate-500' : 'text-gray-500'}`}>
            {t.footer.copyright}
          </p>
        </div>
        
        <div className="flex items-center gap-6 relative z-50">
          <a 
            href="https://www.linkedin.com/in/jhin-rojas-buitron-91101b288/" 
            target="_blank" 
            className={`text-sm font-bold transition-all uppercase tracking-widest ${
              darkMode ? 'text-slate-400 hover:text-cyan-500' : 'text-gray-500 hover:text-cyan-600'
            }`}
          >
            LinkedIn
          </a>
          <button 
            onClick={handleEmailClick} 
            className={`text-sm font-bold transition-all uppercase tracking-widest ${
              darkMode ? 'text-slate-400 hover:text-cyan-500' : 'text-gray-500 hover:text-cyan-600'
            }`}
          >
            Gmail
          </button>
          <a 
            href="https://www.instagram.com/jhinrojasb/" 
            target="_blank" 
            className={`text-sm font-bold transition-all uppercase tracking-widest ${
              darkMode ? 'text-slate-400 hover:text-cyan-500' : 'text-gray-500 hover:text-cyan-600'
            }`}
          >
            Instagram
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5">
        <p className={`text-[12px] text-center font-mono ${
          darkMode ? 'text-slate-600' : 'text-gray-400'
        }`}>
          © {currentYear} • {t.footer.name} • {t.footer.university}
        </p>
      </div>
    </footer>
  );
}