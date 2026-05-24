"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Eye, Feather, Shield } from "lucide-react";

const techFeatures = [
  { icon: Shield, title: "Sapphire Anti-Reflective", desc: "99.9% light transmission for ultimate clarity and reduction of glare." },
  { icon: Eye, title: "Blue Light Filtration", desc: "Advanced polymer integration to protect eyes from digital strain." },
  { icon: Cpu, title: "Titanium Architecture", desc: "Milled from single blocks of aerospace-grade titanium for structural integrity." },
  { icon: Feather, title: "Zero-Gravity Fit", desc: "Ergonomic weight distribution making the frames feel virtually weightless." },
];

export default function Technology() {
  return (
    <div className="bg-softwhite text-navy w-full overflow-hidden">
      
      {/* Hero Header */}
      <section className="relative h-[80vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/ren-5.png" 
            alt="Technology Hero" 
            fill 
            className="object-cover object-center opacity-90"
            unoptimized
            priority
          />
        </div>
        <div className="absolute inset-0 bg-softwhite/50 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-navy text-sm font-bold uppercase tracking-[0.3em] mb-6"
          >
            The Future of Optics
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-heading font-bold uppercase tracking-tighter"
          >
            Engineered <br /> Vision
          </motion.h1>
        </div>
      </section>

      {/* The Laboratory */}
      <section className="py-32 px-6 md:px-12 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-8">
              The Laboratory
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed font-light mb-8">
              Our commitment to innovation goes far beyond aesthetics. Every single frame designed by LUXEN is a masterclass in optical engineering, blending cutting-edge materials with precision craftsmanship.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed font-light mb-12">
              We spent over 400 hours stress-testing our new proprietary resin composites in our Zurich facility to ensure they exceed military impact specifications while remaining 30% lighter than standard industry glass.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-navy/10 pt-8">
              <div>
                <p className="text-3xl font-heading font-bold">400+</p>
                <p className="text-xs uppercase tracking-widest text-navy/50 font-bold mt-2">Hours Tested</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold">-30%</p>
                <p className="text-xs uppercase tracking-widest text-navy/50 font-bold mt-2">Weight Reduced</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-navy/5"
          >
            <Image 
              src="/ren-2.png" 
              alt="Lab Engineering" 
              fill 
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      {/* Material Science */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4">Specs</p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight">
              Material Science
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-12">
              {techFeatures.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="shrink-0 text-blue-600 p-4 bg-blue-50 rounded-full group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold uppercase mb-2 text-navy">{tech.title}</h3>
                      <p className="text-navy/60 font-light leading-relaxed">{tech.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 order-1 lg:order-2 relative aspect-square w-full rounded-2xl overflow-hidden bg-[#f4f7fa] border border-navy/5 flex items-center justify-center"
            >
              <Image 
                src="/glass_02_1779621838780.png" 
                alt="Product Close up" 
                fill 
                className="object-cover mix-blend-multiply scale-90 hover:scale-100 transition-transform duration-1000"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
