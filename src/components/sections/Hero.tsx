'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { PixelButton } from '../ui/PixelButton';

export const Hero: React.FC = () => {
  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const offset = 40;
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

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-between pt-12 pb-6 px-4 sm:px-6 lg:px-16 overflow-hidden bg-[#050510]"
      style={{ 
        backgroundImage: 'url("/design/background.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      {/* Main Grid Content */}
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 lg:items-start items-center z-10 my-auto">
        
        {/* Left Column: Greeting and Bio */}
        <div className="lg:col-span-4 flex flex-col lg:justify-start justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="font-press-start text-xs sm:text-sm text-slate-400 tracking-widest uppercase text-reflect-sm text-chromatic mb-2">
              {"// HELLO, I'M"}
            </p>
            <h1 className="font-press-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-wide leading-none uppercase text-reflect-lg text-chromatic mb-6">
              {PERSONAL_INFO.fullName}
            </h1>

            {/* Social Banners list (Design Image style) */}
            <div className="pt-6 flex flex-col gap-4 max-w-md mx-auto lg:mx-0 font-share-tech text-sm sm:text-base select-none">
              
              {/* GitHub */}
              <a 
                href={PERSONAL_INFO.socials.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-[#8B5CF6] transition-colors"
              >
                <img 
                  src="/design/github logo.png" 
                  alt="GitHub" 
                  className="w-8 h-8 object-contain shrink-0" 
                  style={{ imageRendering: 'pixelated' }}
                />
                <span className="tracking-wider">https://github.com/HoverJs</span>
              </a>

              {/* LinkedIn */}
              <a 
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-[#22D3EE] transition-colors"
              >
                <img 
                  src="/design/linkedin logo.png" 
                  alt="LinkedIn" 
                  className="w-8 h-8 object-contain shrink-0" 
                  style={{ imageRendering: 'pixelated' }}
                />
                <span className="tracking-wider">https://www.linkedin.com/in/thienle-dev/</span>
              </a>

              {/* Facebook */}
              <a 
                href={PERSONAL_INFO.socials.facebook}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-[#A855F7] transition-colors"
              >
                <img 
                  src="/design/facebook logo.png" 
                  alt="Facebook" 
                  className="w-8 h-8 object-contain shrink-0" 
                  style={{ imageRendering: 'pixelated' }}
                />
                <span className="tracking-wider">https://www.facebook.com/lethienacqt</span>
              </a>

              {/* Gmail */}
              <a 
                href={PERSONAL_INFO.socials.email}
                className="flex items-center gap-3 text-slate-300 hover:text-red-500 transition-colors"
              >
                <img 
                  src="/design/gmail logo.png" 
                  alt="Gmail" 
                  className="w-8 h-8 object-contain shrink-0" 
                  style={{ imageRendering: 'pixelated' }}
                />
                <span className="tracking-wider">lethienacqt@gmail.com</span>
              </a>

            </div>
          </motion.div>
        </div>

        {/* Center Column: Character Portrait */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-6 lg:my-0 lg:self-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative z-10"
          >
            {/* Character image from assets */}
            <img 
              src="/design/Character.png" 
              alt="Character" 
              className="w-64 sm:w-80 lg:w-[380px] xl:w-[460px] h-auto object-contain animate-idle-bob" 
              style={{ imageRendering: 'pixelated' }}
            />
          </motion.div>
        </div>

        {/* Right Column: Title text & Project Card Stack */}
        <div className="lg:col-span-4 flex flex-col lg:justify-start justify-center space-y-6 w-full text-left lg:pl-4 lg:pt-[24px]">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Title Text stacked vertically */}
            <div className="space-y-4 font-press-start text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white tracking-wider leading-none select-none">
              <h2 className="text-reflect-lg text-chromatic">CREATIVE</h2>
              <h2 className="text-reflect-lg text-chromatic">FULLSTACK</h2>
              <h2 className="text-reflect-lg text-chromatic">WEB DEVELOPER</h2>
            </div>

            {/* Overlapping Project Deck Mockup */}
            <div className="relative w-full h-[280px] select-none mt-2">
              
              {/* MediClinic (Left behind) */}
              <div 
                className="absolute left-0 top-10 w-[240px] h-[160px] border-2 border-slate-700 bg-slate-900 rounded p-1 shadow-lg -rotate-6 hover:z-30 hover:-translate-y-2 hover:rotate-0 hover:border-[#22D3EE] transition-all duration-300 cursor-pointer"
                onClick={() => window.open('https://wedoskinclinic.com/', '_blank', 'noopener,noreferrer')}
              >
                <div className="flex justify-between items-center bg-[#0c0c20] p-1 border-b border-slate-700 rounded-t text-[8px] font-press-start mb-1 text-slate-400">
                  <span className="truncate">MediClinic</span>
                  <span className="text-[6px] text-slate-500">x</span>
                </div>
                {/* Mini mockup content */}
                <div className="w-full h-[120px] bg-[#f0f9ff] border border-slate-300 rounded p-1 flex flex-col justify-between">
                  <div className="h-1.5 bg-[#0284c7] rounded-sm w-full" />
                  <div className="flex-1 flex flex-col mt-1 gap-1">
                    <div className="h-1 bg-slate-300 rounded w-10 mx-auto" />
                    <div className="grid grid-cols-3 gap-0.5 mt-0.5">
                      <div className="border border-sky-100 bg-white rounded p-0.5 flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-sky-200" />
                        <div className="w-4 h-0.5 bg-slate-200 mt-0.5" />
                      </div>
                      <div className="border border-sky-100 bg-white rounded p-0.5 flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-sky-200" />
                        <div className="w-4 h-0.5 bg-slate-200 mt-0.5" />
                      </div>
                      <div className="border border-sky-100 bg-white rounded p-0.5 flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-sky-200" />
                        <div className="w-4 h-0.5 bg-slate-200 mt-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garage (Right behind) */}
              <div 
                className="absolute right-0 top-10 w-[240px] h-[160px] border-2 border-slate-700 bg-slate-900 rounded p-1 shadow-lg rotate-6 hover:z-30 hover:-translate-y-2 hover:rotate-0 hover:border-[#A855F7] transition-all duration-300 cursor-pointer"
                onClick={() => window.open('https://web-app-erp-garage-auto.vercel.app/', '_blank', 'noopener,noreferrer')}
              >
                <div className="flex justify-between items-center bg-[#0c0c20] p-1 border-b border-slate-700 rounded-t text-[8px] font-press-start mb-1 text-slate-400">
                  <span className="truncate">Garage</span>
                  <span className="text-[6px] text-slate-500">x</span>
                </div>
                {/* Mini mockup content */}
                <div className="w-full h-[120px] bg-[#0f172a] border border-slate-700 rounded p-1 flex gap-1">
                  <div className="w-4 bg-[#1e293b] rounded-sm flex flex-col gap-0.5 p-0.5">
                    <div className="w-2.5 h-0.5 bg-slate-500 rounded" />
                    <div className="w-2.5 h-0.5 bg-slate-500 rounded" />
                    <div className="w-2.5 h-0.5 bg-slate-500 rounded" />
                  </div>
                  <div className="flex-1 flex flex-col gap-0.5">
                    <div className="h-1 bg-slate-700 rounded w-8" />
                    <div className="grid grid-cols-2 gap-0.5 mt-0.5">
                      <div className="bg-[#1e293b] rounded h-5 p-0.5 flex flex-col justify-around">
                        <div className="w-3 h-0.5 bg-amber-500 rounded" />
                        <div className="w-4 h-0.5 bg-slate-500 rounded" />
                      </div>
                      <div className="bg-[#1e293b] rounded h-5 p-0.5 flex flex-col justify-around">
                        <div className="w-3 h-0.5 bg-blue-500 rounded" />
                        <div className="w-4 h-0.5 bg-slate-500 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Freshfoodstore (Center front) */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] h-[210px] border-4 border-[#8B5CF6] bg-slate-950 p-1.5 shadow-[0_0_20px_rgba(139,92,246,0.3)] pixel-corners hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-300 z-20 cursor-pointer"
                onClick={() => window.open('https://e-com-freshfoodstore.vercel.app/', '_blank', 'noopener,noreferrer')}
              >
                <div className="flex justify-between items-center bg-[#050510] px-1.5 py-1 border-b border-[#8B5CF6]/50 text-[9px] font-press-start text-white mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full animate-pulse" />
                    <span className="truncate">Freshfoodstore</span>
                  </div>
                  <span className="text-[7px] text-[#8B5CF6]">ONLINE</span>
                </div>
                {/* Mini mockup content */}
                <div className="w-full h-[150px] bg-[#f8fafc] border border-slate-300 rounded p-1 flex flex-col justify-between">
                  <div className="h-2 bg-[#22c55e] rounded-sm w-full flex items-center px-1">
                    <div className="w-1 h-1 rounded-full bg-white mr-1" />
                    <div className="w-6 h-0.5 bg-white/50 rounded-sm" />
                  </div>
                  <div className="flex-1 flex gap-2 items-center mt-1">
                    <div className="flex-1 flex flex-col gap-1">
                      <div className="h-1.5 bg-slate-300 rounded w-10" />
                      <div className="h-1 bg-slate-200 rounded w-14" />
                      <div className="h-1 bg-slate-200 rounded w-12" />
                      <div className="h-2 bg-[#22c55e] rounded w-8 mt-0.5" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-100 to-emerald-400 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full border border-dashed border-white/60" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom section layout - Grass platform divider and prompt button */}
      <div className="w-full flex flex-col items-center z-10 pt-4">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mb-3"
        >
          <PixelButton variant="dark" onClick={handleScrollToAbout} className="flex items-center gap-2 group border-2">
            <span>PRESS START</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#22D3EE] group-hover:translate-y-0.5 transition-all" />
          </PixelButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
