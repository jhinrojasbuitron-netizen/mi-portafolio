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
      imageUrl: "/images/optimizacion-distri/InterfazPrincipal.png",
      gallery: [
        "/images/optimizacion-distri/InterfazPrincipal.png",
        "/images/optimizacion-distri/Pruebas.png"
      ]
    },
    {
      id: 3,
      title: "DEVELOPMENT OF AN ONLINE STORE (E-COMMERCE)",
      stack: "PHP, HTML5, CSS3, JAVASCRIPT, MYSQL",
      desc: "Development and implementation of an e-commerce platform for selling clothing. Includes product catalog, shopping cart, details view, and order management",
      longDesc: "Development of a complete e-commerce platform for a fashion store. Includes interactive catalog, product details, shopping cart, simulated payment gateway, contact forms, and relational database management.",
      iconType: 'shield' as const,
      steps: [
        "Interactive catalog",
        "Shopping cart and payment management",
        "Responsive design",
        "Database integration"
      ],
      githubUrl: null,
      imageUrl: "/images/ecommerce/catalogo.png",
      gallery: [
        "/images/ecommerce/catalogo.png",
        "/images/ecommerce/carrito.png",
        "/images/ecommerce/detalle-producto.png",
        "/images/ecommerce/pago.png"
      ]
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
        "/images/gestion-documental/LoginAdmin.png",
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
      imageUrl: "image/optimizacion-distri/InterfazPrincipal.PNG",
      gallery: [
        "image/optimizacion-distri/InterfazPrincipal.PNG",
        "image/optimizacion-distri/Pruebas.PNG"
      ]
    },
    {
      id: 3,
      title: "DESARROLLO DE TIENDA VIRTUAL (E-COMMERCE)",
      stack: "PHP, HTML5, CSS3, JAVASCRIPT, MYSQL",
      desc: "Desarrollo e implementación de un e-commerce para la venta de prendas de vestir. Incluye catálogo de productos, carrito de compras, vista de detalles y gestión de pedidos.",
      longDesc: "Desarrollo de plataforma e-commerce completa para tienda de moda. Incluye catálogo interactivo, detalles de productos, carrito de compras, pasarela de pagos simulada, formularios de contacto y gestión de base de datos relacional.",
      iconType: 'shield' as const,
      steps: [
        "Catálogo interactivo",
        "Gestión de carrito y pagos",
        "Diseño responsivo",
        "Integración con base de datos"
      ],
      githubUrl: null,
      imageUrl: "images/ecommerce/Principal.PNG",
      gallery: [
        "images/ecommerce/Principal.PNG",
        "images/ecommerce/Productos.PNG",
        "images/ecommerce/DetalleProducto.PNG",
        "images/ecommerce/PasarelaPago.PNG",
        "images/ecommerce/Contacto.PNG",
        "images/ecommerce/Devoluciones.PNG",
        "images/ecommerce/Tiendas.PNG"
      ]
    }
  ]
};