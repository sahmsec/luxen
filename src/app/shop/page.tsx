import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <div className="bg-softwhite text-navy pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight mb-4">
            The Collection
          </h1>
          <p className="text-navy/60 tracking-widest uppercase text-sm font-bold">
            Vision Engineered for Tomorrow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          {products.map((product) => (
            <Link href={`/shop/${product.id}`} key={product.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden bg-white shadow-sm rounded-lg mb-6 border border-navy/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 mix-blend-multiply opacity-90 group-hover:opacity-100"
                  unoptimized
                />
              </div>
              <div className="flex justify-between items-start mt-auto px-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-navy/40 mb-2">{product.category}</p>
                  <h3 className="text-xl font-heading font-bold uppercase group-hover:text-blue-600 transition-colors">{product.name}</h3>
                </div>
                <p className="text-lg font-light">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
