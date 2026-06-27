'use client';

import React from 'react';
import { User, Award, History, Briefcase, Mail } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'about', label: 'ABOUT', icon: User },
  { id: 'tech-stack-section', label: 'SKILLS', icon: Award },
  { id: 'experience', label: 'EXP', icon: History },
  { id: 'projects', label: 'WORK', icon: Briefcase },
  { id: 'contact', label: 'TALK', icon: Mail },
];

export const MobileNav: React.FC = () => {
  const activeSection = useActiveSection(['about', 'experience', 'projects', 'tech-stack-section', 'contact']);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // Offset for floating mobile nav
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

  const isItemActive = (id: string) => {
    return activeSection === id;
  };

  return (
    <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-40 select-none">
      {/* RPG Item Hotbar Menu */}
      <div className="bg-[#0c0c20]/95 border-4 border-slate-800 p-2 pixel-corners flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.6)]">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isItemActive(item.id);
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="flex flex-col items-center justify-center relative focus:outline-none group"
            >
              {/* Hotbar Slot Container */}
              <div 
                className={`w-11 h-11 flex items-center justify-center border-2 pixel-corners-sm transition-all duration-150 ${
                  active 
                    ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] text-white shadow-[0_0_10px_rgba(139,92,246,0.4)] translate-y-[-2px]' 
                    : 'bg-slate-950 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              
              {/* Mini Label */}
              <span className={`text-[8px] font-press-start mt-1 tracking-tighter ${
                active ? 'text-[#22D3EE]' : 'text-slate-500'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
