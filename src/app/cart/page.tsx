"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function CartCheckoutPage() {
  const { items, removeFromCart, totalPrice, clearCart } = useCart();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
    paymentMethod: "cod"
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    router.push("/success");
  };

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
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-12 border-b border-navy/10 pb-6">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-7">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-8 text-navy/50">Order Summary</h2>
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6 items-center bg-white p-4 rounded-xl shadow-sm border border-navy/5">
                  <div className="relative w-24 h-24 bg-[#f8fafc] rounded-md overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover mix-blend-multiply" unoptimized />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold uppercase">{item.name}</h3>
                    <p className="text-navy/50 font-bold text-xs mt-1 uppercase tracking-widest">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-light">${item.price * item.quantity}</p>
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
            
            <div className="mt-8 pt-6 border-t border-navy/10 flex justify-between items-center text-2xl">
              <span className="font-heading font-bold uppercase">Total</span>
              <span className="font-light">${totalPrice}</span>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-navy/5">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-navy/10 pb-4 mb-8 text-navy/50">Shipping Details</h2>
              
              <form onSubmit={handlePlaceOrder} className="flex flex-col gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Full Name</label>
                  <input required type="text" className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Delivery Address</label>
                  <textarea required rows={3} className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow"></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">City</label>
                    <input required type="text" className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Phone</label>
                    <input required type="tel" className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" />
                  </div>
                </div>

                <div className="mt-4 pt-6 border-t border-navy/10">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-4">Payment Method</label>
                  <label className="flex items-center gap-3 p-4 border border-blue-200 rounded-md bg-blue-50/50 cursor-pointer transition-colors hover:bg-blue-50">
                    <input type="radio" name="payment" checked readOnly className="accent-blue-600" />
                    <span className="uppercase tracking-widest text-xs font-bold text-blue-900">Cash on Delivery</span>
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-6 bg-navy text-white px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-navy/20"
                >
                  Confirm Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
