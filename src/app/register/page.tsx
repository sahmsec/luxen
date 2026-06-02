"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: signUpError } = await authClient.signUp.email({
      email,
      password,
      name,
    });
    
    if (signUpError) {
      setError(signUpError.message || "Registration failed");
    } else {
      router.push("/");
      router.refresh();
    }
    setLoading(false);
  };

  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
    setGoogleLoading(false);
  };

  return (
    <main className="min-h-screen bg-softwhite text-navy pt-40 pb-24 px-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-navy/5">
        <h1 className="text-3xl font-heading font-bold uppercase tracking-tight mb-2 text-center">
          Create Account
        </h1>
        <p className="text-navy/50 text-center text-sm font-bold uppercase tracking-widest mb-8">
          Join the collection
        </p>

        <button 
          type="button"
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
          className="w-full flex items-center justify-center gap-3 py-4 border border-navy/20 text-navy font-bold text-xs uppercase tracking-widest hover:bg-navy/5 hover:shadow-md hover:-translate-y-0.5 transition-all mb-6 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          {googleLoading ? "Redirecting..." : "Continue with Google"}
        </button>

        <div className="relative flex items-center justify-center mb-6">
          <span className="absolute bg-white px-4 text-[10px] font-bold uppercase tracking-widest text-navy/40">OR EMAIL</span>
          <div className="w-full h-px bg-navy/10"></div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest bg-red-50 p-3 text-center">{error}</p>}

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border border-navy/20 px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" 
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-navy/20 px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" 
              required
            />
          </div>
          
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/60 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border border-navy/20 px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-shadow" 
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-navy text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-blue-600 transition-colors mt-4 disabled:opacity-70 flex justify-center items-center gap-2 group shadow-lg shadow-navy/20"
          >
            {loading ? "Creating..." : "Create Account"}
            {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>

        <p className="text-center text-xs font-bold uppercase tracking-widest text-navy/50 mt-8">
          Already registered?
          <Link href="/login" className="text-navy hover:text-blue-600 ml-2 transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
