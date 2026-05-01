"use client";

import { use } from "react";
import Image from "next/image";
import { products } from "@/lib/products";
import { notFound, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div className="bg-white text-navy pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#f8fafc] border border-navy/5">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center mix-blend-multiply"
              unoptimized
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-blue-600 text-xs uppercase tracking-[0.2em] font-bold mb-4">
              {product.category}
            </p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight mb-6">
              {product.name}
            </h1>
            <p className="text-3xl font-light mb-8">${product.price}</p>
            <p className="text-navy/70 text-lg leading-relaxed font-light mb-12">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCart}
                className="bg-navy text-white px-12 py-4 uppercase tracking-widest text-sm font-bold hover:bg-blue-600 transition-colors flex-1"
              >
                Add to Cart
              </button>
              <button 
                onClick={() => router.push("/shop")}
                className="bg-transparent text-navy border border-navy/20 px-12 py-4 uppercase tracking-widest text-sm font-bold hover:bg-navy hover:text-white transition-colors flex-1"
              >
                Back to Shop
              </button>
            </div>
            
            <div className="mt-12 pt-12 border-t border-navy/10 grid grid-cols-2 gap-8 text-sm">
              <div>
                <p className="font-bold uppercase tracking-widest mb-2 text-navy">Shipping</p>
                <p className="text-navy/60 font-light">Free global shipping on all orders.</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest mb-2 text-navy">Returns</p>
                <p className="text-navy/60 font-light">14-day complimentary return window.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
