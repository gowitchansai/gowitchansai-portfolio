import React from "react";
import { FaGithub, FaLine, FaFacebook } from "react-icons/fa";

const GIT = "https://github.com/gowitchansai";
const LINE = "https://line.me/ti/p/TMrUkhEjmN";
const FACEBOOK = "https://www.facebook.com/tar.r.chansai/";
const PHONE = "082-868-4519";
const EMAIL = "gowit.chansai317@gmail.com";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100" id="Contact">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Contact
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              เปิดรับโอกาสงานตำแหน่ง Junior และพร้อมเรียนรู้สิ่งใหม่ๆ
            </p>
          </div>

          <div className="group flex flex-col sm:flex-row gap-6 sm:items-centerw-full md:w-auto">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 px-6 py-2 text-sm
                font-medium text-slate-600 transition-all duration-300
                hover:text-primary hover:-translate-y-0.5
                justify-center sm:justify-start"
              >
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
                {EMAIL}
              </a>

              <a
                href={`tel:${PHONE}`}
                className="group inline-flex items-center gap-2 px-6 py-2 text-sm
                font-medium text-slate-600 transition-all duration-300
                hover:text-primary hover:-translate-y-0.5
                justify-center sm:justify-start"
              >
                <span className="material-symbols-outlined text-[18px]">
                  call
                </span>
                {PHONE}
              </a>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3sm:pl-6 sm:border-l border-slate-200">
              <a
                href={GIT}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 text-slate-500 transition-all duration-300
                hover:text-slate-900"
              >
                <FaGithub className="w-6 h-6" />
              </a>

              <a
                href={LINE}
                target="_blank"
                rel="noreferrer"
                aria-label="LINE"
                className="p-2 text-slate-500 transition-all duration-300
                hover:text-green-600"
              >
                <FaLine className="w-6 h-6" />
              </a>

              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2 text-slate-500 transition-all duration-300
                hover:text-blue-600"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-slate-100">
          <p className="text-center text-slate-400 text-xs font-medium">
            © 2026 gowitchansai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
