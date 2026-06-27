'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Monitor, 
  Server, 
  Database, 
  Settings, 
  Beaker, 
  Star, 
  Heart,
  Code2,
  Cpu,
  Rocket
} from 'lucide-react';
import { TECH_STACK } from '@/data/portfolioData';
import { PixelCard } from '../ui/PixelCard';
import { PixelSlime, PixelRock, GrassBorder } from '../ui/PixelAssets';

// Vector logos for tech stack items
const TECH_LOGOS: Record<string, React.ReactNode> = {
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 rounded fill-[#007acc] shrink-0">
      <rect width="24" height="24" />
      <text x="12" y="17.5" fill="#ffffff" fontFamily="monospace" fontWeight="bold" fontSize="13px" textAnchor="middle">TS</text>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 rounded fill-[#f7df1e] shrink-0">
      <rect width="24" height="24" />
      <text x="12" y="17.5" fill="#000000" fontFamily="monospace" fontWeight="bold" fontSize="13px" textAnchor="middle">JS</text>
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#e34f26] shrink-0">
      <path d="M1.5 2h21l-1.9 21.2L12 24l-8.6-2.8L1.5 2z" />
      <path d="M12 4.1v17.2l6.2-2 1.4-15.2H12z" fill="#f06529" />
      <path d="M12 9.5H8.3l.3 2.8H12v2.8H8.8l.2 2.6L12 18.5V15h3.2v-2.8H12V9.5z" fill="#ffffff" />
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#1572b6] shrink-0">
      <path d="M1.5 2h21l-1.9 21.2L12 24l-8.6-2.8L1.5 2z" />
      <path d="M12 4.1v17.2l6.2-2 1.4-15.2H12z" fill="#33a9dc" />
      <path d="M12 9.5H8.3l.3 2.8H12v2.8H8.8l.2 2.6L12 18.5V15h3.2v-2.8H12V9.5z" fill="#ffffff" />
    </svg>
  ),
  React: (
    <svg viewBox="-11.5 -10.23 23 20.47" className="w-8 h-8 stroke-[#61dafb] stroke-[1.2px] fill-none shrink-0">
      <circle r="2.05" fill="#61dafb" stroke="none"/>
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 180 180" className="w-8 h-8 bg-black rounded-full border border-slate-755 p-0.5 fill-white shrink-0">
      <path d="M90 0C40.3 0 0 40.3 0 90s40.3 90 90 90 90-40.3 90-90S139.7 0 90 0zM151.7 141.7L97 73.9V144H80V54h17l53.9 67.8V54h17v87.7h-16.2z"/>
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#38bdf8] shrink-0">
      <path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.1 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 6.2 15 4.8 12 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.1 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 13.4 9 12 6 12z"/>
    </svg>
  ),
  'Framer Motion': (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#a855f7] shrink-0">
      <path d="M12 0L24 12H12L0 24V12H12L24 0z"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#539e43] shrink-0">
      <path d="M12 0L2.7 5.4v10.8L12 21.6l9.3-5.4V5.4L12 0zm0 3.6l6.2 3.6v7.2L12 18l-6.2-3.6V7.2L12 3.6z"/>
    </svg>
  ),
  'Express.js': (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white shrink-0">
      <text x="0" y="16" fontFamily="sans-serif" fontSize="13px" fontWeight="bold">ex</text>
    </svg>
  ),
  'Strapi CMS': (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#4945ff] shrink-0">
      <rect width="24" height="24" rx="4" />
      <path d="M6 14l6-8 6 8-6 3-6-3z" fill="#fff" />
    </svg>
  ),
  WordPress: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#21759b] shrink-0">
      <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 01-5-8.6l3 8.3 2-5.7 2 5.7 3-8.3A10 10 0 0112 22z" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#336791] shrink-0">
      <path d="M12 2a10 10 0 100 24 10 10 0 000-24zm5.5 12c-.5.8-1.5 1.5-2.5 1.7v1.8h-2v-1.8H11v1.8H9v-1.8c-1-.2-2-.9-2.5-1.7-.6-.8-.8-1.8-.5-2.8l1 1c.2.2.5.3.8.3h4.4c.3 0 .6-.1.8-.3l1-1c.3 1 .1 2-.5 2.8z"/>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#00758f] shrink-0">
      <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm3.8 11.2c-.3 1.3-1.6 2.1-2.8 1.8-1.3-.3-2.1-1.6-1.8-2.8.3-1.3 1.6-2.1 2.8-1.8 1.2.3 2 1.6 1.8 2.8z" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#13aa52] shrink-0">
      <path d="M12 2c-4 6-4 14 0 20 4-6 4-14 0-20z" />
    </svg>
  ),
  Redis: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#d82c20] shrink-0">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10-5 10 5zm0 0l10-5-10 5zm0 5l-10-5 10 5zm0 0l10-5-10 5z" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#0db7ed] shrink-0">
      <path d="M2 10h3v3H2zm4 0h3v3H6zm4 0h3v3h-3zm4 0h3v3h-3zm-8-4h3v3H6zm4 0h3v3h-3zm4 0h3v3h-3zm-4-4h3v3h-3zM2 15c2 4 8 5 12 5s8-2 8-5H2z" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#f05032] shrink-0">
      <path d="M22.6 11.3L12.7 1.4c-.5-.5-1.3-.5-1.8 0L9.4 2.9l3.3 3.3c.4-.1.8.1 1.1.4.4.4.4 1.1 0 1.5-.4.4-1.1.4-1.5 0-.3-.3-.4-.7-.4-1.1L8.6 3.7c-.5.5-.5 1.3 0 1.8l9.9 9.9c.5.5 1.3.5 1.8 0l2.3-2.3c.5-.5.5-1.3 0-1.8zm-11 5.4c-.4.4-1.1.4-1.5 0-.4-.4-.4-1.1 0-1.5.4-.4 1.1-.4 1.5 0 .4.4.4 1.1 0 1.5z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white shrink-0">
      <path d="M12 2A10 10 0 002 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1 .6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0022 12 10 10 0 0012 2z"/>
    </svg>
  ),
  Jest: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#db2777] shrink-0">
      <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z"/>
    </svg>
  ),
  'React Testing Library': (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#fc455c] shrink-0">
      <path d="M12 2A10 10 0 1022 12c0-1.2-.2-2.4-.6-3.5L18 12.5v-3l-2.5 2.5L12 8.5v3l-2.5-2.5-3.5 3.5c1.1 3.5 4.4 6 8.5 6 4.4 0 8-3.6 8-8s-3.6-8-8-8z"/>
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#ff6c37] shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6l3 6h-6z" fill="#fff" />
    </svg>
  ),
  'VS Code': (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#007acc] shrink-0">
      <path d="M23.9 6.5l-3.3-3.3c-.2-.2-.5-.2-.7 0L12 11.1 4.1 3.2c-.2-.2-.5-.2-.7 0L.1 6.5c-.2.2-.2.5 0 .7L8 15.1l-7.9 7.9c-.2.2-.2.5 0 .7l3.3 3.3c.2.2.5.2.7 0l7.9-7.9 7.9 7.9c.2.2.5.2.7 0l3.3-3.3c.2-.2.2-.5 0-.7L16 15.1l-7.9-7.9c.2-.2.2-.5 0-.7z"/>
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 12 18" className="w-6 h-8 shrink-0">
      <path d="M0 3v3h3a3 3 0 000-6H3a3 3 0 00-3 3z" fill="#F24E1E"/>
      <path d="M0 9v3h3a3 3 0 000-6H3a3 3 0 00-3 3z" fill="#A259FF"/>
      <path d="M0 15a3 3 0 003 3h3v-3a3 3 0 00-6 0z" fill="#1ABC9C"/>
      <path d="M12 3a3 3 0 00-3-3 3 3 0 000 6V3z" fill="#FF7262"/>
      <path d="M12 9a3 3 0 00-3-3 3 3 0 000 6V9z" fill="#5551FF"/>
    </svg>
  ),
  ESLint: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#4b32c3] shrink-0">
      <path d="M12 2L2 7.8v11.4L12 22l10-5.8V7.8L12 2zm0 3.6l6.2 3.6v7.2L12 18l-6.2-3.6V7.2L12 5.6z" />
    </svg>
  ),
  Prettier: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#ea580c] shrink-0">
      <path d="M12 2a10 10 0 100 24 10 10 0 000-24zm0 18H8v-2h4v2zm0-4H8v-2h4v2zm0-4H8V8h4v4zm4-2h-2V8h2v2zm0 4h-2v-2h2v2z"/>
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white shrink-0">
      <path d="M24 22.5L12 1.5 0 22.5z" />
    </svg>
  ),
};

