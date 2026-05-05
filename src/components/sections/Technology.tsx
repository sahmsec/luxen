"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Feather, Shield } from "lucide-react";

const techFeatures = [
  { icon: Shield, title: "Sapphire Anti-Reflective", desc: "99.9% light transmission for ultimate clarity and reduction of glare." },
  { icon: Eye, title: "Blue Light Filtration", desc: "Advanced polymer integration to protect eyes from digital strain." },
  { icon: Cpu, title: "Titanium Architecture", desc: "Milled from single blocks of aerospace-grade titanium for structural integrity." },
  { icon: Feather, title: "Zero-Gravity Fit", desc: "Ergonomic weight distribution making the frames feel virtually weightless." },
];

export default function Technology() {
  return (
    <section id="technology" className="py-32 px-6 md:px-12 bg-softwhite text-navy">
      <div className="container mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight mb-6 text-navy">
            Engineered <br /> Vision
          </h2>
          <p className="text-navy/70 max-w-xl font-light text-lg">
            Our commitment to innovation goes beyond aesthetics. Every frame is a masterclass in optical engineering, blending cutting-edge materials with precision craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techFeatures.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-navy/5 shadow-sm p-8 hover:shadow-md transition-all duration-300 group rounded-xl"
              >
                <div className="mb-6 text-blue-600 p-4 bg-blue-50 inline-block rounded-full group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-bold uppercase mb-4 text-navy">{tech.title}</h3>
                <p className="text-navy/60 font-light text-sm leading-relaxed">{tech.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
