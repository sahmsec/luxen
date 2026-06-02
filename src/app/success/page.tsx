"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

function SuccessContent() {
  const { data: session, isPending } = authClient.useSession();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/");
    }
  }, [isPending, session, router]);

  if (isPending || !session) return null;

  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto px-6 text-center">
      <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 mx-auto border border-green-100">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-4 text-navy">
        Order Confirmed
      </h1>
      
      <p className="text-navy/70 mb-8 max-w-lg mx-auto">
        Thank you for choosing Luxen. Your exclusive items are being prepared for dispatch.
      </p>
      
      {orderId && (
        <div className="bg-white px-6 py-4 rounded-xl border border-navy/10 inline-flex items-center gap-3 mb-12 shadow-sm">
          <span className="text-navy/50 font-bold uppercase tracking-widest text-[10px]">Order ID:</span>
          <span className="font-mono text-navy">{orderId}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Link 
          href="/orders"
          className="w-full sm:w-auto px-8 py-4 bg-navy text-white uppercase tracking-widest text-xs font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-navy/20"
        >
          View My Orders
        </Link>
        <Link 
          href="/shop"
          className="w-full sm:w-auto px-8 py-4 bg-transparent text-navy border border-navy/20 uppercase tracking-widest text-xs font-bold hover:border-navy transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-softwhite text-navy pt-32 pb-20 flex flex-col">
      <Suspense fallback={<div className="flex-1 flex items-center justify-center uppercase tracking-widest text-xs font-bold text-navy/50">Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
