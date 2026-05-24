"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === '/';
  const isLightPage = pathname?.startsWith('/shop') || 
                      pathname?.startsWith('/cart') || 
                      pathname?.startsWith('/technology') || 
                      pathname?.startsWith('/success') ||
                      pathname?.startsWith('/policies');

  // Dark text is ONLY used on light inner pages
  const isDarkText = !isHomePage && isLightPage;

  // Determine the background
  let bgClass = "bg-transparent py-6";
  if (isHomePage) {
    if (scrolled) {
      bgClass = "bg-navy/95 backdrop-blur-md py-4 shadow-lg";
    }
  } else {
    // Inner pages always have a solid header so it never blends into images
    if (isLightPage) {
      bgClass = "bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-navy/5";
    } else {
      bgClass = "bg-navy/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5";
    }
  }

  const logoColor = (isDarkText && !menuOpen) ? "text-navy" : "text-softwhite";
  const navTextColor = isDarkText ? "text-navy/80" : "text-softwhite/80";
  const navHoverColor = isDarkText ? "hover:text-blue-600" : "hover:text-white";
  const navLineColor = isDarkText ? "bg-blue-600" : "bg-white";
  const btnBorder = isDarkText ? "border-navy/30" : "border-softwhite/30";
  const btnHover = isDarkText ? "hover:bg-navy hover:text-white" : "hover:bg-white hover:text-navy";
  const cartPill = isDarkText ? "bg-navy text-white" : "bg-white text-navy";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-heading font-bold tracking-widest transition-colors ${logoColor}`}>
          LUXEN
        </Link>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <Link href="/shop" className={`${navTextColor} ${navHoverColor} transition-colors relative group`}>
            Shop
            <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${navLineColor}`}></span>
          </Link>
          {["Technology", "Journal"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`${navTextColor} ${navHoverColor} transition-colors relative group`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${navLineColor}`}></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className={`text-sm uppercase tracking-widest border ${btnBorder} rounded-full px-6 py-2 ${btnHover} transition-colors flex items-center gap-2 ${isDarkText ? 'text-navy' : 'text-softwhite'}`}>
            Cart {totalItems > 0 && <span className={`${cartPill} w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold transition-colors`}>{totalItems}</span>}
          </Link>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-sm uppercase tracking-widest md:hidden relative z-[60] ${(isDarkText && !menuOpen) ? 'text-navy' : 'text-softwhite'}`}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-navy z-50 flex flex-col justify-center items-center gap-12"
          >
            <Link href="/" className="text-4xl font-heading font-bold uppercase tracking-widest text-softwhite hover:text-iceblue transition-colors">Home</Link>
            <Link href="/shop" className="text-4xl font-heading font-bold uppercase tracking-widest text-softwhite hover:text-iceblue transition-colors">Shop</Link>
            <Link href="/technology" className="text-4xl font-heading font-bold uppercase tracking-widest text-softwhite hover:text-iceblue transition-colors">Technology</Link>
            <Link href="/journal" className="text-4xl font-heading font-bold uppercase tracking-widest text-softwhite hover:text-iceblue transition-colors">Journal</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
