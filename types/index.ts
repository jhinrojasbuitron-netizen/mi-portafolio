export interface Project {
  id: number;
  title: string;
  stack: string;
  desc: string;
  longDesc: string;
  iconType: 'search' | 'settings' | 'shield';
  steps: string[];
  githubUrl: string | null;
  imageUrl?: string;
  gallery?: string[]; // ← NUEVO: Galería de imágenes
}

export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'tools';
  level: number;
  icon: string;
}

export interface Category {
  id: string;
  label: string;
}

export interface Certificate {
  name: string;
  period: string;
  role: string;
  certificateUrl: string;
  achievements: string[];
  skills: string[];
  description: string;
}

export interface CertificatesData {
  salesland: Certificate;
  geaset: Certificate;
}