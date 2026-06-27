import React from 'react';

interface PixelProgressBarProps {
  label: string;
  value: number;
  max: number;
  color?: 'red' | 'blue' | 'purple' | 'green' | 'orange' | 'cyan';
  className?: string;
  showValues?: boolean;
}

export const PixelProgressBar: React.FC<PixelProgressBarProps> = ({
  label,
  value,
  max,
  color = 'purple',
  className = '',
  showValues = true,
}) => {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));

  const colorClass = 
    color === 'red' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]' :
    color === 'blue' ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' :
    color === 'purple' ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]' :
    color === 'green' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' :
    color === 'orange' ? 'bg-amber-600 shadow-[0_0_8px_rgba(217,119,6,0.6)]' :
    'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]';

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-1.5 font-press-start text-[10px] tracking-wider text-slate-300">
        <span>{label}</span>
        {showValues && (
          <span>{value}/{max}</span>
        )}
      </div>
      <div className="w-full h-6 bg-[#050510] p-0.5 pixel-corners-sm border-2 border-slate-700">
        <div 
          className={`h-full ${colorClass} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
export default PixelProgressBar;
