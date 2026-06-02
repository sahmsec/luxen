"use client";

import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    } else if (session?.user) {
      setFormData({
        name: session.user.name || "",
        phoneNumber: session.user.phoneNumber || "",
        address: session.user.address || "",
        city: session.user.city || "",
        zipCode: session.user.zipCode || "",
      });
    }
  }, [session, isPending, router]);

  if (isPending || !session) return null;

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage("");

    try {
      const { error } = await authClient.updateUser({
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode,
      });

      if (error) throw new Error(error.message);

      setMessage("Profile updated successfully");
      router.refresh();
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setIsSaving(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-softwhite text-navy pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 border-b border-navy/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight">
              My Profile
            </h1>
            <p className="text-navy/50 font-bold text-xs uppercase tracking-widest mt-4">
              Manage your personal information
            </p>
          </div>
          <button 
            onClick={handleSignOut}
            className="text-[10px] font-bold uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors mt-4 sm:mt-0"
          >
            Sign Out
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-navy/5 relative">
          <form onSubmit={handleUpdate} className="flex flex-col gap-6">
            
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Full Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Email Address (Read Only)</label>
              <input type="email" value={session.user.email} disabled className="w-full bg-navy/5 border border-transparent rounded-md px-4 py-3 text-navy/50 cursor-not-allowed" />
            </div>

            <div className="mt-6 pt-6 border-t border-navy/10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-6">Default Shipping Details</h3>
              
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Street Address</label>
                  <textarea rows={2} value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow"></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">City</label>
                    <input type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Zip Code</label>
                    <input type="text" value={formData.zipCode} onChange={(e) => setFormData({...formData, zipCode: e.target.value})} className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Phone Number</label>
                  <input type="tel" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} className="w-full bg-transparent border border-navy/20 rounded-md px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSaving}
              className="mt-6 bg-navy text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-navy/20 disabled:opacity-70 self-end"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </form>

          {message && (
            <div className={`fixed bottom-12 right-12 px-6 py-4 rounded-xl shadow-2xl border text-xs font-bold uppercase tracking-widest transition-all ${message.includes('Error') ? 'bg-red-50 text-red-600 border-red-100' : 'bg-navy text-white border-navy'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
