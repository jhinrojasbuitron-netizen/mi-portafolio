export const getCategoryColors = (categoryId: string) => {
  switch(categoryId) {
    case 'frontend':
      return { bg: 'from-pink-500 to-rose-500', border: 'border-pink-500', shadow: 'shadow-pink-500/50', hover: 'hover:border-pink-500/50 hover:text-pink-400' };
    case 'backend':
      return { bg: 'from-cyan-500 to-blue-500', border: 'border-cyan-500', shadow: 'shadow-cyan-500/50', hover: 'hover:border-cyan-500/50 hover:text-cyan-400' };
    case 'database':
      return { bg: 'from-emerald-500 to-green-500', border: 'border-emerald-500', shadow: 'shadow-emerald-500/50', hover: 'hover:border-emerald-500/50 hover:text-emerald-400' };
    case 'tools':
      return { bg: 'from-orange-500 to-amber-500', border: 'border-orange-500', shadow: 'shadow-orange-500/50', hover: 'hover:border-orange-500/50 hover:text-orange-400' };
    default:
      return { bg: 'from-cyan-500 to-purple-500', border: 'border-cyan-500', shadow: 'shadow-cyan-500/50', hover: 'hover:border-cyan-500/50 hover:text-white' };
  }
};