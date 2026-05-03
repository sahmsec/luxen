export default function Footer() {
  return (
    <footer className="bg-navy py-20 px-6 md:px-12 border-t border-white/10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6">
            LUXEN
          </h2>
          <p className="text-white/60 max-w-sm">
            Vision Beyond Tomorrow. Luxury eyewear engineered for clarity, movement, and modern identity.
          </p>
        </div>
        
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6 font-bold">Collections</h4>
          <ul className="space-y-3 text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Shadow Titanium</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Crystal Edge</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AirFrame</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nova Series</a></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6 font-bold">Support</h4>
          <ul className="space-y-3 text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} LUXEN. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
