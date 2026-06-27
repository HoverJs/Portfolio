'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Heart, Award } from 'lucide-react';
import { Github } from '../ui/BrandIcons';
import { PROJECTS } from '@/data/portfolioData';
import { PixelCard } from '../ui/PixelCard';
import { PixelSlime, PixelRock, GrassBorder } from '../ui/PixelAssets';

const CATEGORIES = ['All', 'Web App', 'Ecommerce', 'CMS', 'Tools'] as const;
type CategoryType = typeof CATEGORIES[number];

// Tag mapping for each project, matching the screenshot
const PROJECT_TAGS: Record<string, { label: string; style: string; titleColor: string }> = {
  freshfood: { 
    label: '★ FEATURED', 
    style: 'text-amber-400 border-amber-500/40 bg-amber-950/20', 
    titleColor: 'text-[#22c55e]' 
  },
  garage: { 
    label: 'WEB APP', 
    style: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/20', 
    titleColor: 'text-[#22d3ee]' 
  },
  mediclinic: { 
    label: 'WEB APP', 
    style: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/20', 
    titleColor: 'text-[#22d3ee]' 
  },
  'portfolio-v2': { 
    label: '✦ PERSONAL', 
    style: 'text-purple-400 border-purple-500/40 bg-purple-950/20', 
    titleColor: 'text-[#a855f7]' 
  },
  'blog-cms': { 
    label: 'CMS', 
    style: 'text-fuchsia-400 border-fuchsia-500/40 bg-fuchsia-950/20', 
    titleColor: 'text-[#a855f7]' 
  },
  'json-formatter': { 
    label: 'TOOLS', 
    style: 'text-yellow-400 border-yellow-500/40 bg-yellow-950/20', 
    titleColor: 'text-[#eab308]' 
  },
};

// Color mapping for technology tags on the project cards
const TECH_TAG_STYLES: Record<string, string> = {
  React: 'border-[#22D3EE]/30 text-[#22D3EE] bg-[#22D3EE]/5',
  'Next.js': 'border-slate-800 text-slate-400 bg-slate-950',
  TypeScript: 'border-[#60a5fa]/30 text-[#60a5fa] bg-[#60a5fa]/5',
  Tailwind: 'border-[#38bdf8]/30 text-[#38bdf8] bg-[#38bdf8]/5',
  Prisma: 'border-[#8b5cf6]/30 text-[#8b5cf6] bg-[#8b5cf6]/5',
  PostgreSQL: 'border-[#336791]/30 text-[#336791] bg-[#336791]/5',
  'Node.js': 'border-[#215732]/30 text-[#539e43] bg-[#215732]/5',
  MongoDB: 'border-[#13aa52]/30 text-[#13aa52] bg-[#13aa52]/5',
  'Framer Motion': 'border-[#a855f7]/30 text-[#a855f7] bg-[#a855f7]/5',
  Strapi: 'border-[#4945ff]/30 text-[#4945ff] bg-[#4945ff]/5',
  MySQL: 'border-[#00758f]/30 text-[#00758f] bg-[#00758f]/5',
  Docker: 'border-[#0db7ed]/30 text-[#0db7ed] bg-[#0db7ed]/5',
  CodeMirror: 'border-[#8b5cf6]/30 text-[#8b5cf6] bg-[#8b5cf6]/5',
};

