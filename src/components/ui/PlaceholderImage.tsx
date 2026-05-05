export default function PlaceholderImage({ text = "IMAGE GENERATION PENDING" }: { text?: string }) {
  return (
    <div className="absolute inset-0 bg-[#0B1D3A] flex flex-col items-center justify-center border border-white/10 overflow-hidden">
      {/* Background Tech Details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-sm">
          <div className="w-6 h-6 border-2 border-white/20 border-t-iceblue rounded-full animate-spin"></div>
        </div>
        <div className="text-center">
          <p className="text-iceblue text-xs font-bold tracking-[0.2em] uppercase mb-1">{text}</p>
          <p className="text-white/30 text-[10px] tracking-widest uppercase max-w-[200px]">
            Model generation blocked by system API quota. Reset in ~1 hr.
          </p>
        </div>
      </div>
    </div>
  );
}
