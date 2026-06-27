'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, Quote, Trophy } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';
import { PixelSlime, PixelRock, GrassBorder } from '../ui/PixelAssets';

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
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#050510] relative overflow-hidden">
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
              <span className="text-[#8B5CF6]">✦</span> EXPERIENCE <span className="text-[#8B5CF6]">✦</span>
            </motion.h2>
            <p className="font-share-tech text-sm sm:text-base text-slate-500 uppercase tracking-widest mt-2">
              My work experience journey so far.
            </p>
          </div>

          {/* Quote Box Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-96 bg-[#0c0c20]/90 border border-[#8B5CF6]/30 p-5 rounded-xl relative shadow-[0_0_15px_rgba(139,92,246,0.15)] shrink-0"
          >
            <Quote className="absolute top-2 left-2 w-8 h-8 text-[#8B5CF6]/15 rotate-180" />
            <p className="font-share-tech text-slate-300 text-sm sm:text-base leading-relaxed pl-6 italic">
              {"\"The best way to predict the future is to create it.\""}
            </p>
            <p className="font-press-start text-[9px] text-[#A855F7] tracking-wider text-right mt-2.5 uppercase">
              — Peter Drucker
            </p>
          </motion.div>
        </div>

        {/* Quest Logs Timeline Layout */}
        <div className="relative border-l-2 border-dashed border-[#8B5CF6]/30 ml-24 sm:ml-36 pl-8 sm:pl-12 space-y-16 pb-12">
          
          {EXPERIENCES.map((exp, index) => {
            const isCurrent = exp.year.includes('Present');

            return (
              <div key={exp.id} className="relative">
                
                {/* Timeline node + Year capsule on left of the line */}
                <div className="absolute -left-[140px] sm:-left-[190px] top-3.5 flex items-center select-none">
                  {/* Year Capsule */}
                  <div className="bg-[#0c0c20]/95 border border-[#8B5CF6]/40 px-3 py-1 rounded-md text-[9px] font-press-start text-[#A855F7] tracking-tighter mr-3.5 shadow-md">
                    {exp.year}
                  </div>
                  {/* Outer circle */}
                  <div className="w-6 h-6 bg-[#050510] flex items-center justify-center relative">
                    <motion.div
                      animate={isCurrent ? { scale: [1, 1.25, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className={`w-4 h-4 rounded-full border-2 border-white flex items-center justify-center ${
                        isCurrent 
                          ? 'bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]' 
                          : 'bg-[#A855F7] shadow-[0_0_5px_#A855F7]'
                      }`}
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </motion.div>
                  </div>
                </div>

                {/* Main 2-Column Cards Grid for this Experience */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 items-stretch">
                  
                  {/* Card 1: Company Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="col-span-2 sm:col-span-1 bg-[#0c0c20]/80 backdrop-blur-md border border-[#8B5CF6]/30 rounded-xl p-6 flex flex-col justify-between hover:border-[#8B5CF6] hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 relative"
                  >
                    {/* Link Icon */}
                    <a 
                      href={exp.link} 
                      className="absolute top-4 right-4 text-[#8B5CF6] hover:text-white transition-colors"
                      title="Visit Site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>

                    <div>
                      {/* Logo and title */}
                      <div className="flex gap-4 items-center mb-4">
                        {/* Company Logo rendering */}
                        <img 
                          src={exp.id === 'wedo' ? '/design/wedo logo.png' : '/design/fpt logo.png'} 
                          alt={exp.company} 
                          className="w-16 h-16 object-contain bg-white border border-slate-300 rounded p-1 shrink-0 shadow-sm" 
                          style={{ imageRendering: 'pixelated' }}
                        />
                        <div>
                          <h3 className="font-press-start text-[12px] sm:text-xs text-white leading-relaxed pr-8">
                            {exp.company}
                          </h3>
                          <span className="font-share-tech text-sm text-[#22D3EE] font-bold block mt-1 uppercase tracking-wider">
                            {exp.role}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-share-tech text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-light">
                        {exp.description}
                      </p>
                    </div>

                    {/* Tech tag list */}
                    <div className="pt-4 border-t border-slate-800/80">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => {
                          const tagStyle = TECH_TAG_STYLES[tech] || 'border-slate-800 text-slate-400';
                          return (
                            <span 
                              key={tech} 
                              className={`bg-slate-950 px-2.5 py-1 text-[11px] font-share-tech font-bold uppercase border rounded-md tracking-wider transition-all select-none ${tagStyle}`}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 2: Role Details Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                    className="col-span-2 sm:col-span-1 bg-[#0c0c20]/80 backdrop-blur-md border border-[#8B5CF6]/30 rounded-xl p-6 flex flex-col justify-between hover:border-[#8B5CF6] hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300"
                  >
                    <div>
                      {/* Job Role Title header */}
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800/80">
                        <div className="p-2 bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#8B5CF6] rounded-md">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-press-start text-[11px] text-white">
                            {exp.role}
                          </h4>
                          <span className="font-share-tech text-sm text-slate-500 block uppercase mt-0.5 tracking-wider">
                            {exp.year} • {exp.company}
                          </span>
                        </div>
                      </div>

                      {/* Objectives/Responsibilities */}
                      <div className="space-y-2 mb-4">
                        <span className="font-press-start text-[8.5px] text-[#22D3EE] uppercase tracking-wider block">
                          Key Responsibilities:
                        </span>
                        <ul className="space-y-2 font-share-tech text-sm sm:text-base text-slate-300">
                          {exp.responsibilities.map((task, i) => (
                            <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                              <span className="text-[#22D3EE] select-none mt-1.5 text-[8.5px]">■</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="pt-3 border-t border-slate-800/80">
                        <span className="font-press-start text-[8.5px] text-[#A855F7] uppercase tracking-wider block mb-2">
                          Achievements:
                        </span>
                        <div className="space-y-2">
                          {exp.achievements.map((ach, i) => (
                            <div key={i} className="flex items-start gap-2.5 font-share-tech text-sm sm:text-base text-slate-300 leading-relaxed">
                              <Trophy className="w-4.5 h-4.5 text-amber-500 mt-0.5 shrink-0" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Ground Platform Divider / Footer at the bottom of the section */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-8 border-t-2 border-slate-900 pt-8 relative">
        <div className="max-w-4xl mx-auto flex justify-between items-end relative h-14 px-4 sm:px-6">
          
          {/* Wooden Signpost (ONWARD!) */}
          <div className="flex flex-col items-center z-20">
            <div className="bg-[#78350f] border-2 border-black rounded px-2.5 py-1 text-[8px] font-press-start text-[#fef08a] shadow-md select-none text-center leading-none">
              ONWARD!
            </div>
            <div className="w-2.5 h-3.5 bg-[#78350f] border-x-2 border-black" />
          </div>

          {/* Environmental slimes/rocks decoration */}
          <div className="flex gap-4 items-end mb-2 z-20">
            <PixelSlime size={28} className="translate-y-2" />
            <PixelRock size={16} />
          </div>

          {/* Wooden Signpost (KEEP GROWING!) */}
          <div className="flex flex-col items-center z-20">
            <div className="bg-[#78350f] border-2 border-black rounded px-2.5 py-1 text-[8px] font-press-start text-[#fef08a] shadow-md select-none text-center leading-none">
              KEEP GROWING!
            </div>
            <div className="w-2.5 h-3.5 bg-[#78350f] border-x-2 border-black" />
          </div>

        </div>
        <GrassBorder className="relative z-10" />
      </div>
    </section>
  );
};

export default Experience;
