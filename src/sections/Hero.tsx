import Photo from "../assets/image/photo.png";
import { FaGithub } from "react-icons/fa";
const GIT = "https://github.com/gowitchansai";

const Hero = () => {
  return (
    <section className="relative pt-12 pb-12 md:pt-20 md:pb-20 overflow-hidden bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${Photo})`,
              }}
            />
          </div>

          <div className="flex-1 text-left">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-2 leading-tight">
              โกวิท จันทร์ซ้าย
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-3">
              วิศวกรรมคอมพิวเตอร์ | Computer Engineering
            </h2>

            <p className="text-base md:text-lg text-slate-600 mb-5 leading-relaxed max-w-2xl">
              บัณฑิตสาขาวิศวกรรมคอมพิวเตอร์ มีประสบการณ์ด้าน Machine Learning
              และการพัฒนาซอฟต์แวร์ เคยพัฒนาระบบ Predictive Maintenance จากข้อมูล
              Time-Series โดยใช้ SVM และ LSTM พร้อมพื้นฐานด้าน Web Development
              ด้วย React และ TypeScripts
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex gap-4">
                <a
                  href="/Gowit-Chansai-CV.pdf"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] text-slate-500">
                    description
                  </span>
                  Resume
                </a>
              </div>

              <div className="flex items-center gap-4 pl-0 sm:pl-4 sm:border-l border-slate-200 text-slate-400">
                <a
                  href={GIT}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2 text-slate-500 hover:text-slate-900  transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
