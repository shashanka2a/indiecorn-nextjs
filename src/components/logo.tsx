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
        <rect width="32" height="32" rx="6" fill="#000000"/>
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#1a1a1a" stroke="#22c55e" stroke-width="1"/>
        <circle cx="8" cy="8" r="1.5" fill="#ef4444"/>
        <circle cx="12" cy="8" r="1.5" fill="#f59e0b"/>
        <circle cx="16" cy="8" r="1.5" fill="#22c55e"/>
        <rect x="6" y="12" width="20" height="1" fill="#22c55e" opacity="0.8"/>
        <rect x="6" y="15" width="16" height="1" fill="#22c55e" opacity="0.6"/>
        <rect x="6" y="18" width="18" height="1" fill="#22c55e" opacity="0.4"/>
        <rect x="6" y="21" width="14" height="1" fill="#22c55e" opacity="0.3"/>
        <rect x="24" y="21" width="1" height="1" fill="#22c55e"/>
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
        <rect width="32" height="32" rx="6" fill="#000000"/>
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#1a1a1a" stroke="#22c55e" stroke-width="1"/>
        <circle cx="8" cy="8" r="1.5" fill="#ef4444"/>
        <circle cx="12" cy="8" r="1.5" fill="#f59e0b"/>
        <circle cx="16" cy="8" r="1.5" fill="#22c55e"/>
        <rect x="6" y="12" width="20" height="1" fill="#22c55e" opacity="0.8"/>
        <rect x="6" y="15" width="16" height="1" fill="#22c55e" opacity="0.6"/>
        <rect x="6" y="18" width="18" height="1" fill="#22c55e" opacity="0.4"/>
        <rect x="6" y="21" width="14" height="1" fill="#22c55e" opacity="0.3"/>
        <rect x="24" y="21" width="1" height="1" fill="#22c55e"/>
      </svg>
      <div className="flex flex-col">
        <span className={`font-mono font-bold ${textSizes[size]} text-white leading-none`}>
          IndieCorn
        </span>
        <span className={`font-mono ${textSizes[size === 'sm' ? 'sm' : 'sm']} text-green-400 leading-none`}>
          .xyz
        </span>
      </div>
    </div>
  );
}

export default Logo;



