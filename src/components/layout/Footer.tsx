import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy py-20 px-6 md:px-12 border-t border-white/10 text-softwhite">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-block text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6 hover:text-white transition-colors">
            LUXEN
          </Link>
          <p className="text-white/60 max-w-sm">
            Vision Beyond Tomorrow. Luxury eyewear engineered for clarity, movement, and modern identity.
          </p>
        </div>
        
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6 font-bold">Explore</h4>
          <ul className="space-y-3 text-white/60">
            <li><Link href="/shop" className="hover:text-white transition-colors">Shop Collection</Link></li>
            <li><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
            <li><Link href="/journal" className="hover:text-white transition-colors">Journal</Link></li>
            <li><Link href="/cart" className="hover:text-white transition-colors">Your Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6 font-bold">Support</h4>
          <ul className="space-y-3 text-white/60">
            <li><a href="mailto:contact@luxen.com" className="hover:text-white transition-colors">Contact</a></li>
            <li><Link href="/policies#shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
            <li><Link href="/policies#returns" className="hover:text-white transition-colors">Returns</Link></li>
            <li><Link href="/policies#warranty" className="hover:text-white transition-colors">Warranty</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} LUXEN. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