// Renders the HTML/CSS mini site mockups inside the card (scaled up h-full)
const RenderProjectMockup: React.FC<{ id: string }> = ({ id }) => {
  if (id === 'freshfood') {
    return (
      <div className="w-full h-full bg-[#f1fcf4] rounded border border-slate-200 p-1 flex flex-col justify-between text-left select-none overflow-hidden scale-[0.98] origin-center">
        <div className="h-2 bg-[#22c55e] rounded-sm w-full flex items-center justify-between px-1.5 shrink-0">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <div className="w-10 h-0.5 bg-white/50 rounded-sm" />
          </div>
          <div className="flex gap-1">
            <div className="w-6 h-0.5 bg-white/40 rounded-sm" />
            <div className="w-3 h-0.5 bg-white/40 rounded-sm" />
          </div>
        </div>
        <div className="flex-1 flex gap-2 items-center px-1.5 mt-1.5">
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="h-2.5 bg-slate-800 rounded w-20" />
            <div className="space-y-0.5">
              <div className="h-0.5 bg-slate-400 rounded w-24" />
              <div className="h-0.5 bg-slate-400 rounded w-28" />
              <div className="h-0.5 bg-slate-400 rounded w-16" />
            </div>
            <div className="flex gap-1 mt-1">
              <div className="w-10 h-2.5 bg-[#22c55e] rounded-sm" />
              <div className="w-10 h-2.5 bg-slate-200 rounded-sm" />
            </div>
          </div>
          <div className="w-16 h-16 rounded-full bg-[#dcfce7] border border-[#bbf7d0] flex items-center justify-center relative shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#22c55e]/40" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'garage') {
    return (
      <div className="w-full h-full bg-[#0b0f19] rounded border border-slate-800 p-1 flex gap-1.5 text-left select-none overflow-hidden scale-[0.98] origin-center">
        <div className="w-7 bg-[#16222f] rounded p-0.5 flex flex-col gap-1 shrink-0">
          <div className="w-5 h-2 bg-[#8B5CF6] rounded-sm" />
          <div className="space-y-0.5">
            <div className="w-4 h-0.5 bg-slate-500 rounded" />
            <div className="w-5 h-0.5 bg-slate-500 rounded" />
            <div className="w-3.5 h-0.5 bg-slate-500 rounded" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1.5 p-0.5">
          <div className="h-1.5 bg-slate-700 rounded w-12" />
          <div className="grid grid-cols-3 gap-1">
            <div className="bg-[#16222f] rounded p-1 flex flex-col justify-between h-8">
              <span className="text-[3px] text-slate-500 leading-none">Services</span>
              <span className="text-[6.5px] text-white font-bold leading-none">32</span>
            </div>
            <div className="bg-[#16222f] rounded p-1 flex flex-col justify-between h-8">
              <span className="text-[3px] text-slate-500 leading-none">Appts</span>
              <span className="text-[6.5px] text-white font-bold leading-none">12</span>
            </div>
            <div className="bg-[#16222f] rounded p-1 flex flex-col justify-between h-8">
              <span className="text-[3px] text-slate-500 leading-none">Revenue</span>
              <span className="text-[6.5px] text-white font-bold leading-none">$2.4k</span>
            </div>
          </div>
          <div className="bg-[#16222f] rounded h-9 p-1 flex flex-col justify-between">
            <div className="flex gap-0.5 items-end h-6 mt-1">
              <div className="w-1.5 h-3 bg-blue-500 rounded-sm" />
              <div className="w-1.5 h-4.5 bg-blue-500 rounded-sm" />
              <div className="w-1.5 h-2 bg-blue-500 rounded-sm" />
              <div className="w-1.5 h-5 bg-blue-500 rounded-sm" />
              <div className="w-1.5 h-6 bg-[#22D3EE] rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'mediclinic') {
    return (
      <div className="w-full h-full bg-[#f8fafc] rounded border border-slate-200 p-1.5 flex flex-col justify-between text-left select-none overflow-hidden scale-[0.98] origin-center">
        <div className="flex justify-between items-center pb-0.5 border-b border-slate-200 shrink-0">
          <span className="text-[6.5px] font-bold text-[#0284c7]">MediClinic</span>
          <div className="flex gap-1.5 text-[4.5px] text-slate-500 font-bold">
            <span>Home</span>
            <span>Doctors</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="flex-1 flex gap-2 items-center mt-1.5">
          <div className="flex-1 flex flex-col gap-1.5">
            <h5 className="text-[7.5px] font-bold text-slate-800 leading-tight">Your Health, Our Priority</h5>
            <div className="w-16 h-2.5 bg-[#0284c7] rounded-sm flex items-center justify-center text-[4px] text-white">Book Appointment</div>
          </div>
          <div className="flex gap-1 shrink-0">
            <div className="w-8 h-10 border border-slate-200 rounded bg-slate-100 flex flex-col justify-end p-0.5 overflow-hidden">
              <div className="w-5 h-5 rounded-full bg-slate-300 mx-auto" />
              <div className="w-full h-2 bg-[#0284c7]/20 mt-1" />
            </div>
            <div className="w-8 h-10 border border-slate-200 rounded bg-slate-100 flex flex-col justify-end p-0.5 overflow-hidden">
              <div className="w-5 h-5 rounded-full bg-slate-300 mx-auto" />
              <div className="w-full h-2 bg-[#0284c7]/20 mt-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'portfolio-v2') {
    return (
      <div className="w-full h-full bg-[#050515] rounded border border-[#8B5CF6]/30 p-1.5 flex flex-col justify-between text-left select-none overflow-hidden scale-[0.98] origin-center relative">
        <div className="absolute top-2 right-2 text-[5px] text-slate-600 font-press-start">LETHIEN.DEV</div>
        <div className="text-[7.5px] font-bold text-white mt-1">{"Hi, I'm Lethien"}</div>
        <div className="text-[4.5px] text-slate-400">Fullstack Developer who loves building beautiful experiences.</div>
        <div className="flex-1 flex items-center justify-center relative my-0.5">
          <img 
            src="/design/Character.png" 
            alt="Chibi" 
            className="w-12 h-12 object-contain translate-y-0.5" 
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        <div className="flex gap-1.5 justify-center pb-0.5 shrink-0">
          <div className="w-12 h-2.5 bg-[#8B5CF6] rounded-sm flex items-center justify-center text-[4px] text-white">View Projects</div>
          <div className="w-12 h-2.5 border border-[#8B5CF6] rounded-sm flex items-center justify-center text-[4px] text-[#8B5CF6]">Contact Me</div>
        </div>
      </div>
    );
  }

  if (id === 'blog-cms') {
    return (
      <div className="w-full h-full bg-[#0f172a] rounded border border-slate-800 p-1.5 flex flex-col justify-between text-left select-none overflow-hidden scale-[0.98] origin-center">
        <div className="flex justify-between items-center pb-0.5 border-b border-slate-800 mb-1.5 shrink-0">
          <span className="text-[6.5px] font-bold text-white font-press-start">Blog CMS</span>
          <span className="text-[4px] text-[#a855f7] bg-[#a855f7]/10 border border-[#a855f7]/30 px-1 rounded-sm">+ New Post</span>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex justify-between items-center bg-[#1e293b] p-0.5 rounded-sm">
            <span className="text-[5.5px] text-slate-300 truncate w-28">Getting started with Strapi</span>
            <span className="text-[3.5px] text-green-400 bg-green-950/40 px-1 border border-green-500/20 rounded-sm">Published</span>
          </div>
          <div className="flex justify-between items-center bg-[#1e293b] p-0.5 rounded-sm">
            <span className="text-[5.5px] text-slate-300 truncate w-28">Building modern websites</span>
            <span className="text-[3.5px] text-green-400 bg-green-950/40 px-1 border border-green-500/20 rounded-sm">Published</span>
          </div>
          <div className="flex justify-between items-center bg-[#1e293b] p-0.5 rounded-sm">
            <span className="text-[5.5px] text-slate-300 truncate w-28">Understanding REST APIs</span>
            <span className="text-[3.5px] text-green-400 bg-green-950/40 px-1 border border-green-500/20 rounded-sm">Published</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'json-formatter') {
    return (
      <div className="w-full h-full bg-[#0a0f1d] rounded border border-slate-800 p-1.5 flex gap-1.5 text-left select-none overflow-hidden scale-[0.98] origin-center">
        <div className="flex-1 bg-[#030712] border border-slate-850 rounded p-1 flex flex-col justify-between font-mono text-[4.5px] leading-tight overflow-hidden">
          <div className="text-yellow-500">{"{"}</div>
          <div className="pl-2 text-slate-300">
            <div><span className="text-sky-400">&quot;name&quot;</span>: <span className="text-green-400">&quot;Lethien&quot;</span>,</div>
            <div><span className="text-sky-400">&quot;role&quot;</span>: <span className="text-green-400">&quot;Developer&quot;</span>,</div>
            <div><span className="text-sky-400">&quot;skills&quot;</span>: [</div>
            <div className="pl-1.5 text-orange-400">&quot;TypeScript&quot;</div>
            <div>]</div>
          </div>
          <div className="text-yellow-500">{"}"}</div>
        </div>
        <div className="w-18 bg-[#111827] border border-slate-850 rounded p-1 flex flex-col justify-between shrink-0">
          <div className="space-y-0.5">
            <div className="text-[4.5px] text-slate-400 font-bold uppercase">Options</div>
            <div className="flex items-center gap-0.5 text-[4px] text-slate-300">
              <span className="text-green-500">✔</span> Validate
            </div>
            <div className="flex items-center gap-0.5 text-[4px] text-slate-300">
              <span className="text-green-500">✔</span> Format
            </div>
          </div>
          <div className="w-full h-2.5 bg-[#8B5CF6] rounded-sm flex items-center justify-center text-[3.5px] text-white">Format</div>
        </div>
      </div>
    );
  }

  return null;
};

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#050510] relative overflow-hidden">
      <div className="w-full">
        
        {/* Upper Header Row: Title on Left, Leveling Box on Right */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 pb-6 border-b border-slate-800/80">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-press-start text-lg sm:text-xl text-white tracking-wider flex items-center gap-2"
            >
              <span className="text-[#8B5CF6]">✦</span> MY PROJECTS <span className="text-[#8B5CF6]">✦</span>
            </motion.h2>
            <p className="font-share-tech text-sm sm:text-base text-slate-500 uppercase tracking-widest mt-2 flex items-center gap-1">
              Things I{"'"}ve built with passion and code <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />
            </p>
          </div>

          {/* Leveling Box Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-96 bg-[#0c0c20]/90 border border-[#8B5CF6]/30 p-5 rounded-xl relative shadow-[0_0_15px_rgba(139,92,246,0.15)] shrink-0 flex gap-3.5"
          >
            <div className="p-2.5 bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#8B5CF6] rounded-xl flex items-center justify-center shrink-0">
              <Award className="w-6.5 h-6.5" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="font-press-start text-[10px] text-white">
                Level 8 Fullstack Developer
              </h4>
              <span className="font-share-tech text-xs text-slate-400 uppercase tracking-wider block mt-0.5">
                15+ Projects Completed
              </span>
              
              {/* XP Progress Bar */}
              <div className="flex items-center gap-1.5 mt-2">
                <span className="font-press-start text-[9px] text-[#A855F7] tracking-wider">EXP</span>
                <div className="flex-1 h-3.5 bg-slate-950 border border-slate-800 rounded p-0.5 flex gap-0.5">
                  {/* Filled Blocks */}
                  <div className="w-[12%] h-full bg-[#8B5CF6]" />
                  <div className="w-[12%] h-full bg-[#8B5CF6]" />
                  <div className="w-[12%] h-full bg-[#8B5CF6]" />
                  <div className="w-[12%] h-full bg-[#8B5CF6]" />
                  <div className="w-[12%] h-full bg-[#8B5CF6]" />
                  <div className="w-[12%] h-full bg-[#8B5CF6]" />
                  <div className="w-[12%] h-full bg-[#8B5CF6]" />
                  {/* Unfilled Blocks */}
                  <div className="w-[12%] h-full bg-slate-900" />
                </div>
                <span className="font-press-start text-[9px] text-slate-400">88%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12 select-none">
          {CATEGORIES.map((cat) => {
            const active = (cat === 'All' && activeCategory === 'All') || 
                           (cat === 'Web App' && activeCategory === 'Web App') ||
                           (cat === 'Ecommerce' && activeCategory === 'Ecommerce') ||
                           (cat === 'CMS' && activeCategory === 'CMS') ||
                           (cat === 'Tools' && activeCategory === 'Tools');
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-press-start text-[9px] sm:text-[10px] tracking-widest px-5 py-3 border-2 rounded-lg transition-all focus:outline-none ${
                  active 
                    ? 'bg-[#8B5CF6] border-white text-white shadow-[0_0_12px_rgba(139,92,246,0.4)] translate-y-[-1px]' 
                    : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const tagInfo = PROJECT_TAGS[proj.id] || { label: 'COMMON', style: 'text-slate-400 border-slate-800 bg-slate-900', titleColor: 'text-white' };

              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <PixelCard 
                    glowColor="dark"
                    className="flex flex-col justify-between h-full hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 p-6 cursor-pointer"
                    onClick={() => {
                      if (proj.liveUrl) {
                        window.open(proj.liveUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <div>
                      {/* Top Item Badge & Action Icons */}
                      <div className="flex justify-between items-center mb-3">
                        <span className={`font-press-start text-[8px] tracking-wider px-2 py-0.5 border rounded ${tagInfo.style}`}>
                          {tagInfo.label}
                        </span>
                        
                        <div className="flex items-center gap-2.5">
                          <a 
                            href={proj.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-500 hover:text-white transition-colors"
                            title="GitHub Repository"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4.5 h-4.5 fill-current" />
                          </a>
                          <a 
                            href={proj.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-500 hover:text-white transition-colors"
                            title="Live Demo"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4.5 h-4.5" />
                          </a>
                        </div>
                      </div>

                      {/* Web View Mockup Illustration (Sized up height h-40) */}
                      <div className="w-full h-40 bg-slate-950/80 border border-slate-850 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden group p-1">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#8B5CF6]/2 to-transparent pointer-events-none" />
                        <RenderProjectMockup id={proj.id} />
                      </div>

                      {/* Project Title */}
                      <h3 className={`font-press-start text-xs sm:text-sm mb-2.5 leading-relaxed ${tagInfo.titleColor}`}>
                        {proj.title}
                      </h3>

                      {/* Project Description */}
                      <p className="font-share-tech text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                        {proj.description}
                      </p>
                    </div>

                    {/* Tech Badges List */}
                    <div className="pt-4 border-t border-slate-850/80">
                      <div className="flex flex-wrap gap-2">
                        {proj.technologies.map((tech) => {
                          const badgeStyle = TECH_TAG_STYLES[tech] || 'border-slate-800 text-slate-500 bg-slate-950';
                          return (
                            <span 
                              key={tech} 
                              className={`px-2.5 py-1 border text-[10px] font-share-tech font-bold uppercase rounded tracking-wider select-none ${badgeStyle}`}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                  </PixelCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Center XP Gained overview */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full bg-[#0c0c20]/80 border border-[#8B5CF6]/30 px-6 py-4.5 rounded-2xl flex items-center justify-center gap-2 max-w-lg mx-auto shadow-md select-none mt-12"
        >
          <Heart className="w-4.5 h-4.5 text-[#A855F7] fill-[#A855F7] animate-pulse shrink-0" />
          <span className="font-press-start text-[9px] sm:text-[10px] text-[#A855F7] tracking-wider uppercase">
            XP GAINED: +999
          </span>
          <span className="font-share-tech text-sm text-slate-400 border-l border-slate-850 pl-2">
            Building • Learning • Improving
          </span>
        </motion.div>

      </div>

      {/* Ground Platform Divider / Footer at the bottom of the section */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-12 border-t-2 border-slate-900 pt-8 relative">
        <div className="max-w-4xl mx-auto flex justify-between items-end relative h-14 px-4 sm:px-6">
          
          {/* Wooden Signpost (KEEP CODING) */}
          <div className="flex flex-col items-center z-20">
            <div className="bg-[#78350f] border-2 border-black rounded px-2.5 py-1 text-[9px] font-press-start text-[#fef08a] shadow-md select-none text-center leading-none">
              KEEP CODING
            </div>
            <div className="w-2.5 h-3.5 bg-[#78350f] border-x-2 border-black" />
          </div>

          {/* Environmental slimes/rocks decoration */}
          <div className="flex gap-4 items-end mb-2 z-20">
            <PixelSlime size={28} className="translate-y-2" />
            <PixelRock size={16} />
          </div>

          {/* Wooden Signpost (NEXT LEVEL ->) */}
          <div className="flex flex-col items-center z-20">
            <div className="bg-[#78350f] border-2 border-black rounded px-2.5 py-1 text-[9px] font-press-start text-[#fef08a] shadow-md select-none text-center leading-none flex items-center gap-1">
              NEXT LEVEL ➔
            </div>
            <div className="w-2.5 h-3.5 bg-[#78350f] border-x-2 border-black" />
          </div>

        </div>
        <GrassBorder className="relative z-10" />
      </div>
    </section>
  );
};

export default Projects;
