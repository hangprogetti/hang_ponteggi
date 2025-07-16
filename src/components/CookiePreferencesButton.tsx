import React from 'react';
import { useIubenda } from '../hooks/useIubenda';

interface CookiePreferencesButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const CookiePreferencesButton: React.FC<CookiePreferencesButtonProps> = ({ 
  className = "text-gray-400 hover:text-white",
  children = "Gestisci Cookie"
}) => {
  const { isLoaded, openPreferenceCenter } = useIubenda();

  if (!isLoaded) {
    return null;
  }

  return (
    <button
      onClick={openPreferenceCenter}
      className={className}
      aria-label="Gestisci preferenze cookie"
      title="Gestisci preferenze cookie"
    >
      {children}
    </button>
  );
};

export default CookiePreferencesButton;
