"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const HUDGrid = ({ className }: { className?: string }) => (
  <div className={`grid grid-cols-4 gap-2 opacity-80 mix-blend-overlay ${className}`}>
    {[...Array(16)].map((_, i) => (
      <div key={i} className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
    ))}
  </div>
);

export default function BrandPhilosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 md:px-12 bg-softwhite text-navy relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Oversized Typography */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-heading font-bold uppercase tracking-tighter leading-[0.9] mb-32">
              From <br /> Culture <br /> To Habits
            </h2>
            <p className="text-sm tracking-widest uppercase font-bold text-navy/40 mb-2">
              L - 01 / Future
            </p>
          </motion.div>
        </div>

        {/* Center: Cinematic Portrait with HUD */}
        <div className="lg:col-span-4 order-1 lg:order-2 relative h-[50vh] md:h-[60vh] w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full relative group overflow-hidden"
          >
            <Image
              src="/ren-1.png"
              alt="Brand Philosophy Portrait"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 blur-[1px] group-hover:blur-none"
            />
            {/* HUD Overlays */}
            <div className="absolute top-4 left-4">
              <HUDGrid className="scale-75 origin-top-left" />
            </div>
            <div className="absolute bottom-4 right-4">
              <HUDGrid className="scale-75 origin-bottom-right" />
            </div>
          </motion.div>
        </div>

        {/* Right: Small text block */}
        <div className="lg:col-span-3 order-3 lg:order-3 flex flex-col justify-center h-full">
            <p className="text-xs font-bold tracking-widest uppercase leading-loose text-navy/80 border-l border-navy/20 pl-6">
              We design beyond trends focusing on form, clarity, and quiet expression. Advanced optical engineering meets cyber-minimal aesthetics.
            </p>
            <button className="mt-8 text-xs font-bold uppercase tracking-widest border-b border-navy pb-1 self-start hover:text-navy/60 transition-colors">
              Read More
            </button>
        </div>
      </div>
    </section>
  );
}
