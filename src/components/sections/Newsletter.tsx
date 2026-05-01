"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const HUDGrid = ({ className }: { className?: string }) => (
  <div className={`grid grid-cols-4 gap-2 opacity-50 mix-blend-overlay ${className}`}>
    {[...Array(16)].map((_, i) => (
      <div key={i} className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
    ))}
  </div>
);

export default function Newsletter() {
  return (
    <section className="relative h-[70vh] flex items-end justify-start overflow-hidden bg-navy p-6 md:p-12">
      <div className="absolute inset-0 z-0">
        <Image
          src="/ren-5.png"
          alt="Newsletter Model"
          fill
          className="object-cover object-[70%_center] opacity-60"
        />
        {/* Horizontal Motion Blur Overlay */}
        <div className="absolute inset-0 bg-navy/30 backdrop-blur-[2px]" />
        <div className="absolute top-1/3 w-[150%] -left-1/4 h-16 bg-white/10 blur-xl transform -skew-y-3" />
        <div className="absolute top-1/2 w-[150%] -left-1/4 h-8 bg-iceblue/20 blur-lg transform skew-y-2" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
      </div>

      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        <HUDGrid className="scale-75" />
        <HUDGrid className="scale-75" />
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        <HUDGrid className="scale-75" />
        <HUDGrid className="scale-75" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <p className="text-white/80 uppercase tracking-widest text-xs font-bold mb-4">
            Sign up for exclusive access and future collections.
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter mb-8 text-white w-full md:w-2/3 leading-tight">
            More styles are coming designed to evolve with you.
          </h2>

          <form className="w-full md:w-1/2 relative flex items-center border-b border-white/50 pb-2 group">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-transparent border-none px-2 text-sm uppercase tracking-widest text-white placeholder:text-white/40 focus:outline-none transition-colors"
              required
            />
            <button type="submit" className="uppercase text-xs font-bold tracking-widest hover:text-iceblue transition-colors px-4">
              Submit
            </button>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full"></div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
