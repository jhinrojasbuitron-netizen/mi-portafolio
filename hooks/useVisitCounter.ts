import { useState, useEffect } from 'react';

export function useVisitCounter() {
  const [visitCount, setVisitCount] = useState<number>(0); // ← Iniciar en 0

  useEffect(() => {
    const checkAndCountVisit = async () => {
      const hasVisited = sessionStorage.getItem('hasVisited');
      
      if (!hasVisited) {
        try {
          // Usar un nuevo namespace para empezar desde 0
          const response = await fetch('https://api.countapi.xyz/hit/jhinrojas-portfolio-v2/visits');
          const data = await response.json();
          setVisitCount(data.value);
          sessionStorage.setItem('hasVisited', 'true');
        } catch (error) {
          // Fallback a localStorage empezando desde 0
          const visits = localStorage.getItem('portfolio_visits_v2');
          const count = visits ? parseInt(visits) + 1 : 1;
          localStorage.setItem('portfolio_visits_v2', count.toString());
          setVisitCount(count);
          sessionStorage.setItem('hasVisited', 'true');
        }
      } else {
        try {
          const response = await fetch('https://api.countapi.xyz/get/jhinrojas-portfolio-v2/visits');
          const data = await response.json();
          setVisitCount(data.value || 0);
        } catch (error) {
          const visits = localStorage.getItem('portfolio_visits_v2');
          setVisitCount(visits ? parseInt(visits) : 0);
        }
      }
    };
    
    checkAndCountVisit();
  }, []);

  return { visitCount };
}