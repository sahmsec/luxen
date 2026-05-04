"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EditorialLookbook() {
  return (
    <section id="journal" className="py-32 px-6 md:px-12 bg-softwhite text-navy">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight">
            Lookbook 001
          </h2>
          <p className="mt-4 text-navy/60 tracking-widest uppercase text-sm">The Tokyo Sessions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Large Main Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-9 relative h-[60vh] lg:h-[80vh] overflow-hidden group"
          >
            <Image
              src="/ren-4.png"
              alt="Campaign Main"
              fill
              className="object-cover object-[60%_center] group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-navy/20"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-xs tracking-widest uppercase mb-2 block">Campaign</span>
              <h3 className="text-3xl font-heading font-bold uppercase">Neon Echoes</h3>
            </div>
          </motion.div>

          {/* Side Stacked Images */}
          <div className="lg:col-span-3 flex flex-col h-full gap-6 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[25vh] overflow-hidden group"
            >
              <Image
                src="/ren-3.png"
                alt="Precision Detail"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-1000"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex-1 min-h-[40vh] lg:min-h-0 overflow-hidden group bg-navy text-white flex flex-col justify-center p-8"
            >
              <h3 className="text-2xl font-heading font-bold uppercase mb-4">Precision in Motion</h3>
              <p className="text-sm text-white/70 font-light mb-8">Capturing the blur of the metropolis through lenses crafted for extreme clarity.</p>
              <button className="self-start uppercase tracking-widest text-xs font-bold border-b border-white pb-1 hover:text-iceblue transition-colors">
                Read Journal
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
