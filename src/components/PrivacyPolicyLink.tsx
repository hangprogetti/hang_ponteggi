import React from 'react';

interface PrivacyPolicyLinkProps {
  className?: string;
}

const PrivacyPolicyLink: React.FC<PrivacyPolicyLinkProps> = ({ className = "" }) => {
  return (
    <a 
      href="https://www.iubenda.com/privacy-policy/61234114" 
      className={`iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe ${className}`} 
      title="Privacy Policy"
    >
      Privacy Policy
    </a>
  );
};

export default PrivacyPolicyLink;
