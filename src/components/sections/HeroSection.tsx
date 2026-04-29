"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const HUDGrid = ({ className }: { className?: string }) => (
  <div className={`grid grid-cols-4 gap-2 opacity-70 mix-blend-overlay ${className}`}>
    {[...Array(16)].map((_, i) => (
      <div key={i} className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
    ))}
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-navy flex flex-col justify-end pb-8">
      {/* Background Image - Close up model */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/ren-hero.png"
          alt="LUXEN Hero Model"
          fill
          className="object-cover object-[65%_center] opacity-80"
          priority
          unoptimized={true}
        />
        {/* Horizontal motion blur streaks simulation */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-iceblue/20 mix-blend-overlay" />
        <div className="absolute top-1/4 w-full h-[2px] bg-white/20 blur-sm shadow-[0_0_20px_rgba(255,255,255,0.5)] transform -rotate-2" />
        <div className="absolute top-1/3 w-full h-[1px] bg-iceblue/30 blur-[1px] shadow-[0_0_15px_rgba(163,194,240,0.5)] transform rotate-1" />
      </motion.div>

      {/* Center HUD Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <HUDGrid className="scale-150" />
      </div>

      {/* Text Above Marquee */}
      <div className="relative z-10 px-6 md:px-12 flex justify-between items-end w-full mb-8">
        <div className="text-white text-xs uppercase tracking-[0.3em] font-bold shadow-black drop-shadow-md">
          <p>SS 2026</p>
          <p>Collection</p>
        </div>
        <Link href="/shop" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-navy transition-colors">
          Explore Now
        </Link>
      </div>

      {/* Marquee */}
      <div className="relative z-10 w-full overflow-hidden bg-navy/40 backdrop-blur-sm border-t border-b border-white/10 py-4 flex">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <h1 key={i} className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-softwhite uppercase px-4 inline-block">
              LUXEN • PREMIUM FEELS BETTER • 
            </h1>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
