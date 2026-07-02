'use client';

import { Volume2, VolumeX } from 'lucide-react';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicToggle({ isPlaying, onToggle }: MusicToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all group"
    >
      {isPlaying ? (
        <Volume2 size={24} className="text-cyan-400" />
      ) : (
        <VolumeX size={24} className="text-slate-400" />
      )}
    </button>
  );
}