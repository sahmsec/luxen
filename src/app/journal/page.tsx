import EditorialLookbook from "@/components/sections/EditorialLookbook";
import { journalArticles } from "@/lib/journal";
import Link from "next/link";
import Image from "next/image";

export default function JournalPage() {
  return (
    <div className="min-h-screen">
      <EditorialLookbook />
      
      <section className="py-24 px-6 md:px-12 bg-navy text-softwhite">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold uppercase tracking-widest mb-16 border-b border-white/20 pb-4">
            Latest Entries
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {journalArticles.map((article) => (
              <Link href={`/journal/${article.id}`} key={article.id} className="group cursor-pointer">
                <div className="relative aspect-video w-full mb-6 overflow-hidden bg-white/5 rounded-sm">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    unoptimized
                  />
                </div>
                <p className="text-xs text-iceblue uppercase tracking-widest mb-3">{article.date}</p>
                <h3 className="text-2xl font-heading font-bold uppercase mb-4 group-hover:text-iceblue transition-colors">
                  {article.title}
                </h3>
                <p className="text-softwhite/70 font-light text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
