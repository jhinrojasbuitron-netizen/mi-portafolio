import type { Skill, Category } from '@/types';

export const skills: Skill[] = [
  { name: 'Java', category: 'backend', level: 85, icon: '/java.svg' },
  { name: 'Python', category: 'backend', level: 80, icon: '/python.svg' },
  { name: 'C++', category: 'backend', level: 75, icon: '/c-plusplus.svg' },
  { name: 'Node.js', category: 'backend', level: 70, icon: '/nodejs.svg' },
  { name: 'JavaScript', category: 'frontend', level: 85, icon: '/javascript.svg' },
  { name: 'Next.js', category: 'frontend', level: 75, icon: '/next.svg' },
  { name: 'HTML5', category: 'frontend', level: 90, icon: '/html5.svg' },
  { name: 'CSS3', category: 'frontend', level: 85, icon: '/css_old.svg' },
  { name: 'Tailwind', category: 'frontend', level: 80, icon: '/tailwindcss.svg' },
  { name: 'Android', category: 'frontend', level: 65, icon: '/android-icon.svg' },
  { name: 'SQL Server', category: 'database', level: 85, icon: '/sql-server.svg' },
  { name: 'MySQL', category: 'database', level: 80, icon: '/mysql-wordmark-light.svg' },
  { name: 'MongoDB', category: 'database', level: 70, icon: '/mongodb-icon-dark.svg' },
  { name: 'GitHub', category: 'tools', level: 85, icon: '/github_dark.svg' },
  { name: 'StarUML', category: 'tools', level: 75, icon: '/staruml_94078.svg' },
  { name: 'VS Code', category: 'tools', level: 90, icon: '/vscode.svg' },
  { name: 'Google Colab', category: 'tools', level: 70, icon: '/Google_Colaboratory.svg' },
  { name: 'Office', category: 'tools', level: 95, icon: '/microsoft-office.svg' },
  { name: 'Figma', category: 'tools', level: 65, icon: '/figma.svg' },
  { name: 'Apache NetBeans', category: 'tools', level: 80, icon: '/Apache_NetBeans_Logo.svg' },
  { name: 'Bizagi', category: 'tools', level: 75, icon: '/bizagi.svg' }
];

export const categories: Record<'es' | 'en', Category[]> = {
  en: [
    { id: 'all', label: 'All' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' }
  ],
  es: [
    { id: 'all', label: 'Todos' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'database', label: 'Base de Datos' },
    { id: 'tools', label: 'Herramientas' }
  ]
};

export const getSkillsByCategory = (category?: string) => {
  if (!category || category === 'all') return skills;
  return skills.filter(skill => skill.category === category);
};