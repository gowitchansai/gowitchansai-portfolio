type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
};

const ProjectCard = ({
  title,
  image,
  description,
  tags,
  github,
  liveDemo,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col h-full bg-background-light rounded-xl overflow-hidden border border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="w-full h-32 overflow-hidden bg-slate-200">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      <div className="flex flex-col grow p-3.5">
        <div className="flex justify-between items-start mb-1.5 gap-2">
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>

          <div className="flex items-center gap-1.5 shrink-0">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="View source code"
                className="p-1.5 rounded-md text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
              </a>
            )}

            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noreferrer"
                aria-label="View live demo"
                className="p-1.5 rounded-md text-primary bg-primary/10
                hover:bg-primary/20 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">
                  visibility
                </span>
              </a>
            )}
          </div>
        </div>

        <p className="text-xs text-slate-600 mb-2.5 grow line-clamp-3 leading-snug">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-1.5 py-0.5 rounded
              bg-white text-slate-600 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
