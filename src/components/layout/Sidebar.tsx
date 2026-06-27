'use client';

import React from 'react';
import { User, Briefcase, Code2, FolderGit2, Layers, Mail } from 'lucide-react';
import { Github, Linkedin, Facebook } from '../ui/BrandIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { PixelProgressBar } from '../ui/PixelProgressBar';
import { useActiveSection } from '@/hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'about', label: 'ABOUT', icon: User },
  { id: 'tech-stack', label: 'SKILLS', icon: Code2 },
  { id: 'experience', label: 'EXPERIENCE', icon: Briefcase },
  { id: 'projects', label: 'PROJECTS', icon: FolderGit2 },
  { id: 'tech-stack-section', label: 'TECH STACK', icon: Layers },
  { id: 'contact', label: 'CONTACT', icon: Mail },
];

export const Sidebar: React.FC = () => {
  // Pass list of IDs to track
  const activeSection = useActiveSection(['about', 'experience', 'projects', 'tech-stack-section', 'contact']);

  const handleScroll = (id: string) => {
    // Both 'SKILLS' and 'TECH STACK' point to the tech stack container
    const targetId = id === 'tech-stack' ? 'tech-stack-section' : id;
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 40; // Small offset for border
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Helper to determine if item is active
  const isItemActive = (id: string) => {
    if (id === 'tech-stack' || id === 'tech-stack-section') {
      return activeSection === 'tech-stack-section';
    }
    return activeSection === id;
  };

  return (
    <aside className="hidden lg:flex flex-col w-80 h-[calc(100vh-2rem)] sticky top-4 bg-[#0c0c20]/95 border-4 border-slate-800 p-5 pixel-corners flex-shrink-0 z-30 select-none shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      {/* RPG Profile Info */}
      <div className="flex flex-col items-center mb-6 pb-5 border-b-2 border-slate-800">
        {/* Avatar Portrait */}
        <div className="relative w-28 h-28 mb-3 flex items-center justify-center">
          <img 
            src="/design/Character.png" 
            alt="Lethien.dev" 
            className="w-24 h-24 object-contain" 
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Character Title */}
        <h2 className="font-press-start text-[13px] text-white tracking-wide text-center truncate w-full">
          {PERSONAL_INFO.name}
        </h2>
        <p className="font-share-tech text-sm text-[#22D3EE] uppercase tracking-wider mt-1">
          LV.{PERSONAL_INFO.level} {PERSONAL_INFO.role}
        </p>
      </div>

      {/* RPG Stats Panel */}
      <div className="flex flex-col gap-3 mb-6 pb-5 border-b-2 border-slate-800">
        <PixelProgressBar label="HP (HEALTH)" value={PERSONAL_INFO.hp} max={PERSONAL_INFO.hp} color="red" />
        <PixelProgressBar label="MP (MANA)" value={PERSONAL_INFO.mp} max={PERSONAL_INFO.mp} color="blue" />
        <PixelProgressBar label="XP (EXP)" value={PERSONAL_INFO.xp} max={PERSONAL_INFO.maxXp} color="purple" />
      </div>

      {/* RPG Quest Log Navigation Menu */}
      <nav className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isItemActive(item.id);
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`flex items-center w-full px-4 py-3 text-left font-press-start text-[11px] tracking-wider transition-all duration-150 border-2 rounded-md ${
                active
                  ? 'bg-[#8B5CF6]/15 border-[#8B5CF6] text-white shadow-[0_0_8px_rgba(139,92,246,0.3)]'
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              {/* Cursor indicator */}
              <span className={`w-3.5 mr-1.5 font-bold text-[#22D3EE] ${active ? 'opacity-100 animate-pulse' : 'opacity-0'}`}>
                ▶
              </span>
              <Icon className={`w-5 h-5 mr-3 ${active ? 'text-[#22D3EE]' : 'text-slate-500'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Social Buttons */}
      <div className="flex justify-between items-center pt-5 border-t-2 border-slate-800">
        <a
          href={PERSONAL_INFO.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-slate-900 border-2 border-slate-700 hover:border-[#8B5CF6] hover:text-[#8B5CF6] text-slate-400 pixel-corners-sm transition-all"
          title="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={PERSONAL_INFO.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-slate-900 border-2 border-slate-700 hover:border-[#8B5CF6] hover:text-[#8B5CF6] text-slate-400 pixel-corners-sm transition-all"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={PERSONAL_INFO.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-slate-900 border-2 border-slate-700 hover:border-[#8B5CF6] hover:text-[#8B5CF6] text-slate-400 pixel-corners-sm transition-all"
          title="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href={PERSONAL_INFO.socials.email}
          className="p-2 bg-slate-900 border-2 border-slate-700 hover:border-[#8B5CF6] hover:text-[#8B5CF6] text-slate-400 pixel-corners-sm transition-all"
          title="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
