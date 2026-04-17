import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Logo({ size = 36, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 1000 1000" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', ...style }}
    >
      <defs>
        <linearGradient id="logo-gradient" gradientUnits="userSpaceOnUse" x1="521.1307" y1="245.5428" x2="240.4538" y2="768.1708">
          <stop offset="0" stopColor="#5A5DA8"/>
          <stop offset="1" stopColor="#4D368B"/>
        </linearGradient>
      </defs>
      <polygon fill="url(#logo-gradient)" points="497.6,208.9 128.8,791.1 282.4,791.1 575.2,329.9"/>
      <polyline fill="#4D368B" points="678.5,490.9 602.8,610.2 717.6,791.1 871.2,791.1"/>
      <polygon fill="#FBAF17" points="602.8,610.2 525.7,488.9 601,370.1 334.3,791.1 487.9,791.1 602.8,610.2"/>
      <polygon fill="#5A5DA8" points="602.8,610.2 678.5,490.9 601,370.1 525.7,488.9"/>
    </svg>
  );
}