// Styling details for Category headers (icons, text color, and border shadows)
const CATEGORY_THEMES: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string; fill: string }> = {
  LANGUAGES: { icon: Terminal, color: 'text-green-500', fill: '#22c55e' },
  FRONTEND: { icon: Monitor, color: 'text-cyan-500', fill: '#06b6d4' },
  BACKEND: { icon: Server, color: 'text-orange-500', fill: '#f97316' },
  DATABASE: { icon: Database, color: 'text-yellow-500', fill: '#eab308' },
  'TOOLS & DEVOPS': { icon: Settings, color: 'text-blue-500', fill: '#3b82f6' },
  TESTING: { icon: Beaker, color: 'text-purple-500', fill: '#a855f7' },
  OTHERS: { icon: Star, color: 'text-pink-500', fill: '#ec4899' },
};

export const TechStack: React.FC = () => {
  return (
    <section id="tech-stack-section" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#050510] relative overflow-hidden">
      <div className="w-full">
        
        {/* Upper Header Row: Title on Left, Quote Box on Right */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16 pb-6 border-b border-slate-800/80">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-press-start text-lg sm:text-xl text-white tracking-wider flex items-center gap-2"
            >
              <span className="text-[#8B5CF6]">✦</span> TECH STACK <span className="text-[#8B5CF6]">✦</span>
            </motion.h2>
            <p className="font-share-tech text-sm sm:text-base text-slate-500 uppercase tracking-widest mt-2">
              The technologies, tools and platforms I use to build products.
            </p>
          </div>

          {/* Quote Box Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-96 bg-[#0c0c20]/90 border border-[#8B5CF6]/30 p-5 rounded-xl relative shadow-[0_0_15px_rgba(139,92,246,0.15)] shrink-0 flex items-start gap-3.5"
          >
            <div className="p-1 bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded mt-0.5 shrink-0">
              <Heart className="w-3.5 h-3.5 fill-purple-400" />
            </div>
            <div>
              <p className="font-share-tech text-slate-300 text-sm sm:text-base leading-relaxed italic">
                {"\"Code is like humor. When you have to explain it, it's bad.\""}
              </p>
              <p className="font-press-start text-[9px] text-[#A855F7] tracking-wider text-right mt-2 uppercase">
                — Cory House
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main Grid: 3-column layouts */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {TECH_STACK.map((category, idx) => {
            const theme = CATEGORY_THEMES[category.title] || { icon: Code2, color: 'text-slate-400', fill: '#64748b' };
            const IconComponent = theme.icon;
            const isOthers = category.title === 'OTHERS';

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={isOthers ? 'col-span-2' : 'col-span-1'}
              >
                <PixelCard 
                  glowColor="dark" 
                  className="p-6 h-full flex flex-col justify-between hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:border-[#8B5CF6]/50 transition-all duration-300"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-2 pb-2.5 border-b border-slate-800/80 mb-5">
                      <IconComponent className={`w-5 h-5 ${theme.color}`} />
                      <h3 className={`font-press-start text-[11px] tracking-wider uppercase ${theme.color}`}>
                        {category.title}
                      </h3>
                    </div>

                    {/* Inner items grid */}
                    <div className={`grid gap-4 ${
                      isOthers 
                        ? 'grid-cols-2 sm:grid-cols-5' 
                        : category.items.length <= 3 
                          ? 'grid-cols-3' 
                          : 'grid-cols-2 sm:grid-cols-4'
                    }`}>
                      {category.items.map((item) => {
                        const logo = TECH_LOGOS[item.name] || (
                          <div className="w-9 h-9 bg-slate-900 border border-slate-800 rounded flex items-center justify-center text-[11px] font-bold text-slate-500">
                            {item.name.substring(0, 2).toUpperCase()}
                          </div>
                        );

                        return (
                          <motion.div
                            key={item.name}
                            whileHover={{ y: -3, borderColor: '#8B5CF6' }}
                            className="bg-[#070718]/85 border border-slate-800 rounded-lg p-3 flex flex-col items-center justify-center min-h-[105px] w-full text-center transition-all cursor-default select-none group"
                          >
                            <div className="mb-2.5 flex items-center justify-center w-10 h-10 transition-transform group-hover:scale-110 duration-200">
                              {logo}
                            </div>
                            <span className="font-share-tech text-xs sm:text-sm leading-tight text-slate-400 font-medium group-hover:text-white transition-colors truncate w-full">
                              {item.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            );
          })}

          {/* Column 3 of Row 3: Stack Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="col-span-2 lg:col-span-1"
          >
            <div className="bg-[#0c0c20]/80 border border-dashed border-[#8B5CF6]/40 p-6 rounded-2xl flex flex-col h-full justify-between shadow-[0_0_15px_rgba(139,92,246,0.08)]">
              <div>
                <h3 className="font-press-start text-[11px] text-[#A855F7] tracking-wider uppercase mb-5 pb-2.5 border-b border-slate-800/80 text-center">
                  STACK OVERVIEW
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* Metric 1 */}
                  <div className="bg-[#050510] border border-slate-800/80 p-3 rounded-xl flex flex-col items-center justify-center text-center select-none min-h-[105px]">
                    <Code2 className="w-5.5 h-5.5 text-cyan-400 mb-1" />
                    <span className="font-press-start text-sm sm:text-base text-white font-bold leading-none">20+</span>
                    <span className="font-share-tech text-xs text-slate-500 uppercase tracking-widest mt-1">Technologies</span>
                  </div>

                  {/* Metric 2 */}
                  <div className="bg-[#050510] border border-slate-800/80 p-3 rounded-xl flex flex-col items-center justify-center text-center select-none min-h-[105px]">
                    <Cpu className="w-5.5 h-5.5 text-green-400 mb-1" />
                    <span className="font-press-start text-sm sm:text-base text-white font-bold leading-none">5+</span>
                    <span className="font-share-tech text-xs text-slate-500 uppercase tracking-widest mt-1">Categories</span>
                  </div>

                  {/* Metric 3 */}
                  <div className="bg-[#050510] border border-slate-800/80 p-3 rounded-xl flex flex-col items-center justify-center text-center select-none min-h-[105px]">
                    <Star className="w-5.5 h-5.5 text-yellow-400 fill-yellow-400/20 mb-1" />
                    <span className="font-press-start text-sm sm:text-base text-white font-bold leading-none">1+</span>
                    <span className="font-share-tech text-xs text-slate-500 uppercase tracking-widest mt-1">Years Learning</span>
                  </div>

                  {/* Metric 4 */}
                  <div className="bg-[#050510] border border-slate-800/80 p-3 rounded-xl flex flex-col items-center justify-center text-center select-none min-h-[105px]">
                    <Rocket className="w-5.5 h-5.5 text-purple-400 mb-1" />
                    <span className="font-press-start text-sm sm:text-base text-white font-bold leading-none">∞</span>
                    <span className="font-share-tech text-xs text-slate-500 uppercase tracking-widest mt-1">Possibilities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Ground Platform Divider / Footer at the bottom of the section */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-12 border-t-2 border-slate-900 pt-8 relative">
        <div className="max-w-4xl mx-auto flex justify-between items-end relative h-14 px-4 sm:px-6">
          
          {/* Wooden Signpost (KEEP CODING) */}
          <div className="flex flex-col items-center z-20">
            <div className="bg-[#78350f] border-2 border-black rounded px-2.5 py-1 text-[8px] font-press-start text-[#fef08a] shadow-md select-none text-center leading-none">
              KEEP CODING
            </div>
            <div className="w-2.5 h-3.5 bg-[#78350f] border-x-2 border-black" />
          </div>

          {/* Environmental slimes/rocks decoration */}
          <div className="flex gap-4 items-end mb-2 z-20">
            <PixelSlime size={28} className="translate-y-2" />
            <PixelRock size={16} />
          </div>

          {/* Wooden Signpost (LEVEL UP) */}
          <div className="flex flex-col items-center z-20">
            <div className="bg-[#78350f] border-2 border-black rounded px-2.5 py-1 text-[8px] font-press-start text-[#fef08a] shadow-md select-none text-center leading-none">
              LEVEL UP
            </div>
            <div className="w-2.5 h-3.5 bg-[#78350f] border-x-2 border-black" />
          </div>

        </div>
        <GrassBorder className="relative z-10" />
      </div>
    </section>
  );
};

export default TechStack;
