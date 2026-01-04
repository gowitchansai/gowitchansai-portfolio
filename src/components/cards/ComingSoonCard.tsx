const ComingSoonCard = () => {
  return (
    <div className="group relative flex flex-col h-full bg-background-light rounded-xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-lg">
      <div className="w-full h-32 bg-slate-200 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-900 opacity-5"></div>
        <span className="material-symbols-outlined text-4xl text-slate-300">
          construction
        </span>
      </div>

      <div className="flex flex-col grow p-3.5">
        <h3 className="text-sm font-bold text-slate-900 mb-1.5">Coming Soon</h3>

        <p className="text-xs text-slate-600 mb-2.5 grow leading-snug">
          Currently working on a SaaS platform for automating social media
          scheduling. Stay tuned for updates!
        </p>

        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200 w-fit">
          WIP
        </span>
      </div>
    </div>
  );
};

export default ComingSoonCard;
