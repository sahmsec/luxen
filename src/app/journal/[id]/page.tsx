"use client";

import { use } from "react";
import Image from "next/image";
import { getArticleById } from "@/lib/journal";
import { notFound, useRouter } from "next/navigation";

export default function JournalArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-navy text-softwhite">
      <div className="container mx-auto max-w-4xl">
        <button 
          onClick={() => router.push("/journal")}
          className="text-xs uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-navy transition-colors mb-12"
        >
          ← Back to Journal
        </button>

        <p className="text-iceblue text-sm uppercase tracking-widest font-bold mb-4">
          {article.date}
        </p>
        <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight mb-12">
          {article.title}
        </h1>

        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-white/5 mb-16">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-softwhite/80 font-light leading-relaxed mb-8">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
