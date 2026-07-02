'use client';

import { useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesBackgroundProps {
  darkMode: boolean;
  initParticles: boolean;
  setInitParticles: (value: boolean) => void;
}

export default function ParticlesBackground({ 
  darkMode, 
  initParticles, 
  setInitParticles 
}: ParticlesBackgroundProps) {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInitParticles(true));
  }, [setInitParticles]);

  if (!initParticles) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" }, resize: { enable: true } },
          modes: { grab: { distance: 180, links: { opacity: 0.3 } } },
        },
        particles: {
          color: { value: darkMode ? "#22d3ee" : "#0891b2" },
          links: { color: darkMode ? "#22d3ee" : "#0891b2", distance: 150, enable: true, opacity: 0.15, width: 1 },
          move: { enable: true, speed: 0.6, random: true },
          number: { density: { enable: true, width: 800, height: 800 }, value: 70 },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 2 } },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}