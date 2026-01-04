const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 backdrop-blur-md bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
              <span className="material-symbols-outlined text-2xl">
                terminal
              </span>
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">
              gowitchansai
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#skills"
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#Projects"
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <span className="material-symbols-outlined">menu</span>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
