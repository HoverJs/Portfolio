import React from 'react';

interface PixelButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'accent' | 'dark';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const btnClass = 
    variant === 'primary' ? 'pixel-btn-primary text-white' :
    variant === 'accent' ? 'pixel-btn-accent font-bold' :
    'pixel-btn-dark text-slate-300 hover:text-white';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`font-press-start text-[10px] sm:text-xs uppercase px-4 py-2.5 pixel-corners-sm outline-none transition-all ${btnClass} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      {children}
    </button>
  );
};
export default PixelButton;
