"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-bold tracking-widest text-softwhite">
          LUXEN
        </Link>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <Link href="/shop" className="text-softwhite/80 hover:text-white transition-colors relative group">
            Shop
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {["Technology", "Journal"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-softwhite/80 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="text-sm uppercase tracking-widest border border-softwhite/30 rounded-full px-6 py-2 hover:bg-white hover:text-navy transition-colors flex items-center gap-2">
            Cart {totalItems > 0 && <span className="bg-white text-navy w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold">{totalItems}</span>}
          </Link>
          <button className="text-sm uppercase tracking-widest md:hidden">
            Menu
          </button>
        </div>
      </div>
    </motion.header>
  );
}
