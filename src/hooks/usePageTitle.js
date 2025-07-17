import { useEffect } from 'react';

export const usePageTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} - Mairie de Ville` : 'Mairie de Ville - Site officiel';
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
