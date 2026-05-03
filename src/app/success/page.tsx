"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg"
      >
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-iceblue/20 rounded-full flex items-center justify-center text-iceblue">
            <CheckCircle size={48} strokeWidth={1.5} />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6">
          Order Confirmed
        </h1>
        
        <p className="text-softwhite/70 text-lg font-light mb-12">
          Thank you for choosing LUXEN. Your order has been successfully placed. We will contact you shortly to arrange your Cash on Delivery shipment.
        </p>
        
        <Link 
          href="/shop"
          className="inline-block border border-white px-12 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-navy transition-colors"
        >
          Return to Collection
        </Link>
      </motion.div>
    </div>
  );
}
