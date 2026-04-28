"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { quote: "The clarity is unprecedented. LUXEN has redefined what luxury eyewear should feel like in the modern age.", author: "Vogue Tech", role: "Editorial" },
  { quote: "Weightless on the face, yet visually commanding. A masterclass in industrial design and optical precision.", author: "Marcus T.", role: "Architect" },
  { quote: "They don't just shield your eyes, they enhance your entire visual field. The zero-gravity fit is remarkable.", author: "Elena R.", role: "Creative Director" },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-32 px-6 md:px-12 bg-navy text-softwhite border-t border-white/10">
      <div className="container mx-auto max-w-4xl relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 px-4 text-center">
                <p className="text-2xl md:text-4xl font-light font-heading leading-tight mb-10 text-white/90">
                  &quot;{t.quote}&quot;
                </p>
                <h4 className="text-sm font-bold uppercase tracking-widest">{t.author}</h4>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-2">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8 mt-16">
          <button onClick={scrollPrev} className="p-4 hover:text-iceblue transition-colors border border-white/20 rounded-full hover:border-iceblue">
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === selectedIndex ? "bg-white scale-150" : "bg-white/30"}`}
              />
            ))}
          </div>

          <button onClick={scrollNext} className="p-4 hover:text-iceblue transition-colors border border-white/20 rounded-full hover:border-iceblue">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
