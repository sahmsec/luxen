"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function CheckoutPage() {
  const { data: session, isPending } = authClient.useSession();
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();

  const [useProfileAddress, setUseProfileAddress] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
  });

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    } else if (session?.user && useProfileAddress) {
      setFormData({
        name: session.user.name || "",
        address: session.user.address || "",
        city: session.user.city || "",
        zipCode: session.user.zipCode || "",
        phone: session.user.phoneNumber || "",
      });
    }
  }, [session, isPending, useProfileAddress, router]);

  if (isPending || !session) return null;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          subtotal: totalPrice,
          shippingAddress: formData,
          paymentMethod: "COD",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Order failed");
      }

      clearCart();
      router.push(`/success?orderId=${data.orderId}`);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (items.length === 0) {
    router.push("/cart");
    return null;
  }

  return (
    <div className="bg-softwhite text-navy min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-12 border-b border-navy/10 pb-6">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Order Summary */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-8 text-navy/50">Order Summary</h2>
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-navy/5">
                  <div className="relative w-16 h-16 bg-[#f8fafc] rounded-md overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover mix-blend-multiply" unoptimized />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-heading font-bold uppercase">{item.name}</h3>
                    <p className="text-navy/50 font-bold text-[10px] mt-1 uppercase tracking-widest">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-light">${item.price * item.quantity}</p>
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
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-navy/5">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-navy/10 pb-4 mb-8 text-navy/50">Shipping Details</h2>
              
              {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest bg-red-50 p-3 mb-6 text-center">{error}</p>}

              <div className="mb-8 flex gap-4">
                <button 
                  type="button"
                  onClick={() => setUseProfileAddress(true)}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest border transition-colors ${useProfileAddress ? 'bg-navy text-white border-navy' : 'bg-transparent text-navy/50 border-navy/20 hover:border-navy'}`}
                >
                  Use Profile Address
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    setUseProfileAddress(false);
                    setFormData({ name: "", address: "", city: "", zipCode: "", phone: "" });
                  }}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest border transition-colors ${!useProfileAddress ? 'bg-navy text-white border-navy' : 'bg-transparent text-navy/50 border-navy/20 hover:border-navy'}`}
                >
                  Custom Address
                </button>
              </div>

              <form onSubmit={handlePlaceOrder} className="flex flex-col gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Full Name</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Delivery Address</label>
                  <textarea required rows={3} value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow"></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">City</label>
                    <input required type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Zip Code</label>
                    <input required type="text" value={formData.zipCode} onChange={(e) => setFormData({...formData, zipCode: e.target.value})} className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Phone Number</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" />
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
                  disabled={loading}
                  className="w-full mt-6 bg-navy text-white px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-navy/20 disabled:opacity-70"
                >
                  {loading ? "Processing..." : "Place Order"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
