export interface Experience {
  name: string;
  period: { en: string; es: string };
  role: { en: string; es: string };
  duties: { en: string[]; es: string[] };
  certType: 'salesland' | 'geaset';
}

export const experiences: Experience[] = [
  { 
    name: "GEA SET", 
    period: { en: "Aug 2025 - Mar 2026", es: "Ago 2025 - Mar 2026" }, 
    role: { 
      en: "Retention Executive & Back Office", 
      es: "Ejecutivo de Retenciones y Back Office" 
    }, 
    duties: { 
      en: [
        "Loyalty and objection resolution for the Chilean market.", 
        "Administrative support and identification of operational incidents."
      ], 
      es: [
        "Fidelización y resolución de objeciones para el mercado chileno.", 
        "Soporte administrativo e identificación de incidencias operativas."
      ] 
    }, 
    certType: 'geaset' 
  },
  { 
    name: "SALESLAND", 
    period: { en: "Feb 2025 - Jun 2025", es: "Feb 2025 - Jun 2025" }, 
    role: { 
      en: "Commercial Advisor & Supervision Support", 
      es: "Asesor Comercial y Apoyo en Supervisión" 
    }, 
    duties: { 
      en: [
        "Commercial management and sales closing in Movistar campaign.", 
        "Direct support in resolving technical incidents of the team."
      ], 
      es: [
        "Gestión comercial y cierre de ventas en campaña Movistar.", 
        "Apoyo directo en resolución de incidencias técnicas del equipo."
      ] 
    }, 
    certType: 'salesland' 
  }
];