"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type Order = {
  _id: string;
  items: OrderItem[];
  subtotal: number;
  status: string;
  createdAt: string;
  paymentMethod: string;
};

export default function OrdersPage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
      return;
    }

    if (session) {
      fetch("/api/orders/me")
        .then((res) => res.json())
        .then((data) => {
          if (data.orders) setOrders(data.orders);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch orders", err);
          setLoading(false);
        });
    }
  }, [session, isPending, router]);

  if (isPending || loading) {
    return (
      <main className="min-h-screen bg-softwhite text-navy pt-40 pb-24 px-6 flex items-center justify-center">
        <p className="text-xs font-bold uppercase tracking-widest text-navy/50 animate-pulse">Loading collection...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-softwhite text-navy pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-navy/10 pb-6 flex justify-between items-end">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight">
              Order History
            </h1>
            <p className="text-navy/50 font-bold text-xs uppercase tracking-widest mt-4">
              Track your exclusive items
            </p>
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-navy/5 text-center">
            <p className="text-navy/60 font-bold uppercase tracking-widest text-sm mb-6">No orders found.</p>
            <Link 
              href="/shop"
              className="inline-block bg-navy text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-blue-600 transition-colors"
            >
              Discover Collection
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {orders.map((order) => (
              <div key={order._id} className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden">
                {/* Order Header */}
                <div className="bg-navy/5 px-6 py-4 border-b border-navy/5 flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-navy/50 mb-1">Order Placed</p>
                      <p className="text-xs font-bold text-navy">{new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-navy/50 mb-1">Total</p>
                      <p className="text-xs font-bold text-navy">${order.subtotal}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-navy/50 mb-1">Order #</p>
                    <p className="font-mono text-xs text-navy">{order._id}</p>
                  </div>
                </div>

                {/* Order Status */}
                <div className="px-6 py-4 border-b border-navy/5 flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${order.status === 'Pending' ? 'bg-amber-500' : 'bg-green-500'}`}></div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy">
                    Status: <span className="text-navy/70">{order.status}</span>
                  </p>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="flex flex-col gap-6">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-center">
                        <div className="relative w-20 h-20 bg-[#f8fafc] rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover mix-blend-multiply" unoptimized />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-heading font-bold uppercase mb-1">{item.name}</h3>
                          <p className="text-navy/50 font-bold text-[10px] uppercase tracking-widest">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-light">${item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
