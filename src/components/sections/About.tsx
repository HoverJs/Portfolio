'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  Code2, 
  Star, 
  Calendar, 
  MapPin, 
  Clock, 
  Mail, 
  Heart, 
  Car, 
  Truck, 
  Package, 
  ShoppingCart,
  Rocket,
  Shield,
  Sprout,
  Globe
} from 'lucide-react';
import { PixelCard } from '../ui/PixelCard';
import { PixelSlime, PixelRock, GrassBorder } from '../ui/PixelAssets';

// Custom inline SVG logos for Core Expertise (Sized up to w-6 h-6)
const CORE_LOGOS: Record<string, React.ReactNode> = {
  'React.js': (
    <svg viewBox="-11.5 -10.23 23 20.47" className="w-6 h-6 stroke-[#61dafb] stroke-[1.5px] fill-none shrink-0">
      <circle r="2" fill="#61dafb" stroke="none"/>
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 180 180" className="w-6 h-6 bg-black rounded-full border border-slate-700 p-0.5 fill-white shrink-0">
      <path d="M90 0C40.3 0 0 40.3 0 90s40.3 90 90 90 90-40.3 90-90S139.7 0 90 0zM151.7 141.7L97 73.9V144H80V54h17l53.9 67.8V54h17v87.7h-16.2z"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 rounded fill-[#007acc] shrink-0">
      <rect width="24" height="24" />
      <text x="12" y="18" fill="#ffffff" fontFamily="monospace" fontWeight="bold" fontSize="13px" textAnchor="middle">TS</text>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#539e43] shrink-0">
      <path d="M12 0L2.7 5.4v10.8L12 21.6l9.3-5.4V5.4L12 0zm0 3.6l6.2 3.6v7.2L12 18l-6.2-3.6V7.2L12 3.6z"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0db7ed] shrink-0">
      <path d="M2 10h3v3H2zm4 0h3v3H6zm4 0h3v3h-3zm4 0h3v3h-3zm-8-4h3v3H6zm4 0h3v3h-3zm4 0h3v3h-3zm-4-4h3v3h-3zM2 15c2 4 8 5 12 5s8-2 8-5H2z" />
    </svg>
  ),
  'Strapi CMS': (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#4945ff] shrink-0">
      <rect width="24" height="24" rx="4" />
      <path d="M6 14l6-8 6 8-6 3-6-3z" fill="#fff" />
    </svg>
  ),
  'Modern Web Tech': (
    <Globe className="w-6 h-6 text-sky-400 shrink-0" />
  ),
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#050510] relative overflow-hidden">
      <div className="w-full">
        
        {/* Upper Header Row: Title on Left, Icon Badge on Right */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-800/80">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-press-start text-lg sm:text-xl text-white tracking-wider flex items-center gap-2"
            >
              <span className="text-[#8B5CF6]">✦</span> ABOUT ME <span className="text-[#8B5CF6]">✦</span>
            </motion.h2>
            <p className="font-share-tech text-xs sm:text-sm text-slate-500 uppercase tracking-widest mt-2 flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-500" /> Building products with purpose <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />
            </p>
          </div>

          {/* Code bubble badge */}
          <div className="p-2.5 bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#8B5CF6] rounded-xl flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.15)] shrink-0 select-none">
            <Code2 className="w-5 h-5" />
          </div>
        </div>

        {/* 3-Column Grid for main information */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Column 1: Profile & Domains (Left) */}
          <div className="col-span-2 lg:col-span-3 grid grid-cols-2 lg:flex lg:flex-col gap-6">
            {/* Developer Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 lg:col-span-1 lg:flex-1"
            >
              <PixelCard glowColor="dark" className="p-6 h-full flex flex-col justify-between hover:border-[#8B5CF6]/50 duration-300">
                <div>
                  <div className="flex items-center gap-2 pb-2.5 border-b border-slate-800 mb-4">
                    <User className="w-4 h-4 text-purple-400" />
                    <h3 className="font-press-start text-[10px] text-[#A855F7] tracking-wider uppercase">
                      DEVELOPER PROFILE
                    </h3>
                  </div>

                  <h4 className="font-share-tech text-lg text-white font-bold leading-tight mb-2">
                    Full-Stack Developer
                  </h4>
                  <p className="font-share-tech text-sm text-slate-400 leading-relaxed mb-6 font-light">
                    Focused on building modern, scalable and user-centered web applications.
                  </p>
                </div>

                {/* Meta details list (Sized up to text-sm) */}
                <div className="space-y-4 font-share-tech text-sm pt-4 border-t border-slate-850/80">
                  <div className="flex items-center gap-3.5">
                    <Calendar className="w-4.5 h-4.5 text-purple-400 shrink-0" />
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase tracking-wider leading-none mb-0.5">Role</span>
                      <span className="text-slate-300">Full-Stack Developer</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <MapPin className="w-4.5 h-4.5 text-purple-400 shrink-0" />
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase tracking-wider leading-none mb-0.5">Location</span>
                      <span className="text-slate-300">Vietnam</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Clock className="w-4.5 h-4.5 text-purple-400 shrink-0" />
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase tracking-wider leading-none mb-0.5">Experience</span>
                      <span className="text-slate-300">1+ Years</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Mail className="w-4.5 h-4.5 text-purple-400 shrink-0" />
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase tracking-wider leading-none mb-0.5">Email</span>
                      <a href="mailto:lethienacqt@gmail.com" className="text-[#22D3EE] hover:underline">
                        lethienacqt@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </PixelCard>
            </motion.div>

            {/* Business Domains Card */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-2 sm:col-span-1 lg:col-span-1"
            >
              <PixelCard glowColor="dark" className="p-6 hover:border-[#8B5CF6]/50 duration-300">
                <div className="flex items-center gap-2 pb-2.5 border-b border-slate-800 mb-4">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                  <h3 className="font-press-start text-[10px] text-[#A855F7] tracking-wider uppercase">
                    BUSINESS DOMAINS
                  </h3>
                </div>

                <ul className="space-y-3 font-share-tech text-sm sm:text-base text-slate-300">
                  <li className="flex items-center gap-3">
                    <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400/10 shrink-0" />
                    <span>Healthcare</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Car className="w-4 h-4 text-[#22D3EE] shrink-0" />
                    <span>Automotive</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Transportation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Package className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Inventory & Logistics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ShoppingCart className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Retail & E-commerce</span>
                  </li>
                </ul>
              </PixelCard>
            </motion.div>
          </div>

          {/* Column 2: Professional Summary (Middle) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-2 lg:col-span-6"
          >
            <PixelCard glowColor="primary" className="p-6 h-full hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:border-[#8B5CF6] duration-300">
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-800 mb-5">
                <User className="w-4 h-4 text-purple-400" />
                <h3 className="font-press-start text-[10px] text-[#A855F7] tracking-wider uppercase">
                  PROFESSIONAL SUMMARY
                </h3>
              </div>

              <div className="font-share-tech text-sm sm:text-base text-slate-300 space-y-5 leading-relaxed font-light select-text">
                <p>
                  I{"'"}m a <span className="text-[#A855F7] font-semibold">Full-Stack Developer</span> passionate about building modern, scalable, and user-centered web applications from concept to production.
                </p>
                <p>
                  Experienced in designing, developing, and deploying business solutions across <span className="text-[#A855F7] font-semibold">healthcare, automotive, transportation, inventory, and retail</span> domains. Skilled in translating business requirements into intuitive user experiences and robust technical implementations.
                </p>
                <p>
                  Proficient in <span className="text-[#A855F7] font-semibold">React.js, Next.js, TypeScript, Node.js, Docker, Strapi CMS</span>, and modern web technologies. Capable of contributing across the full product lifecycle, including UI/UX design, frontend development, backend integration, content management systems, and deployment.
                </p>
                <p>
                  Driven by <span className="text-[#A855F7] font-semibold">clean architecture, performance optimization</span>, and maintainable code, with a strong focus on delivering products that create <span className="text-[#A855F7] font-semibold">real business value</span>.
                </p>
                <p>
                  Currently building digital products while continuously expanding expertise in <span className="text-[#A855F7] font-semibold">full-stack development, system design</span>, and <span className="text-[#A855F7] font-semibold">scalable web architectures</span>.
                </p>
              </div>
            </PixelCard>
          </motion.div>

          {/* Column 3: Core Expertise (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-2 sm:col-span-1 lg:col-span-3"
          >
            <PixelCard glowColor="dark" className="p-6 h-full flex flex-col justify-between hover:border-[#8B5CF6]/50 duration-300">
              <div>
                <div className="flex items-center gap-2 pb-2.5 border-b border-slate-800 mb-5">
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <h3 className="font-press-start text-[10px] text-[#A855F7] tracking-wider uppercase">
                    CORE EXPERTISE
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {[
                    'React.js',
                    'Next.js',
                    'TypeScript',
                    'Node.js',
                    'Docker',
                    'Strapi CMS',
                    'Modern Web Tech',
                  ].map((skill) => {
                    const logo = CORE_LOGOS[skill] || <Globe className="w-6 h-6 text-slate-500" />;
                    return (
                      <div 
                        key={skill}
                        className="flex items-center justify-between p-3.5 bg-[#070718]/85 border border-slate-850 rounded-lg select-none hover:border-[#8B5CF6]/40 transition-colors"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-7 h-7 flex items-center justify-center">
                            {logo}
                          </div>
                          <span className="font-share-tech text-sm sm:text-base text-slate-200">
                            {skill}
                          </span>
                        </div>
                        {/* Bullet dot */}
                        <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full shrink-0" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </PixelCard>
          </motion.div>

        </div>

        {/* Development Philosophy Card (Bottom Full-Width) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6"
        >
          <PixelCard glowColor="dark" className="p-6 hover:border-[#8B5CF6]/40 duration-300">
            <div className="flex items-center justify-center gap-2 pb-3 border-b border-slate-800 mb-5 max-w-xs mx-auto">
              <Star className="w-4 h-4 text-purple-400 fill-purple-400/10" />
              <h3 className="font-press-start text-[11px] text-[#A855F7] tracking-wider uppercase text-center">
                DEVELOPMENT PHILOSOPHY
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="flex gap-3.5 text-left">
                <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-lg shrink-0 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-press-start text-[10px] text-white uppercase tracking-wider mb-1.5 leading-normal">
                    CLEAN CODE
                  </h4>
                  <p className="font-share-tech text-sm text-slate-400 leading-normal font-light">
                    Write code that is readable, simple and easy to maintain.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-3.5 text-left">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-lg shrink-0 flex items-center justify-center">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-press-start text-[10px] text-white uppercase tracking-wider mb-1.5 leading-normal">
                    PERFORMANCE
                  </h4>
                  <p className="font-share-tech text-sm text-slate-400 leading-normal font-light">
                    Optimize for speed and efficiency to deliver great UX.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex gap-3.5 text-left">
                <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg shrink-0 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-press-start text-[10px] text-white uppercase tracking-wider mb-1.5 leading-normal">
                    SCALABILITY
                  </h4>
                  <p className="font-share-tech text-sm text-slate-400 leading-normal font-light">
                    Build solutions that are robust and ready for future growth.
                  </p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="flex gap-3.5 text-left">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg shrink-0 flex items-center justify-center">
                  <Sprout className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-press-start text-[10px] text-white uppercase tracking-wider mb-1.5 leading-normal">
                    MAINTAINABILITY
                  </h4>
                  <p className="font-share-tech text-sm text-slate-400 leading-normal font-light">
                    Create systems that are easy to extend and sustain.
                  </p>
                </div>
              </div>
            </div>
          </PixelCard>
        </motion.div>

      </div>

      {/* Ground Platform Divider / Footer at the bottom of the section */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-12 border-t-2 border-slate-900 pt-8 relative">
        
        {/* Street Lamps on Left and Right (RPG aesthetic) */}
        <div className="max-w-5xl mx-auto flex justify-between items-end relative h-16 px-6 z-20 translate-y-2">
          {/* Left Street Lamp */}
          <div className="flex flex-col items-center relative">
            <div className="w-6 h-1 bg-[#1e293b] absolute -top-5 -left-1.5 rounded-sm" />
            <div className="w-3.5 h-3.5 bg-[#eab308] border border-black absolute -top-4 -left-[1px] shadow-[0_0_15px_rgba(234,179,8,0.85)] rounded-sm" />
            <div className="w-1 h-14 bg-[#1e293b] border-x border-[#334155]" />
          </div>

          {/* Right Street Lamp */}
          <div className="flex flex-col items-center relative">
            <div className="w-6 h-1 bg-[#1e293b] absolute -top-5 -left-1.5 rounded-sm" />
            <div className="w-3.5 h-3.5 bg-[#eab308] border border-black absolute -top-4 -left-[1px] shadow-[0_0_15px_rgba(234,179,8,0.85)] rounded-sm" />
            <div className="w-1 h-14 bg-[#1e293b] border-x border-[#334155]" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex justify-between items-end relative h-14 px-4 sm:px-6 mt-[-56px]">
          {/* Wooden Signpost (KEEP CODING) */}
          <div className="flex flex-col items-center z-20">
            <div className="bg-[#78350f] border-2 border-black rounded px-2.5 py-1 text-[8px] font-press-start text-[#fef08a] shadow-md select-none text-center leading-none">
              {"KEEP >"} <br/> {"CODING >"}
            </div>
            <div className="w-2.5 h-3.5 bg-[#78350f] border-x-2 border-black" />
          </div>

          {/* Environmental slimes/rocks decoration */}
          <div className="flex gap-4 items-end mb-2 z-20">
            <PixelSlime size={28} className="translate-y-2" />
            <PixelRock size={16} />
          </div>

          <div className="w-12 h-1 select-none" /> {/* Space placeholder for balancing */}
        </div>
        <GrassBorder className="relative z-10" />
      </div>
    </section>
  );
};

export default About;
