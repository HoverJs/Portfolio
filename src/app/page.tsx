import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import MobileNav from '@/components/layout/MobileNav';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import TechStack from '@/components/sections/TechStack';
import Contact from '@/components/sections/Contact';
import { GrassBorder, PixelSlime, PixelTree } from '@/components/ui/PixelAssets';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050510] text-white">
      {/* Subtle CRT screen scanlines */}
      <div className="scanlines" />

      {/* Top Grass platform border above Hero */}
      <GrassBorder className="relative z-20" />

      {/* Full-width Hero Banner at the top */}
      <div className="w-full relative">
        <Hero />
      </div>

      {/* Horizontal Divider Grass platform separator */}
      <GrassBorder className="relative z-20" />

      {/* Main split-screen grid layout */}
      <div className="max-w-[1680px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 relative z-10 pb-28 lg:pb-8">
        
        {/* Sticky RPG Stats Sidebar */}
        <Sidebar />

        {/* Scrollable Quest Log Content */}
        <main className="flex-1 flex flex-col gap-10 w-full lg:max-w-[calc(100%-21.5rem)]">
          {/* About Card */}
          <div className="border-4 border-slate-800 p-1.5 pixel-corners bg-[#0c0c20]/60 backdrop-blur-md">
            <About />
          </div>

          {/* Experience Quest Logs */}
          <div className="border-4 border-slate-800 p-1.5 pixel-corners bg-[#0c0c20]/60 backdrop-blur-md">
            <Experience />
          </div>

          {/* Projects Inventory */}
          <div className="border-4 border-slate-800 p-1.5 pixel-corners bg-[#0c0c20]/60 backdrop-blur-md">
            <Projects />
          </div>

          {/* Tech Stack Spell Book */}
          <div className="border-4 border-slate-800 p-1.5 pixel-corners bg-[#0c0c20]/60 backdrop-blur-md">
            <TechStack />
          </div>

          {/* Contact dialogue prompt */}
          <div className="border-4 border-slate-800 p-1.5 pixel-corners bg-[#0c0c20]/60 backdrop-blur-md">
            <Contact />
          </div>
        </main>
      </div>

      {/* Bottom decorative platform footer */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-12">
        {/* Slimes and trees standing on the bottom grassy ledge */}
        <div className="absolute bottom-8 left-[8%] z-20 hidden md:block">
          <PixelTree size={60} />
        </div>
        <div className="absolute bottom-8 left-[13%] z-20 hidden md:block">
          <PixelSlime size={32} />
        </div>
        <div className="absolute bottom-8 right-[15%] z-20 hidden md:block">
          <PixelTree size={70} />
        </div>
        <div className="absolute bottom-8 right-[10%] z-20 hidden md:block">
          <PixelSlime size={32} />
        </div>
        <GrassBorder className="relative z-10" />
      </div>

      {/* Mobile RPG Action Bar (Hotbar) */}
      <MobileNav />
    </div>
  );
}
