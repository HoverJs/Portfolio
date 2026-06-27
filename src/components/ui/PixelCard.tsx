import React from 'react';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary' | 'accent' | 'white' | 'dark' | 'none';
  variant?: 'pixel' | 'rounded';
  onClick?: () => void;
}

export const PixelCard: React.FC<PixelCardProps> = ({
  children,
  className = '',
  glowColor = 'dark',
  variant = 'rounded',
  onClick,
}) => {
  const isPixel = variant === 'pixel';
  
  const borderClass = isPixel
    ? (
        glowColor === 'primary' ? 'pixel-border-primary' :
        glowColor === 'secondary' ? 'pixel-border-secondary' :
        glowColor === 'accent' ? 'pixel-border-accent' :
        glowColor === 'white' ? 'pixel-border-white' :
        glowColor === 'dark' ? 'pixel-border-dark' : 'border border-slate-800'
      )
    : (
        glowColor === 'primary' ? 'border border-[#8B5CF6]/40' :
        glowColor === 'secondary' ? 'border border-[#A855F7]/40' :
        glowColor === 'accent' ? 'border border-[#22D3EE]/40' :
        glowColor === 'white' ? 'border border-white/20' :
        glowColor === 'dark' ? 'border border-slate-800/80' : 'border border-slate-900'
      );

  const cornerClass = isPixel ? 'pixel-corners' : 'rounded-2xl';

  const glowShadow = 
    glowColor === 'primary' ? 'hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-[#8B5CF6]' :
    glowColor === 'secondary' ? 'hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:border-[#A855F7]' :
    glowColor === 'accent' ? 'hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-[#22D3EE]' :
    glowColor === 'white' ? 'hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-white' :
    glowColor === 'dark' ? 'hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:border-slate-700' :
    '';

  return (
    <div
      onClick={onClick}
      className={`bg-[#0c0c20]/90 backdrop-blur-md ${cornerClass} transition-all duration-300 ${borderClass} ${glowShadow} ${onClick ? 'cursor-pointer hover:-translate-y-1' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default PixelCard;
