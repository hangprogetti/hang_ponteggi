import React from 'react';

interface CookiePolicyLinkProps {
  className?: string;
}

const CookiePolicyLink: React.FC<CookiePolicyLinkProps> = ({ className = "" }) => {
  return (
    <a 
      href="https://www.iubenda.com/privacy-policy/61234114/cookie-policy" 
      className={`iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe ${className}`} 
      title="Cookie Policy"
    >
      Cookie Policy
    </a>
  );
};

export default CookiePolicyLink;
