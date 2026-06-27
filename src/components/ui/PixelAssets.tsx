import React from 'react';

// Common shape-rendering style for perfect pixel rendering
const pixelStyle = { shapeRendering: 'crispEdges' as const };

/**
 * A seamless tileable grass and soil block border.
 * Can be repeated horizontally.
 */
export const GrassBorder: React.FC<{ className?: string }> = ({ 
  className = ''
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none select-none ${className}`}>
      <svg 
        viewBox="0 0 128 16" 
        className="w-full h-8 min-w-[1024px]"
        preserveAspectRatio="none"
        style={pixelStyle}
      >
        <defs>
          <pattern id="grass-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
            {/* Grass Blades (Green) */}
            <rect x="0" y="0" width="16" height="4" fill="#15803d" />
            <rect x="0" y="0" width="16" height="2" fill="#22c55e" />
            <rect x="2" y="0" width="2" height="3" fill="#4ade80" />
            <rect x="8" y="0" width="2" height="3" fill="#4ade80" />
            <rect x="13" y="0" width="1" height="3" fill="#4ade80" />
            
            {/* Dark green separator */}
            <rect x="0" y="4" width="16" height="1" fill="#166534" />
            
            {/* Soil / Dirt Layer (Browns) */}
            <rect x="0" y="5" width="16" height="11" fill="#451a03" />
            <rect x="0" y="5" width="16" height="3" fill="#78350f" />
            
            {/* Rocks in Dirt */}
            <rect x="3" y="7" width="2" height="2" fill="#a16207" />
            <rect x="10" y="10" width="3" height="2" fill="#a16207" />
            <rect x="1" y="12" width="2" height="2" fill="#78350f" />
            <rect x="11" y="6" width="2" height="1" fill="#a16207" />
            
            {/* Dark outlines inside soil */}
            <rect x="0" y="8" width="16" height="1" fill="#1e1b4b" opacity="0.3" />
            <rect x="0" y="13" width="16" height="1" fill="#1e1b4b" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="16" fill="url(#grass-pattern)" />
      </svg>
    </div>
  );
};

/**
 * Purple Slime RPG monster. Bounces with a css-based bobbing animation.
 */
export const PixelSlime: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 48 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`animate-idle-bob ${className}`}
      style={pixelStyle}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer black outline */}
      <path d="M5 12h6v1H5zM3 10h2v2H3zm10 0v2h-2v-2zM2 7h1v3H2zm12 0h1v3h-1zM3 5h2v2H3zm10 0v2h-2V5zM5 4h6v1H5z" fill="#000" />
      
      {/* Slime body fill (Purple shades) */}
      <path d="M5 5h6v7H5z" fill="#C084FC" />
      <path d="M3 7h10v3H3z" fill="#A855F7" />
      <path d="M2 8h12v2H2z" fill="#7E22CE" />
      
      {/* Highlights (Top left of slime body) */}
      <rect x="5" y="5" width="2" height="1" fill="#E9D5FF" />
      <rect x="3" y="8" width="2" height="1" fill="#E9D5FF" />
      
      {/* Eyes */}
      <rect x="5" y="8" width="1" height="2" fill="#000" />
      <rect x="10" y="8" width="1" height="2" fill="#000" />
      
      {/* Smile/Mouth */}
      <rect x="7" y="10" width="2" height="1" fill="#000" />
      
      {/* Blush */}
      <rect x="4" y="9" width="1" height="1" fill="#F472B6" />
      <rect x="11" y="9" width="1" height="1" fill="#F472B6" />
    </svg>
  );
};

/**
 * Retro Pixel Pine Tree
 */
export const PixelTree: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 64 
}) => {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 16 24"
      className={className}
      style={pixelStyle}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tree trunk */}
      <rect x="7" y="17" width="2" height="7" fill="#451a03" />
      <rect x="6" y="20" width="4" height="2" fill="#000" opacity="0.3" />
      <rect x="7" y="17" width="1" height="7" fill="#78350f" />
      
      {/* Foliage outlines */}
      <path d="M7 1h2v1H7zm-1 1h1v1H6zm3 0h1v1H9zm-2 2h4v1H7zm-3 2h2v1H4zm8 0h2v1h-2zm-2 2h4v1h-4zm-6 0h2v1H2zm-1 2h2v1H1zm12 0h2v1h-2zm-4 2h4v1H9zm-6 0h2v1H3zm-2 2h14v1H1z" fill="#052e16" />
      
      {/* Foliage fills */}
      <path d="M7 2h2v3H7z" fill="#22c55e" />
      <path d="M6 5h4v3H6z" fill="#16a34a" />
      <path d="M5 8h6v3H5z" fill="#15803d" />
      <path d="M3 11h10v3H3z" fill="#166534" />
      <path d="M2 14h12v3H2z" fill="#14532d" />
      
      {/* Foliage Highlights */}
      <rect x="7" y="2" width="1" height="2" fill="#86efac" />
      <rect x="6" y="5" width="2" height="1" fill="#86efac" />
      <rect x="5" y="8" width="2" height="2" fill="#4ade80" />
      <rect x="4" y="11" width="3" height="1" fill="#4ade80" />
      <rect x="3" y="14" width="4" height="1" fill="#22c55e" />
    </svg>
  );
};

/**
 * Retro Pixel Rock
 */
export const PixelRock: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={pixelStyle}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 11h8v4H4z" fill="#64748b" />
      <path d="M5 8h6v3H5z" fill="#94a3b8" />
      <path d="M7 6h2v2H7z" fill="#cbd5e1" />
      <path d="M3 12h1v3H3zm10 0h1v3h-1zM4 10h1v1H4zm7 0h1v1h-1zM5 7h2v1H5zm4 0h1v1H9z" fill="#000" opacity="0.4" />
      <rect x="6" y="8" width="2" height="2" fill="#f1f5f9" />
    </svg>
  );
};

/**
 * Detailed Chibi SVG Character Avatar
 * Young man, short black hair, wearing black glasses and a black polo shirt,
 * matching the aesthetic of the developer image in the prompt.
 */
export const PixelAvatar: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 180 
}) => {
  return (
    <div 
      className={`relative rounded-xl flex items-center justify-center p-2 bg-slate-950/60 border-4 border-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.3)] select-none ${className}`}
      style={{ width: size, height: size * 1.15 }}
    >
      <svg
        viewBox="0 0 120 140"
        className="w-full h-full animate-idle-bob"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow under character */}
        <ellipse cx="60" cy="132" rx="36" ry="6" fill="#000000" opacity="0.6" />

        {/* Short black hair - Back layer */}
        <path d="M32 45 c -5 -15, 60 -15, 56 0" fill="#121214" />
        
        {/* Ears */}
        <circle cx="28" cy="72" r="7" fill="#FDBA74" />
        <circle cx="92" cy="72" r="7" fill="#FDBA74" />
        <circle cx="28" cy="72" r="4" fill="#F97316" opacity="0.3" />
        <circle cx="92" cy="72" r="4" fill="#F97316" opacity="0.3" />

        {/* Face (Peach skin tone) */}
        <path d="M30 65 C30 95, 90 95, 90 65 C90 40, 30 40, 30 65" fill="#FED7AA" />

        {/* Chubby cheeks */}
        <ellipse cx="38" cy="80" rx="6" ry="4" fill="#F43F5E" opacity="0.4" />
        <ellipse cx="82" cy="80" rx="6" ry="4" fill="#F43F5E" opacity="0.4" />

        {/* Short black hair - Front layer / Bangs / Spikes */}
        <path d="M26 50 
                 C24 22, 96 22, 94 50 
                 C92 42, 85 45, 82 43 
                 C78 40, 75 46, 70 41 
                 C62 35, 58 45, 52 40 
                 C45 36, 42 46, 38 42 
                 C34 40, 29 45, 26 50 Z" fill="#1E1B4B" />
        <path d="M26 50 
                 C24 22, 96 22, 94 50 
                 C92 42, 85 45, 82 43 
                 C78 40, 75 46, 70 41 
                 C62 35, 58 45, 52 40 
                 C45 36, 42 46, 38 42 
                 C34 40, 29 45, 26 50 Z" fill="#0F0E17" opacity="0.7" />

        {/* Eyes (Anime chibi style) */}
        {/* Left eye */}
        <rect x="42" y="65" width="8" height="10" rx="3" fill="#1E293B" />
        <circle cx="44.5" cy="67.5" r="2" fill="#FFFFFF" />
        <circle cx="47.5" cy="71.5" r="1" fill="#FFFFFF" />
        {/* Right eye */}
        <rect x="70" y="65" width="8" height="10" rx="3" fill="#1E293B" />
        <circle cx="72.5" cy="67.5" r="2" fill="#FFFFFF" />
        <circle cx="75.5" cy="71.5" r="1" fill="#FFFFFF" />

        {/* Eyebrows */}
        <path d="M40 60 Q 45 58, 50 61" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M70 61 Q 75 58, 80 60" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Black Glasses frame */}
        {/* Left frame */}
        <rect x="36" y="60" width="20" height="18" rx="4" fill="none" stroke="#000000" strokeWidth="4" />
        {/* Right frame */}
        <rect x="64" y="60" width="20" height="18" rx="4" fill="none" stroke="#000000" strokeWidth="4" />
        {/* Bridge */}
        <line x1="56" y1="67" x2="64" y2="67" stroke="#000000" strokeWidth="4" />
        {/* Sides */}
        <path d="M36 67 L26 64" stroke="#000000" strokeWidth="3" />
        <path d="M84 67 L94 64" stroke="#000000" strokeWidth="3" />

        {/* Happy smile */}
        <path d="M56 81 Q60 86, 64 81" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Neck */}
        <rect x="54" y="90" width="12" height="12" fill="#FDBA74" />
        {/* Neck shadow */}
        <rect x="54" y="90" width="12" height="4" fill="#EA580C" opacity="0.25" />

        {/* Black Polo Shirt Body */}
        <path d="M38 100 
                 C30 102, 28 120, 28 135 
                 L92 135 
                 C92 120, 90 102, 82 100 
                 Z" fill="#18181B" />
                 
        {/* Sleeves */}
        <path d="M38 100 L24 114 L30 122 L40 108 Z" fill="#27272A" />
        <path d="M82 100 L96 114 L90 122 L80 108 Z" fill="#27272A" />

        {/* Polo Collar */}
        <path d="M46 100 L60 114 L50 100 Z" fill="#3F3F46" stroke="#000000" strokeWidth="1" />
        <path d="M74 100 L60 114 L70 100 Z" fill="#3F3F46" stroke="#000000" strokeWidth="1" />
        <line x1="60" y1="114" x2="60" y2="126" stroke="#000000" strokeWidth="2" />
        
        {/* Watch on Left hand (Visible near bottom) */}
        <rect x="25" y="128" width="6" height="4" fill="#22D3EE" rx="1" />
        
        {/* Detail stitches / Highlights on polo shirt */}
        <rect x="59" y="118" width="2" height="2" fill="#A1A1AA" />
        <rect x="59" y="123" width="2" height="2" fill="#A1A1AA" />
      </svg>
    </div>
  );
};
