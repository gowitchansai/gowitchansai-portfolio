const Skills = () => {
  return (
    <section className="py-12 bg-background-light" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-1">
              Technical Skills
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-3">
              <span className="material-symbols-outlined text-2xl">dns</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Machine Learning
            </h3>

            <p className="text-slate-500 text-sm mb-3">
              พัฒนาและฝึกโมเดล Machine Learning จากข้อมูลของ Air Compressor.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "SVM",
                "LSTM",
                "Data Preprocessing",
                "Feature Engineering",
                "Sliding Window",
                "Model Evaluation",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-primary mb-3">
              <span className="material-symbols-outlined text-2xl">code</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Programming & Web
            </h3>

            <p className="text-slate-500 text-sm mb-3">
              พัฒนาเว็ฐด้วย React และ TypeScript แบบพื้นฐาน
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Next.js",
                "Lucide",
                "Tailwind",
                "Material UI",
                "Shadcn",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
              <span className="material-symbols-outlined">browser_updated</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">Tools</h3>

            <p className="text-slate-500 text-sm mb-3">โปรแกรมและเครื่องมือ</p>

            <div className="flex flex-wrap gap-2">
              {[["GitHub", "VS Code", "MATLAB"]].flat().map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
