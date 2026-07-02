import type { Project } from '@/types';

export const projectsData: Record<'es' | 'en', Project[]> = {
  en: [
    {
      id: 1,
      title: "DOCUMENT MANAGEMENT SYSTEM",
      stack: "JAVA, MYSQL, CSV, NETBEANS",
      desc: "Comprehensive document management and enrollment system for rural educational institution.",
      longDesc: "Design and implementation of a complete solution for automating document management and enrollment processes at I.E. David Samanez Ocampo (rural school). The system includes role-based access (Admin/Teachers), hybrid persistence (MySQL + CSV), and complete CRUD operations for students, teachers, and enrollments.",
      iconType: 'search' as const,
      steps: [
        "Requirements Analysis & System Design",
        "MySQL Database Design & Implementation",
        "Java OOP Backend Development",
        "Role-Based Access Control (Admin/Teachers)",
        "Hybrid Persistence (MySQL + CSV Export)",
        "Enrollment Management Module",
        "User & Data Management Interface"
      ],
      githubUrl: "https://github.com/jhinrojasbuitron-netizen/SISTEMA-DE-GESTI-N-DOCUMENTAL.git",
      imageUrl: "/images/gestion-documental/InterfazPrincipal.png",
      gallery: [
        "/images/gestion-documental/LoginAdmin.png",
        "/images/gestion-documental/InterfazPrincipal.png",
        "/images/gestion-documental/AddAlumno.png",
        "/images/gestion-documental/LoginProfesor.png",
        "/images/gestion-documental/InterfazPrincipalProfesor.png"
      ]
    },
    {
      id: 2,
      title: "PRODUCT DISTRIBUTION OPTIMIZATION",
      stack: "LINDO/LINGO, EXCEL SOLVER, SIMPLEX",
      desc: "Optimization of product distribution plans using linear programming and operations research.",
      longDesc: "Development of mathematical models for optimizing product distribution networks. Implementation of Simplex Method and transportation models to minimize total logistics costs while satisfying supply constraints and demand requirements. Includes sensitivity analysis for fuel costs and route changes.",
      iconType: 'settings' as const,
      steps: [
        "Mathematical Modeling & Problem Formulation",
        "Linear Programming Implementation",
        "Simplex Method Algorithm",
        "Transportation Model Development",
        "Sensitivity Analysis",
        "LINDO/LINGO Optimization",
        "Excel Solver Validation"
      ],
      githubUrl: "https://github.com/tuusuario/OPTIMIZACION-DEL-PLAN-DE-DISTRIBUCION-DE-PRODUCTOS",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "QA & TESTING METHODOLOGIES",
      stack: "IEEE 829, PYTHON, TESTING",
      desc: "Quality assurance and software testing following IEEE 829 international standards.",
      longDesc: "Implementation of comprehensive test plans following the international IEEE 829 standard. Development of testing strategies for enterprise applications including unit testing, integration testing, and system validation. Focus on test automation and quality metrics.",
      iconType: 'shield' as const,
      steps: [
        "Test Plan Design (IEEE 829)",
        "Test Case Development",
        "Unit & Integration Testing",
        "Bug Tracking & Reporting",
        "Performance Metrics Analysis",
        "Test Automation Strategy"
      ],
      githubUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b8?w=800&h=600&fit=crop"
    }
  ],
  es: [
    {
      id: 1,
      title: "SISTEMA DE GESTIÓN DOCUMENTAL",
      stack: "JAVA, MYSQL, CSV, NETBEANS",
      desc: "Sistema integral de gestión documental y matrícula para institución educativa rural.",
      longDesc: "Diseño e implementación de una solución completa para automatizar la gestión documental y el proceso de matrícula en la I.E. N° 50670 David Samanez Ocampo Chacamachay. El sistema incluye acceso basado en roles (Administrador/Profesores), persistencia híbrida (MySQL + CSV) y operaciones CRUD completas para alumnos, profesores y matrículas.",
      iconType: 'search' as const,
      steps: [
        "Análisis de Requisitos y Diseño del Sistema",
        "Diseño e Implementación de Base de Datos MySQL",
        "Desarrollo Backend en Java (POO)",
        "Control de Acceso por Roles (Admin/Profesores)",
        "Persistencia Híbrida (MySQL + Exportación CSV)",
        "Módulo de Gestión de Matrícula",
        "Interfaz de Gestión de Usuarios y Datos"
      ],
      githubUrl: "https://github.com/jhinrojasbuitron-netizen/SISTEMA-DE-GESTI-N-DOCUMENTAL.git",
      imageUrl: "/images/gestion-documental/LoginAdmin.png",
      gallery: [
        "/images/gestion-documental/InterfazPrincipal.png",
        "/images/gestion-documental/AddAlumno.png",
        "/images/gestion-documental/LoginProfesor.png",
        "/images/gestion-documental/InterfazPrincipalProfesor.png"
      ]
    },
    {
      id: 2,
      title: "OPTIMIZACIÓN DEL PLAN DE DISTRIBUCIÓN",
      stack: "LINDO/LINGO, EXCEL SOLVER, SIMPLEX",
      desc: "Optimización de planes de distribución usando programación lineal e investigación de operaciones.",
      longDesc: "Desarrollo de modelos matemáticos para optimizar redes de distribución de productos. Implementación del Método Simplex y modelos de transporte para minimizar costos totales de logística satisfaciendo restricciones de oferta y demanda. Incluye análisis de sensibilidad para costos de combustible y cambios de ruta.",
      iconType: 'settings' as const,
      steps: [
        "Modelado Matemático y Formulación del Problema",
        "Implementación de Programación Lineal",
        "Algoritmo del Método Simplex",
        "Desarrollo del Modelo de Transporte",
        "Análisis de Sensibilidad",
        "Optimización con LINDO/LINGO",
        "Validación con Excel Solver"
      ],
      githubUrl: "https://github.com/tuusuario/OPTIMIZACION-DEL-PLAN-DE-DISTRIBUCION-DE-PRODUCTOS",
      imageUrl: "/image/optimizacion-distri/InterfazPrincipal.png",
      gallery: [
        "/image/optimizacion-distri/Pruebas.png",
      ]
    },
    {
      id: 3,
      title: "METODOLOGÍAS DE QA & TESTING",
      stack: "IEEE 829, PYTHON, TESTING",
      desc: "Aseguramiento de calidad y pruebas de software siguiendo estándar internacional IEEE 829.",
      longDesc: "Implementación de planes de prueba exhaustivos siguiendo el estándar internacional IEEE 829. Desarrollo de estrategias de testing para aplicaciones empresariales incluyendo pruebas unitarias, de integración y validación de sistemas. Enfoque en automatización de pruebas y métricas de calidad.",
      iconType: 'shield' as const,
      steps: [
        "Diseño del Plan de Pruebas (IEEE 829)",
        "Desarrollo de Casos de Prueba",
        "Pruebas Unitarias y de Integración",
        "Seguimiento y Reporte de Errores",
        "Análisis de Métricas de Rendimiento",
        "Estrategia de Automatización de Pruebas"
      ],
      githubUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b8?w=800&h=600&fit=crop"
    }
  ]
};