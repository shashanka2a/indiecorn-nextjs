import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
}

export function Logo({ className = '', size = 'md', variant = 'full' }: LogoProps) {

  const iconSizes = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 40, height: 40 },
    xl: { width: 48, height: 48 }
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  if (variant === 'icon') {
    return (
      <svg 
        className={`${className}`}
        width={iconSizes[size].width} 
        height={iconSizes[size].height} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad-green" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e"/>
            <stop offset="100%" stopColor="#10b981"/>
          </linearGradient>
          <linearGradient id="grad-horn" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ec4899"/>
            <stop offset="100%" stopColor="#a855f7"/>
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="26" height="26" rx="3.6"
              stroke="url(#grad-green)" strokeWidth="1.6" fill="none"/>
        <path d="M10 10 L6 16 L10 22"
              stroke="url(#grad-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 10 L18 22"
              stroke="url(#grad-horn)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 10 L26 16 L22 22"
              stroke="url(#grad-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <span className={`font-mono font-bold ${textSizes[size]} text-white`}>
          IndieCorn
        </span>
        <span className={`font-mono ${textSizes[size]} text-green-400`}>
          .xyz
        </span>
      </div>
    );
  }

  // Full logo (default)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width={iconSizes[size].width} 
        height={iconSizes[size].height} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="grad-green-full" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e"/>
            <stop offset="100%" stopColor="#10b981"/>
          </linearGradient>
          <linearGradient id="grad-horn-full" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ec4899"/>
            <stop offset="100%" stopColor="#a855f7"/>
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="26" height="26" rx="3.6"
              stroke="url(#grad-green-full)" strokeWidth="1.6" fill="none"/>
        <path d="M10 10 L6 16 L10 22"
              stroke="url(#grad-green-full)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 10 L18 22"
              stroke="url(#grad-horn-full)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 10 L26 16 L22 22"
              stroke="url(#grad-green-full)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="flex flex-col">
        <span className={`font-mono font-bold ${textSizes[size]} text-white leading-none`}>
          IndieCorn
        </span>
      </div>
    </div>
  );
}

export default Logo;



