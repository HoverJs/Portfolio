'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Briefcase, Clock, Send } from 'lucide-react';
import { Github, Linkedin, Facebook } from '../ui/BrandIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { PixelCard } from '../ui/PixelCard';
import { PixelButton } from '../ui/PixelButton';
import { PixelSlime } from '../ui/PixelAssets';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#050510]">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-press-start text-lg sm:text-xl text-white tracking-wider flex items-center justify-center gap-2"
          >
            <span className="text-[#8B5CF6]">✦</span> CONTACT ME <span className="text-[#8B5CF6]">✦</span>
          </motion.h2>
          <p className="font-share-tech text-sm sm:text-base text-slate-500 uppercase tracking-widest mt-2">
            Send a message / Initiate conversation
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 items-start relative">
          
          {/* Decorative Purple Slime on mobile/tablet */}
          <div className="absolute top-[-50px] right-[20px] hidden md:block select-none pointer-events-none">
            <PixelSlime size={32} />
          </div>

          {/* Left Column: Dialogue Box Contact Form */}
          <div className="col-span-2 md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <PixelCard glowColor="primary" className="p-6">
                
                {/* Dialogue Title */}
                <div className="flex justify-between items-center pb-3 border-b-2 border-slate-800 mb-6">
                  <span className="font-press-start text-[10px] text-[#22D3EE] tracking-widest uppercase">
                    DIALOGUE PROMPT
                  </span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full" />
                    <span className="w-1.5 h-1.5 bg-[#A855F7] rounded-full" />
                    <span className="w-1.5 h-1.5 bg-[#22D3EE] rounded-full" />
                  </div>
                </div>

                {/* Form element */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="font-press-start text-[9px] tracking-wider text-slate-400 block mb-2.5 uppercase">
                      [ ENTER YOUR NAME ]
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950/80 border-2 border-slate-800 focus:border-[#8B5CF6] focus:shadow-[0_0_10px_rgba(139,92,246,0.3)] rounded-md px-3.5 py-3 font-share-tech text-base text-white placeholder-slate-600 outline-none pixel-corners-sm transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="font-press-start text-[9px] tracking-wider text-slate-400 block mb-2.5 uppercase">
                      [ ENTER YOUR EMAIL ]
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-slate-950/80 border-2 border-slate-800 focus:border-[#8B5CF6] focus:shadow-[0_0_10px_rgba(139,92,246,0.3)] rounded-md px-3.5 py-3 font-share-tech text-base text-white placeholder-slate-600 outline-none pixel-corners-sm transition-all"
                    />
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="font-press-start text-[9px] tracking-wider text-slate-400 block mb-2.5 uppercase">
                      [ ENTER SUBJECT ]
                    </label>
                    <input
                      required
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Project Query"
                      className="w-full bg-slate-950/80 border-2 border-slate-800 focus:border-[#8B5CF6] focus:shadow-[0_0_10px_rgba(139,92,246,0.3)] rounded-md px-3.5 py-3 font-share-tech text-base text-white placeholder-slate-600 outline-none pixel-corners-sm transition-all"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="font-press-start text-[9px] tracking-wider text-slate-400 block mb-2.5 uppercase">
                      [ ENTER MESSAGE ]
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Type your message details here..."
                      className="w-full bg-slate-950/80 border-2 border-slate-800 focus:border-[#8B5CF6] focus:shadow-[0_0_10px_rgba(139,92,246,0.3)] rounded-md px-3.5 py-3 font-share-tech text-base text-white placeholder-slate-600 outline-none pixel-corners-sm transition-all resize-none"
                    />
                  </div>

                  {/* Form Feedback */}
                  {submitStatus === 'success' && (
                    <div className="p-3 bg-green-500/10 border border-green-500/40 rounded-md pixel-corners-sm font-share-tech text-sm text-green-400 text-center uppercase tracking-wider animate-pulse">
                      ✓ Message Transmitted Successfully!
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <PixelButton
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                    </PixelButton>

                    <a
                      href={`mailto:${PERSONAL_INFO.socials.email}?subject=Hiring%20Lethien.dev&body=Hi%20Lethien,%0A%0AWe%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.`}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#8B5CF6] hover:bg-[#A855F7] border-2 border-white hover:border-[#22D3EE] text-white font-press-start text-[10px] sm:text-[11px] tracking-wider uppercase pixel-corners shadow-[0_0_10px_rgba(139,92,246,0.3)] hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:scale-[1.01] transition-all duration-200 select-none text-center cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>HIRE ME</span>
                    </a>
                  </div>
                </form>

              </PixelCard>
            </motion.div>
          </div>

          {/* Right Column: Contact Stats / Guild Info */}
          <div className="col-span-2 md:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6"
            >
              {/* Stats card */}
              <PixelCard glowColor="accent" className="p-6">
                <div className="flex justify-between items-center pb-3 border-b-2 border-slate-800 mb-5">
                  <span className="font-press-start text-[10px] text-[#22D3EE] tracking-widest uppercase">
                    GUILD STATS
                  </span>
                </div>

                <div className="space-y-4.5 font-share-tech text-base text-slate-300">
                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-1.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] pixel-corners-sm mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase text-xs tracking-wider">Direct Mail</span>
                      <a href={PERSONAL_INFO.socials.email} className="text-white hover:text-[#8B5CF6] transition-colors">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-1.5 bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] pixel-corners-sm mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase text-xs tracking-wider">Location Spawn</span>
                      <span className="text-white">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-1.5 bg-green-500/10 border border-green-500/30 text-green-400 pixel-corners-sm mt-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase text-xs tracking-wider">Quest Availability</span>
                      <span className="text-white">{PERSONAL_INFO.availability}</span>
                    </div>
                  </div>

                  {/* Timezone */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-1.5 bg-[#A855F7]/10 border border-[#A855F7]/30 text-[#A855F7] pixel-corners-sm mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase text-xs tracking-wider">Local Timezone</span>
                      <span className="text-white">{PERSONAL_INFO.timezone}</span>
                    </div>
                  </div>
                </div>
              </PixelCard>

              {/* Social Channels card */}
              <PixelCard glowColor="dark" className="p-6">
                <div className="flex justify-between items-center pb-3 border-b-2 border-slate-800 mb-4">
                  <span className="font-press-start text-[10px] text-[#A855F7] tracking-widest uppercase">
                    SOCIAL CHANNELS
                  </span>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-slate-900 border-2 border-slate-800 hover:border-[#8B5CF6] hover:text-[#8B5CF6] text-slate-400 pixel-corners-sm flex justify-center items-center gap-2 transition-all font-press-start text-[9px]"
                  >
                    <Github className="w-4.5 h-4.5" />
                    <span>GITHUB</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-slate-900 border-2 border-slate-800 hover:border-[#22D3EE] hover:text-[#22D3EE] text-slate-400 pixel-corners-sm flex justify-center items-center gap-2 transition-all font-press-start text-[9px]"
                  >
                    <Linkedin className="w-4.5 h-4.5" />
                    <span>LINKEDIN</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-slate-900 border-2 border-slate-800 hover:border-[#A855F7] hover:text-[#A855F7] text-slate-400 pixel-corners-sm flex justify-center items-center gap-2 transition-all font-press-start text-[9px]"
                  >
                    <Facebook className="w-4.5 h-4.5" />
                    <span>FACEBOOK</span>
                  </a>
                </div>
              </PixelCard>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
