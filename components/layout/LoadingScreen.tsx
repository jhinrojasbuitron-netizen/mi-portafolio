'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Play, Volume2, Sparkles, Code, Database, Layout, Wrench } from 'lucide-react';
import { useAudioContext } from '@/context/AudioContext';

export default function LoadingScreen() {
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const { playAudio } = useAudioContext();

  // Tecnologías que se mostrarán durante la carga
  const technologies = [
    { name: 'React & Next.js', icon: <Layout size={14} /> },
    { name: 'TypeScript', icon: <Code size={14} /> },
    { name: 'Tailwind CSS', icon: <Sparkles size={14} /> },
    { name: 'Framer Motion', icon: <Sparkles size={14} /> },
    { name: 'Node.js', icon: <Database size={14} /> },
    { name: 'SQL & MongoDB', icon: <Database size={14} /> },
    { name: 'Testing & QA', icon: <Wrench size={14} /> },
  ];

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Cambiar tecnología cada 600ms durante la carga
  useEffect(() => {
    if (hasStarted) {
      const interval = setInterval(() => {
        setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
      }, 600);
      
      return () => clearInterval(interval);
    }
  }, [hasStarted, technologies.length]);

  const handlePlayMusic = async () => {
    if (!hasStarted) {
      await playAudio();
      setHasStarted(true);
      
      window.dispatchEvent(new Event('musicStarted'));
      
      const startTime = Date.now();
      const duration = 5500; // 5 segundos exactos
      
      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);
        
        if (elapsed < duration) {
          requestAnimationFrame(updateProgress);
        }
      };
      
      requestAnimationFrame(updateProgress);
      
      timeoutRef.current = setTimeout(() => {
        const event = new CustomEvent('setLoading', { detail: false });
        window.dispatchEvent(event);
      }, duration);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Fondo con gradientes animados */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_var(--tw-gradient-stops))] from-purple-500/15 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
        
        {/* Grid decorativo */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `linear-gradient(to right, #22d3ee 1px, transparent 1px), 
                              linear-gradient(to bottom, #22d3ee 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-12">
        
        {/* Logo Section - ANILLOS ORBITANDO ALREDEDOR DEL CUADRO JR */}
        <div className="mb-10">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Contenedor de anillos - Orbitan alrededor del logo */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              
              {/* Anillo 1 - Cyan (el más grande) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44 rounded-full border-2 border-cyan-500/30"
                style={{ borderStyle: 'dashed' }}
              />
              
              {/* Anillo 2 - Púrpura */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 rounded-full border border-purple-500/40"
              />
              
              {/* Anillo 3 - Azul */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 rounded-full border-2 border-blue-500/25"
                style={{ borderStyle: 'dotted' }}
              />
              
              {/* Anillo 4 - Rosa (el más pequeño) */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 rounded-full border border-pink-500/30"
              />
              
              {/* Puntos brillantes en los anillos */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50" />
              </motion.div>
              
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
              </motion.div>
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36"
              >
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
              </motion.div>
              
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32"
              >
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50" />
              </motion.div>

              {/* Logo central - CUADRO JR (FIJO en el centro) */}
              <motion.div
                animate={hasStarted ? {} : { 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-20 h-20 z-10"
              >
                {/* Sombra exterior */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-lg" />
                
                {/* Fondo del logo */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl" />
                
                {/* Borde degradado */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 p-[2px]">
                  <div className="w-full h-full bg-black rounded-2xl" />
                </div>
                
                {/* Iniciales JR */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                    JR
                  </span>
                </div>
                
                {/* Indicador de audio cuando está reproduciendo */}
                {hasStarted && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute -bottom-2 -right-2 w-7 h-7 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 border-2 border-black z-20"
                  >
                    <Volume2 size={12} className="text-white" />
                  </motion.div>
                )}
                
                {/* Esquinas decorativas */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-500/50 rounded-bl-lg" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-pink-500/50 rounded-br-lg" />
              </motion.div>
            </div>
            
            {/* Mini indicadores de progreso debajo de todo */}
            {!hasStarted && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
                />
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  className="w-1.5 h-1.5 bg-purple-500 rounded-full"
                />
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                  className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                />
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Título y subtítulo */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
          >
            JHIN ROJAS
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-sm font-mono tracking-wider"
          >
            Systems Engineering Portfolio
          </motion.p>
        </div>
        
        {/* Botón PLAY o Barra de progreso */}
        <div className="min-h-[120px] flex flex-col items-center justify-center">
          {!hasStarted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <motion.button
                onClick={handlePlayMusic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 mb-4"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-3 text-white font-black text-lg uppercase tracking-widest">
                  <Play size={22} className="fill-white group-hover:scale-110 transition-transform" />
                  Iniciar Experiencia
                </span>
              </motion.button>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-slate-500 text-xs font-mono"
              >
                Presiona PLAY para comenzar 🎵
              </motion.p>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-80 mx-auto space-y-4"
            >
              {/* Barra de progreso */}
              <div className="relative">
                <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                    className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </motion.div>
                </div>
                
                {/* Porcentaje */}
                <div className="absolute -top-6 right-0 text-xs font-mono text-cyan-400">
                  {Math.round(progress)}%
                </div>
              </div>
              
              {/* Tecnología actual cargando */}
              <motion.div
                key={currentTechIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex items-center justify-center gap-2 text-cyan-400/80 text-xs font-mono"
              >
                {technologies[currentTechIndex].icon}
                <span>Cargando {technologies[currentTechIndex].name}...</span>
              </motion.div>
              
              {/* Mensaje de estado */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-slate-500 text-[11px] font-mono text-center"
              >
                {progress < 30 && '✨ Inicializando componentes...'}
                {progress >= 30 && progress < 60 && '🎨 Preparando diseños...'}
                {progress >= 60 && progress < 90 && '⚡ Optimizando experiencia...'}
                {progress >= 90 && '🚀 ¡Casi listo!'}
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Decoración inferior */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <span className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />
          <span className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.3em]">
            Portfolio 2026
          </span>
          <span className="w-8 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
        </motion.div>
      </div>
    </motion.div>
  );
}