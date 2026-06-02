"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CartPage() {
  const { items, removeFromCart, totalPrice } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="bg-softwhite text-navy pt-40 pb-24 px-6 min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-heading font-bold uppercase mb-6">Your Cart is Empty</h1>
        <button 
          onClick={() => router.push("/shop")}
          className="bg-navy text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-blue-600 transition-colors"
        >
          Discover Collection
        </button>
      </div>
    );
  }

  return (
    <div className="bg-softwhite text-navy min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-12 border-b border-navy/10 pb-6">
          Your Cart
        </h1>

        <div className="flex flex-col gap-6 mb-12">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 items-center bg-white p-6 rounded-xl shadow-sm border border-navy/5">
              <div className="relative w-32 h-32 bg-[#f8fafc] rounded-md overflow-hidden flex-shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover mix-blend-multiply" unoptimized />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-heading font-bold uppercase">{item.name}</h3>
                <p className="text-navy/50 font-bold text-xs mt-2 uppercase tracking-widest">Quantity: {item.quantity}</p>
              </div>
              <div className="text-center sm:text-right mt-4 sm:mt-0">
                <p className="text-2xl font-light">${item.price * item.quantity}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-2 hover:text-red-700 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-navy/50 mb-1">Subtotal</p>
            <p className="text-4xl font-heading font-bold">${totalPrice}</p>
          </div>
          
          <button 
            onClick={() => router.push("/checkout")}
            className="w-full md:w-auto bg-navy text-white px-12 py-4 uppercase tracking-widest text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-navy/20"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
