"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Shadow Titanium", price: "$450", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Crystal Edge", price: "$380", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "AirFrame", price: "$520", image: "https://images.unsplash.com/photo-1508296695146-257a814050b4?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Nova Series", price: "$490", image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800" },
];

export default function FeaturedCollection() {
  return (
    <section id="collections" className="py-32 px-6 md:px-12 bg-softwhite text-navy">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight"
          >
            Curated Styles
          </motion.h2>
          <Link href="/shop" className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-navy border border-navy/20 px-8 py-4 hover:bg-navy hover:text-white transition-colors">
            View Full Collection
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-[#e0e5ec] rounded-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white text-navy px-6 py-3 uppercase tracking-widest text-xs font-bold rounded-full">
                  Quick Add
                </button>
              </div>
              <div className="flex justify-between items-center font-heading">
                <h3 className="text-xl font-bold uppercase">{product.name}</h3>
                <span className="text-lg text-navy/70">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
