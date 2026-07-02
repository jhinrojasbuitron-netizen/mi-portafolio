import { useAudioContext } from '@/context/AudioContext';

export function useAudio(src: string) {
  const { isPlaying, toggleAudio } = useAudioContext();
  
  return {
    isPlaying,
    toggleMusic: toggleAudio
  };
}