'use client';

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  playAudio: () => Promise<void>;
  pauseAudio: () => void;
  toggleAudio: () => Promise<void>;
  audioElement: HTMLAudioElement | null;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Crear audio UNA SOLA VEZ y mantenerlo vivo
    if (typeof Audio !== 'undefined' && !audioRef.current) {
      const audio = new Audio('/musica de fondo.mp3');
      audio.volume = 0.10;
      audio.loop = true;
      audioRef.current = audio;

      // Eventos para mantener el estado sincronizado
      audio.addEventListener('play', () => setIsPlaying(true));
      audio.addEventListener('pause', () => setIsPlaying(false));
    }

    return () => {
      // NO destruir el audio al desmontar
      // Solo limpiar event listeners
      if (audioRef.current) {
        audioRef.current.removeEventListener('play', () => setIsPlaying(true));
        audioRef.current.removeEventListener('pause', () => setIsPlaying(false));
      }
    };
  }, []);

  const playAudio = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error al reproducir:', error);
      }
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        pauseAudio();
      } else {
        await playAudio();
      }
    }
  };

  return (
    <AudioContext.Provider value={{
      isPlaying,
      playAudio,
      pauseAudio,
      toggleAudio,
      audioElement: audioRef.current
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudioContext() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudioContext must be used within an AudioProvider');
  }
  return context;
}