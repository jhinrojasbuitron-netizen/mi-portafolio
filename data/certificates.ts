import type { CertificatesData } from '@/types';

export const certificatesData: Record<'es' | 'en', CertificatesData> = {
  en: {
    salesland: {
      name: "SALESLAND",
      period: "Feb 2025 - Jun 2025",
      role: "Commercial Advisor & Supervision Support",
      certificateUrl: "/Salesland.pdf",
      achievements: [
        "Experience in Commercial Management and Sales",
        "Recognition for outstanding performance in Movistar campaign",
        "Experience in Technical Incident Resolution",
        "Training in Customer Service Excellence"
      ],
      skills: ["Consultative Sales", "CRM", "Negotiation", "Teamwork"],
      description: "During my time at SALESLAND, I developed key skills in the commercial and supervisory field, achieving performance in the telecommunications sector, which is endorsed by RXH payments."
    },
    geaset: {
      name: "GEA SET",
      period: "Aug 2025 - Mar 2026",
      role: "Retention Executive & Back Office",
      certificateUrl: "/Geaset.PDF",
      achievements: [
        "Certification in Retention Management",
        "Specialization in Customer Loyalty",
        "Certificate in Operational Incident Analysis",
        "Training in Administrative Tools"
      ],
      skills: ["Loyalty", "Conflict Resolution", "Back Office", "Data Analysis"],
      description: "At GEA SET I obtained specialized certifications in customer retention and administrative management for the Chilean market, demonstrating my ability in high-pressure environments."
    }
  },
  es: {
    salesland: {
      name: "SALESLAND",
      period: "Feb 2025 - Jun 2025",
      role: "Asesor Comercial y Apoyo en Supervisión",
      certificateUrl: "/Salesland.pdf",
      achievements: [
        "Experiencia en Gestión Comercial y Ventas",
        "Reconocimiento por desempeño destacado en campaña Movistar",
        "Experiencia en Resolución de Incidencias Técnicas",
        "Capacitación en Excelencia en Servicio al Cliente"
      ],
      skills: ["Ventas Consultivas", "CRM", "Negociación", "Trabajo en Equipo"],
      description: "Durante mi tiempo en SALESLAND, desarrollé habilidades clave en el ámbito comercial y de supervisión, logrando desempeño en el sector de telecomunicaciones, lo cual está avalado por los pagos de RXH."
    },
    geaset: {
      name: "GEA SET",
      period: "Ago 2025 - Mar 2026",
      role: "Ejecutivo de Retenciones y Back Office",
      certificateUrl: "/Geaset.PDF",
      achievements: [
        "Certificación en Gestión de Retenciones",
        "Especialización en Fidelización de Clientes",
        "Certificado en Análisis de Incidencias Operativas",
        "Capacitación en Herramientas Administrativas"
      ],
      skills: ["Fidelización", "Resolución de Conflictos", "Back Office", "Análisis de Datos"],
      description: "En GEA SET obtuve certificaciones especializadas en retención de clientes y gestión administrativa para el mercado chileno, demostrando mi capacidad en entornos de alta presión."
    }
  }
};