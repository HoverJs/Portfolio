import React from 'react';

interface PixelBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'dark';
  className?: string;
}

export const PixelBadge: React.FC<PixelBadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const badgeClass = 
    variant === 'primary' ? 'bg-[#8B5CF6]/15 text-[#8B5CF6] border-[#8B5CF6]/40' :
    variant === 'secondary' ? 'bg-[#A855F7]/15 text-[#A855F7] border-[#A855F7]/40' :
    variant === 'accent' ? 'bg-[#22D3EE]/15 text-[#22D3EE] border-[#22D3EE]/40' :
    variant === 'success' ? 'bg-green-500/15 text-green-400 border-green-500/40' :
    'bg-slate-900 text-slate-400 border-slate-800';

  return (
    <span className={`inline-block font-share-tech text-[11px] sm:text-xs tracking-wider px-2.5 py-0.5 border pixel-corners-sm select-none ${badgeClass} ${className}`}>
      {children}
    </span>
  );
};
export default PixelBadge;
