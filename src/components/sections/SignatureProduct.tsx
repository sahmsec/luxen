"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function SignatureProduct() {
  return (
    <section className="bg-navy text-softwhite w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Giant Model Close-up */}
      <div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden group">
        <Image
          src="/ren-2.png"
          alt="YK-SOFT 001 Model"
          fill
          className="object-cover object-[65%_center] group-hover:scale-105 transition-transform duration-1000 opacity-90"
        />
        {/* Overlay Text on Image */}
        <div className="absolute inset-0 flex items-center justify-between px-12 pointer-events-none">
          <motion.span 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-heading font-light text-white/50 mix-blend-overlay"
          >
            (
          </motion.span>
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold text-white z-10"
          >
            001
          </motion.h3>
          <motion.span 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-heading font-light text-white/50 mix-blend-overlay"
          >
            )
          </motion.span>
        </div>
      </div>

      {/* Right: Technical Grid & Info */}
      <div className="relative p-12 lg:p-24 flex flex-col justify-between">
        {/* Minimal Grid Background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="relative z-10 flex justify-between items-start">
          <span className="text-xs font-bold tracking-widest uppercase">Overview</span>
        </div>

        <div className="relative z-10 mt-32">
          <p className="text-xs uppercase tracking-widest font-bold mb-4">SS — 26</p>
          <h2 className="text-5xl lg:text-7xl font-heading font-bold uppercase tracking-tight mb-8">
            YK - SOFT 001
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-white/20 pt-8">
            <p className="text-xs font-bold tracking-widest uppercase leading-loose text-white/70 max-w-sm">
              Aerospace-grade titanium, ultra-lightweight architecture. Zeiss precision optics with anti-reflective sapphire coating.
            </p>
            <button className="bg-white text-navy px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-iceblue transition-colors">
              Pre-Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
